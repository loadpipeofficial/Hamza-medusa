// Import necessary modules and types
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchItemDetails } from '@lib/data'; // Assumed function to fetch item details
import ReviewTemplate from '@modules/review/[id]/review-template';

type Props = {
    item: any; // Define the type more specifically based on your data structure
};

// This function should ideally be inside getServerSideProps or similar
export async function getServerSideProps({
    params,
}): Promise<{ props: Props } | { notFound: boolean }> {
    const item = await fetchItemDetails(params.id).catch(() => null);

    if (!item) {
        return { notFound: true };
    }

    return { props: { item } };
}

// Generate metadata for the page
export function generateMetadata(item): Metadata {
    if (!item) {
        throw new Error('Item not available'); // Or handle differently as needed
    }

    return {
        title: `Item #${item.display_id}`, // Assuming item has a property 'display_id'
        description: `Review your item ${item.title}`, // Assuming item has a property 'title'
    };
}

// Main component for the review page
export default function ReviewPage({ item }: Props) {
    if (!item) {
        notFound();
        return null; // Ensure no further execution after notFound if necessary
    }

    const metadata = generateMetadata(item);

    return (
        <>
            {/* Metadata component here if you use one, e.g., <Head> for setting page metadata */}
            <ReviewTemplate item={item} />
        </>
    );
}
