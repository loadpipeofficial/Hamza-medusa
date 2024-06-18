import { AuthenticationStatus } from '@rainbow-me/rainbowkit';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    authData: {
        wallet_address: string;
        token: string;
        customer_id: string;
        status: AuthenticationStatus;
        is_verified: boolean;
    };
    preferred_currency_code: string | null;
};

type Actions = {
    setCustomerAuthData: (authData: State['authData']) => void;
    setCustomerPreferredCurrency: (currency: string) => void;
};

export const useCustomerAuthStore = create<State & Actions>()(
    persist(
        (set, get) => ({
            authData: {
                customer_id: 'empty',
                is_verified: false,
                status: 'unauthenticated',
                token: 'empty',
                wallet_address: 'empty',
            },
            preferred_currency_code: null,
            setCustomerAuthData: (authData) => {
                set({
                    authData: authData,
                });
            },
            setCustomerPreferredCurrency: (currency) => {
                set({ preferred_currency_code: currency });
            },
        }),

        {
            name: '__hamza_customer', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
