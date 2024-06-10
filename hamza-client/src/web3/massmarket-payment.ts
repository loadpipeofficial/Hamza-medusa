import { BigNumberish, ethers } from 'ethers';
import { massMarketPaymentAbi } from './abi/massmarket-payment-abi';
import { erc20abi } from './abi/erc20-abi';
import { IMultiPaymentInput, ITransactionOutput } from './';
import { getCurrencyAddress } from '../currency.config';
import { HexString } from 'ethers/lib.commonjs/utils/data';

interface IPaymentRequest {
    chainId: number;
    ttl: number; //block timestamp from cartFinalized event
    order: HexString; //keccak of cartId
    currency: HexString; //0x0 for native, otherwise the token address
    amount: BigNumberish; //payment amt (token or native)
    payeeAddress: HexString; //store owner
    isPaymentEndpoint: boolean;
    shopId: BigNumberish;
    shopSignature: Uint8Array; // 64 zeros
}

export class MassmarketPaymentClient {
    contractAddress: string;
    paymentContract: ethers.Contract;
    provider: ethers.Provider;
    signer: ethers.Signer;
    tokens: { [id: string]: ethers.Contract } = {};

    /**
     * Constructor.
     * @param address Address of the PaymentSwitch contract
     */
    constructor(
        provider: ethers.Provider,
        signer: ethers.Signer,
        address: string
    ) {
        this.provider = provider;
        this.signer = signer;
        this.contractAddress = address;

        this.paymentContract = new ethers.Contract(
            this.contractAddress,
            massMarketPaymentAbi,
            signer
        );
    }

    /**
     * Place a single payment in a single currency.
     * @param input The payment input
     */
    async placeMultiplePayments(
        inputs: IMultiPaymentInput[]
    ): Promise<ITransactionOutput> {
        //prepare the inputs
        for (let n = 0; n < inputs.length; n++) {
            const input: IMultiPaymentInput = inputs[n];
            if (!input.currency || input.currency === 'eth') {
                input.currency = ethers.ZeroAddress;
            } else {
                if (!ethers.isAddress(input.currency)) {
                    input.currency = getCurrencyAddress(
                        input.currency,
                        parseInt(
                            (
                                await this.provider.getNetwork()
                            ).chainId.toString()
                        )
                    );
                }
            }
        }

        //make any necessary token approvals
        await this.approveAllTokens(this.contractAddress, inputs);

        //get total native amount
        const nativeTotal: BigNumberish = this.getNativeTotal(inputs);
        console.log('native amount:', nativeTotal);

        const requests: IPaymentRequest[] = this.convertInputs(inputs);

        const tx: any = await this.paymentContract.multiPay(requests, {
            value: nativeTotal,
        });

        const transaction_id = tx.hash;
        const receipt = await tx.wait();

        return {
            transaction_id,
            tx,
            receipt,
        };
    }

    private convertInputs(inputs: IMultiPaymentInput[]): IPaymentRequest[] {
        const output: IPaymentRequest[] = [];

        for (const input of inputs) {
            for (const payment of input.payments) {
                const request: IPaymentRequest = {
                    chainId: 11155111,
                    ttl: 0,
                    currency: payment.currency ?? '0x0',
                    amount: payment.amount,
                    order: ethers.keccak256('0x0'),
                    payeeAddress: '0x0', //switch address, or store owner address
                    isPaymentEndpoint: false, //true if using switch
                    shopId: ethers.toBigInt('0x0'),
                    shopSignature: new Uint8Array(64),
                };
                output.push(request);
            }
        }

        return output;
    }

    /**
     * In a batch of payments to be made, total up the amounts per currency. Returns a
     * dictionary of distinct token addresses, with their respective total amounts.
     *
     * @param inputs An array of payment inputs
     * @returns A dictionary in which the keys are token addresses, the values are amounts.
     */
    private getTokensAndAmounts(inputs: IMultiPaymentInput[]): {
        [id: string]: BigNumberish;
    } {
        const output: { [id: string]: BigNumberish } = {};

        //this will sum the amounts to pay for each token
        const sum = (arr: { amount: BigNumberish }[]) =>
            arr.reduce(
                (acc, obj) => BigInt(acc) + BigInt(obj.amount),
                BigInt(0)
            );

        //get the sum for each token
        inputs.forEach((i) => {
            //place a 0 if entry is null, otherwise place a sum of all payments
            if (i.currency != ethers.ZeroAddress) {
                output[i.currency] = output[i.currency]
                    ? BigInt(output[i.currency]) + sum(i.payments)
                    : sum(i.payments);
            }
        });

        return output;
    }

    private getNativeTotal(inputs: IMultiPaymentInput[]): BigNumberish {
        //TODO: this is too similar to getTokensAndAmounts
        let output: bigint = BigInt(0);
        const sum = (arr: { amount: BigNumberish }[]) =>
            arr.reduce(
                (acc, obj) => BigInt(acc) + BigInt(obj.amount),
                BigInt(0)
            );

        inputs.forEach((i) => {
            //place a 0 if entry is null, otherwise place a sum of all payments
            if (i.currency == ethers.ZeroAddress) {
                output += sum(i.payments);
            }
        });

        return output;
    }

    /**
     * Gets the token contract corresponding to the given address, and stores it
     * for later.
     *
     * @param address An ERC20 token address
     * @returns An ethers.Contract object
     */
    private getTokenContract(address: string): ethers.Contract {
        let output: ethers.Contract = this.tokens[address];

        //if not yet created, create & store it
        if (!output) {
            output = new ethers.Contract(address, erc20abi, this.signer);
            this.tokens[address] = output;
        }

        return output;
    }

    /**
     * Given an array of payment inputs, makes any token approvals that are necessary
     * in order for the payments to be completed.
     *
     * @param spender The contract address which will receive approval
     * @param inputs An array of payment inputs
     */
    private async approveAllTokens(
        spender: string,
        inputs: IMultiPaymentInput[]
    ): Promise<void> {
        const tokenAmounts = this.getTokensAndAmounts(inputs);

        //approve each token amount
        const promises: Promise<void>[] = [];
        for (let tokenAddr in tokenAmounts) {
            promises.push(
                this.approveToken(spender, tokenAddr, tokenAmounts[tokenAddr])
            );
        }
        await Promise.all(promises);
    }

    /**
     * Approves an amount of a token to be spent, if the existing allowance is insufficient.
     *
     * @param spender The contract address which will receive approval
     * @param tokenAddr The token address
     * @param amount The amount that needs to be approved
     */
    private async approveToken(
        spender: string,
        tokenAddr: string,
        amount: BigNumberish
    ): Promise<void> {
        const token = this.getTokenContract(tokenAddr);

        //check first for existing allowance before approving
        const allowance = BigInt(await token.allowance(tokenAddr, spender));

        // Convert amount to bigint for comparison and arithmetic, assuming it could be string, number, or bigint already
        // BigNumber instances (from ethers.js or similar libraries) should be converted to string or number before passing to this function
        const bigintAmount = BigInt(amount);

        if (allowance > 0) {
            amount =
                allowance < bigintAmount ? bigintAmount - allowance : BigInt(0);
        }

        // Approve if necessary
        if (bigintAmount > 0) {
            await token.approve(spender, bigintAmount.toString()); // Convert bigint back to string for the smart contract call
        }
    }
}
