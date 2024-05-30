import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { getRegion } from 'app/actions';

type ProductReviewProps = {
    product: PricedProduct;
    countryCode: string;
};

export default async function ProductReview({
    product,
    countryCode,
}: ProductReviewProps) {
    const region = await getRegion(countryCode);
    console.log(`Related Products ${JSON.stringify(product)}`);

    if (!region) {
        return null;
    }

    return (
        <div className="bg-black text-white">
            <div className="flex flex-col items-center mb-16">
                <span className="text-white text-base-regular">
                    Ratings & Reviews
                </span>
                <p className="text-2xl-regular text-white max-w-lg">
                    Product Reviews
                </p>
            </div>
        </div>
    );
}
