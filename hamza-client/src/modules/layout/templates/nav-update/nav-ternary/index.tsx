'use client';

import React from 'react';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import NavLink from '@modules/layout/templates/nav-update/nav-link/nav-link';

const NavTernary = () => {
    const { customer_id } = useCustomerAuthStore();

    return (
        <React.Fragment>
            {!customer_id ? (
                <React.Fragment></React.Fragment>
            ) : (
                <React.Fragment>
                    <NavLink href="/account" title="Account" />
                    <NavLink href="/verify-email" title="Verify Account" />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default NavTernary;
