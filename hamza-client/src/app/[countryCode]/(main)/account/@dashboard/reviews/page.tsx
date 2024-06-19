import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Notification from '@modules/account/components/notifications';

import { getCustomer } from '@lib/data';

import { getRegion } from 'app/actions';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: 'Notifications',
    description: 'View your notifications',
};

export default async function Reviews() {
    const nextHeaders = headers();
    const countryCode = nextHeaders.get('next-url')?.split('/')[1] || '';
    const customer = await getCustomer();
    const region = await getRegion(countryCode);

    if (!customer || !region) {
        notFound();
    }

    return (
        <div className="w-full bg-black text-white p-8">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-2xl-semi">Reviews</h1>
                <p className="text-base-regular">View your reviews</p>
            </div>
            <Notification customer={customer} region={region} />
        </div>
    );
}
