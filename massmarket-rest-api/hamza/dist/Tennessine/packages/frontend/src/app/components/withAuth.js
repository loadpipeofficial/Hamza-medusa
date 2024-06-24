// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
// components/withAuth.js
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { IStatus } from "@/types";
export default (WrappedComponent) => {
    return function WithAuth(props) {
        const router = useRouter();
        const { isAuthenticated } = useAuth();
        if (typeof window == "undefined") {
            console.warn("not a browser session");
            return;
        }
        if (isAuthenticated === IStatus.Complete) {
            return <WrappedComponent {...props}/>;
        }
        else {
            router.push("/");
        }
    };
};
//# sourceMappingURL=withAuth.js.map