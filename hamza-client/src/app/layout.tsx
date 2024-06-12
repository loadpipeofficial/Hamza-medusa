'use client';

import React from 'react';
import { Metadata } from 'next';
import 'styles/globals.css';
const BASE_URL =
    process.env.NEXT_PUBLIC_MEDUSA_CLIENT_URL || 'https://localhost:8000';
import MedusaProvider from '@/components/providers/medusa/medusa-provider'; // Import MedusaProvider
import { RainbowWrapper } from '@/components/providers/rainbowkit/rainbow-provider';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// TODO: Refactor using scaffold-eth-2 for proper layout.

// export const metadata: Metadata = {
//     metadataBase: new URL(BASE_URL),
// };

// Define your custom colors
const colors = {
    brand: {
        indigo: {
            900: '#7B61FF', // darkest
            800: '#8C7AFF',
            700: '#9D93FF',
            600: '#AEACFF',
            500: '#BFC5FF', // midpoint
            400: '#D0DEFF',
            300: '#E1F7FF',
            200: '#F2F9FF',
            100: '#F9FBFF',
            50: '#FFFFFF', // lightest
        },
        green: {
            900: '#94D42A', // darkest
            800: '#A0DA4A',
            700: '#ACDF69',
            600: '#B8E589',
            500: '#C4EBA9', // midpoint
            400: '#D0F1C9',
            300: '#DCF7E9',
            200: '#E8FDF9',
            100: '#F4FEF4',
            50: '#FFFFFF', // lightest
        },
        yellow: {
            900: '#FABE06', // darkest
            800: '#FBCC2C',
            700: '#FCD852',
            600: '#FDE378',
            500: '#FDEF9E', // midpoint
            400: '#FEFAC4',
            300: '#FEFCEA',
            200: '#FFFEF5',
            100: '#FFFFFA',
            50: '#FFFFFF', // lightest
        },
        baltic: {
            900: '#2C272D', // darkest
            800: '#443D44',
            700: '#5D545A',
            600: '#756A71',
            500: '#8E8188', // midpoint
            400: '#A6979F',
            300: '#BFADB6',
            400: '#D7C4CD',
            200: '#F0DAE4',
            100: '#F9EFF2',
            50: '#FFF4F7', // lightest
        },
        moss: {
            900: '#020202', // darkest
            800: '#1A1A1A',
            700: '#333333',
            600: '#4D4D4D',
            500: '#666666', // midpoint
            400: '#808080',
            300: '#999999',
            200: '#B3B3B3',
            100: '#CCCCCC',
            50: '#E6E6E6', // lightest
        },
    },
};

const theme = extendTheme({
    colors,
    fonts: {
        body: `'Sora', sans-serif`,
        heading: `'Sora', sans-serif`,
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: 'heading',
            },
            sizes: {
                h1: {
                    fontSize: '2rem',
                },
                h2: {
                    fontSize: '1.5rem',
                },
                h3: {
                    fontSize: '1.125rem',
                },
                h4: {
                    fontSize: '1rem',
                },
                h5: { fontSize: '0.625rem' },
                h6: {
                    fontSize: '0.625rem',
                },
            },
            variants: {
                regular: {
                    fontWeight: 'normal', // 400
                },
                semibold: {
                    fontWeight: 'semibold', // 600
                },
                bold: {
                    fontWeight: 'bold', // 700
                },
            },
            defaultProps: {
                size: 'h2',
                variant: 'bold',
            },
        },
    },
});

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en" data-mode="dark">
            <body>
                <div>
                    <MedusaProvider>
                        <RainbowWrapper>
                            <ChakraProvider theme={theme}>
                                <main className="relative">
                                    {props.children}
                                </main>
                            </ChakraProvider>
                        </RainbowWrapper>
                    </MedusaProvider>
                </div>
            </body>
        </html>
    );
}
