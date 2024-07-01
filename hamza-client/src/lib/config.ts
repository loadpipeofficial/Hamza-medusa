import Medusa from '@medusajs/medusa-js';

const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
export const medusaClient = new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
    maxRetries: 3,
});

// Updating the currency through medusa.admin.currencies.update method from Medusa's JS client
// Path: load-pipe-storefront/src/lib/currency.ts
// medusaClient.admin.currencies
//   .update(code, {
//     includes_tax: true,
//   })
//   .then(({ currency }) => {
//     console.log(currency.code)
//   })
