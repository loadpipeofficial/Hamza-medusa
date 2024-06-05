'use client';

import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import Input from '@modules/common/components/input';
import axios from 'axios';
import { useState } from 'react';
import { Toast } from '@medusajs/ui';
import { useRouter } from 'next/navigation';
import getGoogleOAuthURL from '@lib/util/google-url';

const VerifyEmail = () => {
    const { status, customer_id } = useCustomerAuthStore();

    const [email, setEmail] = useState('');
    const router = useRouter();

    if (status == 'unauthenticated') {
        return <div>Please connect wallet before adding email address.</div>;
    }

    const emailVerificationHandler = async () => {
        let res = await axios.post(
            `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/custom/confirmation-token/generate`,
            { customer_id: customer_id, email: email },
            {}
        );

        let data = res.data;
        if (data.status == true) {
            alert('Email sent successfully!!');
            router.replace('/');
        } else {
            alert(data.message);
            return;
        }
    };

    return (
        <div className="layout-base bg-black flex justify-center min-h-screen">
            <div className="flex flex-col items-center w-full">
                <div className="my-8">
                    <h1 className="font-semibold text-4xl text-white text-center">
                        Email Verification
                    </h1>
                </div>
                <div className="px-16">
                    <div className="p-4 md:p-5">
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                emailVerificationHandler();
                            }}
                        >
                            <Input
                                name="email"
                                label="Your Email Address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Verify
                            </button>
                        </form>
                        <div className="text-white text-md text-center p-4">
                            Or
                        </div>
                        <div className="buttons">
                            <a href={getGoogleOAuthURL()}>
                                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                                    <img
                                        className="w-6 h-6"
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        loading="lazy"
                                        alt="google logo"
                                    />
                                    <span>Verify with Google</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
