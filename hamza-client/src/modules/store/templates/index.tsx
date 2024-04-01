import { Suspense } from 'react'

import SkeletonProductGrid from '@modules/skeletons/templates/skeleton-product-grid'
import RefinementList from '@modules/store/components/refinement-list'
import { SortOptions } from '@modules/store/components/refinement-list/sort-products'

import PaginatedProducts from './paginated-products'

const StoreTemplate = ({
    sortBy,
    page,
    countryCode,
}: {
    sortBy?: SortOptions
    page?: string
    countryCode: string
}) => {
    const pageNumber = page ? parseInt(page) : 1

    return (
        <div className="bg-black flex flex-col small:flex-row small:items-start py-6 ">
            <RefinementList sortBy={sortBy || 'created_at'} />
            <div className="w-full">
                <div className="text-white mb-8 text-2xl-semi">
                    <h1>All products</h1>
                </div>
                <Suspense fallback={<SkeletonProductGrid />}>
                    <PaginatedProducts
                        sortBy={sortBy || 'created_at'}
                        page={pageNumber}
                        countryCode={countryCode}
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default StoreTemplate
