import { Metadata } from 'next';
import Footer from '@modules/layout/templates/footer';
import Nav from '@modules/layout/templates/nav-update';
const MEDUSA_CLIENT_URL =
    process.env.NEXT_PUBLIC_MEDUSA_CLIENT_URL || 'https://localhost:8000';

export const metadata: Metadata = {
    metadataBase: new URL(MEDUSA_CLIENT_URL),
};

export default async function PageLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    );
}
