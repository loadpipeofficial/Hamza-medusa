'use client';

import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { Customer } from '@medusajs/medusa';
import axios from 'axios';

type MyInformationProps = {
    customer: Omit<Customer, 'password_hash'>;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

const ProfileCurrency: React.FC<MyInformationProps> = ({ customer }) => {
    // State to store the current currency
    const [currency, setCurrency] = useState('usdc');

    // Simulate updating the currency in customer profile
    const updateCurrency = async (newCurrency: string) => {
        console.log(`Currency updated to ${newCurrency}`);
        console.log(`Customer is ${customer.id}`);
        try {
            await axios.post('http://localhost:9000/custom/update-currency', {
                customer_id: customer.id,
                preferred_currency: newCurrency,
            });
        } catch (error) {
            console.error('Error updating currency', error);
        }

        // Here you would call an API or some internal method to update the customer profile
    };

    // Handler for currency change from dropdown
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setCurrency(newCurrency);
        updateCurrency(newCurrency);
    };

    return (
        <div className="currency-dropdown grid grid-cols-2 gap-x-4">
            <label htmlFor="currency-select">Choose a currency:</label>
            <Select
                id="currency-select"
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="usdc">USDC</option>
                <option value="usdt">USDT</option>
                <option value="eth">ETH</option>
            </Select>
        </div>
    );
};

export default ProfileCurrency;
