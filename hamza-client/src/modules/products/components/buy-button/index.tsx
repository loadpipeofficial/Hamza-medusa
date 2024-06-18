import { Button } from '@medusajs/ui';

type BuyButtonProps = {
    styles: string;
    handleBuyNow: () => void;
    loader: boolean;
    outOfStock: boolean;
    title?: string;
};

const BuyButton: React.FC<BuyButtonProps> = ({
    styles,
    handleBuyNow,
    loader,
    outOfStock,
    title,
}) => {
    return (
        <Button
            className={styles}
            variant="primary"
            onClick={handleBuyNow}
            isLoading={loader}
            disabled={outOfStock}
        >
            Buy Now
        </Button>
    );
};

export default BuyButton;
