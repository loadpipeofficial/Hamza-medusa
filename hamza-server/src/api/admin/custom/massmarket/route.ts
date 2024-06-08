import { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
import { RelayClientWrapper } from '../../../../massmarket/client';

const productsToIds = {
    'Medusa Longsleeve':
        '0xa0941cefe70d28eb87937da15dde89ee311d5f2f45b824204c2371939f4cebd2',
    'Medusa Sweatshirt':
        '0xdacc3d7e6f8e89807ad0a122e34d0bda31295f33bea1cba36f84e4589eee1d77',
    'Medusa Shorts':
        '0x3f5418b0fe529d301e70ab314c66e8ef89cc10f9a3918a7899f91b41488f7594',
    'The Echo Shade':
        '0xa5e8100cffa309fd2e7f1c9e9a0ad45e782724268513f23925c0e6893ef3a4af',
    'Sony WH-1000XM4':
        '0xf82088ef67748d8cbb1dc4f19c8844d6199455b9553c0faf78a9af8cbfd34950',
    'The Orbit Headset':
        '0x7457f7eab54033e45c2eb06d1494c90d797e426d1c87130036a6de2440506caf',
    'The Futurist Visor':
        '0xfc6054f29e99c40661f9508ea76efab427cc025c015123e4b1b5205131a60c46',
    'The Visionary':
        '0xee1b52ea6cf1237990074d6ca1f1b071e2c423b84214e8c025fb53c5cf896927',
    'The Nova Gear':
        '0x5ebec7d98771a7565ce969887eb17a5dcf698dc9ab6953cbdc7eb21314751c8c',
    'Medusa Coffee Mug':
        '0x5129e86736e8addd5db782cd86b1a052a25d91362002d8861f38d0484e1b4fa8',
    'Medusa T-Shirt':
        '0xf35f8fb48351b139ff6065b3b33c4d640ca765c1b52352b3dc40ac26ca732096',
    'Medusa Sweatpants':
        '0xa985564bb8b8515922723c4d3c57c3ec2dea29e11081605031e78005fcfb6eae',
    'Medusa Hoodie':
        '0x304b9793489ed6fd9d4f45239444657b4d506ef43a79906022606f7635c09d6d',
    'The Streamline Rift':
        '0xb1004cae5366f1720449a5640ca523da7476995ee5318ee51c45a234e0ae55bb',
    'The Cybernetic Headset':
        '0x7bfd4f50faf80cf1ef96d647b73da9aeac313a741d229603dc21aec5f8b1376f',
};

async function updateStoreForMM(
    storeRepository,
    productService,
    rc,
    storeId: string
) {
    storeRepository.save({
        id: storeId,
        massmarket_store_id:
            '0x1300000000000000000000000000000000000000000000000000000000000006',
        massmarket_keycard:
            '0x618f7c831ec88ca06505306a5047b8d0f515fb58cc33d75decd698c759b98284',
    });

    const products =
        await productService.getProductsFromStoreWithPrices(storeId);
    for (let prod of products) {
        const mmid = productsToIds[prod.title];
        if (mmid) {
            await productService.update(prod.id, { massmarket_prod_id: mmid });
        }
    }
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const userService = req.scope.resolve('userService');
    const storeService = req.scope.resolve('storeService');
    const storeRepository = req.scope.resolve('storeRepository');
    const productService = req.scope.resolve('productService');
    const logger = req.scope.resolve('productService') as Logger;

    try {
        const rc: RelayClientWrapper = new RelayClientWrapper(
            'relay-beta.mass.market/v1',
            '0x1300000000000000000000000000000000000000000000000000000000000006',
            '0x618f7c831ec88ca06505306a5047b8d0f515fb58cc33d75decd698c759b98284'
        );

        const stores = await storeService.getStores();
        for (let store of stores) {
            await updateStoreForMM(
                storeRepository,
                productService,
                rc,
                store.id
            );
        }

        return res.json({ ok: true });
    } catch (error) {
        logger.error(error);
        return res
            .status(500)
            .json({ message: 'Internal server error', error: error.message });
    }
};
