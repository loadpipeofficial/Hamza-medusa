'use client';

import React from 'react';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import NavLink from '@modules/layout/templates/nav-update/nav-link/nav-link';

const NavTernary = () => {
    const { customer_id, is_verified } = useCustomerAuthStore();

    return (
        <React.Fragment>
            {customer_id ? (
                <React.Fragment>
                    <NavLink href="/account" title="Account" />
                    {!is_verified && (
                        <NavLink href="/verify-email" title="Verify Account" />
                    )}
                </React.Fragment>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </React.Fragment>
    );
};

export default NavTernary;
