import { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
//import { RelayClientWrapper } from '../../../../massmarket/client';

const productsToIds = {
    'Medusa Longsleeve':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa Sweatshirt':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa Shorts':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Echo Shade':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Sony WH-1000XM4':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Orbit Headset':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Futurist Visor':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Visionary':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Nova Gear':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa Coffee Mug':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa T-Shirt':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa Sweatpants':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'Medusa Hoodie':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Streamline Rift':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
    'The Cybernetic Headset':
        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024',
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
            '0x382e9fdf10295e01ad4c7e4dc7e3cecf461016addbe8e15e55736983af39426c',
        massmarket_keycard:
            '0x1d24055a9122ab48d62e9f65f37335f844d7de6858edf61d3ca115efbe82be86',
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
        /*
        const rc: RelayClientWrapper = new RelayClientWrapper(
            'relay-beta.mass.market/v1',
            '0x1300000000000000000000000000000000000000000000000000000000000006',
            '0x618f7c831ec88ca06505306a5047b8d0f515fb58cc33d75decd698c759b98284'
        );
        */

        const stores = await storeService.getStores();
        for (let store of stores) {
            await updateStoreForMM(
                storeRepository,
                productService,
                null,
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
