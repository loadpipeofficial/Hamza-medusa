import { AuthenticationStatus } from '@rainbow-me/rainbowkit';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    wallet_address: string | null;
    token: string | null;
    customer_id: string | null;
    status: AuthenticationStatus;
    preferred_currency_code: string | null;
    is_verified: boolean | null;
};

type Actions = {
    setCustomerAuthData: ({
        wallet_address,
        token,
        customer_id,
        preferred_currency_code,
        is_verified,
    }: {
        wallet_address: string | null;
        token: string | null;
        customer_id: string;
        preferred_currency_code: string | null;
        is_verified: boolean | null;
    }) => void;
    setStatus: (status: AuthenticationStatus) => void;
    setVerified: (status: boolean) => void;
};

export const useCustomerAuthStore = create<State & Actions>()(
    persist(
        (set, get) => ({
            token: null,
            wallet_address: null,
            customer_id: null,
            status: 'unauthenticated',
            preferred_currency_code: null,
            is_verified: false,
            setCustomerAuthData: ({
                wallet_address,
                token,
                customer_id,
                preferred_currency_code,
                is_verified,
            }) =>
                set({
                    token,
                    wallet_address,
                    customer_id,
                    preferred_currency_code,
                    is_verified,
                }),
            setStatus: (status) => set({ status: status }),
            setVerified: (status) => set({ is_verified: status }),
        }),

        {
            name: '__hamza_customer', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
