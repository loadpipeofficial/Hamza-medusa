export const massMarketPaymentAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_permit2",
                "type": "address",
                "internalType": "contract IPermit2"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getPaymentId",
        "inputs": [
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "hasPaymentBeenMade",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "multiPay",
        "inputs": [
            {
                "name": "payments",
                "type": "tuple[]",
                "internalType": "struct PaymentRequest[]",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            },
            {
                "name": "permit2Sigs",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "pay",
        "inputs": [
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "payNative",
        "inputs": [
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "payToken",
        "inputs": [
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            },
            {
                "name": "permit2signature",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "payTokenPreApproved",
        "inputs": [
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "revertPayment",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "payment",
                "type": "tuple",
                "internalType": "struct PaymentRequest",
                "components": [
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ttl",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "order",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "currency",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "payeeAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "isPaymentEndpoint",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "shopId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "shopSignature",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "PaymentMade",
        "inputs": [
            {
                "name": "paymentId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "InvalidPaymentAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPaymentToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotPayee",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PayeeRefusedPayment",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PaymentAlreadyMade",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PaymentExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PaymentNotMade",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WrongChain",
        "inputs": []
    }
]
