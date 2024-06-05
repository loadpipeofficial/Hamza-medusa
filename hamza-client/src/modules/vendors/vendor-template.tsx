'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@medusajs/ui';

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

const VendorTemplate = ({ vendors }) => {
    const [selectedVendor, setSelectedVendor] = useState(vendors[1]); // Set the second vendor as default selected

    const handleSelectVendor = (vendor) => {
        setSelectedVendor(vendor);
        console.log(`Selected Vendor ${vendor.id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/vendors/vendor-products`,
                    {
                        store_id: selectedVendor.id,
                    }
                );
                const data = response.data;
                console.log(`Response ${JSON.stringify(data)}`);
            } catch (error) {
                console.log(`Error ${error}`);
            }
        };

        fetchData();
    }, [selectedVendor]);

    console.log(`Vendors ${JSON.stringify(vendors)}`);

    return (
        <div className="bg-black text-white text-center p-4">
            <h1 className="mb-4">Vendors</h1>
            <div className="flex flex-wrap justify-center">
                {vendors.map((vendor) => (
                    <div key={vendor.id} className="mb-4 mx-4">
                        <Button
                            onClick={() => handleSelectVendor(vendor)}
                            style={{
                                backgroundColor:
                                    vendor === selectedVendor
                                        ? 'orange'
                                        : 'initial',
                            }}
                        >
                            <h2>{vendor.name}</h2>
                            <p>{vendor.description}</p>
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h2>Selected Vendor {selectedVendor.name}</h2>
                <p>{selectedVendor.description}</p>
            </div>
        </div>
    );
};

export default VendorTemplate;
