export type HexString = `0x${string}`;

export interface ICreateStoreInput {}

export interface ICreateStoreOutput {
    storeId: HexString;
    keyCard: HexString;
    success: boolean;
}

export interface ICreateCartInput {}

export interface ICreateCartOutput {
    cartId: HexString;
    success: boolean;
}

export interface IAddCartItemInput {
    productId: HexString;
    quantity: number;
}

export interface IAddCartItemOutput {
    success: boolean;
}

export interface IAbandonCartInput {}

export interface IAbandonCartOutput {
    success: boolean;
}

export interface ICommitCartInput {}

export interface ICommitCartOutput {
    success: boolean;
}

export interface ICreateProductInput {
    name: string;
    price: string;
    description: string;
    image: string;
}

export interface ICreateProductOutput {
    productId: HexString;
    success: boolean;
}

export interface IUpdateProductInput {
    name: string;
    price: string;
    description: string;
    image: string;
}

export interface IUpdateProductOutput {
    success: boolean;
}
