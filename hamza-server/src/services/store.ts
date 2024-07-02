import { Lifetime } from 'awilix';
import {
    StoreService as MedusaStoreService,
    Store,
    Logger,
} from '@medusajs/medusa';
import { User } from '../models/user';
import StoreRepository from '../repositories/store';
import axios from 'axios';
import { UpdateStoreInput as MedusaUpdateStoreInput } from '@medusajs/medusa/dist/types/store';

type UpdateStoreInput = MedusaUpdateStoreInput & {
    massmarket_keycard?: string;
    massmarket_store_id?: string;
};

class StoreService extends MedusaStoreService {
    static LIFE_TIME = Lifetime.SCOPED;
    protected readonly storeRepository_: typeof StoreRepository;
    protected readonly logger: Logger;

    constructor(container) {
        super(container);
        this.storeRepository_ = container.storeRepository;
        this.logger = container.logger;
    }

    async createStore(
        user: User,
        store_name: string,
        collection: string,
        icon: string
    ): Promise<Store> {
        let owner_id = user.id;
        this.logger.debug('owner_id: ' + owner_id);
        const storeRepo = this.manager_.withRepository(this.storeRepository_);
        let newStore = storeRepo.create();
        // newStore.owner = user; // Set the owner
        newStore.name = store_name; // Set the store name
        newStore.owner_id = owner_id; // Set the owner_id
        newStore.icon = icon;
        newStore.default_currency_code = 'eth';
        newStore = await storeRepo.save(newStore);
        this.logger.debug('New Store Saved:' + newStore);
        await this.populateProductsWithStoreId(newStore, collection);
        return newStore; // Return the newly created and saved store
    }

    async getStores() {
        return await this.storeRepository_.find();
    }

    async update(data: UpdateStoreInput) {
        return await super.update(data);
    }

    // TODO: Should I pull this out of the store service? -G
    async populateProductsWithStoreId(
        store: Store,
        collection: String
    ): Promise<any> {
        let collectionListUrl = `http://localhost:9000/store/products?collection_id[]=${collection}`;
        this.logger.debug(
            'Fetching products from collection: ' + collectionListUrl
        );
        let updateProductUrl = `http://localhost:9000/routes/products`;
        try {
            // Get a list of products belonging to a collection
            const collectionListResponse = await axios.get(collectionListUrl);
            const products = collectionListResponse.data.products;

            // Map `each` product to a `POST` request to update product with `store_id`
            const updatePromises = products.map((product) => {
                const body = {
                    product_id: product.id,
                    store_id: store.id,
                };
                return axios.post(updateProductUrl, body);
            });

            await Promise.all(updatePromises);
            this.logger.debug(
                'All products have been successfully updated with store_id'
            );
        } catch (error) {
            this.logger.error('Error processing products:', error);
        }
    }

    async getStoreByName(store_name: string): Promise<Store> {
        const storeRepo = this.manager_.withRepository(this.storeRepository_);
        const store = await storeRepo.findOneBy({ name: store_name });
        if (!store) {
            throw new Error(`Store with name ${store_name} not found`);
        }
        return store;
    }
}

export default StoreService;
