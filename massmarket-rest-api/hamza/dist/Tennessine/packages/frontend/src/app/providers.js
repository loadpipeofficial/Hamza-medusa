// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi";
import { MyContextProvider } from "../context/MyContext";
import { StoreContextProvider } from "../context/StoreContext";
import { AuthProvider } from "@/context/AuthContext";
export function Providers(props) {
    const [queryClient] = useState(() => new QueryClient());
    return (<WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MyContextProvider>
            <StoreContextProvider>{props.children}</StoreContextProvider>
          </MyContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </WagmiProvider>);
}
//# sourceMappingURL=providers.js.map