import { Button } from '@chakra-ui/react';

type CartButtonProps = {
    styles: string;
    handleBuyNow: () => void;
    loader: boolean;
    outOfStock: boolean;
    title: string;
};

const CartButton: React.FC<CartButtonProps> = ({
    styles,
    handleBuyNow,
    loader,
    outOfStock,
    title,
}) => {
    return (
        <Button
            color="#7B61FF"
            borderColor="#7B61FF"
            className={styles}
            variant="outline"
            onClick={handleBuyNow}
            isLoading={loader}
            disabled={outOfStock}
        >
            {title}
        </Button>
    );
};

export default CartButton;
