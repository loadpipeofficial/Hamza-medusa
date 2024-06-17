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

const fs = require('fs');

[{
    'store_id': 'store_01J0KCE5SZ31QQA4QAQ2R2Y2DP',
    'title': 'Fast Drone',
    'subtitle': 'ZK-ss93',
    'description': 'A fast drone that does stuff',
    'handle': '',
    'is_giftcard': 'f',
    'thumbnail': '',
    'collection_id': 'pcol_01HRVF8HCVY8B00RF5S54THTPC',
    'discountable': 't',
    'status': 'published',
}]
function readProductsFromCsv() {
    const file = './data/products.csv';
    const fullText = fs.readFileSync(file, 'utf-8');
    const lines = fullText.split('\n');
    let ignored = false;
    const output = [];

    //read each line
    for (let line of lines) {
        line = line.trim();
        if (line.length > 0) {

            //ignore headers on top
            if (!ignored) {
                ignored = true;
                continue;
            }

            //split into fields 
            const fields = line.split(',');
            console.log(fields.length);
            if (fields.length == 10) {
                output.push({
                    store_id: fields[0].trim(),
                    title: fields[1].trim(),
                    subtitle: fields[2].trim(),
                    description: fields[3].trim(),
                    handle: fields[4].trim(),
                    is_giftcard: fields[5].trim(),
                    thumbnail: fields[6].trim(),
                    collection_id: fields[7].trim(),
                    discountable: fields[8].trim(),
                    status: fields[9].trim(),
                })
            }
        }
    }

    return output;
}

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

        const response = await fetch(
            'http://localhost:9000/admin/custom/product',
            {
                method: 'POST',
                headers: {
                    Cookie: authCookie.substring(0, authCookie.indexOf(';')),
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    'products': readProductsFromCsv()
                }),
            }
        );
    } catch (e) {
        console.error(e);
    }
}

main();
