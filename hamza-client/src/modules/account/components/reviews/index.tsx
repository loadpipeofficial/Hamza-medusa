import { Customer, Region } from '@medusajs/medusa';
import React from 'react';
import ToggleNotifications from '../notification-toggle/toggles';

type ReviewProps = {
    customer: Omit<Customer, 'password_hash'>;
    region: Region;
};

const Review: React.FC<ReviewProps> = ({ customer, region }) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4">
                <ToggleNotifications region={region} />
            </div>
        </div>
    );
};
