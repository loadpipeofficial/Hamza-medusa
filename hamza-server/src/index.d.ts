// We're extending CORE Medusa models here

import { Store } from '@medusajs/medusa';

// modifying the User model such that email is now optional
export declare module '@medusajs/medusa/dist/models/user' {
    declare interface User {
        wallet_address: string;
        email?: string;
        password_hash?: string;
        store?: Store;
        // walletAddresses: WalletAddress[];
    }
}

export declare module '@medusajs/medusa/dist/models/customer' {
    declare interface Customer {
        wallet_address: string;
        email?: string;
        password_hash?: string;
    }
}

export declare module '@medusajs/medusa/dist/models/store' {
    declare interface Store {
        owner?: User;
        owner_id?: string;
    }
}

export declare module '@medusajs/medusa/dist/models/product' {
    declare interface Product {
        store?: Store;
        store_id: string;
    }
}
