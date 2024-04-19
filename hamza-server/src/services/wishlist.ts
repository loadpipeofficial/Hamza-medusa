import { TransactionBaseService } from '@medusajs/medusa/dist/interfaces';
import { MedusaError } from 'medusa-core-utils';
import { Lifetime } from 'awilix';
import { WishlistItem } from '../models/wishlist-item';
import { Wishlist } from '../models/wishlist';

interface CreateWishlistPayload {
    region_id: string;
    customer_id: string;
}
class WishlistService extends TransactionBaseService {
    static LIFE_TIME = Lifetime.SCOPED;

    // TODO: Use BaseRepository instead of injecting repositories

    constructor(container) {
        super(container);
    }

    // TODO: Running this multiple times should NOT create multiple wishlists, look into how to prevent this && how atomicPhase_ works
    async create(payload: CreateWishlistPayload) {
        return await this.atomicPhase_(async (transactionManager) => {
            if (!payload.region_id) {
                throw new MedusaError(
                    MedusaError.Types.INVALID_DATA,
                    `A region_id must be provided when creating a wishlist`
                );
            }

            const wishlistRepository =
                this.activeManager_.getRepository(Wishlist);
            const createdWishlist = wishlistRepository.create(payload);
            const savedWishList =
                await wishlistRepository.save(createdWishlist);

            const [wishlist] = await wishlistRepository.find({
                where: { id: savedWishList.id },
                relations: ['items', 'items.product'],
            });

            return wishlist;
        });
    }

    async retrieve(id) {
        const wishlistRepository = this.activeManager_.getRepository(Wishlist);
        return await this.atomicPhase_(async (transactionManager) => {
            const [wishlist] = await wishlistRepository.find({
                where: { id },
                relations: ['items', 'items.product'],
            });

            if (!wishlist) {
                throw new MedusaError(
                    MedusaError.Types.NOT_FOUND,
                    `Wishlist with ${id} was not found`
                );
            }
            return wishlist;
        });
    }

    async addWishItem(wishlist_id, product_id) {
        const wishlistItemRepository =
            this.activeManager_.getRepository(WishlistItem);
        const wishlistRepository = this.activeManager_.getRepository(Wishlist);
        return await this.atomicPhase_(async (transactionManager) => {
            const [item] = await wishlistItemRepository.find({
                where: { wishlist_id, product_id },
            });

            if (!item) {
                const createdItem = wishlistItemRepository.create({
                    wishlist_id,
                    product_id,
                });
                await wishlistItemRepository.save(createdItem);
            }

            const [wishlist] = await wishlistRepository.find({
                where: { id: wishlist_id },
                relations: ['items', 'items.product'],
            });

            return wishlist;
        });
    }

    async removeWishItem(id) {
        const wishlistItemRepository =
            this.activeManager_.getRepository(WishlistItem);
        const wishlistRepository = this.activeManager_.getRepository(Wishlist);
        return await this.atomicPhase_(async (transactionManager) => {
            const [item] = await wishlistItemRepository.find({ where: { id } });
            const wishlist_id = item.wishlist_id;

            if (item) {
                await wishlistItemRepository.remove(item);
            }

            const [wishlist] = await wishlistRepository.find({
                where: { id: wishlist_id },
                relations: ['items', 'items.product'],
            });

            return wishlist;
        });
    }
}

export default WishlistService;
