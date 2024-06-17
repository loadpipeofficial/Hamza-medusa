/*
 id                 | character varying        |           | not null | 
 title              | character varying        |           | not null | 
 subtitle           | character varying        |           |          | 
 description        | character varying        |           |          | 
 handle             | character varying        |           |          | 
 is_giftcard        | f                         |           | not null | false
 thumbnail          | character varying        |           |          | 
 collection_id      | character varying        |           |          | 
 discountable       | t                         |           | not null | true
 status             | published                 |           | not null | 'draft'::product_status_enum
 store_id           | character varying        |           |          | 
 
 weight             | integer                  |           |          | 
 length             | integer                  |           |          | 
 height             | integer                  |           |          | 
 width              | integer                  |           |          | 
 hs_code            | character varying        |           |          | 
 origin_country     | character varying        |           |          | 
 mid_code           | character varying        |           |          | 
 material           | character varying        |           |          | 
 deleted_at         | timestamp with time zone |           |          | 
 metadata           | jsonb                    |           |          | 
 
 created_at         | timestamp with time zone |           | not null | now()
 updated_at         | timestamp with time zone |           | not null | now()
 type_id            | character varying        |           |          | 
 external_id        | character varying        |           |          | 
 massmarket_prod_id | character varying        |           |          | 
 */

async function main() {
    try {
        const authResponse = await fetch('http://localhost:9000/admin/auth', {
            method: 'POST',
            body: JSON.stringify({
                email: 'admin@medusa-test.com',
                password: 'supersecret',
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const authData = await authResponse.json();
        const authCookie = authResponse.headers.get('set-cookie');

        const response1 = await fetch(
            'http://localhost:9000/admin/custom/product',
            {
                method: 'POST',
                headers: {
                    Cookie: authCookie.substring(0, authCookie.indexOf(';')),
                },
                body: JSON.stringify({
                    title: '',
                    subtitle: '',
                    description: '',
                    handle: '',
                    is_giftcard: '',
                    thumbnail: '',
                    collection_id: '',
                    discountable: '',
                    status: '',
                    store_id: '',
                }),
            }
        );
        const response2 = await fetch(
            'http://localhost:9000/admin/custom/store',
            {
                method: 'POST',
                headers: {
                    Cookie: authCookie.substring(0, authCookie.indexOf(';')),
                },
                body: JSON.stringify({
                    name: '',
                    default_currency_code: '',
                    owner_id: '',
                    icon: '',
                }),
            }
        );
    } catch (e) {
        console.error(e);
    }
}

main();
