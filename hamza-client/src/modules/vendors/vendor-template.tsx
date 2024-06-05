'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@medusajs/ui';

const VendorTemplate = ({ vendors }) => {
    return (
        <div>
            <h1>Vendors</h1>
            {vendors.map((vendor) => (
                <div key={vendor.id}>
                    <h2>{vendor.name}</h2>
                    <p>{vendor.description}</p>
                </div>
            ))}
        </div>
    );
};

export default VendorTemplate;
