import { MedusaRequest, MedusaResponse } from '@medusajs/medusa';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const userService = req.scope.resolve('userService');
    const storeService = req.scope.resolve('storeService');
    const productCollectionService = req.scope.resolve(
        'productCollectionService'
    );

    try {
        const user0 = await userService.create(
            {
                email: 'GoblinVendor@hamza.com',
                first_name: 'Goblin',
                last_name: 'Vendor',
                wallet_address: '0xb794f5ea0ba39494ce839613fffba74279579268',
            },
            'password'
        );

        const user1 = await userService.create(
            {
                email: 'QualityVendor@hamza.com',
                first_name: 'Quality',
                last_name: 'Vendor',
                wallet_address: '0x6A75b412495838621e9352FE72fF5e9191DD5ab1',
            },
            'password'
        );

        const user2 = await userService.create(
            {
                email: 'HeadphonesVendor@hamza.com',
                first_name: 'Headphones',
                last_name: 'Vendor',
                wallet_address: '0x5728C7b8b448332Acda43369afa3a2c25C947D43',
            },
            'password'
        );

        const store0 = await storeService.createStore(
            user0,
            'Goblin Store',
            'pcol_01HRVF8HCVY8B00RF5S54THTPC'
        );
        const store1 = await storeService.createStore(
            user1,
            'Quality Store',
            'pcol_01HSGAM4918EX0DETKY6E662WT'
        );
        const store2 = await storeService.createStore(
            user2,
            'Headphones Store',
            'pcol_01HSGAMXDJD725MR3VSW631SN2'
        );

        await productCollectionService.update(
            'pcol_01HRVF8HCVY8B00RF5S54THTPC',
            { store_id: store0.id }
        );

        await productCollectionService.update(
            'pcol_01HSGAM4918EX0DETKY6E662WT',
            { store_id: store1.id }
        );

        await productCollectionService.update(
            'pcol_01HSGAMXDJD725MR3VSW631SN2',
            { store_id: store2.id }
        );

        return res.json({ user0, user1, user2, store0, store1, store2 });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: 'Internal server error', error: error.message });
    }
};
