import { getCustomer } from '@lib/data';
import AccountLayout from '@modules/account/templates/account-layout';

export default async function AccountPageLayout({
    dashboard,
    login,
}: {
    dashboard?: React.ReactNode;
    login?: React.ReactNode;
}) {
    const customer = await getCustomer().catch(() => null);

    return (
        <AccountLayout customer={customer}>
            {customer ? (
                dashboard
            ) : (
                <>
                    <div>Use connect wallet for sign in.</div>
                </>
            )}
        </AccountLayout>
    );
}
