import React from 'react';
import { Button } from '@medusajs/ui';

interface BuyButtonProps {
    styles: string;
}

export const BuyButton: React.FC<BuyButtonProps> = (props) => {
    return (
        <div>
            <Button className={props.styles} variant="primary">
                Buy Now
            </Button>
        </div>
    );
};
