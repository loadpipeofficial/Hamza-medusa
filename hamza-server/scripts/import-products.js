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
                    title: fields[1]
                        .trim()
                        .replace('&comma;', ',')
                        .replace('&crlf;', '\n'),
                    subtitle: fields[2]
                        .trim()
                        .replace('&comma;', ',')
                        .replace('&crlf;', '\n'),
                    description: fields[3]
                        .trim()
                        .replace('&comma;', ',')
                        .replace('&crlf;', '\n'),
                    handle: fields[4]
                        .trim()
                        .replace('&comma;', ',')
                        .replace('&crlf;', '\n'),
                    is_giftcard: fields[5].trim(),
                    thumbnail: fields[6].trim(),
                    collection_id: fields[7].trim(),
                    discountable: fields[8].trim(),
                    status: fields[9].trim(),
                });
            }
        }
    }

    return output;
}

//usdt 1$
//eth

async function main() {
    //console.log(readProductsFromCsv());
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
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    products: [
                        {
                            store: { name: 'The Gaming Store' },
                            title: 'HyperX Cloud III – Wired Gaming Over Ear Headset',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'Pc, Ps5, Xbox Series X|S, Angled 53Mm Drivers',
                            description: `<div id="feature-bullets" >                             <hr>
                            <h1> About this item </h1> <ul>  <li><span> Comfort is King - Comfort’s in the Cloud III’s DNA. HyperX signature memory foam in the headband and ear cushions wrapped in soft, premium leatherette make for a plush, comfortable fit all around.  </span></li>  <li><span> Audio Tuned for Your Entertainment - Angled 53mm drivers have been tuned by HyperX audio engineers to provide the optimal listening experience that accents the dynamic sounds of gaming.  </span></li>  <li><span> Upgraded Microphone for Clarity and Accuracy - Captures high-quality audio for clear voice chat and calls. The mic is noise-cancelling and features a built-in mesh filter to reduce disruptive sounds. It also features an LED mic mute indicator that lets you know when you’re muted.  </span></li>  <li><span > Durability, for the Toughest of Battles - The headset is flexible and features a full metal frame so it’s resilient against travel,accidents, mishaps, and those level-headed’ reactions to losses and defeat screens.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> DTS Headphone:X Spatial Audio - A lifetime activation of DTS Spatial Audio will help amp up your audio advantage and immersion with its precise sound localization and virtual 3D sound stage.  </span></li>  </ul>   <!-- Loading EDP related metadata -->
               <span class="edp-feature-declaration" data-edp-feature-name="featurebullets" data-edp-asin="B0C3BV19Q3" data-data-hash="3314387730" data-defects="[{&quot;id&quot;:&quot;defect-mismatch-info&quot;,&quot;value&quot;:&quot;Different from product&quot;},{&quot;id&quot;:&quot;defect-missing-information&quot;,&quot;value&quot;:&quot;Missing information&quot;},{&quot;id&quot;:&quot;defect-unessential-info&quot;,&quot;value&quot;:&quot;Unimportant information&quot;},{&quot;id&quot;:&quot;defect-other-productinfo-issue&quot;,&quot;value&quot;:&quot;Other&quot;}]" data-metadata="CATALOG" data-feature-container-id="" data-custom-event-handler="" data-display-name="Bullet Points" data-edit-data-state="featureBulletsEDPEditData" data-position="" data-resolver="CQResolver"></span>            <span class="caretnext">›</span>        </div>`,

                            handle: 'hyper-x-headset',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/1.1.png',
                                'https://images.hamza.biz/gaming_store/1.2.png',
                                'https://images.hamza.biz/gaming_store/1.3.png',
                                'https://images.hamza.biz/gaming_store/1.4.png',
                                'https://images.hamza.biz/gaming_store/1.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'HyperX Cloud III – Wired Gaming Over Ear Headset',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'HyperX Pulsefire Haste 2 Wireless Gaming Mouse Ultra Lightweight',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                '61g, 100 Hour Battery Life, 2.4Ghz Wireless, Up to 26000 DPI - Black (6N0B0AA)',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Up to 100 hours of battery life  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Precision HyperX 26K Sensor  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Ultra-lightweight 61g design  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Customizable with HyperX NGENUITY Software  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Dual wireless connectivity modes  </span></li>  </ul>`,
                            handle: 'hyper-x-mouse',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/2.1.png',
                                'https://images.hamza.biz/gaming_store/2.2.png',
                                'https://images.hamza.biz/gaming_store/2.3.png',
                                'https://images.hamza.biz/gaming_store/2.4.png',
                                'https://images.hamza.biz/gaming_store/2.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'HyperX Pulsefire Haste 2 Wireless Gaming Mouse Ultra Lightweight',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'HyperX Alloy Origins Mechanical USB Gaming Keyboard',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'Software-Controlled Light and Macro Customization, Compact Form Factor, Clicky Switch, Blue, RGB LED Backlit, Black (HX-KB6BLX-US)',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> HyperX mechanical switches: The key switches are custom-designed to be a balance of responsiveness and accuracy, featuring a short travel time and low actuation force. They’re also reliable, rated for 80 million keypresses with no loss of quality.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Full aircraft-grade aluminum body: The aluminum casing keeps the keyboard structurally sound and stable when the action gets intense and the game hangs in the balance; battle after battle, night after night.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Compact, portable design with detachable USB Type-C cable: The small footprint gives you plenty of room for rapid mouse movements. It also has a detachable cable so it’s easy to take on the go.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> RGB backlit keys with radiant lighting effects: HyperX mechanical switches feature an exposed LED for brighter, more luminous RGB lighting.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Advanced customization with HyperX NGENUITY Software: Customize Game Mode, take greater control over lighting effects, and set up your own macros.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Three adjustable keyboard tilt angles: Adjust the two-step keyboard feet for three different angle settings (3°, 7°, or 11°), whichever makes your wrists the most comfortable.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Onboard memory for three profiles: Create your own custom-designed lightshows, save them directly to the keyboard, and take them with you on the go.  </span></li>  </ul>`,
                            handle: 'hyper-x-keyboard',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/3.1.png',
                                'https://images.hamza.biz/gaming_store/3.2.png',
                                'https://images.hamza.biz/gaming_store/3.3.png',
                                'https://images.hamza.biz/gaming_store/3.4.png',
                                'https://images.hamza.biz/gaming_store/3.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'HyperX Alloy Origins Mechanical USB Gaming Keyboard',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'HyperX Solocast - Usb Condenser Gaming Unidirectional Microphone',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'For Pc, Ps4, And Mac, Tap-To-Mute Sensor, Cardioid Polar Pattern, Gaming, Streaming, Podcasts, Twitch, Youtube, Discord (Hmis1X-Xx-Bk/G, Black)',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Plug N Play audio recording: Get quality audio recordings with this easy-to-use USB condenser microphone. The cardioid polar pattern prioritizes sound sources directly in front of the microphone.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Tap-to-Mute sensor with LED status indicator: Simply tap the top of the mic to mute, and the signature LED indicator lets you immediately see whether or not you’re broadcasting.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Flexible, adjustable stand: The easy-to-position stand swivels to support a variety of setups. You can even fit under a monitor if your setup is tight on space.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Boom arm and mic stand threading: Versatile microphone fits 3/8-inch and 5/8-inch threaded setups, making it compatible with most mic stands or boom arms*. * Microphone boom arm not included  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Multi-device and program compatibility: Get great sound whether you’re connecting to a PC, PS4, or Mac. SoloCast is certified by Discord and TeamSpeak, and works on major streaming platforms like Streamlabs OBS, OBS Studio, and XSplit.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 2-year warranty with free techincal support  </span></li>  </ul>`,
                            handle: 'hyper-x-mic',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/4.1.png',
                                'https://images.hamza.biz/gaming_store/4.2.png',
                                'https://images.hamza.biz/gaming_store/4.3.png',
                                'https://images.hamza.biz/gaming_store/4.4.png',
                                'https://images.hamza.biz/gaming_store/4.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'HyperX Solocast - Usb Condenser Gaming Unidirectional Microphone',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'Logitech G29 Driving Force Racing Wheel and Floor Pedals',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'Real Force Feedback, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover for PS5, PS4, PC, Mac - Black',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Immersive Gaming Experience: Perfect for PlayStation 5, PS4 and PC gaming titles, the Driving Force simulates the feeling of driving a real car with precision steering and pressure-sensitive pedals;Premium Control: The Driving Force feedback racing wheel provides a detailed simulation of driving a real car, with helical gearing delivering smooth, quiet steering and a hand-stitched leather cover  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Customisable Pedals: These pressure-sensitive nonlinear brake pedals provide a responsive, accurate braking feel on a sturdy base - with adjustable pedal faces for finer control  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 900-Degree Rotation: Lock-to-lock rotation of the Driving Force means you can turn the wheel around two and a half times, hand over hand on wide turns - just like a real F1 race car  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Up Your Game: Take your racing simulation to the next level with Driving Force accessories like the Driving Force Shifter or desk and rig mounts; The plastic parts in G29 Driving Force include 52% certified post consumer recycled plastic*; certified carbon neutral  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Warranty Description: 2 Year Limited Hardware Warranty; Item Height: 270 mm; Item Length: 278 mm; Item Width: 260 mm; Power Source Type: Corded Electric  </span></li>  </ul>`,
                            handle: 'logitech-wheel',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/5.1.png',
                                'https://images.hamza.biz/gaming_store/5.2.png',
                                'https://images.hamza.biz/gaming_store/5.3.png',
                                'https://images.hamza.biz/gaming_store/5.4.png',
                                'https://images.hamza.biz/gaming_store/5.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'Logitech G29 Driving Force Racing Wheel and Floor Pedals',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'Sony PlayStation®5 Console (slim)',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle: 'Sony PlayStation®5 Console (slim)',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Slim Design: With PS5, players get powerful gaming technology packed inside a sleek and compact console design. 1TB of Storage: Keep your favorite games ready and waiting for you to jump in and play with 1TB of SSD storage built in. Ultra-High Speed SSD: Maximize your play sessions with near instant load times for installed PS5 games.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Integrated I/O: The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible. Ray Tracing: Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games. 4K-TV Gaming: Play your favorite PS5 games on your stunning 4K TV.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Up to 120fps with 120Hz output: Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays. HDR Technology: With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors. Tempest 3D AudioTech: Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive with Tempest 3D AudioTech in supported games.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Haptic Feedback: Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback. Adaptive Triggers: Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Includes ASTRO’S: Playroom Explore four worlds, each one showcasing innovative gameplay using the versatile features of the DualSense wireless controller, in this game included for all PS5 console users.  </span></li>  </ul>`,
                            handle: 'ps5',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/6.1.png',
                                'https://images.hamza.biz/gaming_store/6.2.png',
                                'https://images.hamza.biz/gaming_store/6.3.png',
                                'https://images.hamza.biz/gaming_store/6.4.png',
                                'https://images.hamza.biz/gaming_store/6.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'Sony PlayStation®5 Console (slim)',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'Xbox Series X',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle: 'Xbox Series X',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Introducing Xbox series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox series X  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Xbox game Pass ultimate includes over 100 high-quality games, online multiplayer, and an EA play membership for one low monthly price (membership sold separately)  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Xbox Smart delivery ensures you play the best available version of your game no matter which console you're playing on  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Unit Count: 1; Hardware Platform: Xbox One; Unit Count Type: Count; Color Name: Black  </span></li>  </ul>`,
                            handle: 'xbox-series-x',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/7.1.png',
                                'https://images.hamza.biz/gaming_store/7.2.png',
                                'https://images.hamza.biz/gaming_store/7.3.png',
                                'https://images.hamza.biz/gaming_store/7.4.png',
                                'https://images.hamza.biz/gaming_store/7.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'Xbox Series X',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'BenQ ScreenBar Halo LED Monitor Light',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'Lamp with Wireless Controller| Adjustable Brightness and Color Temperature',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> INTEGRATED BACK LIGHT: Our newly integrated back light design enhances overall eye comfort, no matter in screen if you are working or relaxing entertaining. Adjust it to your preferred brightness or color temperature and then set it as “My Favourite” via the smart wireless controller according to your needs.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 3 EYE CARE SETTING MODES: Its dimmable Front and Back Light complement each other to reduce glare to a minimum and increase eye comfort as much as possible. The upgraded asymmetrical optical design ensures no reflected glare on your screen.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SMART WIRELESS CONTROLLER: Customizable and stepless lighting allows you to switch modes and adjust brightness and color temperature levels. Over 100 stepless levels for work and leisure. Personalized adjustment: 3 modes (Front, Back, Front&amp; Back Light).  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SPACE SAVING: Unlike your normal desk lamp, ScreenBar Halo is powered via USB. The patented clip design mounts on top of almost any monitor, saving valuable space on your desk, no lamp base or extra wires to mess up your workspace. USB cable length is 5.9” (1.5m).  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> HIGH COMPATIBILITY: ScreenBar Halo is designed with its unique weighted clip to fit most monitors. It supports monitors with &gt;=0.25" (0.63cm) bezel width and thickness up to 2.36” (6cm) for flat monitors and up to 1.5” (3.8cm) for curved monitors over 1000R. Non-planar monitor back designs may cause mounting problems.  </span></li>  </ul>`,
                            handle: 'benq-screenbar',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/8.1.png',
                                'https://images.hamza.biz/gaming_store/8.2.png',
                                'https://images.hamza.biz/gaming_store/8.3.png',
                                'https://images.hamza.biz/gaming_store/8.4.png',
                                'https://images.hamza.biz/gaming_store/8.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'BenQ ScreenBar Halo LED Monitor Light',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },

                        {
                            store: { name: 'The Gaming Store' },
                            title: 'TP-Link AX3000 Mesh Dual Band Wi-Fi 6',
                            categories: [
                                {
                                    id: 'pcat_gaming',
                                },
                            ],
                            collection_id: 'pcol_gaming',
                            subtitle:
                                'Range Extender, Broadband/WiFi Extender, Wireless Booster/Hotspot with 1 Gigabit Port, 160 MHz Channels, Built-in Access Point Mode, Easy Setup (RE700X)',
                            description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Dual Band WiFi 6 —— Separates 5 GHz (2402 Mbps) and 2.4 GHz (574 Mbps) WiFi bands for faster speeds and greater capacity with the latest technology  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Uninterrupted Streaming —— Easily create a TP-Link OneMesh network for seamless whole home WiFi coverage  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> AP Mode —— Create a new WiFi access point through the Gigabit Ethernet port to enhance your wired network with WiFi capability  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Adaptive Path Selection —— Automatically choosing the fastest connection path to the router  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> App Control —— Easy Setup and management with your network using the TP-Link Tether app  </span></li>  </ul>`,
                            handle: 'tp-link',
                            is_giftcard: false,
                            weight: 260,
                            images: [
                                'https://images.hamza.biz/gaming_store/9.1.png',
                                'https://images.hamza.biz/gaming_store/9.2.png',
                                'https://images.hamza.biz/gaming_store/9.3.png',
                                'https://images.hamza.biz/gaming_store/9.4.png',
                                'https://images.hamza.biz/gaming_store/9.5.png',
                            ],
                            options: [],
                            variants: [
                                {
                                    title: 'TP-Link AX3000 Mesh Dual Band Wi-Fi 6',
                                    prices: [
                                        {
                                            currency_code: 'eth',
                                            amount: 4400000,
                                        },
                                        {
                                            currency_code: 'usdc',
                                            amount: 23000,
                                        },
                                        {
                                            currency_code: 'usdt',
                                            amount: 23000,
                                        },
                                    ],
                                    inventory_quantity: 100,
                                    manage_inventory: true,
                                },
                            ],
                        },
                    ],
                }),
            }
        );
    } catch (e) {
        console.error(e);
    }
}

main();
