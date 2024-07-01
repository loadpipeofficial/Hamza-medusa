import { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
//import { RelayClientWrapper } from '../../../../massmarket/client';

const productsToIds = {
    'Medusa Coffee Mug':
        '0x92bc9e6b60e3bb98c3f13e99ceb8a5604edeb05ad3fa6d54751b07739b670564',
    'INDOOR/OUTDOOR WALL LAMP M - W100 X D4':
        '0x2bec4242fbb2803d4b8c937474b180fbe59fa1fb59d9052c5374867650f802dc',
    'Tripod RGB Spine':
        '0x3df4d361c56898b08302fe6521c1b3bd2e2aae293475445c028c9b23a462d6fa',
    'RGB LED Strips':
        '0xa619cf448f807c7c83f2602eaa03cf616d80ab20a1723e55bcdfa7fe0d10d364',
};

const storesToIds = {
    'Medusa Merch': {
        storeId:
            '0xf9bd19671391ec9ce554eb7b788e5c661a5906b70fbbf6f4adbbd8383623b058',
        keycard:
            '0xd476aa67d4ab33576da3db6d75fd8e93782ba50b13a0fc3b442d05869e2612df',
    },
    'Legendary Light Design': {
        storeId:
            '0xc7bf3136b9f2122179ae0d6a9463b45559900ce1874dde30613d520b39cafd15',
        keycard:
            '0xd8b398a4cfca54f12d4b1505d631b5e95ce69664098f6aacbe32014b6c02b2ed',
    },
};

async function updateStoreForMM(
    storeRepository,
    productService,
    storeId: string,
    storeName: string
) {
    let storeCreds = storesToIds[storeName];
    if (!storeCreds)
        storeCreds = {
            storeId:
                '0xf9bd19671391ec9ce554eb7b788e5c661a5906b70fbbf6f4adbbd8383623b058',
            keycard:
                '0xd476aa67d4ab33576da3db6d75fd8e93782ba50b13a0fc3b442d05869e2612df',
        };

    await storeRepository.save({
        id: storeId,
        massmarket_store_id: storeCreds.storeId,
        massmarket_keycard: storeCreds.keycard,
    });

    const products =
        await productService.getProductsFromStoreWithPrices(storeId);
    for (let prod of products) {
        let mmid = productsToIds[prod.title];
        if (!mmid)
            mmid =
                '0x92bc9e6b60e3bb98c3f13e99ceb8a5604edeb05ad3fa6d54751b07739b670564';
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
        const stores = await storeService.getStores();
        for (let store of stores) {
            await updateStoreForMM(
                storeRepository,
                productService,
                store.id,
                store.name
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
