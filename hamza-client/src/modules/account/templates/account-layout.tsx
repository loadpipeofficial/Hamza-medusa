'use client';
import React, { useEffect } from 'react';

import UnderlineLink from '@modules/common/components/interactive-link';

import AccountNav from '../components/account-nav';
import { Customer } from '@medusajs/medusa';
import axios from 'axios';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

interface AccountLayoutProps {
    customer: Omit<Customer, 'password_hash'> | null;
    children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
    customer,
    children,
}) => {
    const { authData, setCustomerAuthData } = useCustomerAuthStore();
    const accountVerificationFetcher = async () => {
        const customerVerificationData = await axios.get(
            `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/custom/get-verification-status?customer_id=${authData.customer_id}`
        );

        let res = customerVerificationData.data;
        if (res.data == true) {
            setCustomerAuthData({ ...authData, is_verified: true });
        }

        return;
    };
    useEffect(() => {
        if (authData.status == 'authenticated') {
            accountVerificationFetcher();
        }
    }, [authData.status]);

    return (
        <div className="font-sora flex-1 small:py-12 bg-black text-white">
            <div className="flex-1 content-container h-full max-w-5xl mx-auto flex flex-col">
                <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
                    <div>{customer && <AccountNav customer={customer} />}</div>
                    <div className="flex-1">{children}</div>
                </div>
                <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
                    <div>
                        <h3 className="text-xl-semi mb-4">Got questions?</h3>
                        <span className="txt-medium">
                            You can find frequently asked questions and answers
                            on our customer service page.
                        </span>
                    </div>
                    <div>
                        <UnderlineLink href="/customer-service">
                            Customer Service
                        </UnderlineLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
