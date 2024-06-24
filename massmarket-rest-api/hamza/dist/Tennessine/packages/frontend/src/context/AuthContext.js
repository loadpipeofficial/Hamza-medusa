// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import React from "react";
import { createContext, useContext, useState } from "react";
import { IStatus } from "@/types";
export const AuthContext = createContext({
    isAuthenticated: IStatus.Pending,
    setIsAuthenticated: () => { },
});
export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(IStatus.Pending);
    return (<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>);
};
export const useAuth = () => useContext(AuthContext);
//# sourceMappingURL=AuthContext.js.map