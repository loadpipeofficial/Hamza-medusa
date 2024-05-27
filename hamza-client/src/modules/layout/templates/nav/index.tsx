import { headers } from 'next/headers';
import { Suspense, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { listRegions } from '@lib/data';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';
import WishListPopover from '@/components/wishlist-dropdown';
import SideMenu from '@modules/layout/components/side-menu';
import Image from 'next/image';
import logo from '../../../../../public/nav/hamza_logo.png';
import { WalletConnectButton } from '@/components/providers/rainbowkit/connect-button/connect-button';
import SearchModal from '@modules/search/templates/search-modal';
import SearchModalWrapper from '@modules/search/templates/search-wrapper';
import dynamic from 'next/dynamic';

const Wish = dynamic(() => import('../../../../store/wishlist/wish'), {
    ssr: false, // This will prevent the component from rendering on the server side
});

export default async function Nav() {
    const regions = await listRegions().then((regions) => regions);

    return (
        <div className="sticky top-0 inset-x-0 z-50 group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white dark:bg-black border-ui-border-base">
                <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                    <div className="flex items-center h-full">
                        <LocalizedClientLink
                            href="/"
                            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                        >
                            {/*<Image*/}
                            {/*    src={logo}*/}
                            {/*    width={50.41}*/}
                            {/*    height={57.27}*/}
                            {/*    alt="Hamza Logo"*/}
                            {/*/>*/}
                        </LocalizedClientLink>
                    </div>
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <div className="font-sora h-full">
                            <SideMenu regions={regions} />
                        </div>
                    </div>

                    {/*Add ETH CURRENCY*/}

                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                        <div className="hidden small:flex items-center gap-x-6 h-full">
                            {process.env.FEATURE_SEARCH_ENABLED && (
                                <SearchModalWrapper />
                            )}
                        </div>
                        <Wish />
                        <Suspense
                            fallback={
                                <LocalizedClientLink
                                    className="hover:text-ui-fg-base font-sora"
                                    href="/cart"
                                >
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Cart (0)
                                    </span>
                                </LocalizedClientLink>
                            }
                        >
                            <CartButton />
                            <WalletConnectButton />
                        </Suspense>
                    </div>
                </nav>
            </header>
        </div>
    );
}
