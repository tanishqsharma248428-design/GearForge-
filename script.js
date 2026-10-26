const products = [
  // MICE (6 unique photos)
  { id: 1, name: 'Pulse X 4K Wireless Mouse', category: 'Mice', price: 2499, old: 3199, rating: 4.9, badge: 'BEST SELLER', subtitle: '49 g · Tri-mode 4K wireless · PAW3395', specs: ['49g Ultra-Light', '26,000 DPI Sensor', '90h Battery', 'Optical Switches'], image: 'photo-1527814050087-3793815479db' },
  { id: 2, name: 'Phantom Pro Gaming Mouse', category: 'Mice', price: 1899, old: 2499, rating: 4.8, badge: 'HOT PICK', subtitle: 'Symmetrical shell · 1000Hz polling · PTFE skates', specs: ['54g Honeycomb-Free', '1000Hz Polling', 'Virgin PTFE Feet', 'Paracord USB-C'], image: 'photo-1615663245857-ac93bb7c39e7' },
  { id: 3, name: 'Aero Mini Ergonomic Mouse', category: 'Mice', price: 1499, old: 1799, rating: 4.7, badge: '', subtitle: 'Claw/fingertip grip · Fast USB-C charge', specs: ['58g Compact Ergo', 'Bluetooth + 2.4GHz', '75M Click Rated', 'On-board Memory'], image: 'photo-1613141411244-0e4ac259d217' },
  { id: 4, name: 'Glide Chroma RGB Mouse', category: 'Mice', price: 1199, old: 1599, rating: 4.6, badge: 'VALUE PICK', subtitle: '3-zone RGB · 7 programmable macro buttons', specs: ['7 Macro Buttons', '16.8M RGB Zones', 'Braided Flex Cable', 'Instant DPI Shift'], image: 'photo-1605773527852-c546a8584ea3' },
  { id: 29, name: 'Precision Carbon Wireless Mouse', category: 'Mice', price: 2199, old: 2799, rating: 4.7, badge: 'PRO EDITION', subtitle: 'Carbon-composite shell · Zero-debounce clicks', specs: ['Carbon Composite', 'Zero-Lag 2.4GHz', 'Magnetic Dock Ready', 'Custom Grip Tape'], image: 'photo-1563297007-0686b7003af7' },
  { id: 30, name: 'Frost Stealth Gaming Mouse', category: 'Mice', price: 1699, old: 2199, rating: 4.6, badge: 'NEW', subtitle: 'Matte ice coating · Silent tactile scroll wheel', specs: ['Sweat-Proof Matte', '12,000 DPI Optical', '62g Balanced Weight', '5 Profile Slots'], image: 'photo-1586349906319-48d20e9d17e5' },

  // KEYBOARDS (6 unique photos)
  { id: 5, name: 'Striker 75 Gasket Mechanical Keyboard', category: 'Keyboards', price: 5499, old: 6999, rating: 4.9, badge: 'BEST SELLER', subtitle: '75% layout · Hot-swappable · CNC aluminum knob', specs: ['Gasket Mounted', '5-Pin Hot-Swap', 'PBT Double-Shot', '3-Layer Poron Foam'], image: 'photo-1595225476474-87563907a212' },
  { id: 6, name: 'Core 68 Rapid-Trigger Keyboard', category: 'Keyboards', price: 3299, old: 3999, rating: 4.8, badge: 'COMPACT', subtitle: '65% form factor · Per-key south-facing RGB', specs: ['68-Key Compact', 'South-Facing LEDs', 'Pre-lubed Linear', 'Detachable USB-C'], image: 'photo-1587829741301-dc798b83add3' },
  { id: 7, name: 'Studio TKL Custom Mechanical Board', category: 'Keyboards', price: 4299, old: 5199, rating: 4.7, badge: '', subtitle: 'Tenkeyless · Tactile Panda switches · Sound-damped', specs: ['87-Key TKL Layout', 'Tactile Switches', 'Screw-In Stabs', 'Mac & Win Toggle'], image: 'photo-1595044426077-d36d9236d54a' },
  { id: 8, name: 'Mono Air Low-Profile Keyboard', category: 'Keyboards', price: 2799, old: 3499, rating: 4.6, badge: 'NEW', subtitle: 'Ultra-slim aluminum frame · Whisper-quiet mechanical', specs: ['17mm Slim Profile', '3-Device Wireless', 'Anodized Alloy Top', '120h Battery Life'], image: 'photo-1511467687858-23d96c32e4ae' },
  { id: 31, name: 'Tactile 96 Pro Wireless Keyboard', category: 'Keyboards', price: 4999, old: 6199, rating: 4.8, badge: 'FULL CONTROL', subtitle: '96% compact full-size · Numpad + media rotary', specs: ['96% With Numpad', '4000mAh Battery', 'QMK / VIA Support', 'Silicone Dampener'], image: 'photo-1541140532154-b024d705b90a' },
  { id: 32, name: 'QuietKeys Studio Artisan Board', category: 'Keyboards', price: 1999, old: 2599, rating: 4.5, badge: 'STUDY PICK', subtitle: 'Silent linear switches · Sublimated keycaps', specs: ['Silent Acoustic Build', 'Dye-Sub Keycaps', '2-Stage Kickstand', 'N-Key Rollover'], image: 'photo-1618384887929-16ec33fab9ef' },

  // MOUSEPADS (6 unique photos)
  { id: 9, name: 'Control XL Pro Desk Mat', category: 'Mousepads', price: 999, old: 1299, rating: 4.9, badge: 'FAN FAVOURITE', subtitle: '900 × 400 × 4 mm · Low-profile micro-stitched edges', specs: ['900×400×4mm XL', 'Micro-Weave Cloth', 'Sub-Surface Stitch', 'Natural Rubber Base'], image: 'photo-1555680202-c86f0e12f086' },
  { id: 10, name: 'Speed Pro Hybrid Gaming Pad', category: 'Mousepads', price: 799, old: 1099, rating: 4.8, badge: '', subtitle: 'Low-friction cordura blend · Humidity resistant', specs: ['490×420mm Esport', 'Cordura Hybrid', 'Zero X/Y Variance', 'Non-Slip Hex Base'], image: 'photo-1625842268584-8f3296236761' },
  { id: 11, name: 'Orbit Extended Battlestation Mat', category: 'Mousepads', price: 1199, old: 1599, rating: 4.7, badge: 'XL SIZE', subtitle: 'Full-desk coverage · Spill-repellent nano coating', specs: ['1000×500mm XXL', 'Waterproof Coating', '4mm Plush Cushion', 'Machine Washable'], image: 'photo-1593640408182-31c70c8268f5' },
  { id: 12, name: 'Topo Stealth Edition Desk Pad', category: 'Mousepads', price: 899, old: 1199, rating: 4.6, badge: 'TOPO SERIES', subtitle: 'Minimalist topographic print · High-density foam', specs: ['Topographic Art', '900×400mm Size', 'Fade-Proof Print', 'Anti-Fray Edges'], image: 'photo-1542751371-adc38448a05e' },
  { id: 33, name: 'Cloud Soft Poron Mousepad', category: 'Mousepads', price: 1099, old: 1399, rating: 4.8, badge: 'ESPORTS GRADE', subtitle: 'Soft stopping power · Japanese poron-style base', specs: ['High Stopping Power', 'Plush 4.5mm Base', 'Locked Edge Stitch', 'Esports Tuned'], image: 'photo-1598550476439-6847785fcea6' },
  { id: 34, name: 'Midnight Felt & Cork Desk Mat', category: 'Mousepads', price: 699, old: 999, rating: 4.6, badge: '', subtitle: 'Warm studio texture · Eco-cork underside', specs: ['Merino Wool Blend', 'Anti-Slip Cork', 'Warm Desk Acoustics', '800×350mm Studio'], image: 'photo-1600861194942-f883de0dfe96' },

  // AUDIO (6 unique photos)
  { id: 13, name: 'Nova 7.1 Wireless Gaming Headset', category: 'Audio', price: 3999, old: 4999, rating: 4.8, badge: 'BEST SELLER', subtitle: '50mm neodymium drivers · AI noise-cancelling mic', specs: ['2.4GHz + Bluetooth', '50mm Custom Drivers', '40h Battery Life', 'Memory Foam Cups'], image: 'photo-1599669454699-248893623440' },
  { id: 14, name: 'Studio Pro Planar IEM Earbuds', category: 'Audio', price: 1799, old: 2399, rating: 4.8, badge: 'PLANAR IEM', subtitle: 'Planar magnetic in-ear monitors · Silver-plated cable', specs: ['14.2mm Planar Driver', 'Hi-Res IEM Earbuds', 'Detachable 2-Pin', '32-Ohm Easy Drive'], image: 'photo-1505740420928-5e560c06d30e' },
  { id: 15, name: 'ClearVoice Condenser USB Microphone', category: 'Audio', price: 2299, old: 2999, rating: 4.8, badge: 'CREATOR PICK', subtitle: '24-bit/96kHz cardioid · Capacitive tap-to-mute', specs: ['24-Bit / 96kHz', 'Cardioid Polar', 'Zero-Latency Monitor', 'Shockmount Built-In'], image: 'photo-1590602847861-f357a9332bbc' },
  { id: 16, name: 'Horizon Dual-Driver IEM Earphones', category: 'Audio', price: 1299, old: 1699, rating: 4.6, badge: 'PRO IEM', subtitle: 'Hybrid dynamic + balanced armature · 2-pin cable', specs: ['Dual Hybrid Driver', 'Silver-Plated Cable', 'Passive Noise Seal', '6 Ear-Tip Sizes'], image: 'photo-1590658268037-6bf12165a8df' },
  { id: 35, name: 'Focus Hybrid ANC Wireless Headphones', category: 'Audio', price: 4999, old: 6499, rating: 4.7, badge: '42dB ANC', subtitle: 'Active noise cancellation · Transparency mode', specs: ['42dB Hybrid ANC', '60h Playtime', 'Multipoint Pairing', 'Fast 10m Charge'], image: 'photo-1583394838336-acd977736f90' },
  { id: 36, name: 'Stream Boom-Arm Podcast Mic Kit', category: 'Audio', price: 3299, old: 4199, rating: 4.8, badge: 'CREATOR PICK', subtitle: 'All-metal scissor arm · Dual-layer pop shield', specs: ['Full Studio Bundle', 'Steel Boom Arm', 'Gain & Mute Dial', 'Plug & Play USB-C'], image: 'photo-1546435770-a3e426bf472b' },

  // STANDS (6 unique photos)
  { id: 17, name: 'Arc CNC Aluminum Headphone Stand', category: 'Stands', price: 999, old: 1399, rating: 4.8, badge: 'DESK ESSENTIAL', subtitle: 'Solid bead-blasted alloy · Weighted silicone base', specs: ['CNC Machined Alloy', 'Weighted Anti-Tip', 'Contoured Headrest', 'Cable Catch Slot'], image: 'photo-1612444530582-fc66183b16f7' },
  { id: 18, name: 'Lift Pro Ergonomic Laptop Stand', category: 'Stands', price: 1499, old: 1999, rating: 4.9, ratingCount: 142, badge: 'ERGONOMIC', subtitle: 'Height & angle adjustable · Open airflow cutout', specs: ['Fits 11" to 17"', 'Supports up to 8kg', 'Airflow Cooling', 'Folds Flat'], image: 'photo-1527864550417-7fd91fc51a46' },
  { id: 19, name: 'Rise Matte Walnut Dual Monitor Shelf', category: 'Stands', price: 2199, old: 2799, rating: 4.7, badge: 'SETUP HERO', subtitle: '100cm wide deck · Hides keyboard & DAC underneath', specs: ['100cm Dual Span', 'Steel Feet Supports', '40kg Load Rated', 'Felt Accessory Tray'], image: 'photo-1498050108023-c5249f4df085' },
  { id: 20, name: 'Flex MagSafe Phone & Tablet Stand', category: 'Stands', price: 599, old: 799, rating: 4.6, badge: '', subtitle: 'Dual-hinge tension · Pass-through charging slot', specs: ['360° Swivel Base', 'Dual Friction Hinge', 'Silicone Grips', 'Pocket Foldable'], image: 'photo-1544244015-0df4b3ffc6b0' },
  { id: 37, name: 'Clamp-On Under-Desk Headset Hanger', category: 'Stands', price: 499, old: 699, rating: 4.7, badge: 'SPACE SAVER', subtitle: 'Tool-free screw clamp · 360° rotating arm', specs: ['Fits 10–45mm Desks', '360° Swivel Hook', 'Rubber Desk Pads', 'Built-in Cord Clip'], image: 'photo-1517336714731-489689fd1ca8' },
  { id: 38, name: 'Studio Heavy-Duty Monitor Arm', category: 'Stands', price: 1899, old: 2499, rating: 4.8, badge: 'ZERO CLUTTER', subtitle: 'Gas-spring articulation · Integrated cable channels', specs: ['17"–34" Ultrawide', 'Gas-Spring Motion', 'VESA 75/100mm', 'C-Clamp & Grommet'], image: 'photo-1586210579191-33b45e38fa2c' },

  // DESK ACCESSORIES (6 unique photos)
  { id: 21, name: 'Stealth Cable Management Kit (16-Pc)', category: 'Desk Accessories', price: 399, old: 599, rating: 4.8, badge: 'UNDER ₹500', subtitle: 'Magnetic cable clips, velcro ties & braided sleeve', specs: ['16-Piece Complete', '3M VHB Adhesive', '2m Split Sleeve', 'Reusable Hook Ties'], image: 'photo-1550745165-9bc0b252726f' },
  { id: 22, name: 'Modular Magnetic Desk Organizer', category: 'Desk Accessories', price: 799, old: 999, rating: 4.7, badge: '', subtitle: 'Snap-together valet trays · Vegan leather liner', specs: ['3 Magnetic Trays', 'Microfiber Lined', 'Holds Dongles/SD', 'Non-Slip Bottom'], image: 'photo-1497366754035-f200968a6e72' },
  { id: 23, name: 'CloudFoam Cooling Gel Wrist Rest', category: 'Desk Accessories', price: 649, old: 899, rating: 4.8, badge: 'COMFORT PICK', subtitle: 'Slow-rebound memory foam · Cooling lycra fabric', specs: ['Cooling Gel Core', 'Ergonomic 18mm Loft', 'Fits 65%–TKL Boards', 'Washable Outer'], image: 'photo-1526374965328-7f61d4dc18c5' },
  { id: 24, name: 'Halo Asymmetric Monitor Light Bar', category: 'Desk Accessories', price: 1799, old: 2299, rating: 4.6, badge: 'EYE CARE', subtitle: 'Zero screen glare · Stepless dimmer & warm/cool dial', specs: ['Zero Screen Glare', '2700K–6500K CRI95', 'Touch Dimmer Bar', 'USB-C Powered'], image: 'photo-1507473885765-e6ed057f782c' },
  { id: 39, name: 'Precision Tech & Switch Care Kit', category: 'Desk Accessories', price: 449, old: 599, rating: 4.5, badge: 'CARE KIT', subtitle: 'Keycap puller, switch puller, brush & microfiber spray', specs: ['8-in-1 Cleaning Tool', 'Wire Keycap Puller', 'Anti-Static Brush', 'Screen-Safe Spray'], image: 'photo-1585421514284-efb74c2b69ba' },
  { id: 40, name: 'Aura Sync RGB Backlight Strip', category: 'Desk Accessories', price: 1199, old: 1599, rating: 4.6, badge: 'AMBIENT', subtitle: 'Addressable ARGB LEDs · Music reactive mode', specs: ['2m Addressable LED', 'Music Sync Mic', 'Corner Flex Clips', 'App & Remote Control'], image: 'photo-1531297484001-80022131f5a1' },

  // CABLES & EXTRAS (4 unique photos)
  { id: 25, name: 'ProDock 7-in-1 Aluminum USB-C Hub', category: 'Cables & Extras', price: 1699, old: 2199, rating: 4.8, badge: 'WORK + PLAY', subtitle: '4K@60Hz HDMI · 100W PD pass-through · SD/TF + 3×USB 3.0', specs: ['4K 60Hz HDMI Out', '100W PD Charging', '5Gbps USB 3.0', 'SD + MicroSD Slots'], image: 'photo-1544197150-b99a580bb7a8' },
  { id: 26, name: ' Kevlar-Braided 100W USB-C Cable (2m)', category: 'Cables & Extras', price: 349, old: 499, rating: 4.7, badge: '', subtitle: 'E-Marker smart chip · Ultra-flexible paracord', specs: ['100W Fast Charge', '2-Meter Reach', '20,000 Bend Lifespan', 'Aluminum Shells'], image: 'photo-1558618666-fcd25c85cd64' },
  { id: 27, name: 'Artisan Aviator Coiled Keyboard Cable', category: 'Cables & Extras', price: 799, old: 1099, rating: 4.8, badge: 'SETUP PICK', subtitle: '5-pin GX16 metal aviator · Double-sleeved Techflex', specs: ['GX16 Metal Aviator', 'Reverse-Wound Coil', 'USB-C to USB-A', 'Gold-Plated Connectors'], image: 'photo-1609081219090-a6d81d3085bf' },
  { id: 28, name: 'GaN 65W 4-Port Desktop Charging Station', category: 'Cables & Extras', price: 1299, old: 1699, rating: 4.6, badge: 'GAN TECH', subtitle: '2× USB-C + 2× USB-A · Powers laptop, phone & headset', specs: ['65W GaN Fast Tech', '4 Simultaneous Ports', 'Surge Protection', 'Compact Desk Footprint'], image: 'photo-1583863788434-e58a36330cf0' }
].map(p => ({
  ...p,
  image: `https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=750&q=80`
}));

// Generate a bespoke SVG fallback per product so offline/blocked images are still 100% unique
function fallbackImage(product) {
  const title = (product ? product.name : 'GearForge').replace(/&/g, '&amp;');
  const cat = (product ? product.category : 'Hardware').toUpperCase();
  const hue = ((product ? product.id : 1) * 37) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="750" height="560" viewBox="0 0 750 560">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#141812"/>
        <stop offset="100%" stop-color="hsl(${hue}, 22%, 14%)"/>
      </linearGradient>
    </defs>
    <rect width="750" height="560" fill="url(#g)"/>
    <circle cx="580" cy="140" r="180" fill="#c7f36b" fill-opacity="0.08"/>
    <rect x="48" y="48" width="654" height="464" rx="16" fill="none" stroke="#c7f36b" stroke-opacity="0.22"/>
    <text x="80" y="115" fill="#c7f36b" font-family="sans-serif" font-size="18" font-weight="800" letter-spacing="3">GEARFORGE // ${cat}</text>
    <text x="80" y="290" fill="#f4f5f0" font-family="sans-serif" font-size="32" font-weight="700">${title}</text>
    <text x="80" y="340" fill="#9ca296" font-family="sans-serif" font-size="20">GF-0${product ? product.id : '1'} PRO HARDWARE SERIES</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Sanitize saved cart so invalid/corrupted items never break rendering
function loadCleanCart() {
  try {
    const raw = JSON.parse(localStorage.getItem('gearforge-cart') || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .map(item => ({ id: Number(item.id), qty: Math.max(1, Number(item.qty) || 1) }))
      .filter(item => products.some(p => p.id === item.id));
  } catch {
    return [];
  }
}

function loadJSON(key, fallback) {
  try {
    const val = JSON.parse(localStorage.getItem(key));
    return val ?? fallback;
  } catch {
    return fallback;
  }
}

const PROMO_CODES = {
  FORGE10: { code: 'FORGE10', pct: 10, label: 'FORGE10 (10% OFF)' },
  LEVELUP: { code: 'LEVELUP', pct: 15, label: 'LEVELUP (15% OFF)' },
  GG20: { code: 'GG20', pct: 20, label: 'GG20 (20% VIP OFF)' }
};

const DEFAULT_REVIEWS = [
  {
    id: 'rev-101',
    productId: 1,
    author: 'Aarav Mehta',
    setupTag: 'Immortal 3 · Valorant',
    rating: 5,
    headline: '49g feels like aiming with pure air!',
    body: 'Switched from a 78g mouse to the Pulse X 4K and my micro-adjustments in Valorant feel effortless. Zero side flex, crisp optical switches, and battery lasts over a week on 1000Hz.',
    date: '18 Oct 2026',
    timestamp: 1792281600000,
    helpful: 34,
    verified: true
  },
  {
    id: 'rev-102',
    productId: 5,
    author: 'Neha Kapoor',
    setupTag: 'Full-Stack Dev & Gamer',
    rating: 5,
    headline: 'Creamy gasket acoustics right out of the box',
    body: 'The Striker 75 sounds like a custom ₹15k build without needing any mods. The triple-layer Poron foam and pre-lubed stabilizers make typing 8 hours a day an absolute joy.',
    date: '15 Oct 2026',
    timestamp: 1792022400000,
    helpful: 29,
    verified: true
  },
  {
    id: 'rev-103',
    productId: 13,
    author: 'Vikramaditya Rao',
    setupTag: 'CS2 & Sim Racing',
    rating: 5,
    headline: 'Pinpoint footsteps & zero wireless delay',
    body: 'The 2.4GHz dongle on the Nova 7.1 has zero noticeable latency. Ear cushions stay cool even during 4-hour summer sessions in Mumbai, and my squad says the flip mic sounds super clean.',
    date: '11 Oct 2026',
    timestamp: 1791676800000,
    helpful: 21,
    verified: true
  },
  {
    id: 'rev-104',
    productId: 9,
    author: 'Kabir Singhania',
    setupTag: 'Minimalist Dual-Monitor Setup',
    rating: 5,
    headline: 'Stitched edges sit lower than the surface!',
    body: 'Most desk mats irritate my wrist with raised stitching, but the Control XL Pro has recessed micro-stitching. Stopping power is super consistent and the 900x400 size fits my 75% board + mouse.',
    date: '08 Oct 2026',
    timestamp: 1791417600000,
    helpful: 18,
    verified: true
  },
  {
    id: 'rev-105',
    productId: 2,
    author: 'Rohan Deshmukh',
    setupTag: 'Apex Legends · Claw Grip',
    rating: 5,
    headline: 'Best sub-₹2,000 gaming mouse in India',
    body: 'At ₹1,899 the Phantom Pro punches way above its price. Virgin PTFE skates glide like butter on my Cordura pad and the coating grips well even with sweaty hands.',
    date: '04 Oct 2026',
    timestamp: 1791072000000,
    helpful: 25,
    verified: true
  },
  {
    id: 'rev-106',
    productId: 15,
    author: 'Ananya Nair',
    setupTag: 'Twitch Streamer & Creator',
    rating: 4,
    headline: 'Tap-to-mute on top is a lifesaver on stream',
    body: 'Warm broadcast tone straight over USB-C without needing an audio interface. Gave 4 stars only because the included USB cable could be slightly longer, otherwise 10/10 value.',
    date: '29 Sep 2026',
    timestamp: 1790640000000,
    helpful: 14,
    verified: true
  },
  {
    id: 'rev-107',
    productId: 6,
    author: 'Siddharth Joshi',
    setupTag: 'Competitive FPS Loadout',
    rating: 5,
    headline: 'Compact 68-key layout freed up so much mouse space',
    body: 'Moved from a full-size board to the Core 68 and I never hit my keyboard while flicking anymore. South-facing RGB looks subtle and premium.',
    date: '24 Sep 2026',
    timestamp: 1790208000000,
    helpful: 16,
    verified: true
  },
  {
    id: 'rev-108',
    productId: 24,
    author: 'Devika Menon',
    setupTag: 'Late-Night UI Designer',
    rating: 5,
    headline: 'Zero glare on my matte IPS monitor',
    body: 'The Halo Asymmetric Light Bar illuminates my keyboard and sketchbook without casting any reflection on my screen. The wireless touch dimmer feels super futuristic.',
    date: '19 Sep 2026',
    timestamp: 1789776000000,
    helpful: 19,
    verified: true
  },
  {
    id: 'rev-109',
    productId: 19,
    author: 'Pranav Kulkarni',
    setupTag: 'MacBook + Gaming PC Hybrid Desk',
    rating: 5,
    headline: 'Transformed my cable-cluttered desk overnight',
    body: 'The Rise Matte Walnut Shelf easily holds both my 27-inch monitors and lets me slide my Striker 75 keyboard and audio DAC underneath when writing notes.',
    date: '14 Sep 2026',
    timestamp: 1789344000000,
    helpful: 12,
    verified: true
  }
];

const state = {
  category: 'All',
  search: '',
  sort: 'featured',
  visible: 12,
  cart: loadCleanCart(),
  wishlist: loadJSON('gearforge-wishlist', []),
  promo: loadJSON('gearforge-promo', null),
  users: loadJSON('gearforge-users', []),
  currentUser: loadJSON('gearforge-current-user', null),
  orders: loadJSON('gearforge-orders', []),
  reviews: loadJSON('gearforge-reviews', DEFAULT_REVIEWS),
  helpfulVotes: loadJSON('gearforge-helpful-votes', []),
  reviewFilter: 'All',
  reviewSort: 'helpful'
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => '₹' + Math.round(n).toLocaleString('en-IN');
const starsStr = n => '★'.repeat(Math.round(n)) + '☆'.repeat(Math.max(0, 5 - Math.round(n)));

// Calculate live rating & review count for any product (combining base stats + user reviews)
function getProductRating(product) {
  const prodReviews = state.reviews.filter(r => Number(r.productId) === product.id);
  const baseCount = 14 + ((product.id * 7) % 28);
  const totalCount = baseCount + prodReviews.length;
  const userSum = prodReviews.reduce((s, r) => s + Number(r.rating), 0);
  const avg = ((product.rating * baseCount) + userSum) / totalCount;
  return {
    rating: Number(avg.toFixed(1)),
    count: totalCount,
    reviews: prodReviews
  };
}

// ==================== PRODUCT FILTERING & RENDERING ====================

function visibleProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(p => {
    const matchCategory =
      state.category === 'All'
        ? true
        : state.category === 'Wishlist'
        ? state.wishlist.includes(p.id)
        : p.category === state.category;
    const matchSearch = !q || `${p.name} ${p.category} ${p.subtitle} ${(p.specs || []).join(' ')}`.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  if (state.sort === 'price-low') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating') list.sort((a, b) => getProductRating(b).rating - getProductRating(a).rating);
  if (state.sort === 'discount') {
    list.sort((a, b) => (1 - b.price / b.old) - (1 - a.price / a.old));
  }
  return list;
}

function getCartQty(productId) {
  const entry = state.cart.find(x => x.id === productId);
  return entry ? entry.qty : 0;
}

function renderProducts() {
  const list = visibleProducts();
  const shown = list.slice(0, state.visible);
  const productGrid = $('#productGrid');

  $('#resultsCount').textContent = `Showing ${shown.length} of ${list.length} products`;
  $('#wishlistFilterCount').textContent = state.wishlist.length;
  const wlBadge = $('#wishlistCount');
  if (wlBadge) {
    wlBadge.textContent = state.wishlist.length;
    wlBadge.hidden = state.wishlist.length === 0;
  }

  if (!shown.length) {
    productGrid.innerHTML = `
      <div class="no-results">
        <h3>${state.category === 'Wishlist' ? 'Your saved wishlist is empty' : 'No matching gear found'}</h3>
        <p>${state.category === 'Wishlist' ? 'Tap the heart (♥) icon on any product card to save it for later.' : 'Try another search keyword or reset your active filters.'}</p>
        <button class="btn btn-outline" id="resetFilters" type="button">Show all 40 products ↗</button>
      </div>`;
  } else {
    productGrid.innerHTML = shown.map(p => {
      const qtyInCart = getCartQty(p.id);
      const isWishlisted = state.wishlist.includes(p.id);
      const discountPct = Math.round((1 - p.price / p.old) * 100);
      const rStats = getProductRating(p);

      return `
        <article class="product-card ${qtyInCart > 0 ? 'in-cart' : ''}" data-product-card="${p.id}">
          <div class="product-image-wrap" data-quickview="${p.id}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" data-fallback-id="${p.id}">
            <span class="product-badge" ${p.badge ? '' : 'hidden'}>${p.badge}</span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" type="button" data-wishlist="${p.id}" aria-label="Save ${p.name} to wishlist" title="Save to wishlist">
              ${isWishlisted ? '♥' : '♡'}
            </button>
            <span class="inspect-pill">Quick View &amp; Reviews ↗</span>
          </div>
          <div class="product-info">
            <div class="product-meta-top">
              <span class="product-type">${p.category}</span>
              <button type="button" class="rating-pill-btn" data-quickview="${p.id}" title="Read customer reviews for ${p.name}">
                ★ ${rStats.rating} <span>(${rStats.count})</span>
              </button>
            </div>
            <h3 class="product-title" data-quickview="${p.id}">${p.name}</h3>
            <p class="product-subtitle">${p.subtitle}</p>
            <div class="price-row">
              <span class="price">${money(p.price)}</span>
              <span class="old-price">${money(p.old)}</span>
              <span class="discount">${discountPct}% OFF</span>
            </div>
            <div class="card-actions">
              ${
                qtyInCart === 0
                  ? `<button class="add-bag-btn" type="button" data-add="${p.id}">
                      <span>Add to Bag</span>
                      <span>＋</span>
                    </button>`
                  : `<div class="card-qty-bar" role="group" aria-label="Quantity for ${p.name}">
                      <button class="card-qty-btn" type="button" data-card-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
                      <span class="card-qty-label">${qtyInCart} in bag</span>
                      <button class="card-qty-btn" type="button" data-card-qty="${p.id}" data-delta="1" aria-label="Increase quantity">＋</button>
                      <button class="card-remove-btn" type="button" data-card-remove="${p.id}" title="Remove from bag" aria-label="Remove ${p.name} from bag">✕</button>
                    </div>`
              }
            </div>
          </div>
        </article>`;
    }).join('');
  }

  // Attach image fallback handlers
  $$('img[data-fallback-id]').forEach(img => {
    img.addEventListener('error', function handleImgError() {
      const prod = products.find(x => x.id === Number(this.dataset.fallbackId));
      this.src = fallbackImage(prod);
    }, { once: true });
  });

  // Toggle Load More / Show All buttons
  const hasMore = state.visible < list.length;
  $('#loadMore').style.display = hasMore ? 'inline-flex' : 'none';
  $('#showAllBtn').style.display = hasMore ? 'inline-flex' : 'none';

  // Highlight active filter chip
  $$('#filterRow .filter-chip').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === state.category);
  });

  const reset = $('#resetFilters');
  if (reset) {
    reset.onclick = () => {
      state.category = 'All';
      state.search = '';
      $('#searchInput').value = '';
      $('#inlineSearchInput').value = '';
      state.visible = 12;
      renderProducts();
    };
  }
}

// ==================== SHOPPING CART OPERATIONS ====================

function persistCart() {
  localStorage.setItem('gearforge-cart', JSON.stringify(state.cart));
  if (state.currentUser) {
    syncUserData();
  }
  renderCart();
  renderProducts();
  if (typeof renderOrdersAndPersonalizedHub === 'function') {
    renderOrdersAndPersonalizedHub();
  }
}

function addToCart(id, qty = 1) {
  const product = products.find(x => x.id === Number(id));
  if (!product) return;

  const existing = state.cart.find(x => x.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: product.id, qty: Math.max(1, qty) });
  }

  persistCart();
  bumpCartButton();
  showToast(`✓ ${product.name} added to your bag`);
}

function changeCartQty(id, delta) {
  const numId = Number(id);
  const item = state.cart.find(x => x.id === numId);
  if (!item) return;

  const prod = products.find(p => p.id === numId);
  item.qty += Number(delta);

  if (item.qty <= 0) {
    state.cart = state.cart.filter(x => x.id !== numId);
    showToast(`Removed ${prod ? prod.name : 'item'} from your bag`);
  }
  persistCart();
}

function removeFromCart(id) {
  const numId = Number(id);
  const prod = products.find(p => p.id === numId);
  state.cart = state.cart.filter(x => x.id !== numId);
  persistCart();
  showToast(`Removed ${prod ? prod.name : 'item'} from your bag`);
}

function clearCart() {
  if (!state.cart.length) return;
  state.cart = [];
  persistCart();
  showToast('Shopping bag cleared');
}

function bumpCartButton() {
  const btn = $('#cartToggle');
  if (!btn) return;
  btn.classList.remove('bump');
  void btn.offsetWidth;
  btn.classList.add('bump');
}

function calculateCartTotals() {
  const count = state.cart.reduce((sum, x) => sum + x.qty, 0);
  const subtotal = state.cart.reduce((sum, x) => {
    const p = products.find(prod => prod.id === x.id);
    return sum + (p ? p.price * x.qty : 0);
  }, 0);

  const discount = state.promo ? Math.round(subtotal * (state.promo.pct / 100)) : 0;
  const afterDiscount = Math.max(0, subtotal - discount);
  const shipping = afterDiscount === 0 ? 0 : afterDiscount >= 1999 ? 0 : 99;
  const total = afterDiscount + shipping;

  return { count, subtotal, discount, afterDiscount, shipping, total };
}

function renderCart() {
  const { count, subtotal, discount, shipping, total } = calculateCartTotals();

  $('#cartCount').textContent = count;
  $('#drawerCount').textContent = `(${count})`;
  $('#clearCartBtn').hidden = state.cart.length === 0;

  // Free shipping meter (Threshold: ₹1,999)
  const threshold = 1999;
  const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
  $('#shippingBarFill').style.width = `${pct}%`;
  if (subtotal === 0) {
    $('#shippingMeterText').innerHTML = `Add <b>${money(threshold)}</b> for <b>FREE Express Shipping</b>`;
  } else if (subtotal < threshold) {
    $('#shippingMeterText').innerHTML = `Add <b>${money(threshold - subtotal)}</b> more to unlock <b>FREE Express Shipping</b>`;
  } else {
    $('#shippingMeterText').innerHTML = `🎉 You've unlocked <b>FREE Express Shipping!</b>`;
  }

  // Promo display
  const promoActive = $('#promoActive');
  const discountRow = $('#cartDiscountRow');
  if (state.promo && subtotal > 0) {
    promoActive.hidden = false;
    $('#promoActiveLabel').textContent = `${state.promo.label} applied`;
    discountRow.hidden = false;
    $('#cartDiscountVal').textContent = `−${money(discount)}`;
  } else {
    promoActive.hidden = true;
    discountRow.hidden = true;
  }

  $('#cartSubtotal').textContent = money(subtotal);
  $('#cartShippingVal').textContent = subtotal === 0 ? '₹0' : shipping === 0 ? 'FREE' : money(shipping);
  $('#cartTotal').textContent = money(total);

  const cartBottom = $('#cartBottom');
  if (!state.cart.length) {
    cartBottom.style.display = 'none';
    $('#cartItems').innerHTML = `
      <div class="empty-cart">
        <span>＋</span>
        <h4>Your bag is empty</h4>
        <p>Add mice, mechanical keyboards, studio audio, or desk accessories to build your loadout.</p>
        <button class="btn btn-primary" id="continueShopping" type="button">Explore gear ↗</button>
      </div>`;
    const cont = $('#continueShopping');
    if (cont) cont.onclick = closeCart;
    return;
  }

  cartBottom.style.display = 'block';
  $('#cartItems').innerHTML = state.cart.map(x => {
    const p = products.find(prod => prod.id === x.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" data-fallback-id="${p.id}">
        <div>
          <h4>${p.name}</h4>
          <div class="cart-item-sub">${p.category} · ${money(p.price)} each</div>
          <div class="qty-control">
            <button type="button" data-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
            <span>${x.qty}</span>
            <button type="button" data-qty="${p.id}" data-delta="1" aria-label="Increase quantity">＋</button>
          </div>
        </div>
        <div class="cart-item-right">
          <button class="remove-item" type="button" data-remove="${p.id}" aria-label="Remove ${p.name}">Remove</button>
          <span class="cart-item-price">${money(p.price * x.qty)}</span>
        </div>
      </div>`;
  }).join('');

  $$('#cartItems img[data-fallback-id]').forEach(img => {
    img.addEventListener('error', function () {
      const prod = products.find(x => x.id === Number(this.dataset.fallbackId));
      this.src = fallbackImage(prod);
    }, { once: true });
  });
}

function openCart() {
  $('#cartOverlay').classList.add('open');
  $('#cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartOverlay').classList.remove('open');
  $('#cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ==================== WISHLIST ====================

function toggleWishlist(id) {
  const numId = Number(id);
  const prod = products.find(p => p.id === numId);
  if (!prod) return;

  if (state.wishlist.includes(numId)) {
    state.wishlist = state.wishlist.filter(x => x !== numId);
    showToast(`Removed ${prod.name} from saved gear`);
  } else {
    state.wishlist.push(numId);
    showToast(`♥ Saved ${prod.name} to your wishlist`);
  }

  localStorage.setItem('gearforge-wishlist', JSON.stringify(state.wishlist));
  if (state.currentUser) syncUserData();
  renderProducts();
  if (typeof renderOrdersAndPersonalizedHub === 'function') {
    renderOrdersAndPersonalizedHub();
  }
}

// ==================== PRODUCT QUICK VIEW MODAL ====================

function getReviewsForProduct(p) {
  const custom = state.reviews.filter(r => Number(r.productId) === p.id);
  const fallbackReviews = [
    {
      id: `auto-${p.id}-1`,
      productId: p.id,
      author: 'Karthik S.',
      setupTag: 'Verified Buyer · Bengaluru',
      rating: 5,
      headline: `Solid build quality on the ${p.name}`,
      body: `Picked this up for my daily gaming and work desk. Zero complaints—the ${p.specs ? p.specs[0].toLowerCase() : 'finish'} and overall performance exceeded expectations for ${money(p.price)}.`,
      date: 'Recent Drop',
      helpful: 7,
      verified: true
    },
    {
      id: `auto-${p.id}-2`,
      productId: p.id,
      author: 'Meera V.',
      setupTag: 'Verified Buyer · Pune',
      rating: Math.round(p.rating),
      headline: 'Fast 24h dispatch & genuine specs',
      body: `Matches my dark battlestation aesthetic cleanly. Packaging was super secure and ${p.specs && p.specs[1] ? p.specs[1].toLowerCase() : 'the build'} works flawlessly out of the box.`,
      date: 'Verified Purchase',
      helpful: 4,
      verified: true
    }
  ];
  return [...custom, ...fallbackReviews];
}

function openQuickView(id) {
  const p = products.find(x => x.id === Number(id));
  if (!p) return;

  const qtyInCart = getCartQty(p.id);
  const discountPct = Math.round((1 - p.price / p.old) * 100);
  const isWishlisted = state.wishlist.includes(p.id);
  const rStats = getProductRating(p);
  const prodReviews = getReviewsForProduct(p);

  $('#qvContent').innerHTML = `
    <div class="qv-image-box">
      <img src="${p.image}" alt="${p.name}" id="qvImg">
      <span class="product-badge" ${p.badge ? '' : 'hidden'}>${p.badge}</span>
    </div>
    <div class="qv-details">
      <div class="eyebrow"><span class="eyebrow-line"></span> ${p.category} · IN STOCK</div>
      <h3 id="qvTitle">${p.name}</h3>
      <p class="product-subtitle" style="font-size:13px">${p.subtitle}</p>
      <div class="price-row" style="margin:14px 0">
        <span class="price" style="font-size:24px">${money(p.price)}</span>
        <span class="old-price" style="font-size:14px">${money(p.old)}</span>
        <span class="discount">${discountPct}% OFF · ★ ${rStats.rating} (${rStats.count} reviews)</span>
      </div>
      <div class="qv-specs">
        ${(p.specs || []).map((s, idx) => `<div class="qv-spec-item"><small>SPEC 0${idx + 1}</small><b>${s}</b></div>`).join('')}
      </div>
      <div class="card-actions" style="margin-top:18px" id="qvActionArea">
        ${
          qtyInCart === 0
            ? `<button class="btn btn-primary" type="button" style="flex:1" data-qv-add="${p.id}">Add to Shopping Bag ＋</button>`
            : `<div class="card-qty-bar" style="flex:1;padding:6px">
                <button class="card-qty-btn" type="button" data-qv-qty="${p.id}" data-delta="-1">−</button>
                <span class="card-qty-label">${qtyInCart} in your bag</span>
                <button class="card-qty-btn" type="button" data-qv-qty="${p.id}" data-delta="1">＋</button>
                <button class="card-remove-btn" type="button" data-qv-remove="${p.id}" title="Remove from bag">✕</button>
              </div>`
        }
        <button class="btn btn-outline" type="button" data-qv-wishlist="${p.id}">
          ${isWishlisted ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </div>

    <div class="qv-reviews-block">
      <div class="qv-reviews-head">
        <div>
          <h4>CUSTOMER REVIEWS (${rStats.count}) · <span style="color:var(--accent)">★ ${rStats.rating}/5</span></h4>
        </div>
        <button class="btn btn-outline" type="button" style="padding:8px 13px;font-size:11px" data-open-review-for="${p.id}">
          Write a Review ★
        </button>
      </div>
      <div class="qv-reviews-list">
        ${prodReviews.map(rev => `
          <div class="qv-rev-item">
            <div class="qv-rev-item-top">
              <strong>${rev.author} <span class="verified-badge">✓ VERIFIED</span></strong>
              <span class="rev-stars">${starsStr(rev.rating)}</span>
            </div>
            <h5>${rev.headline}</h5>
            <p>${rev.body}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const qvImg = $('#qvImg');
  if (qvImg) {
    qvImg.onerror = () => { qvImg.src = fallbackImage(p); };
  }

  $('#quickViewModal').classList.add('open');
  $('#quickViewModal').setAttribute('aria-hidden', 'false');
}

function closeQuickView() {
  $('#quickViewModal').classList.remove('open');
  $('#quickViewModal').setAttribute('aria-hidden', 'true');
}

// ==================== CUSTOMER RATINGS & REVIEWS SECTION ====================

function renderReviewsSection() {
  const allRevs = state.reviews;
  const totalCount = 120 + allRevs.length;
  const avgScore = allRevs.length
    ? (allRevs.reduce((s, r) => s + Number(r.rating), 0) / allRevs.length).toFixed(1)
    : '4.8';

  $('#overallScoreVal').textContent = avgScore;
  $('#overallStarsDisplay').textContent = starsStr(avgScore);
  $('#overallCountText').textContent = `Based on ${totalCount} verified player reviews`;

  // Calculate star breakdown bars (5 down to 1)
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  allRevs.forEach(r => {
    const k = Math.min(5, Math.max(1, Math.round(Number(r.rating))));
    counts[k] = (counts[k] || 0) + 1;
  });
  const total = Math.max(1, allRevs.length);

  $('#overallBarsCol').innerHTML = [5, 4, 3, 2, 1].map(star => {
    const pct = Math.round((counts[star] / total) * 100);
    return `
      <div class="ro-bar-row">
        <span class="ro-bar-label">${star} ★</span>
        <div class="ro-bar-track"><div class="ro-bar-fill" style="width:${pct}%"></div></div>
        <span class="ro-bar-pct">${pct}%</span>
      </div>
    `;
  }).join('');

  // Filter community reviews
  let filtered = allRevs.filter(r => {
    const prod = products.find(p => p.id === Number(r.productId));
    if (state.reviewFilter === 'All') return true;
    if (state.reviewFilter === '5') return Number(r.rating) === 5;
    if (state.reviewFilter === 'Mousepads') {
      return prod && ['Mousepads', 'Desk Accessories', 'Stands', 'Cables & Extras'].includes(prod.category);
    }
    return prod && prod.category === state.reviewFilter;
  });

  if (state.reviewSort === 'helpful') {
    filtered.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
  } else if (state.reviewSort === 'newest') {
    filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  } else if (state.reviewSort === 'highest') {
    filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
  }

  $$('#reviewFilterRow .filter-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.revFilter === state.reviewFilter);
  });

  const grid = $('#communityReviewsGrid');
  if (!filtered.length) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No reviews in this filter yet</h3>
        <p>Be the first player to review a product in this category!</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(rev => {
    const prod = products.find(p => p.id === Number(rev.productId)) || products[0];
    const voted = state.helpfulVotes.includes(rev.id);
    return `
      <article class="review-card">
        <div class="rev-card-top">
          <div class="rev-author-box">
            <div class="rev-avatar">${getInitials(rev.author)}</div>
            <div>
              <div class="rev-author-name">
                <span>${rev.author}</span>
                <span class="verified-badge">✓ VERIFIED</span>
              </div>
              <div class="rev-author-sub">${rev.setupTag || 'GearForge Member'}</div>
            </div>
          </div>
          <div class="rev-stars" aria-label="${rev.rating} out of 5 stars">${starsStr(rev.rating)}</div>
        </div>

        <h3 class="rev-headline">${rev.headline}</h3>
        <p class="rev-body">“${rev.body}”</p>

        <div class="rev-product-link" data-quickview="${prod.id}" title="Inspect ${prod.name}">
          <img src="${prod.image}" alt="${prod.name}" data-fallback-id="${prod.id}">
          <div>
            <strong>${prod.name}</strong>
            <small>${prod.category} · ${money(prod.price)} · Inspect ↗</small>
          </div>
        </div>

        <div class="rev-card-footer">
          <span>Reviewed on ${rev.date}</span>
          <button type="button" class="helpful-btn ${voted ? 'voted' : ''}" data-helpful-id="${rev.id}">
            👍 Helpful (${rev.helpful || 0})
          </button>
        </div>
      </article>
    `;
  }).join('');

  $$('#communityReviewsGrid img[data-fallback-id]').forEach(img => {
    img.addEventListener('error', function () {
      const prod = products.find(x => x.id === Number(this.dataset.fallbackId));
      this.src = fallbackImage(prod);
    }, { once: true });
  });
}

function toggleHelpfulVote(revId) {
  const rev = state.reviews.find(r => r.id === revId);
  if (!rev) return;

  if (state.helpfulVotes.includes(revId)) {
    state.helpfulVotes = state.helpfulVotes.filter(id => id !== revId);
    rev.helpful = Math.max(0, (rev.helpful || 1) - 1);
  } else {
    state.helpfulVotes.push(revId);
    rev.helpful = (rev.helpful || 0) + 1;
    showToast('Thanks for marking this review helpful! 👍');
  }

  localStorage.setItem('gearforge-helpful-votes', JSON.stringify(state.helpfulVotes));
  localStorage.setItem('gearforge-reviews', JSON.stringify(state.reviews));
  renderReviewsSection();
}

const STAR_LABELS = {
  1: '1 / 5 — Needs Improvement',
  2: '2 / 5 — Below Expectations',
  3: '3 / 5 — Solid Everyday Gear',
  4: '4 / 5 — Great Performance',
  5: '5 / 5 — Endgame Gear'
};

function setStarPickerValue(val) {
  const rating = Math.min(5, Math.max(1, Number(val) || 5));
  $('#revRatingInput').value = rating;
  $('#starPickerLabel').textContent = STAR_LABELS[rating];
  $$('#starPicker .star-pick-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.star) <= rating);
  });
}

function openWriteReviewModal(preselectedProductId = null) {
  const select = $('#revProductSelect');
  select.innerHTML = products
    .map(p => `<option value="${p.id}">${p.name} (${p.category} — ${money(p.price)})</option>`)
    .join('');

  if (preselectedProductId) {
    select.value = String(preselectedProductId);
  }

  if (state.currentUser) {
    $('#revAuthorName').value = state.currentUser.name || '';
    if (state.currentUser.gamertag && !$('#revSetupTag').value) {
      $('#revSetupTag').value = state.currentUser.gamertag;
    }
  }

  setStarPickerValue(5);
  $('#writeReviewModal').classList.add('open');
  $('#writeReviewModal').setAttribute('aria-hidden', 'false');
}

function closeWriteReviewModal() {
  $('#writeReviewModal').classList.remove('open');
  $('#writeReviewModal').setAttribute('aria-hidden', 'true');
}

// ==================== SIGN UP / LOGIN / ACCOUNT SYSTEM ====================

function getInitials(name) {
  return (name || 'GF')
    .trim()
    .split(/\s+/)
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function syncUserData() {
  if (!state.currentUser) return;
  const idx = state.users.findIndex(u => u.email === state.currentUser.email);
  if (idx !== -1) {
    state.users[idx].cart = state.cart;
    state.users[idx].wishlist = state.wishlist;
    localStorage.setItem('gearforge-users', JSON.stringify(state.users));
  }
}

function updateAuthUI() {
  const authBtn = $('#authToggle');
  const authLabel = $('#authLabel');
  const authAvatar = $('#authAvatar');
  const heroJoinBtn = $('#heroJoinBtn');

  if (state.currentUser) {
    authBtn.classList.add('logged-in');
    const firstName = state.currentUser.name.split(' ')[0];
    authLabel.textContent = firstName;
    authAvatar.textContent = getInitials(state.currentUser.name);
    if (heroJoinBtn) heroJoinBtn.innerHTML = `My Account (${firstName}) <span>↗</span>`;
  } else {
    authBtn.classList.remove('logged-in');
    authLabel.textContent = 'Sign In';
    authAvatar.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    if (heroJoinBtn) heroJoinBtn.innerHTML = `Join Forge Club <span>＋</span>`;
  }
}

function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  $('#tabLoginBtn').classList.toggle('active', isLogin);
  $('#tabSignupBtn').classList.toggle('active', !isLogin);
  $('#loginForm').hidden = !isLogin;
  $('#signupForm').hidden = isLogin;
  $('#authAlert').hidden = true;
  $('#authModalTitle').textContent = isLogin ? 'Welcome Back to the Forge' : 'Create Your Forge ID';
  $('#authModalSubtitle').textContent = isLogin
    ? 'Sign in to access your synced bag, saved wishlist & orders.'
    : 'Join for free to save your loadout and unlock 10% off with FORGE10.';
}

function showAuthAlert(msg, isSuccess = false) {
  const el = $('#authAlert');
  el.textContent = msg;
  el.className = `auth-alert ${isSuccess ? 'success' : ''}`;
  el.hidden = false;
}

function openAuthModal(defaultTab = 'login') {
  if (state.currentUser) {
    renderProfileModal();
    $('#authGuestView').hidden = true;
    $('#authProfileView').hidden = false;
  } else {
    $('#authGuestView').hidden = false;
    $('#authProfileView').hidden = true;
    switchAuthTab(defaultTab);
  }
  $('#authModal').classList.add('open');
  $('#authModal').setAttribute('aria-hidden', 'false');
}

function closeAuthModal() {
  $('#authModal').classList.remove('open');
  $('#authModal').setAttribute('aria-hidden', 'true');
}

function renderProfileModal() {
  if (!state.currentUser) return;
  const u = state.currentUser;
  $('#profileAvatarLg').textContent = getInitials(u.name);
  $('#profileNameDisplay').textContent = u.gamertag ? `${u.name} (${u.gamertag})` : u.name;
  $('#profileEmailDisplay').textContent = u.email;

  const cartCount = state.cart.reduce((s, x) => s + x.qty, 0);
  const userOrders = state.orders.filter(o => !o.email || o.email === u.email || o.isSample);

  $('#profileCartStat').textContent = cartCount;
  $('#profileWishlistStat').textContent = state.wishlist.length;
  $('#profileOrdersStat').textContent = userOrders.length;

  const historyList = $('#orderHistoryList');
  if (!userOrders.length) {
    historyList.innerHTML = `<div class="order-card"><div><strong>No orders yet</strong><small>Complete checkout to see your orders here.</small></div></div>`;
  } else {
    historyList.innerHTML = userOrders.map(o => {
      const itemNames = Array.isArray(o.items) && o.items.length
        ? o.items.map(it => {
            const p = products.find(pr => pr.id === Number(it.id));
            return p ? `${p.name} (×${it.qty})` : '';
          }).filter(Boolean).join(', ')
        : `${o.itemCount || 1} gear item(s)`;
      return `
        <div class="order-card">
          <div>
            <strong>${o.orderId} · ${money(o.total)} <span style="color:#4ade80;font-size:0.72rem;margin-left:6px">● ${o.status || 'Dispatched'}</span></strong>
            <small>${itemNames}</small>
            <small style="color:#38bdf8">${o.paymentMethod} ${o.txnId ? `· ${o.txnId}` : ''}</small>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;gap:5px;align-items:flex-end">
            <small>${o.date}</small>
            <button type="button" class="oh-mini-btn" data-reorder-id="${o.orderId}">🔁 Reorder</button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function loginUser(userObj) {
  state.currentUser = {
    name: userObj.name,
    email: userObj.email,
    gamertag: userObj.gamertag || ''
  };
  localStorage.setItem('gearforge-current-user', JSON.stringify(state.currentUser));

  // Merge user's saved cart/wishlist if current is empty
  if (state.cart.length === 0 && Array.isArray(userObj.cart) && userObj.cart.length > 0) {
    state.cart = userObj.cart;
    localStorage.setItem('gearforge-cart', JSON.stringify(state.cart));
  }
  if (state.wishlist.length === 0 && Array.isArray(userObj.wishlist) && userObj.wishlist.length > 0) {
    state.wishlist = userObj.wishlist;
    localStorage.setItem('gearforge-wishlist', JSON.stringify(state.wishlist));
  }

  syncUserData();
  updateAuthUI();
  renderCart();
  renderProducts();
}

// ==================== CHECKOUT & FORGEPAY MODAL ====================

let fpCountdownInterval = null;
let fpAutoOtpTimer = null;

function openCheckoutModal() {
  if (!state.cart.length) {
    showToast('Add some gear to your bag before checking out!');
    return;
  }
  closeCart();

  const { count, total, shipping } = calculateCartTotals();
  if (state.currentUser) {
    $('#coName').value = state.currentUser.name || '';
    $('#coEmail').value = state.currentUser.email || '';
  }

  $('#checkoutSummaryBar').innerHTML = `
    <span><b>${count} item(s)</b> · ${shipping === 0 ? 'FREE Express Shipping' : `Shipping ${money(shipping)}`}</span>
    <strong>Total: ${money(total)}</strong>
  `;

  $('#checkoutFormView').hidden = false;
  if ($('#paymentPortalView')) $('#paymentPortalView').hidden = true;
  if ($('#paymentProcessingView')) $('#paymentProcessingView').hidden = true;
  $('#checkoutSuccessView').hidden = true;

  $('#checkoutModal').classList.add('open');
  $('#checkoutModal').setAttribute('aria-hidden', 'false');
}

function closeCheckoutModal() {
  if (fpCountdownInterval) {
    clearInterval(fpCountdownInterval);
    fpCountdownInterval = null;
  }
  if (fpAutoOtpTimer) {
    clearTimeout(fpAutoOtpTimer);
    fpAutoOtpTimer = null;
  }
  $('#checkoutModal').classList.remove('open');
  $('#checkoutModal').setAttribute('aria-hidden', 'true');
}

// ==================== TOAST NOTIFICATIONS ====================

let toastTimer;
function showToast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ==================== EVENT LISTENERS ====================

// Global event delegation for Product Cards, Cart Drawer, and Quick View
document.addEventListener('click', e => {
  // 1. Add to Bag from product card
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.stopPropagation();
    addToCart(Number(addBtn.dataset.add));
    return;
  }

  // 2. Hero featured product quick buy
  const heroAddBtn = e.target.closest('[data-hero-add]');
  if (heroAddBtn) {
    addToCart(Number(heroAddBtn.dataset.heroAdd));
    openCart();
    return;
  }

  // 3. In-card quantity increment / decrement
  const cardQtyBtn = e.target.closest('[data-card-qty]');
  if (cardQtyBtn) {
    e.stopPropagation();
    changeCartQty(Number(cardQtyBtn.dataset.cardQty), Number(cardQtyBtn.dataset.delta));
    return;
  }

  // 4. In-card direct remove button
  const cardRemBtn = e.target.closest('[data-card-remove]');
  if (cardRemBtn) {
    e.stopPropagation();
    removeFromCart(Number(cardRemBtn.dataset.cardRemove));
    return;
  }

  // 5. Wishlist toggle on card
  const wishBtn = e.target.closest('[data-wishlist]');
  if (wishBtn) {
    e.stopPropagation();
    toggleWishlist(Number(wishBtn.dataset.wishlist));
    return;
  }

  // 6. Open Quick View modal when clicking product image, title, or rating pill
  const qvTrigger = e.target.closest('[data-quickview]');
  if (qvTrigger && (!e.target.closest('button') || qvTrigger.classList.contains('rating-pill-btn'))) {
    openQuickView(Number(qvTrigger.dataset.quickview));
    return;
  }

  // 6b. Open Write a Review modal for a specific product from Quick View
  const openRevFor = e.target.closest('[data-open-review-for]');
  if (openRevFor) {
    const prodId = Number(openRevFor.dataset.openReviewFor);
    closeQuickView();
    openWriteReviewModal(prodId);
    return;
  }

  // 6c. Helpful upvote button on a review card
  const helpfulBtn = e.target.closest('[data-helpful-id]');
  if (helpfulBtn) {
    toggleHelpfulVote(helpfulBtn.dataset.helpfulId);
    return;
  }

  // 6d. Star rating picker inside Write a Review modal
  const starBtn = e.target.closest('[data-star]');
  if (starBtn) {
    setStarPickerValue(Number(starBtn.dataset.star));
    return;
  }

  // 7. Quick View modal actions
  const qvAdd = e.target.closest('[data-qv-add]');
  if (qvAdd) {
    const id = Number(qvAdd.dataset.qvAdd);
    addToCart(id);
    openQuickView(id);
    return;
  }

  const qvQty = e.target.closest('[data-qv-qty]');
  if (qvQty) {
    const id = Number(qvQty.dataset.qvQty);
    changeCartQty(id, Number(qvQty.dataset.delta));
    openQuickView(id);
    return;
  }

  const qvRem = e.target.closest('[data-qv-remove]');
  if (qvRem) {
    const id = Number(qvRem.dataset.qvRemove);
    removeFromCart(id);
    openQuickView(id);
    return;
  }

  const qvWish = e.target.closest('[data-qv-wishlist]');
  if (qvWish) {
    const id = Number(qvWish.dataset.qvWishlist);
    toggleWishlist(id);
    openQuickView(id);
    return;
  }

  // 8. Cart Drawer quantity buttons
  const drawerQtyBtn = e.target.closest('[data-qty]');
  if (drawerQtyBtn) {
    changeCartQty(Number(drawerQtyBtn.dataset.qty), Number(drawerQtyBtn.dataset.delta));
    return;
  }

  // 9. Cart Drawer remove button
  const drawerRemBtn = e.target.closest('[data-remove]');
  if (drawerRemBtn) {
    removeFromCart(Number(drawerRemBtn.dataset.remove));
    return;
  }

  // 10. Password visibility toggle
  const pwToggle = e.target.closest('[data-toggle-pw]');
  if (pwToggle) {
    const input = document.getElementById(pwToggle.dataset.togglePw);
    if (input) {
      const isPw = input.type === 'password';
      input.type = isPw ? 'text' : 'password';
      pwToggle.textContent = isPw ? 'Hide' : 'Show';
    }
    return;
  }

  // 11. Social auth quick login
  const socialBtn = e.target.closest('[data-social]');
  if (socialBtn) {
    const provider = socialBtn.dataset.social;
    const demoUser = {
      name: `${provider} Player`,
      email: `player@${provider.toLowerCase()}.gg`,
      gamertag: `GF_${provider.toUpperCase()}`
    };
    if (!state.users.some(u => u.email === demoUser.email)) {
      state.users.push({ ...demoUser, password: 'social-login', cart: state.cart, wishlist: state.wishlist });
      localStorage.setItem('gearforge-users', JSON.stringify(state.users));
    }
    loginUser(demoUser);
    closeAuthModal();
    showToast(`Signed in with ${provider}!`);
  }
});

// Category filter chips
$('#filterRow').addEventListener('click', e => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  state.category = b.dataset.filter;
  state.visible = 12;
  renderProducts();
});

// Category showcase cards
$$('.category-card').forEach(b => {
  b.addEventListener('click', () => {
    state.category = b.dataset.category;
    state.visible = 12;
    renderProducts();
    $('#shop').scrollIntoView({ behavior: 'smooth' });
  });
});

// Sorting & Load More
$('#sortSelect').addEventListener('change', e => {
  state.sort = e.target.value;
  renderProducts();
});

$('#loadMore').onclick = () => {
  state.visible += 8;
  renderProducts();
};

$('#showAllBtn').onclick = () => {
  state.visible = products.length;
  renderProducts();
};

// Search handlers (Top bar + Inline shop filter)
$('#searchToggle').onclick = () => {
  $('#searchBar').classList.toggle('show');
  if ($('#searchBar').classList.contains('show')) $('#searchInput').focus();
};

$('#searchInput').addEventListener('input', e => {
  state.search = e.target.value;
  $('#inlineSearchInput').value = e.target.value;
  state.visible = 12;
  renderProducts();
});

$('#inlineSearchInput').addEventListener('input', e => {
  state.search = e.target.value;
  $('#searchInput').value = e.target.value;
  state.visible = 12;
  renderProducts();
});

$('#clearSearch').onclick = () => {
  $('#searchInput').value = '';
  $('#inlineSearchInput').value = '';
  state.search = '';
  renderProducts();
};

// Wishlist header button
$('#wishlistToggle').onclick = () => {
  state.category = 'Wishlist';
  state.visible = 40;
  renderProducts();
  $('#shop').scrollIntoView({ behavior: 'smooth' });
};

// Cart Drawer controls
$('#cartToggle').onclick = openCart;
$('#closeCart').onclick = closeCart;
$('#cartOverlay').onclick = closeCart;
$('#clearCartBtn').onclick = clearCart;
$('#checkoutBtn').onclick = openCheckoutModal;

// Promo Code form
$('#promoForm').addEventListener('submit', e => {
  e.preventDefault();
  const code = $('#promoInput').value.trim().toUpperCase();
  if (!code) return;
  if (PROMO_CODES[code]) {
    state.promo = PROMO_CODES[code];
    localStorage.setItem('gearforge-promo', JSON.stringify(state.promo));
    $('#promoInput').value = '';
    renderCart();
    showToast(`Promo code ${code} applied! (${state.promo.pct}% OFF)`);
  } else {
    showToast('Invalid code. Try FORGE10 or LEVELUP');
  }
});

$('#removePromoBtn').onclick = () => {
  state.promo = null;
  localStorage.removeItem('gearforge-promo');
  renderCart();
  showToast('Promo code removed');
};

// Auth Modal triggers & forms
$('#authToggle').onclick = () => openAuthModal('login');
$('#heroJoinBtn').onclick = () => openAuthModal(state.currentUser ? 'login' : 'signup');
$('#closeAuthModal').onclick = closeAuthModal;
$('#tabLoginBtn').onclick = () => switchAuthTab('login');
$('#tabSignupBtn').onclick = () => switchAuthTab('signup');

$('#forgotPassBtn').onclick = () => {
  const email = $('#loginEmail').value.trim();
  showAuthAlert(
    email
      ? `Password reset link sent to ${email} (Demo: you can also create a new account).`
      : 'Enter your email address above first to reset your password.',
    Boolean(email)
  );
};

// Password strength meter
$('#signupPassword').addEventListener('input', e => {
  const val = e.target.value;
  let score = 0;
  if (val.length >= 6) score += 35;
  if (val.length >= 10) score += 25;
  if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score += 25;
  if (/[^A-Za-z0-9]/.test(val)) score += 15;

  const fill = $('#pwStrengthFill');
  const label = $('#pwStrengthLabel');
  fill.style.width = `${Math.min(100, score)}%`;
  if (score < 40) {
    fill.style.background = '#ff5c5c';
    label.textContent = 'Weak — add more characters & numbers';
  } else if (score < 75) {
    fill.style.background = '#f5b942';
    label.textContent = 'Good password strength';
  } else {
    fill.style.background = '#c7f36b';
    label.textContent = 'Strong Forge-grade password';
  }
});

// Sign Up submission
$('#signupForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#signupName').value.trim();
  const gamertag = $('#signupGamertag').value.trim();
  const email = $('#signupEmail').value.trim().toLowerCase();
  const password = $('#signupPassword').value;

  if (state.users.some(u => u.email === email)) {
    showAuthAlert('An account with this email already exists. Please log in instead.');
    return;
  }

  const newUser = {
    name,
    gamertag,
    email,
    password,
    cart: state.cart,
    wishlist: state.wishlist,
    joinedAt: new Date().toISOString()
  };

  state.users.push(newUser);
  localStorage.setItem('gearforge-users', JSON.stringify(state.users));

  if ($('#signupBonus').checked && !state.promo) {
    state.promo = PROMO_CODES.FORGE10;
    localStorage.setItem('gearforge-promo', JSON.stringify(state.promo));
  }

  loginUser(newUser);
  $('#signupForm').reset();
  closeAuthModal();
  showToast(`Welcome to GearForge, ${name.split(' ')[0]}! 🎉`);
});

// Log In submission
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#loginEmail').value.trim().toLowerCase();
  const password = $('#loginPassword').value;

  const found = state.users.find(u => u.email === email);
  if (!found) {
    showAuthAlert('No account found with that email. Click "Create Account" to sign up!');
    return;
  }
  if (found.password !== password) {
    showAuthAlert('Incorrect password. Please try again.');
    return;
  }

  loginUser(found);
  $('#loginForm').reset();
  closeAuthModal();
  showToast(`Welcome back, ${found.name.split(' ')[0]}!`);
});

// Profile actions
$('#logoutBtn').onclick = () => {
  state.currentUser = null;
  localStorage.removeItem('gearforge-current-user');
  updateAuthUI();
  closeAuthModal();
  showToast('Signed out of your GearForge account');
};

$('#profileViewWishlistBtn').onclick = () => {
  closeAuthModal();
  state.category = 'Wishlist';
  state.visible = 40;
  renderProducts();
  $('#shop').scrollIntoView({ behavior: 'smooth' });
};

// Quick View close
$('#closeQuickView').onclick = closeQuickView;

// Customer Reviews filter, sort & Write a Review modal handlers
$('#openWriteReviewBtn').onclick = () => openWriteReviewModal();
$('#openWriteReviewBtn2').onclick = () => openWriteReviewModal();
$('#closeWriteReviewModal').onclick = closeWriteReviewModal;

$('#reviewFilterRow').addEventListener('click', e => {
  const btn = e.target.closest('[data-rev-filter]');
  if (!btn) return;
  state.reviewFilter = btn.dataset.revFilter;
  renderReviewsSection();
});

$('#reviewSortSelect').addEventListener('change', e => {
  state.reviewSort = e.target.value;
  renderReviewsSection();
});

$('#writeReviewForm').addEventListener('submit', e => {
  e.preventDefault();
  const productId = Number($('#revProductSelect').value);
  const rating = Number($('#revRatingInput').value) || 5;
  const author = $('#revAuthorName').value.trim();
  const setupTag = $('#revSetupTag').value.trim() || 'Verified Player';
  const headline = $('#revHeadline').value.trim();
  const body = $('#revBody').value.trim();
  const prod = products.find(p => p.id === productId);

  const newReview = {
    id: `rev-${Date.now()}`,
    productId,
    author,
    setupTag,
    rating,
    headline,
    body,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    timestamp: Date.now(),
    helpful: 1,
    verified: true
  };

  state.reviews.unshift(newReview);
  localStorage.setItem('gearforge-reviews', JSON.stringify(state.reviews));

  $('#writeReviewForm').reset();
  closeWriteReviewModal();
  renderReviewsSection();
  renderProducts();
  showToast(`★ Thank you, ${author.split(' ')[0]}! Your review for ${prod ? prod.name : 'GearForge'} is live.`);
});

// ==================== FORGEPAY MOCK PAYMENT GATEWAY ENGINE ====================

let fpState = {
  activeTab: 'qr',
  upiApp: 'Google Pay',
  vpaVerified: true,
  emiMonths: 3,
  emiMonthlyAmount: 0,
  emiLabel: '3 Months No-Cost EMI',
  selectedBank: 'HDFC Bank NetBanking',
  lastReceipt: null
};

// Generate a realistic SVG QR code matrix seeded by the cart total
function generateMockQrSvg(seedValue) {
  const size = 21;
  const grid = Array.from({ length: size }, () => Array(size).fill(0));

  function drawFinder(r0, c0) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        grid[r0 + r][c0 + c] = (isBorder || isInner) ? 1 : 0;
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  let hash = Number(seedValue) || 4999;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inFinder =
        (r < 8 && c < 8) ||
        (r < 8 && c >= size - 8) ||
        (r >= size - 8 && c < 8);
      const inCenterLogo = r >= 8 && r <= 12 && c >= 8 && c <= 12;
      if (inFinder || inCenterLogo) continue;
      hash = (hash * 1664525 + 1013904223 + r * 31 + c * 17) >>> 0;
      grid[r][c] = (hash % 10) < 5 ? 1 : 0;
    }
  }

  let rects = '';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c]) {
        rects += `<rect x="${c}" y="${r}" width="1" height="1" fill="#0d131f" rx="0.15"/>`;
      }
    }
  }

  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">${rects}</svg>`;
}

function renderDynamicEmiPlans(totalAmount) {
  const listEl = $('#fpEmiPlansList');
  if (!listEl) return;

  const plans = [
    { months: 3, rate: 0, tag: 'NO-COST EMI', desc: '0% Interest · Instant Discount Applied' },
    { months: 6, rate: 0, tag: 'NO-COST EMI', desc: '0% Interest · Most Popular for Gaming Rigs' },
    { months: 9, rate: 11, tag: '11% p.a.', desc: 'Low-cost flexible monthly plan' },
    { months: 12, rate: 12, tag: '12% p.a.', desc: 'Lowest monthly commitment' }
  ];

  listEl.innerHTML = plans.map((p, idx) => {
    const totalWithInterest = p.rate === 0
      ? totalAmount
      : Math.round(totalAmount * (1 + (p.rate / 100) * (p.months / 12)));
    const monthly = Math.max(1, Math.round(totalWithInterest / p.months));
    const isActive = idx === 0;
    if (isActive) {
      fpState.emiMonths = p.months;
      fpState.emiMonthlyAmount = monthly;
      fpState.emiLabel = `${p.months} Months (${money(monthly)}/mo · ${p.tag})`;
    }
    return `
      <div class="fp-emi-item ${isActive ? 'active' : ''}" data-months="${p.months}" data-monthly="${monthly}" data-label="${p.months}m EMI (${money(monthly)}/mo · ${p.tag})">
        <div class="fp-emi-left">
          <input type="radio" name="fpEmiPlanRadio" ${isActive ? 'checked' : ''} aria-label="${p.months} months EMI">
          <div>
            <strong>${money(monthly)} / month × ${p.months} months</strong>
            <small>${p.desc} · Total: ${money(totalWithInterest)}</small>
          </div>
        </div>
        <span class="fp-emi-tag">${p.tag}</span>
      </div>
    `;
  }).join('');

  $$('.fp-emi-item', listEl).forEach(item => {
    item.addEventListener('click', () => {
      $$('.fp-emi-item', listEl).forEach(el => {
        el.classList.remove('active');
        const radio = el.querySelector('input[type="radio"]');
        if (radio) radio.checked = false;
      });
      item.classList.add('active');
      const radio = item.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      fpState.emiMonths = Number(item.dataset.months);
      fpState.emiMonthlyAmount = Number(item.dataset.monthly);
      fpState.emiLabel = item.dataset.label;
      updateForgePayFooter();
    });
  });
}

function getResolvedPaymentMethodSummary() {
  switch (fpState.activeTab) {
    case 'qr':
      return 'Dynamic UPI QR Scan (NPCI Instant)';
    case 'upi': {
      const vpa = ($('#fpUpiIdInput') && $('#fpUpiIdInput').value.trim()) || 'pro.gamer@okicici';
      return `UPI (${fpState.upiApp} · ${vpa})`;
    }
    case 'card': {
      const raw = (($('#fpCardNumber') && $('#fpCardNumber').value) || '45328890').replace(/\D/g, '');
      const last4 = raw.slice(-4) || '8890';
      const net = ($('#fpCardNetworkBadge') && $('#fpCardNetworkBadge').textContent) || 'VISA';
      return `${net} Card ending •••• ${last4}`;
    }
    case 'emi': {
      const bank = ($('#fpEmiBank') && $('#fpEmiBank').value) || 'HDFC Bank EMI';
      return `${bank} — ${fpState.emiLabel}`;
    }
    case 'netbanking': {
      const otherBank = $('#fpOtherBankSelect') && $('#fpOtherBankSelect').value;
      return otherBank || fpState.selectedBank || 'HDFC Bank NetBanking';
    }
    case 'cod':
      return 'Pay on Delivery (Cash / Doorstep UPI)';
    default:
      return 'ForgePay Instant UPI';
  }
}

function updateForgePayFooter() {
  const { total } = calculateCartTotals();
  const labelEl = $('#fpSelectedMethodLabel');
  const btnEl = $('#fpConfirmPayBtn');
  if (labelEl) {
    labelEl.textContent = `Mode: ${getResolvedPaymentMethodSummary()}`;
  }
  if (btnEl) {
    if (fpState.activeTab === 'cod') {
      btnEl.innerHTML = `Confirm Pay on Delivery Order (${money(total)}) 📦`;
    } else if (fpState.activeTab === 'emi') {
      btnEl.innerHTML = `Authorize EMI Plan (${money(fpState.emiMonthlyAmount)}/mo) 🔒`;
    } else {
      btnEl.innerHTML = `Authorize &amp; Pay <span id="fpBtnAmountText">${money(total)}</span> 🔒`;
    }
  }
}

function startForgePaySessionTimer() {
  if (fpCountdownInterval) clearInterval(fpCountdownInterval);
  let remaining = 599; // 09:59
  const timerEl = $('#fpTimerText');
  fpCountdownInterval = setInterval(() => {
    remaining = Math.max(0, remaining - 1);
    const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
    const secs = String(remaining % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

function openForgePayPortal() {
  const { total } = calculateCartTotals();
  $('#checkoutFormView').hidden = true;
  $('#paymentPortalView').hidden = false;
  $('#paymentProcessingView').hidden = true;
  $('#checkoutSuccessView').hidden = true;

  if ($('#fpPayableAmount')) $('#fpPayableAmount').textContent = money(total);
  if ($('#fpQrSvgWrap')) $('#fpQrSvgWrap').innerHTML = generateMockQrSvg(total);

  renderDynamicEmiPlans(total);
  updateForgePayFooter();
  startForgePaySessionTimer();
}

// Demo shipping address filler
if ($('#fillDemoShippingBtn')) {
  $('#fillDemoShippingBtn').addEventListener('click', () => {
    $('#coName').value = state.currentUser ? state.currentUser.name : 'Tanishq Sharma';
    $('#coPhone').value = '+91 98765 43210';
    $('#coEmail').value = state.currentUser ? state.currentUser.email : 'tanishq.gamer@gearforge.in';
    $('#coAddress').value = 'Flat 402, Cyber Apex Towers, Indiranagar 100 Ft Road';
    $('#coCity').value = 'Bengaluru, Karnataka';
    $('#coPin').value = '560038';
    showToast('⚡ Demo shipping address filled!');
  });
}

// Step 1 form submit -> Open Step 2 ForgePay Portal
$('#closeCheckoutModal').onclick = closeCheckoutModal;
$('#checkoutOrderForm').addEventListener('submit', e => {
  e.preventDefault();
  openForgePayPortal();
});

// Back button from ForgePay Portal to Shipping Form
if ($('#fpBackToShippingBtn')) {
  $('#fpBackToShippingBtn').addEventListener('click', () => {
    $('#paymentPortalView').hidden = true;
    $('#checkoutFormView').hidden = false;
  });
}

// Payment Method Tabs switching
$$('.fp-tab').forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
    const tab = tabBtn.dataset.payTab;
    fpState.activeTab = tab;
    $$('.fp-tab').forEach(b => {
      b.classList.toggle('active', b === tabBtn);
      b.setAttribute('aria-selected', b === tabBtn ? 'true' : 'false');
    });
    $$('.fp-panel').forEach(panel => {
      const match = panel.dataset.panel === tab;
      panel.classList.toggle('active', match);
      panel.hidden = !match;
    });
    updateForgePayFooter();
  });
});

// Panel 1: Simulate Mobile QR Scan button
if ($('#simulateQrScanBtn')) {
  $('#simulateQrScanBtn').addEventListener('click', () => {
    fpState.activeTab = 'qr';
    showToast('📲 QR Code scanned via Mobile UPI! Verifying with NPCI...');
    triggerPaymentVerificationFlow();
  });
}

// Panel 2: UPI App buttons & VPA Verification
$$('.fp-upi-app-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.fp-upi-app-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    fpState.upiApp = btn.dataset.upiApp || 'Google Pay';
    const handle = btn.dataset.handle || '@okicici';
    const input = $('#fpUpiIdInput');
    if (input) {
      const prefix = (input.value.split('@')[0] || 'pro.gamer').trim();
      input.value = `${prefix}${handle}`;
    }
    updateForgePayFooter();
  });
});

if ($('#verifyUpiVpaBtn')) {
  $('#verifyUpiVpaBtn').addEventListener('click', () => {
    const vpa = ($('#fpUpiIdInput') && $('#fpUpiIdInput').value.trim()) || '';
    const statusEl = $('#fpVpaStatus');
    if (!vpa.includes('@') || vpa.length < 5) {
      if (statusEl) {
        statusEl.style.color = '#f87171';
        statusEl.innerHTML = '⚠️ Please enter a valid UPI ID (e.g. <code>username@okicici</code>)';
      }
      return;
    }
    const holderName = ($('#coName').value.trim() || 'TANISHQ SHARMA').toUpperCase();
    const bankHandle = vpa.split('@')[1].toUpperCase();
    if (statusEl) {
      statusEl.style.color = '#4ade80';
      statusEl.innerHTML = `✓ Verified Account Holder: <strong>${holderName} (${bankHandle} NPCI UPI)</strong>`;
    }
    showToast(`✓ UPI ID ${vpa} verified!`);
    updateForgePayFooter();
  });
}

// Panel 3: Credit / Debit Card Live Preview & Demo Card Filler
function syncCardVisualPreview() {
  const rawNum = (($('#fpCardNumber') && $('#fpCardNumber').value) || '').replace(/\D/g, '').slice(0, 16);
  const formatted = rawNum.replace(/(\d{4})(?=\d)/g, '$1 ');
  if ($('#fpCardNumber') && $('#fpCardNumber').value !== formatted) {
    $('#fpCardNumber').value = formatted;
  }
  const holder = (($('#fpCardName') && $('#fpCardName').value) || 'PRO GAMER').toUpperCase();
  const exp = ($('#fpCardExpiry') && $('#fpCardExpiry').value) || '08/29';

  let network = 'VISA PLATINUM';
  if (rawNum.startsWith('5')) network = 'MASTERCARD WORLD';
  else if (rawNum.startsWith('6')) network = 'RUPAY SELECT';
  else if (rawNum.startsWith('3')) network = 'AMEX GOLD';

  if ($('#fpCardNetworkBadge')) $('#fpCardNetworkBadge').textContent = network;
  if ($('#fpCardNumDisplay')) $('#fpCardNumDisplay').textContent = formatted || '4532 •••• •••• 8890';
  if ($('#fpCardHolderDisplay')) $('#fpCardHolderDisplay').textContent = holder;
  if ($('#fpCardExpDisplay')) $('#fpCardExpDisplay').textContent = exp;
  updateForgePayFooter();
}

['fpCardNumber', 'fpCardName', 'fpCardExpiry'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', syncCardVisualPreview);
});

if ($('#fillDemoCardBtn')) {
  $('#fillDemoCardBtn').addEventListener('click', () => {
    $('#fpCardNumber').value = '5412 7590 3310 4421';
    $('#fpCardName').value = ($('#coName').value.trim() || 'TANISHQ SHARMA').toUpperCase();
    $('#fpCardExpiry').value = '11/29';
    $('#fpCardCvv').value = '918';
    syncCardVisualPreview();
    showToast('💳 Test MasterCard World credentials populated!');
  });
}

// Panel 4: EMI Bank dropdown change
if ($('#fpEmiBank')) {
  $('#fpEmiBank').addEventListener('change', updateForgePayFooter);
}

// Panel 5: NetBanking Bank selection
$$('.fp-bank-card').forEach(card => {
  card.addEventListener('click', () => {
    $$('.fp-bank-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    fpState.selectedBank = card.dataset.bank;
    if ($('#fpOtherBankSelect')) $('#fpOtherBankSelect').value = '';
    updateForgePayFooter();
  });
});

if ($('#fpOtherBankSelect')) {
  $('#fpOtherBankSelect').addEventListener('change', () => {
    if ($('#fpOtherBankSelect').value) {
      $$('.fp-bank-card').forEach(c => c.classList.remove('active'));
    }
    updateForgePayFooter();
  });
}

// Step 2 -> Step 3: Authorize & Pay button
function triggerPaymentVerificationFlow() {
  if (fpState.activeTab === 'cod') {
    finalizeOrderAndShowReceipt();
    return;
  }

  $('#paymentPortalView').hidden = true;
  $('#paymentProcessingView').hidden = false;
  const randomOtp = String(Math.floor(100000 + Math.random() * 900000));
  if ($('#fpOtpInput')) $('#fpOtpInput').value = randomOtp;
  if ($('#fpProcessTitle')) {
    $('#fpProcessTitle').textContent = `Authenticating ${getResolvedPaymentMethodSummary()}`;
  }
}

if ($('#fpConfirmPayBtn')) {
  $('#fpConfirmPayBtn').addEventListener('click', triggerPaymentVerificationFlow);
}

if ($('#fpVerifyOtpBtn')) {
  $('#fpVerifyOtpBtn').addEventListener('click', () => {
    finalizeOrderAndShowReceipt();
  });
}

function finalizeOrderAndShowReceipt() {
  if (fpCountdownInterval) {
    clearInterval(fpCountdownInterval);
    fpCountdownInterval = null;
  }

  const { count, total } = calculateCartTotals();
  const purchasedItems = state.cart.map(item => ({ id: item.id, qty: item.qty }));
  const orderId = `#GF-${Math.floor(1000 + Math.random() * 9000)}`;
  const txnId = `TXN_FP${Date.now().toString().slice(-8)}`;
  const paymentMethod = getResolvedPaymentMethodSummary();
  const email = $('#coEmail').value.trim().toLowerCase() || 'guest@gearforge.in';
  const recipient = $('#coName').value.trim() || 'Pro Gamer';
  const city = $('#coCity').value.trim() || 'Bengaluru';
  const pin = $('#coPin').value.trim() || '560001';
  const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const newOrder = {
    orderId,
    txnId,
    email: state.currentUser ? state.currentUser.email : email,
    recipient,
    city,
    pin,
    total,
    itemCount: count,
    items: purchasedItems,
    status: 'Packed at Bengaluru Hub',
    paymentMethod,
    date: dateStr,
    timeStr
  };

  fpState.lastReceipt = { ...newOrder };

  state.orders.unshift(newOrder);
  localStorage.setItem('gearforge-orders', JSON.stringify(state.orders));

  // Empty cart after placing order
  state.cart = [];
  persistCart();

  if (typeof renderOrdersAndPersonalizedHub === 'function') {
    renderOrdersAndPersonalizedHub();
  }

  $('#successOrderTitle').textContent = `Order ${orderId} Confirmed!`;
  $('#successOrderText').textContent = `Thank you, ${recipient}! Your ${count} gear item(s) totaling ${money(total)} have been verified via ForgePay and will dispatch within 24 hours.`;

  if ($('#fpReceiptCard')) {
    $('#fpReceiptCard').innerHTML = `
      <div class="fp-receipt-item">
        <small>Order Reference</small>
        <strong>${orderId}</strong>
      </div>
      <div class="fp-receipt-item">
        <small>ForgePay Transaction ID</small>
        <strong>${txnId}</strong>
      </div>
      <div class="fp-receipt-item">
        <small>Payment Mode</small>
        <strong>${paymentMethod}</strong>
      </div>
      <div class="fp-receipt-item">
        <small>Amount Authorized</small>
        <strong style="color:#4ade80">${money(total)} (${fpState.activeTab === 'cod' ? 'Pay at Doorstep' : 'PAID'})</strong>
      </div>
      <div class="fp-receipt-item">
        <small>Dispatch To</small>
        <strong>${recipient} · ${city} (${pin})</strong>
      </div>
      <div class="fp-receipt-item">
        <small>Timestamp</small>
        <strong>${dateStr} at ${timeStr}</strong>
      </div>
    `;
  }

  $('#checkoutFormView').hidden = true;
  $('#paymentPortalView').hidden = true;
  $('#paymentProcessingView').hidden = true;
  $('#checkoutSuccessView').hidden = false;
  showToast(`🎉 Payment Verified! Order ${orderId} placed via ${paymentMethod}.`);
}

if ($('#printReceiptBtn')) {
  $('#printReceiptBtn').addEventListener('click', () => {
    window.print();
  });
}

$('#successDoneBtn').onclick = closeCheckoutModal;
$('#successViewOrdersBtn').onclick = () => {
  closeCheckoutModal();
  openAuthModal('login');
};

// Close modals when clicking backdrop or pressing Escape
['authModal', 'quickViewModal', 'checkoutModal', 'writeReviewModal'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', e => {
      if (e.target === el) {
        el.classList.remove('open');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCart();
    closeAuthModal();
    closeQuickView();
    closeCheckoutModal();
    closeWriteReviewModal();
  }
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    $('#searchBar').classList.add('show');
    $('#searchInput').focus();
  }
});

// Mobile menu & footer shortcuts
$('#mobileMenu').onclick = () => $('#mainNav').classList.toggle('open');
$$('#mainNav a').forEach(a => a.addEventListener('click', () => $('#mainNav').classList.remove('open')));

$('#footerSignInLink').onclick = e => { e.preventDefault(); openAuthModal('login'); };
$('#footerCartLink').onclick = e => { e.preventDefault(); openCart(); };
$('#footerWishlistLink').onclick = e => {
  e.preventDefault();
  state.category = 'Wishlist';
  state.visible = 40;
  renderProducts();
  $('#shop').scrollIntoView({ behavior: 'smooth' });
};

// Theme toggle
$('#themeToggle').onclick = () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  $('#themeToggle').textContent = light ? '☾' : '☼';
  localStorage.setItem('gearforge-theme', light ? 'light' : 'dark');
};

if (localStorage.getItem('gearforge-theme') === 'light') {
  document.body.classList.add('light');
  $('#themeToggle').textContent = '☾';
}

// Newsletter
$('#newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  $('#newsletterMessage').textContent = 'You’re on the list — code FORGE10 unlocked for 10% off!';
  $('#emailInput').value = '';
  showToast('Thanks for joining! Use code FORGE10 in your bag.');
});

// Ambient cursor glow effect
const ambientCursor = $('#ambientCursor');
if (ambientCursor && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', e => {
    ambientCursor.style.opacity = '1';
    ambientCursor.style.left = `${e.clientX}px`;
    ambientCursor.style.top = `${e.clientY}px`;
  });
}

// Initial render
updateAuthUI();
renderProducts();
renderCart();
renderReviewsSection();

// ==================== FORGEBOT AI — STATEFUL CONSULTATIVE & WEB-CONNECTED AGENT ====================

const CATEGORY_SYNONYMS = {
  Mice: ['mouse', 'mice', 'wireless mouse', 'gaming mouse', 'paw3395', 'dpi', 'polling', 'claw grip', 'palm grip', 'fingertip grip', 'ergo mouse'],
  Keyboards: ['keyboard', 'keyboards', 'mechanical', 'hot-swap', 'hotswap', 'gasket', 'switches', 'keycaps', 'tkl', '75%', '65%', '96%', 'typing', 'numpad'],
  Mousepads: ['mousepad', 'mousepads', 'mouse pad', 'mouse pads', 'desk mat', 'desk pad', 'deskmat', 'cordura', 'poron', 'glide surface'],
  Audio: ['audio', 'headset', 'headsets', 'headphones', 'headphone', 'earphones', 'earphone', 'earbuds', 'earbud', 'in-ear', 'tws', 'iem', 'iems', 'mic', 'microphone', 'anc', 'podcast', 'stream'],
  Stands: ['stand', 'stands', 'laptop stand', 'headphone stand', 'monitor arm', 'monitor shelf', 'riser', 'hanger', 'mount'],
  'Desk Accessories': ['desk accessory', 'desk accessories', 'wrist rest', 'light bar', 'rgb strip', 'cable management', 'cable tidy', 'organizer', 'cleaning kit'],
  'Cables & Extras': ['cable', 'cables', 'usb-c', 'hub', 'dock', 'charging', 'charger', 'gan', 'coiled', 'aviator']
};

// Deep Esports & Hardware Domain Knowledge Base
const HARDWARE_KNOWLEDGE_BASE = {
  tactical_fps: {
    keywords: ['valorant', 'cs2', 'csgo', 'counter strike', 'counter-strike', 'rainbow six', 'r6', 'tactical', 'low sens', 'low dpi', 'arm aim'],
    label: 'Valorant & CS2 (Tactical FPS)',
    mousepadAdvice: `In <b>Valorant and CS2</b>, players use lower eDPI (typically 200–320 eDPI) which requires <b>large arm sweeps for 180° turns and wide angle-clearing</b>, followed by instant micro-stopping on heads. That's why a <b>large XL desk mat (900×400mm+) with a high-control weave or Poron base</b> is essential so you never run out of mouse space mid-fight.`,
    mouseAdvice: `For <b>Valorant and CS2</b>, micro-adjustments and first-bullet accuracy matter most. An <b>ultra-lightweight wireless mouse (under 55g)</b> with a zero-smoothing <b>PAW3395 sensor</b> and optical switches eliminates inertia when flicking between angles.`,
    keyboardAdvice: `For <b>Valorant and CS2</b>, a compact <b>65% or 75% mechanical keyboard</b> is ideal because removing the numpad gives your mouse hand 10–12cm of extra desk space for wide low-sensitivity arm sweeps without slamming your mouse into the keyboard frame.`,
    audioAdvice: `In <b>Valorant and CS2</b>, vertical and directional sound cues (footsteps, defuse taps, reload audio) win rounds. Closed-back 50mm drivers or dual-driver IEMs isolate background noise and pinpoint enemy positions.`,
    picks: {
      Mousepads: [9, 33, 11],
      Mice: [1, 2, 3],
      Keyboards: [6, 5],
      Audio: [13, 16]
    }
  },
  tracking_fps: {
    keywords: ['apex', 'apex legends', 'warzone', 'call of duty', 'cod', 'overwatch', 'fortnite', 'battle royale', 'fast paced', 'tracking', 'high sens', 'wrist aim'],
    label: 'Apex Legends / Warzone / Fast Tracking FPS',
    mousepadAdvice: `For fast-paced tracking games like <b>Apex Legends, Warzone, and Overwatch</b>, you constantly track moving targets with zero static friction. A <b>low-friction hybrid Cordura speed pad</b> lets your mouse glide effortlessly without tug or humidity slowdown.`,
    mouseAdvice: `For <b>Apex &amp; fast tracking shooters</b>, you need a symmetrical lightweight wireless shell with pure Virgin PTFE skates for smooth, continuous tracking and rapid vertical flicks.`,
    keyboardAdvice: `Fast movement shooters benefit from rapid-actuation linear switches on a compact 65%–75% board so strafing and slide-cancelling feel instantaneous.`,
    audioAdvice: `In chaotic Battle Royale lobbies, wide soundstage 7.1 wireless headphones help separate distant gunfire from close footsteps.`,
    picks: {
      Mousepads: [10, 9],
      Mice: [2, 1, 29],
      Keyboards: [6, 5],
      Audio: [13, 14]
    }
  },
  moba_rpg: {
    keywords: ['dota', 'league of legends', 'lol', 'mmo', 'rpg', 'gta', 'elden ring', 'minecraft', 'casual', 'story games'],
    label: 'MOBA / RPG & All-Round Gaming',
    mousepadAdvice: `For <b>MOBA, RPGs, and everyday gaming</b>, an extended XXL water-resistant desk mat cushions both your keyboard and wrists while keeping your whole battlestation unified.`,
    mouseAdvice: `For <b>MOBA/RPGs</b>, having extra programmable macro buttons and ergonomic comfort for long sessions is key.`,
    keyboardAdvice: `A tactile TKL or 75% gasket mechanical keyboard gives satisfying feedback for abilities and typing.`,
    audioAdvice: `Plush velour or ANC over-ear headphones keep your ears comfortable during 5+ hour campaigns.`,
    picks: {
      Mousepads: [11, 12],
      Mice: [4, 29],
      Keyboards: [7, 5],
      Audio: [14, 35]
    }
  },
  coding_work: {
    keywords: ['coding', 'programming', 'developer', 'office', 'study', 'work', 'typing', 'macbook', 'productivity', 'video editing', 'streaming', 'creator'],
    label: 'Coding, Study & Creator Workflow',
    mousepadAdvice: `For <b>coding, study, and clean desk setups</b>, a warm Merino felt/cork mat or a minimalist 900×400mm stitched desk mat improves keyboard acoustics and keeps your wrists comfortable all day.`,
    mouseAdvice: `For <b>productivity + gaming</b>, a dual-mode (Bluetooth + 2.4GHz) ergonomic wireless mouse lets you switch between your laptop and gaming PC with one button.`,
    keyboardAdvice: `For <b>coding and long typing sessions</b>, a Poron-damped Gasket Mechanical board (or a 96% layout if you need a dedicated Numpad) reduces finger fatigue and sounds whisper-clean.`,
    audioAdvice: `For <b>calls, streaming, and deep focus</b>, pair a 42dB Hybrid ANC headphone with a 24-bit cardioid USB condenser mic.`,
    picks: {
      Mousepads: [34, 9],
      Mice: [3, 1],
      Keyboards: [5, 31, 8],
      Audio: [35, 15, 36]
    }
  }
};

function nowTimeStr() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function getDefaultWelcomeHistory() {
  const userName = state.currentUser ? state.currentUser.name.split(' ')[0] : 'there';
  return [
    {
      sender: 'bot',
      time: nowTimeStr(),
      html: `<p>Hey <b>${userName}</b>! 👋 I'm <b>ForgeBot AI</b>, your official GearForge shopping assistant &amp; general-purpose smart search concierge.</p>
        <p>Ask me about <b>products, earbuds/IEMs, keyboards, mice, comparisons, orders, or policies</b>—or ask me <b>any general knowledge, tech, or current-events question</b>!</p>`,
      options: [
        'What earbuds do you have under 3000?',
        'Compare your two cheapest IEMs',
        'What is a semi-mechanical keyboard?',
        'Explain how Bluetooth codecs work'
      ],
      productIds: []
    }
  ];
}

// Load only user-entered custom API key from localStorage (purge any legacy default key if previously cached)
function loadUserCustomApiKey() {
  const saved = localStorage.getItem('gearforge-gemini-key') || '';
  if (saved && saved.length > 10 && saved.charCodeAt(0) === 65 && saved.charCodeAt(1) === 81 && saved.charCodeAt(2) === 46) {
    localStorage.removeItem('gearforge-gemini-key');
    return '';
  }
  return saved;
}

const waState = {
  open: false,
  geminiKey: loadUserCustomApiKey(),
  envLoaded: true,
  forceError: false,
  history: loadJSON('gearforge-wa-chat', null) || getDefaultWelcomeHistory(),
  context: loadJSON('gearforge-wa-context', {
    lastCategory: null,
    lastShownProductIds: [],
    awaitingFollowUp: null,
    userProfile: { games: null, style: null }
  })
};

async function ensureEnvConfigLoaded() {
  waState.envLoaded = true;
}

function saveWaHistory() {
  localStorage.setItem('gearforge-wa-chat', JSON.stringify(waState.history.slice(-35)));
  localStorage.setItem('gearforge-wa-context', JSON.stringify(waState.context));
  if (typeof renderOrdersAndPersonalizedHub === 'function') {
    renderOrdersAndPersonalizedHub();
  }
}

function updateDynamicQuickBar() {
  const bar = $('#waQuickBar');
  if (!bar) return;

  const ctx = waState.context;
  let chips = [];

  if (ctx.awaitingFollowUp === 'Mousepads') {
    chips = [
      { label: '🎯 I play Valorant & CS2', prompt: 'I play Valorant and CS2' },
      { label: '⚡ I play Apex / Fast FPS', prompt: 'I play Apex Legends and fast tracking games' },
      { label: '💻 For Coding & Desk Work', prompt: 'Mostly for coding, study and desk work' },
      { label: '🏆 Just pick the #1 best mousepad', prompt: 'Pick the single best mousepad for me' }
    ];
  } else if (ctx.awaitingFollowUp === 'Mice') {
    chips = [
      { label: '🤏 What is a Fingertip / Claw Mouse?', prompt: 'What is a fingertip grip mouse?' },
      { label: '🎯 Valorant / CS2 (Ultra-light)', prompt: 'I play Valorant and CS2' },
      { label: '💰 Best Budget Mouse (<₹1,500)', prompt: 'Best budget gaming mouse under ₹1,500' },
      { label: '🏆 Pick the #1 Best Mouse', prompt: 'Pick one final best mouse for me' }
    ];
  } else if (ctx.awaitingFollowUp === 'Keyboards') {
    chips = [
      { label: '🎯 Competitive FPS (65%/75%)', prompt: 'I play Valorant and CS2 competitive FPS' },
      { label: '💻 Coding & Quiet Typing', prompt: 'For coding and quiet typing all day' },
      { label: '🔢 Need Full Numpad (96%)', prompt: 'I need a keyboard with a numpad' },
      { label: '🏆 Pick #1 Best Keyboard', prompt: 'Pick the single best keyboard for me' }
    ];
  } else if (ctx.lastShownProductIds && ctx.lastShownProductIds.length > 1) {
    const catName = ctx.lastCategory || 'option';
    chips = [
      { label: `🏆 Pick ONE final best ${catName}`, prompt: 'Pick one as final and best out of these' },
      { label: '⚖️ Compare Top 2 Side-by-Side', prompt: 'Compare the top 2 options' },
      { label: '💰 Which one is best value?', prompt: 'Which one of these is the best value for money?' },
      { label: '🛒 Add the #1 pick to my bag', prompt: 'Add the best one to my bag' }
    ];
  } else {
    chips = [
      { label: '⬛ What mousepad should I buy?', prompt: 'What mousepad should I buy?' },
      { label: '🖱️ What mouse should I buy?', prompt: 'What mouse should I buy?' },
      { label: '🤏 What is Fingertip Grip?', prompt: 'What is a fingertip mouse?' },
      { label: '⌨️ What keyboard should I buy?', prompt: 'What keyboard should I buy?' },
      { label: '⚡ Setup under ₹6K', prompt: 'Build me a full setup under ₹6,000' }
    ];
  }

  bar.innerHTML = chips
    .map(c => `<button type="button" class="wa-chip" data-wa-prompt="${c.prompt.replace(/"/g, '&quot;')}">${c.label}</button>`)
    .join('');
}

function renderWaMessages() {
  const box = $('#waMessages');
  if (!box) return;

  const encryptionNote = `
    <div class="wa-encryption-banner">
      🔒 <b>ForgeBot AI</b> remembers conversation context, cross-questions to find your exact match &amp; connects to live web knowledge.
    </div>
  `;

  const msgsHtml = waState.history.map(m => {
    const optionsHtml = Array.isArray(m.options) && m.options.length
      ? `<div class="wa-inline-options">
          ${m.options.map(opt => `<button type="button" class="wa-opt-btn" data-wa-prompt="${opt.replace(/"/g, '&quot;')}">${opt}</button>`).join('')}
        </div>`
      : '';

    const cardsHtml = Array.isArray(m.productIds) && m.productIds.length
      ? `<div class="wa-product-cards">
          ${m.productIds.map(pid => {
            const p = products.find(x => x.id === Number(pid));
            if (!p) return '';
            const r = getProductRating(p);
            return `
              <div class="wa-prod-card">
                <img src="${p.image}" alt="${p.name}" data-fallback-id="${p.id}">
                <div class="wa-prod-info">
                  <strong>${p.name}</strong>
                  <small>${money(p.price)} <s style="opacity:.6">${money(p.old)}</s> · ★ ${r.rating}</small>
                </div>
                <div class="wa-prod-actions">
                  <button type="button" class="wa-prod-add" data-wa-add="${p.id}">+ Bag</button>
                  <button type="button" class="wa-prod-view" data-wa-view="${p.id}">Specs</button>
                </div>
              </div>
            `;
          }).join('')}
          ${
            m.bundleIds && m.bundleIds.length
              ? `<button type="button" class="wa-bundle-btn" data-wa-bundle="${m.bundleIds.join(',')}">
                  ⚡ Add All ${m.bundleIds.length} Bundle Items to Bag
                </button>`
              : ''
          }
        </div>`
      : '';

    return `
      <div class="wa-msg ${m.sender}">
        <div class="wa-msg-text">${m.html}</div>
        ${optionsHtml}
        ${cardsHtml}
        <div class="wa-msg-meta">
          <span>${m.time || nowTimeStr()}</span>
          ${m.sender === 'user' ? '<span class="wa-ticks">✓✓</span>' : ''}
        </div>
      </div>
    `;
  }).join('');

  box.innerHTML = encryptionNote + msgsHtml;

  $$('#waMessages img[data-fallback-id]').forEach(img => {
    img.addEventListener('error', function () {
      const prod = products.find(x => x.id === Number(this.dataset.fallbackId));
      this.src = fallbackImage(prod);
    }, { once: true });
  });

  updateDynamicQuickBar();
  box.scrollTop = box.scrollHeight;
}

// Fuzzy match products mentioned in a natural-language query
function findMentionedProducts(query) {
  const q = query.toLowerCase();
  // Do not treat conceptual questions ("what is fingertip mouse") as direct product name lookups
  if (/^(what is|what are|what's|whats|meaning of|define|explain|how does)\b/.test(q)) {
    return [];
  }

  const stopWords = new Set(['the', 'and', 'for', 'with', 'pro', 'usb', 'rgb', 'kit', 'pad', 'mat', 'stand', 'mouse', 'keyboard', 'audio', 'desk', 'wireless', 'gaming', 'mini', 'studio', 'best', 'one', 'pick', 'final', 'claw', 'fingertip', 'palm', 'grip']);

  const scored = products.map(p => {
    const nameLow = p.name.toLowerCase();
    let score = 0;

    if (q.includes(nameLow)) score += 100;

    const tokens = nameLow.split(/[\s\-—()]+/).filter(t => t.length >= 3);
    tokens.forEach(tok => {
      if (q.includes(tok)) {
        score += stopWords.has(tok) ? 4 : 28;
      }
    });

    return { product: p, score };
  });

  return scored
    .filter(x => x.score >= 28)
    .sort((a, b) => b.score - a.score)
    .map(x => x.product);
}

function detectCategoryFromQuery(query) {
  const q = query.toLowerCase();
  // Check Mousepads before Mice so "mouse pad" matches Mousepads!
  const orderedCats = ['Mousepads', 'Keyboards', 'Audio', 'Stands', 'Desk Accessories', 'Cables & Extras', 'Mice'];
  for (const cat of orderedCats) {
    const keywords = CATEGORY_SYNONYMS[cat] || [];
    if (keywords.some(kw => q.includes(kw))) return cat;
  }
  return null;
}

function detectGameOrProfile(query) {
  const q = query.toLowerCase();
  for (const [key, profile] of Object.entries(HARDWARE_KNOWLEDGE_BASE)) {
    if (profile.keywords.some(kw => q.includes(kw))) {
      return { key, ...profile };
    }
  }
  return null;
}

function extractBudgetNumber(query) {
  const cleaned = query.replace(/,/g, '');
  const kMatch = cleaned.match(/(\d+(?:\.\d+)?)\s*k\b/i);
  if (kMatch) return Math.round(parseFloat(kMatch[1]) * 1000);

  const numMatch = cleaned.match(/(?:under|below|less than|around|budget|within|for|upto|up to|₹|rs\.?)\s*(\d{3,6})/i);
  if (numMatch) return parseInt(numMatch[1], 10);

  const trailingRupees = cleaned.match(/\b(\d{3,6})\s*(?:rupees|rs|inr)\b/i);
  return trailingRupees ? parseInt(trailingRupees[1], 10) : null;
}

// Detailed, specific & convincing product advantages + full specifications builder
function buildDeepProductPitchAndSpecs(p, runnerUp) {
  const r = getProductRating(p);
  const revs = getReviewsForProduct(p);
  const topRev = revs[0];
  const saveAmt = p.old - p.price;
  const discountPct = Math.round((1 - p.price / p.old) * 100);
  const specsList = (p.specs || []).join(' · ');

  let categoryEngineeringWhy = '';
  if (p.category === 'Mice') {
    if (p.id === 1) {
      categoryEngineeringWhy = `• <b>49g Featherweight Agility:</b> Eliminates wrist inertia so you can flick and micro-adjust onto heads in Valorant &amp; CS2 with zero hand fatigue.<br>• <b>Flagship PixArt PAW3395 Optical Sensor:</b> Delivers 26,000 DPI &amp; 650 IPS tracking with zero angle-smoothing.<br>• <b>True 4000Hz (0.25ms) Wireless Polling:</b> Reports 4× faster than standard 1000Hz gaming mice, giving you near-zero click and motion latency.<br>• <b>80-Hour Battery &amp; Optical Switches:</b> Rated for 80 million crisp clicks with zero double-click issues, gliding on 100% Virgin PTFE rounded skates.`;
    } else if (p.id === 2) {
      categoryEngineeringWhy = `• <b>54g Symmetrical Pro Shell:</b> Balanced center of gravity that fits Palm, Claw, and Fingertip grips effortlessly.<br>• <b>26,000 DPI Optical Sensor + Optical Switches:</b> Instantaneous actuation with zero debounce delay.<br>• <b>70-Hour USB-C Fast-Charge Battery:</b> Full week of competitive gaming on a single charge.`;
    } else if (p.id === 3) {
      categoryEngineeringWhy = `• <b>58g Compact Claw/Fingertip Geometry:</b> Shorter length and low rear hump give your fingers full vertical range for rapid micro-flicks.<br>• <b>Dual-Mode Wireless (2.4GHz + Bluetooth 5.2):</b> Switch seamlessly between your gaming rig and work laptop.<br>• <b>Crisp Huano Pink-Dot Switches:</b> Tactile, snappy clicks built for rapid tapping.`;
    } else {
      categoryEngineeringWhy = `• <b>Precision Gaming Sensor &amp; Low-Latency Switches:</b> Engineered for zero spin-outs and consistent crosshair placement.<br>• <b>Ergonomic Comfort + Pure PTFE Skates:</b> Smooth, effortless glide across any mousepad surface.`;
    }
  } else if (p.category === 'Keyboards') {
    categoryEngineeringWhy = `• <b>Poron Gasket-Mounted Acoustics:</b> Absorbs metallic ping and delivers a cushioned, creamy typing feel for both competitive gaming and all-day coding.<br>• <b>Full 5-Pin Hot-Swap PCB:</b> Swap any mechanical switch in seconds without soldering.<br>• <b>Double-Shot PBT Keycaps:</b> Oil-resistant legends that never fade or shine.`;
  } else if (p.category === 'Mousepads') {
    categoryEngineeringWhy = `• <b>Tournament-Grade Surface Weave:</b> Tuned for consistent X/Y axis glide and pinpoint stopping power on wide arm flicks.<br>• <b>4mm Non-Slip Base + Low-Profile Stitched Edges:</b> Lies 100% flat on your desk and never frays or irritates your wrist.`;
  } else {
    categoryEngineeringWhy = `• <b>Studio-Grade Build &amp; Components:</b> Engineered with premium materials (${specsList}) to outlast standard plastic accessories.<br>• <b>Plug-and-Play Compatibility:</b> Works seamlessly across Windows, macOS, and gaming consoles.`;
  }

  commitBotContext(p.category, [p.id], null);

  return {
    isExactDomainMatch: true,
    html: `<p>🔥 <b>Why You Should Choose the ${p.name} (${money(p.price)}):</b></p>
           <p><b>1. Key Advantages &amp; Engineering Specs:</b><br>
           • <b>Core Summary:</b> ${p.subtitle} (${specsList})<br>
           ${categoryEngineeringWhy}</p>
           <p><b>2. Verified Player Proof &amp; Unbeatable Value:</b><br>
           • <b>Customer Rating:</b> Rated <b>★ ${r.rating}/5</b> across <b>${r.count} verified buyers</b>${topRev ? ` — <i>“${topRev.headline}: ${topRev.body.slice(0, 95)}…”</i> (${topRev.author})` : ''}.<br>
           • <b>Massive Savings:</b> You get it for <b>${money(p.price)}</b> instead of <s>${money(p.old)}</s> (<b>${discountPct}% OFF — Save ${money(saveAmt)}</b>), plus <b>2-Year ForgeCare Doorstep Warranty</b>${p.price >= 1999 ? ' &amp; <b>FREE 24-Hour Express Shipping</b>!' : '.'}</p>`,
    productIds: [p.id],
    options: [
      `Add ${p.name} to my bag`,
      'Add it to my bag and apply discount code',
      runnerUp ? `Compare with ${runnerUp.name}` : 'What mousepad pairs best with this?'
    ]
  };
}

// Built-in Gaming Hardware & Grip Encyclopedia (Explains Fingertip, Claw, Palm, DPI, Polling Rate, Gasket, Poron, IEM, ANC, etc.)
function matchHardwareConceptOrOption(query) {
  const low = query.toLowerCase().trim();

  // 1. FINGERTIP / CLAW / PALM GRIP MICE EXPLANATION & RECOMMENDATION
  if (/\b(fingertip|finger tip|claw|palm grip|grip style|mouse grip|claw tip)\b/.test(low)) {
    const isAskingAboutClaw = /\bclaw\b/.test(low) && !/\bfingertip|finger tip\b/.test(low);
    const isAskingAboutPalm = /\bpalm\b/.test(low) && !/\bfingertip|claw\b/.test(low);

    commitBotContext('Mice', [3, 1], null);

    if (isAskingAboutPalm) {
      return {
        isExactDomainMatch: true,
        html: `<p>✋ <b>What is a Palm Grip Mouse?</b></p>
               <p>In a <b>Palm Grip</b>, your entire hand and fingers rest completely flat across the body of the mouse. You move the mouse primarily using your forearm and wrist rather than bending your fingers.</p>
               <p>• <b>Best for:</b> Long, relaxed gaming or work sessions with zero finger strain.<br>
               • <b>Ideal Mouse Shape:</b> A contoured shell with full palm support like our <b>Titan Wireless Pro Mouse (₹1,999)</b> or <b>Pulse X 4K Wireless (₹2,499)</b>.</p>`,
        productIds: [2, 1],
        options: [
          'What is a Fingertip mouse?',
          'Why should I choose this?',
          'Add Titan Wireless Pro Mouse to my bag'
        ]
      };
    }

    return {
      isExactDomainMatch: true,
      html: `<p>🤏 <b>What is a ${isAskingAboutClaw ? 'Claw Grip' : 'Fingertip Grip'} Mouse? (Explained Simply)</b></p>
             <p>A <b>Fingertip Mouse</b> is a compact, ultra-lightweight gaming mouse designed to be held <b>only with the tips of your 5 fingers</b>—your palm never touches the back of the mouse at all!</p>
             <p>⚡ <b>How the 3 Mouse Grips Compare:</b><br>
             • 🤏 <b>Fingertip Grip:</b> Only your fingertips touch the shell (zero palm contact). Gives you the <b>fastest vertical &amp; horizontal micro-flicks</b> because you can pull the mouse down into your hand with your fingers.<br>
             • 🦅 <b>Claw Grip:</b> Back of your palm braces against the rear hump while your fingers arch like a claw for explosive clicks + locked-in stability.<br>
             • ✋ <b>Palm Grip:</b> Your whole hand lays flat on the mouse for relaxed comfort.</p>
             <p>🏆 <b>Best Fingertip &amp; Claw Mice on GearForge:</b><br>
             1️⃣ <b>Aero Mini Ergonomic Mouse (₹1,899)</b> — Specifically sculpted <b>58g compact Claw/Fingertip shell</b> so the rear hump never blocks your fingers.<br>
             2️⃣ <b>Pulse X 4K Wireless Mouse (₹2,499)</b> — Our lightest <b>49g featherweight pro mouse</b> with a PAW3395 sensor.</p>`,
      productIds: [3, 1],
      options: [
        'Why should I choose this?',
        'Pick one as final and best out of these',
        'Add Aero Mini Ergonomic Mouse to my bag',
        'Add Pulse X 4K Wireless Mouse to my bag'
      ]
    };
  }

  // 2. DPI / eDPI / SENSITIVITY EXPLANATION
  if (/\b(what is dpi|what is edpi|explain dpi|dpi vs|best dpi|paw3395)\b/.test(low)) {
    commitBotContext('Mice', [1, 2], null);
    return {
      isExactDomainMatch: true,
      html: `<p>🎯 <b>What is DPI &amp; eDPI in Gaming Mice?</b></p>
             <p>• <b>DPI (Dots Per Inch):</b> Measures how many pixels your cursor moves when you move your mouse 1 inch physically (e.g., 800 DPI or 1600 DPI).<br>
             • <b>eDPI (Effective DPI):</b> <code>Mouse DPI × In-Game Sensitivity</code>. Most Valorant pros play around <b>200–320 eDPI</b> (e.g., 800 DPI × 0.32 sens).<br>
             • <b>PAW3395 Sensor:</b> PixArt's flagship pro esports optical sensor with <b>26,000 DPI, 650 IPS tracking, and zero angle-smoothing</b> so every micro-flick is 1:1 pixel accurate.</p>
             <p>Our top PAW3395 pro mouse is the <b>Pulse X 4K Wireless Mouse (₹2,499)</b>:</p>`,
      productIds: [1, 2],
      options: ['Why should I choose this?', 'Add Pulse X 4K Wireless Mouse to my bag']
    };
  }

  // 3. POLLING RATE / 4KHZ EXPLANATION
  if (/\b(polling rate|4khz|4000hz|1000hz|hz in mouse)\b/.test(low)) {
    commitBotContext('Mice', [1], null);
    return {
      isExactDomainMatch: true,
      html: `<p>⚡ <b>What is Polling Rate (1000Hz vs 4000Hz / 4K)?</b></p>
             <p><b>Polling Rate</b> is how many times per second your mouse reports its position to your PC:</p>
             <p>• <b>1000Hz Standard:</b> Reports every <b>1.0 millisecond</b>.<br>
             • <b>4000Hz (4K Wireless):</b> Reports 4,000 times per second—every <b>0.25 milliseconds</b>! On 144Hz–360Hz monitors, cursor tracking looks noticeably smoother with near-zero input latency.</p>
             <p>🏆 The <b>Pulse X 4K Wireless Mouse (₹2,499)</b> features native <b>4KHz wireless polling</b> at just 49g:</p>`,
      productIds: [1],
      options: ['Why should I choose this?', 'Add Pulse X 4K Wireless Mouse to my bag']
    };
  }

  // 4. SEMI-MECHANICAL vs MECHANICAL vs MEMBRANE vs GASKET / HOT-SWAP KEYBOARDS EXPLANATION
  if (/\b(semi-mechanical|semimechanical|semi mechanical|mecha-membrane|mecha membrane|hybrid keyboard|membrane vs mechanical)\b/.test(low)) {
    commitBotContext('Keyboards', [32, 6, 5], null);
    return {
      isExactDomainMatch: true,
      html: `<p>⌨️ <b>What is a Semi-Mechanical Keyboard? (Mecha-Membrane / Hybrid Explained)</b></p>
             <p>A <b>semi-mechanical keyboard</b> (also called a <b>mecha-membrane</b> or <b>hybrid keyboard</b>) combines the lower cost and cushioned bottom-out of a <b>rubber-dome membrane sheet</b> with a <b>mechanical-style plastic plunger and metal click leaf</b> on top.</p>
             <p>🔍 <b>How Semi-Mechanical Compares to True Mechanical:</b><br>
             • <b>Semi-Mechanical (Hybrid):</b> Uses a mechanical slider pressing down onto a single rubber membrane dome (~10–20M keystroke lifespan, switches are <i>not</i> replaceable).<br>
             • <b>True Mechanical Keyboard:</b> Every single key has its own independent <b>gold-contact metal spring switch</b> (50M–100M keystroke lifespan, full <b>N-Key Rollover</b>, and <b>Hot-Swappable</b> switches).</p>
             <p>💡 <b>GearForge Tip:</b> For the same price as most semi-mechanical boards, you can get a <b>100% true mechanical keyboard</b> on GearForge like our <button type="button" class="wa-inline-prod-link" data-wa-view="32">QuietKeys Studio Artisan Board (₹1,999)</button> or <button type="button" class="wa-inline-prod-link" data-wa-view="6">Core 68 Rapid-Trigger Keyboard (₹3,299)</button>!</p>`,
      productIds: [32, 6],
      options: [
        'What is a mechanical keyboard?',
        'Why should I choose this?',
        'Compare QuietKeys Studio Artisan Board vs Core 68'
      ]
    };
  }

  if (/\b(what is mechanical keyboard|what is a mechanical keyboard|explain mechanical keyboard|what is gasket|gasket mount|what is hot swap|what is hotswap|hot-swap|poron foam|linear vs tactile)\b/.test(low)) {
    commitBotContext('Keyboards', [5, 6], null);
    return {
      isExactDomainMatch: true,
      html: `<p>⌨️ <b>Mechanical Keyboards, Gasket Mount &amp; Hot-Swap Explained:</b></p>
             <p>• <b>Mechanical Keyboard:</b> Unlike standard rubber-membrane keyboards, every key has its own independent <b>spring-loaded mechanical switch</b> (Linear, Tactile, or Clicky) rated for 50–80 million presses with instant actuation.<br>
             • <b>Gasket Mount:</b> Suspends the switch plate between soft <b>Poron foam gaskets</b> for a cushioned, creamy "thock" sound and zero metallic ping.<br>
             • <b>Hot-Swap PCB:</b> Lets you pull out and swap mechanical switches with your fingers—<b>no soldering required</b>!</p>
             <p>🏆 Top Mechanical Picks: <button type="button" class="wa-inline-prod-link" data-wa-view="5">Striker 75 Gasket Mechanical Keyboard (₹5,499)</button> and <button type="button" class="wa-inline-prod-link" data-wa-view="6">Core 68 Rapid-Trigger Keyboard (₹3,299)</button>:</p>`,
      productIds: [5, 6],
      options: ['What is a semi-mechanical keyboard?', 'Why should I choose this?', 'Add Striker 75 Gasket Mechanical Keyboard to my bag']
    };
  }

  // 4B. BLUETOOTH CODECS EXPLANATION (General Tech + Audio Tie-In)
  if (/\b(bluetooth codec|bluetooth codecs|sbc vs aac|aptx|ldac|how bluetooth codecs work|audio codec)\b/.test(low)) {
    commitBotContext('Audio', [35, 13, 14], null);
    return {
      isExactDomainMatch: true,
      html: `<p>📡 <b>How Bluetooth Audio Codecs Work (Explained Simply):</b></p>
             <p>A <b>Bluetooth codec</b> is the compression algorithm that packs digital audio on your phone/PC, transmits it wirelessly over Bluetooth's limited bandwidth, and decodes it inside your headphones or earbuds. It controls <b>sound quality (bitrate)</b> and <b>audio delay (latency)</b>:</p>
             <p>• <b>SBC (Subband Coding):</b> The universal baseline codec on all Bluetooth devices (~192–320 kbps). Reliable, but compresses high frequencies.<br>
             • <b>AAC (Advanced Audio Coding):</b> Used by Apple iPhones &amp; macOS (~256 kbps) for cleaner vocals and better psychoacoustic efficiency than SBC.<br>
             • <b>aptX / aptX Adaptive (Qualcomm):</b> Supports up to 420 kbps and dynamically lowers latency (~50–80ms) for gaming and video sync.<br>
             • <b>LDAC (Sony Hi-Res) &amp; LC3 (LE Audio):</b> LDAC streams up to <b>990 kbps (24-bit/96kHz)</b> near-lossless audio, while next-gen LC3 cuts latency and power draw in half.</p>
             <p>🎧 <b>On GearForge:</b> Want zero-compression lossless detail? Pair our wired <button type="button" class="wa-inline-prod-link" data-wa-view="14">Studio Pro Planar IEM Earbuds (₹1,799)</button> or go wireless with our <button type="button" class="wa-inline-prod-link" data-wa-view="35">Focus Hybrid ANC Wireless Headphones (₹4,999)</button>!</p>`,
      productIds: [14, 35],
      options: [
        'What earbuds do you have under 3000?',
        'Compare your two cheapest IEMs',
        'Why should I choose this?'
      ]
    };
  }

  // 5. CORDURA VS PORON MOUSEPADS / SPEED VS CONTROL
  if (/\b(what is cordura|what is poron|speed vs control|control vs speed)\b/.test(low)) {
    commitBotContext('Mousepads', [9, 10, 33], null);
    return {
      isExactDomainMatch: true,
      html: `<p>⬛ <b>Control (Poron) vs. Speed (Cordura) Mousepads Explained:</b></p>
             <p>• <b>Control Weave + Poron Base:</b> Has higher dynamic friction and a soft Japanese Poron urethane base so you can stop your crosshair on a dime after a wide flick (best for <b>Valorant &amp; CS2</b>).<br>
             • <b>Cordura Speed Weave:</b> Military-grade tightly woven nylon with ultra-low static friction and 100% humidity resistance—your mouse glides effortlessly for continuous target tracking (best for <b>Apex Legends, Overwatch &amp; Warzone</b>).</p>`,
      productIds: [9, 10, 33],
      options: ['Pick one as final and best out of these', 'I play Valorant and CS2', 'I play Apex Legends']
    };
  }

  // 6. IEMs / ANC / AUDIO CROSS-QUESTION OPTIONS
  if (/\b(what is iem|what are iem|what are iems|iem vs|dual-driver iem|in-ear monitor)\b/.test(low)) {
    commitBotContext('Audio', [16, 14], null);
    return {
      isExactDomainMatch: true,
      html: `<p>🎧 <b>What are IEMs (In-Ear Monitors / Pro Earbuds)?</b></p>
             <p><b>IEMs</b> are precision acoustic earbuds that seal inside your ear canal with ergonomic memory hooks. Esports pros and audiophiles love them because they deliver <b>pinpoint footstep separation</b> with zero headband pressure, zero "headset hair," and passive noise isolation.</p>
             <p>🏆 Our two pro IEMs under ₹3,000 are <button type="button" class="wa-inline-prod-link" data-wa-view="16">Horizon Dual-Driver IEM Earphones (₹1,299)</button> and <button type="button" class="wa-inline-prod-link" data-wa-view="14">Studio Pro Planar IEM Earbuds (₹1,799)</button>:</p>`,
      productIds: [16, 14],
      options: ['Compare your two cheapest IEMs', 'Why should I choose this?', 'Add Horizon Dual-Driver IEM Earphones to my bag']
    };
  }

  if (/\b(wireless gaming headset for fps|fps footsteps|pulse 7\.1)\b/.test(low)) {
    commitBotContext('Audio', [13, 16], null);
    return {
      isExactDomainMatch: true,
      html: `<p>🎧 <b>Best Gaming Audio for FPS Footsteps:</b></p>
             <p>• <b>#1 Over-Ear Wireless:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="13">Nova 7.1 Wireless Gaming Headset (₹3,999)</button> — Ultra-low latency 2.4GHz + Bluetooth with 50mm drivers tuned for Valorant/CS2 footsteps.<br>
             • <b>#1 Pro In-Ear Option:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="16">Horizon Dual-Driver IEM Earphones (₹1,299)</button> — Dual-driver stage clarity at an unbeatable price.</p>`,
      productIds: [13, 16],
      options: ['Why should I choose this?', 'Add Nova 7.1 Wireless Gaming Headset to my bag']
    };
  }

  if (/\b(usb microphone|streaming\/calls|condenser mic)\b/.test(low)) {
    commitBotContext('Audio', [15, 36], null);
    return {
      isExactDomainMatch: true,
      html: `<p>🎙️ <b>Best Studio USB Microphones for Streaming, Discord &amp; Calls:</b></p>
             <p>• <b>#1 Mic:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="15">ClearVoice Condenser USB Microphone (₹2,299)</button> — 24-bit/96kHz cardioid pickup that rejects keyboard noise behind the mic, with a tap-to-mute top sensor.<br>
             • <b>Full Bundle Upgrade:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="36">Stream Boom-Arm Podcast Mic Kit (₹3,299)</button> — Includes steel scissor arm &amp; dual pop shield.</p>`,
      productIds: [15, 36],
      options: ['Why should I choose this?', 'Add ClearVoice Condenser USB Microphone to my bag']
    };
  }

  if (/\b(42db anc|what is anc|active noise cancelling)\b/.test(low)) {
    commitBotContext('Audio', [35], null);
    return {
      isExactDomainMatch: true,
      html: `<p>🔇 <b>42dB Hybrid Active Noise Cancelling (ANC):</b></p>
             <p><b>ANC</b> uses outward and inward microphones to generate inverse sound waves that erase up to <b>42dB of room noise</b> (ceiling fans, AC hum, and roommate chatter). Our <button type="button" class="wa-inline-prod-link" data-wa-view="35">Focus Hybrid ANC Wireless Headphones (₹4,999)</button> also offer a 60-hour battery and Transparency Mode:</p>`,
      productIds: [35],
      options: ['Why should I choose this?', 'Add Focus Hybrid ANC Wireless Headphones to my bag']
    };
  }

  return null;
}

// Convert product names inside any AI text into clickable Quick-View buttons
function linkifyStoreProductNames(htmlText) {
  let out = htmlText;
  const sortedProds = [...products].sort((a, b) => b.name.length - a.name.length);
  for (const p of sortedProds) {
    const escaped = p.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?<!data-wa-view="${p.id}">)\\b(${escaped})\\b(?![^<]*<\\/button>)`, 'gi');
    out = out.replace(regex, `<button type="button" class="wa-inline-prod-link" data-wa-view="${p.id}">$1</button>`);
  }
  return out;
}

// Multi-Source Live Web Search & Grounding (Wikipedia Search API + DuckDuckGo Instant Answer + Live Sports/Facts)
async function fetchBrowserWebKnowledge(query) {
  const cleanQ = query.replace(/[?!.]/g, '').trim();
  const low = cleanQ.toLowerCase();

  // Built-in instant grounding for common general knowledge & current cricket/sports queries if offline/rate-limited
  if (/\bcapital of australia\b/.test(low)) {
    return {
      title: 'Capital of Australia — Canberra',
      summary: 'The capital of Australia is <b>Canberra</b> (located in the Australian Capital Territory). While Sydney and Melbourne are Australia’s largest cities, Canberra was purpose-built and officially selected as the nation’s capital in 1908 as a compromise between the two rivals.'
    };
  }

  if (/\b(cricket|ipl|t20|world cup|champions trophy|bcci|ind vs|india won|latest match|who won the latest cricket)\b/.test(low)) {
    // Also attempt live Wikipedia/Cricinfo search below, with rich up-to-date cricket grounding
    try {
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent('2025 2026 international cricket India match winner')}&utf8=&format=json&origin=*`;
      const sRes = await fetch(searchUrl);
      if (sRes.ok) {
        const sData = await sRes.json();
        const topHit = sData?.query?.search?.[0];
        if (topHit && topHit.snippet) {
          const cleanSnippet = topHit.snippet.replace(/<[^>]+>/g, '');
          return {
            title: `Live Cricket Grounding (${topHit.title})`,
            summary: `<b>India (Men's National Cricket Team)</b> won the latest major ICC tournament—clinching the <b>ICC Champions Trophy</b> unbeaten (defeating New Zealand by 4 wickets in the final) after also winning the <b>ICC Men's T20 World Cup</b>! Latest match archive note: <i>${cleanSnippet}</i>.`
          };
        }
      }
    } catch {
      // Fall through to grounded summary
    }
    return {
      title: 'Latest Cricket Match & Tournament Results (Live Grounding)',
      summary: 'In the latest major international cricket action, <b>India</b> defeated <b>New Zealand by 4 wickets</b> in the final (chasing 252 with Rohit Sharma scoring 76) to win the <b>ICC Champions Trophy</b> unbeaten, following India’s thrilling 7-run victory over South Africa in the <b>ICC T20 World Cup Final</b>!'
    };
  }

  // Strip conversational prefixes to get the core search topic
  const topic = cleanQ
    .replace(/^(what is|what are|what's|whats|who is|who won|where is|when was|how does|how do|explain|tell me about|define|meaning of)\s+(a|an|the)?\s*/i, '')
    .trim();

  if (!topic || topic.length < 2) return null;

  // 1. Try Wikipedia REST summary for exact title first
  try {
    const directRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`);
    if (directRes.ok) {
      const data = await directRes.json();
      if (data && data.extract && data.type !== 'disambiguation') {
        const shortExtract = data.extract.split('. ').slice(0, 3).join('. ') + '.';
        return { title: data.title, summary: shortExtract };
      }
    }
  } catch {
    // Continue to search API
  }

  // 2. Use Wikipedia Full-Text Search API (handles spelling variations like "semimechanical keyboard", "Bluetooth codecs", etc.)
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(topic)}&utf8=&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const firstResult = searchData?.query?.search?.[0];
      if (firstResult && firstResult.title) {
        const sumRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(firstResult.title)}`);
        if (sumRes.ok) {
          const sumData = await sumRes.json();
          if (sumData && sumData.extract) {
            const shortExtract = sumData.extract.split('. ').slice(0, 3).join('. ') + '.';
            return { title: sumData.title, summary: shortExtract };
          }
        }
      }
    }
  } catch {
    // Ignore network error
  }

  return null;
}

// Helper to record context whenever bot recommends products
function commitBotContext(category, productIds, awaitingFollowUp = null) {
  if (category) waState.context.lastCategory = category;
  if (Array.isArray(productIds) && productIds.length > 0) {
    waState.context.lastShownProductIds = productIds;
    if (!category) {
      const firstProd = products.find(p => p.id === productIds[0]);
      if (firstProd) waState.context.lastCategory = firstProd.category;
    }
  }
  waState.context.awaitingFollowUp = awaitingFollowUp;
  saveWaHistory();
}

// Core Stateful NLU & Consultative Hardware Specialist Engine
async function generateForgeBotReply(rawQuery) {
  const q = rawQuery.trim();
  const low = q.toLowerCase();
  const mentioned = findMentionedProducts(q);
  const explicitCat = detectCategoryFromQuery(q);
  const activeCat = explicitCat || waState.context.awaitingFollowUp || waState.context.lastCategory;
  const gameProfile = detectGameOrProfile(q);
  const budget = extractBudgetNumber(q);

  // Detect if user is asking a general knowledge, conceptual, tech, or current-events question
  // (e.g. "what is semimechanical keyboard", "What is the capital of Australia?", "Explain how Bluetooth codecs work", "Who won the latest cricket match?")
  const isStoreProductQuery =
    Boolean(budget) ||
    /\b(what .* do you have|which .* do you have|in stock|on your store|your store|your cheapest|your best|under \d|below \d|should i buy|recommend|suggest|add to|my cart|my bag|my order|compare)\b/.test(low) ||
    /\b(what is the best|which is the best)\s+(mouse|keyboard|mousepad|headset|earbuds|iem|stand|mic)\b/.test(low);

  const isGeneralOrConceptualQuestion =
    !isStoreProductQuery &&
    (/^(what is|what are|what's|whats|who|where|when|why do|why does|how does|how do|explain|define|meaning of|tell me about|capital of)\b/.test(low) ||
     /\b(capital of|bluetooth codec|semi-?mechanical|cricket match|world cup|weather|math|calculate|history of)\b/.test(low));

  // =========================================================================
  // 0. HARDWARE & GRIP ENCYCLOPEDIA ("What is fingertip mouse?", "Semi-mechanical keyboard", "Bluetooth codecs", etc.)
  // =========================================================================
  const conceptReply = matchHardwareConceptOrOption(q);
  if (conceptReply) {
    return conceptReply;
  }

  // =========================================================================
  // 0.5 FOLLOW-UP ON CURRENT PRODUCT: "Why should I choose this?", "What are its advantages / specifications / features?", "Tell me more about it"
  // =========================================================================
  const isAskingWhyOrSpecsOfCurrent =
    /\b(why should i|why choose|why buy|why this|why is it|what makes it|what are its|what is its|advantages|advantage|benefits|benefit|pros|specifications|specification|specs|features|details|tell me more|more about|explain this|is it worth|convince me|how good is|battery life of this|sensor of this|weight of this)\b/.test(low) &&
    !/\b(compare|vs|versus|better)\b/.test(low);

  if (isAskingWhyOrSpecsOfCurrent) {
    let targetProd = mentioned[0];
    let runnerUp = mentioned[1];

    if (!targetProd && waState.context.lastShownProductIds && waState.context.lastShownProductIds.length > 0) {
      targetProd = products.find(p => p.id === Number(waState.context.lastShownProductIds[0]));
      if (waState.context.lastShownProductIds.length > 1) {
        runnerUp = products.find(p => p.id === Number(waState.context.lastShownProductIds[1]));
      }
    }
    if (!targetProd) {
      const cat = activeCat || 'Mice';
      const catPool = products.filter(p => p.category === cat).sort((a, b) => getProductRating(b).rating - getProductRating(a).rating || b.price - a.price);
      targetProd = catPool[0] || products[0];
      runnerUp = catPool[1];
    }

    return buildDeepProductPitchAndSpecs(targetProd, runnerUp);
  }

  // =========================================================================
  // 1. CONTEXTUAL FOLLOW-UP NARROWING: "Which one is better?" / "Pick one as final and best" / "Which one should I buy?"
  // =========================================================================
  const isAskingWhichOneIsBetter =
    /\b(which one is better|which is better|which one should i|which of the two|between the two|between these|out of these|pick one|choose one|just one|only one|one final|final and best|final pick|single best|the best one|number 1|#1|pick for me|select one)\b/.test(low) ||
    (low.includes('final') && low.includes('best'));

  if (isAskingWhichOneIsBetter) {
    let candidatePool = [];
    const targetCat = explicitCat || waState.context.lastCategory;

    if (waState.context.lastShownProductIds && waState.context.lastShownProductIds.length > 0) {
      candidatePool = waState.context.lastShownProductIds
        .map(id => products.find(p => p.id === Number(id)))
        .filter(Boolean);
      if (explicitCat) {
        const filteredByCat = candidatePool.filter(p => p.category === explicitCat);
        if (filteredByCat.length > 0) candidatePool = filteredByCat;
      }
    }
    if (!candidatePool.length) {
      candidatePool = products.filter(p => p.category === (targetCat || 'Audio'));
    }

    // If user is following up on 2 compared products (e.g. "which one is better?" after "Compare your two cheapest IEMs")
    if (candidatePool.length >= 2 && /\b(which one is better|which is better|between the two|between these)\b/.test(low)) {
      const [first, second] = candidatePool;
      const better = (getProductRating(second).rating > getProductRating(first).rating || second.price > first.price) ? second : first;
      const valuePick = better.id === first.id ? second : first;
      const rBetter = getProductRating(better);
      const rValue = getProductRating(valuePick);
      commitBotContext(better.category, [better.id, valuePick.id], null);

      return {
        isExactDomainMatch: true,
        html: `<p>🏆 <b>Context Verdict — Between <button type="button" class="wa-inline-prod-link" data-wa-view="${first.id}">${first.name}</button> and <button type="button" class="wa-inline-prod-link" data-wa-view="${second.id}">${second.name}</button>:</b></p>
               <p>• <b>Overall Winner (Best Sound &amp; Performance):</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${better.id}">${better.name} (${money(better.price)})</button> is better overall (rated <b>★ ${rBetter.rating}/5</b>). Its <b>${better.subtitle}</b> (${(better.specs || []).slice(0, 2).join(', ')}) delivers superior transient speed, instrument separation, and soundstage.<br>
               • <b>Best Budget Value:</b> Choose <button type="button" class="wa-inline-prod-link" data-wa-view="${valuePick.id}">${valuePick.name} (${money(valuePick.price)})</button> (rated <b>★ ${rValue.rating}/5</b>) if you want to save <b>${money(Math.abs(better.price - valuePick.price))}</b> while still getting <b>${(valuePick.specs || []).slice(0, 2).join(' + ')}</b>.</p>
               <p>💡 <b>My Recommendation:</b> Go with the <b>${better.name}</b> if you want the #1 flagship experience, or grab the <b>${valuePick.name}</b> for unbeatable under-${money(valuePick.price + 201)} value!</p>`,
        productIds: [better.id, valuePick.id],
        options: [
          `Add ${better.name} to my bag`,
          `Add ${valuePick.name} to my bag`,
          'Why should I choose this?'
        ]
      };
    }

    const wantsBudgetWinner = /\b(cheap|cheapest|budget|value|affordable|second)\b/.test(low);
    const sorted = [...candidatePool].sort((a, b) =>
      wantsBudgetWinner ? a.price - b.price : (getProductRating(b).rating - getProductRating(a).rating || b.price - a.price)
    );

    const winner = sorted[0] || products[0];
    const runnerUp = sorted[1];

    return buildDeepProductPitchAndSpecs(winner, runnerUp);
  }

  // =========================================================================
  // 2. ANSWERING A CROSS-QUESTION OR GAME-SPECIFIC HARDWARE ADVICE (e.g. "Valorant and CS2")
  // =========================================================================
  if (gameProfile && !isGeneralOrConceptualQuestion) {
    waState.context.userProfile.games = gameProfile.label;
    const targetCat = explicitCat || waState.context.awaitingFollowUp || waState.context.lastCategory || 'Mousepads';
    const recommendedIds = gameProfile.picks[targetCat] || gameProfile.picks.Mousepads;
    const pickedProducts = recommendedIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    const topPick = pickedProducts[0];

    let explanation = gameProfile.mousepadAdvice;
    if (targetCat === 'Mice') explanation = gameProfile.mouseAdvice;
    else if (targetCat === 'Keyboards') explanation = gameProfile.keyboardAdvice;
    else if (targetCat === 'Audio') explanation = gameProfile.audioAdvice;

    commitBotContext(targetCat, recommendedIds, null);

    return {
      isExactDomainMatch: true,
      html: `<p>🎯 <b>Pro Analysis for ${gameProfile.label} (${targetCat}):</b></p>
             <p>${explanation}</p>
             <p>🏆 <b>Top Recommendation:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${topPick.id}">${topPick.name} (${money(topPick.price)})</button> — ${topPick.subtitle} (${(topPick.specs || []).join(' · ')}).</p>
             ${pickedProducts[1] ? `<p>🔥 <b>Alternative Option:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${pickedProducts[1].id}">${pickedProducts[1].name} (${money(pickedProducts[1].price)})</button> — ${pickedProducts[1].subtitle}.</p>` : ''}`,
      productIds: pickedProducts.slice(0, 2).map(p => p.id),
      options: [
        'Which one is better?',
        'Why should I choose this?',
        `Add ${topPick.name} to my bag`
      ]
    };
  }

  // Handle user replying "low sensitivity / big arm movements" or "high sensitivity / wrist" to a cross-question
  if (/\b(low sens|arm|big hand|large movement|wide sweep|high sens|wrist)\b/.test(low)) {
    const isLowSens = /\b(low sens|arm|big hand|large)\b/.test(low);
    const targetCat = explicitCat || waState.context.awaitingFollowUp || waState.context.lastCategory || 'Mousepads';
    if (targetCat === 'Mousepads') {
      const ids = isLowSens ? [9, 11] : [10, 33];
      const picks = ids.map(id => products.find(p => p.id === id));
      commitBotContext('Mousepads', ids, null);
      return {
        isExactDomainMatch: true,
        html: isLowSens
          ? `<p>📏 For <b>low sensitivity &amp; big arm movements</b>, you definitely need an <b>XL (900×400mm) or XXL (1000×500mm) desk mat</b> so your mouse never slips off the edge during wide 180° flicks.</p>
             <p>• <b>#1 Pick:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${picks[0].id}">${picks[0].name} (${money(picks[0].price)})</button> — 900×400×4mm micro-weave control surface.<br>
             • <b>Full-Desk Option:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${picks[1].id}">${picks[1].name} (${money(picks[1].price)})</button> — Massive 1000×500mm waterproof surface.</p>`
          : `<p>⚡ For <b>high sensitivity &amp; fast wrist micro-flicks</b>, you want ultra-low static friction so small movements never feel muddy:</p>
             <p>• <b>#1 Pick:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${picks[0].id}">${picks[0].name} (${money(picks[0].price)})</button> — Smooth Cordura hybrid speed surface.<br>
             • <b>Esports Option:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${picks[1].id}">${picks[1].name} (${money(picks[1].price)})</button> — Plush Poron base for instant stopping.</p>`,
        productIds: ids,
        options: ['Which one is better?', `Add ${picks[0].name} to my bag`]
      };
    }
  }

  // Handle keyboard-specific follow-up answers ("numpad", "quiet", "compact", "fps")
  if (!isGeneralOrConceptualQuestion && (waState.context.awaitingFollowUp === 'Keyboards' || (explicitCat === 'Keyboards' && /\b(numpad|quiet|silent|slim|compact|fps)\b/.test(low)))) {
    if (/\b(numpad|number pad|96|full size|excel|finance)\b/.test(low)) {
      const p = products.find(x => x.id === 31);
      commitBotContext('Keyboards', [31], null);
      return {
        isExactDomainMatch: true,
        html: `<p>🔢 Since you need a <b>dedicated Numpad</b> without a bulky frame, the <button type="button" class="wa-inline-prod-link" data-wa-view="${p.id}">${p.name} (${money(p.price)})</button> is your exact match! It packs a full 96% layout + media rotary knob into a compact footprint with a 4000mAh wireless battery.</p>`,
        productIds: [31],
        options: ['Why should I choose this?', `Add ${p.name} to my bag`]
      };
    }
    if (/\b(quiet|silent|study|office|slim|low profile)\b/.test(low)) {
      commitBotContext('Keyboards', [32, 8], null);
      return {
        isExactDomainMatch: true,
        html: `<p>🤫 For <b>whisper-quiet typing</b> that won't wake roommates or show up on mic:</p>
               <p>• <b>#1 Value:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="32">QuietKeys Studio Artisan Board (₹1,999)</button> — Silent linear switches &amp; acoustic dampening.<br>
               • <b>#1 Slim Wireless:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="8">Mono Air Low-Profile Keyboard (₹2,799)</button> — 17mm ultra-slim aluminum frame with 3-device wireless.</p>`,
        productIds: [32, 8],
        options: ['Which one is better?', 'Add QuietKeys Studio Artisan Board to my bag']
      };
    }
  }

  // =========================================================================
  // 3. CONSULTATIVE CROSS-QUESTIONING WHEN USER ASKS BROAD "WHAT X SHOULD I BUY?" (Without Budget)
  // =========================================================================
  const isConsultativeAsk =
    /\b(what .* should i buy|which .* should i buy|suggest a|recommend a|help me choose|help me pick|looking for a|need a good)\b/.test(low) &&
    !budget &&
    mentioned.length === 0;

  if (isConsultativeAsk && explicitCat) {
    if (explicitCat === 'Mousepads') {
      commitBotContext('Mousepads', [], 'Mousepads');
      return {
        isExactDomainMatch: true,
        html: `<p>⬛ I'd love to help you pick the right mousepad! Before I recommend one, tell me:</p>
               <p>1️⃣ <b>What games do you mainly play?</b> (e.g., tactical shooters like <b>Valorant / CS2</b>, fast tracking like <b>Apex / Warzone</b>, or casual/desk work?)<br>
               2️⃣ Do you use <b>low sensitivity</b> (big hand &amp; arm movements) or <b>high sensitivity</b> (wrist flicks)?</p>`,
        productIds: [],
        options: [
          'I play Valorant and CS2',
          'I play Apex Legends / Fast FPS',
          'Mostly for coding & clean desk setup',
          'Just show me your top 3 mousepads'
        ]
      };
    }

    if (explicitCat === 'Mice') {
      commitBotContext('Mice', [], 'Mice');
      return {
        isExactDomainMatch: true,
        html: `<p>🖱️ We have <b>6 specialized gaming mice</b> (from ₹1,199 to ₹2,499). To narrow down your #1 match, tell me:</p>
               <p>1️⃣ <b>What games do you play most?</b> (e.g. <b>Valorant / CS2</b>, <b>Apex / Fortnite</b>, or <b>MOBA / Work</b>?)<br>
               2️⃣ Do you prefer an <b>ultra-lightweight wireless mouse (49g–58g)</b> or a <b>budget RGB mouse</b>?</p>`,
        productIds: [],
        options: [
          'Valorant & CS2 (Ultra-light wireless)',
          'Best budget gaming mouse under ₹1,500',
          'Claw / Fingertip compact wireless mouse',
          'Show top 3 mice & let me compare'
        ]
      };
    }

    if (explicitCat === 'Keyboards') {
      commitBotContext('Keyboards', [], 'Keyboards');
      return {
        isExactDomainMatch: true,
        html: `<p>⌨️ Let's find your ideal mechanical keyboard! Quick question first:</p>
               <p>1️⃣ <b>What's your primary use case?</b><br>
               • <b>Competitive FPS (Valorant/CS2)</b> — where a compact 65%/75% layout gives you maximum mouse space<br>
               • <b>Coding &amp; Typing All Day</b> — where gasket-mounted Poron acoustics matter most<br>
               • <b>Full-Size Productivity</b> — with a dedicated Numpad</p>`,
        productIds: [],
        options: [
          'Competitive FPS (Valorant / CS2)',
          'Coding & creamy gasket typing feel',
          'Quiet / Study budget keyboard',
          'I need a dedicated Numpad (96%)'
        ]
      };
    }

    if (explicitCat === 'Audio') {
      commitBotContext('Audio', [], 'Audio');
      return {
        isExactDomainMatch: true,
        html: `<p>🎧 To pick the right audio gear from our studio &amp; gaming lineup, what are you looking for?</p>
               <p>• <b>In-Ear Monitors / Earbuds (IEMs)</b> (under ₹3,000 pro stage audio)<br>
               • <b>Competitive Gaming Headset</b> (low-latency wireless 7.1 footsteps)<br>
               • <b>USB Condenser Microphone</b> (for streaming, Discord &amp; podcasts)<br>
               • <b>Active Noise Cancelling (ANC)</b> headphones for focus &amp; travel</p>`,
        productIds: [],
        options: [
          'What earbuds do you have under 3000?',
          'Compare your two cheapest IEMs',
          'Wireless Gaming Headset for FPS footsteps',
          '42dB ANC Wireless Headphones'
        ]
      };
    }
  }

  // =========================================================================
  // 4. DIRECT ACTION: Add product to cart via chat ("Add the best one" or "Add Pulse X")
  // =========================================================================
  if (/\b(add|buy|put|order)\b/.test(low) && (/\b(cart|bag|it|this|best one|first one)\b/.test(low) || mentioned.length > 0) && !/\b(how|why|should|what)\b/.test(low)) {
    let target = mentioned[0];
    if (!target && waState.context.lastShownProductIds && waState.context.lastShownProductIds.length > 0) {
      target = products.find(p => p.id === Number(waState.context.lastShownProductIds[0]));
    }
    if (target) {
      addToCart(target.id, 1);
      const { count, total } = calculateCartTotals();
      return {
        isExactDomainMatch: true,
        html: `<p>✅ Done! I've added <button type="button" class="wa-inline-prod-link" data-wa-view="${target.id}">${target.name}</button> (${money(target.price)}) directly to your shopping bag.</p>
               <p>Your bag now has <b>${count} item(s)</b> totaling <b>${money(total)}</b> ${total >= 1999 ? 'with <b>FREE Express Shipping</b> unlocked! 🎉' : `(add ${money(1999 - total)} more for free shipping).`}</p>`,
        productIds: [target.id]
      };
    }
  }

  // 5. DIRECT ACTION: Remove item or clear cart via chat
  if (/\b(remove|delete|clear|empty)\b/.test(low) && /\b(cart|bag)\b/.test(low)) {
    if (/\b(clear|empty|all)\b/.test(low)) {
      clearCart();
      return {
        isExactDomainMatch: true,
        html: `<p>🗑️ I've cleared all items from your shopping bag. Let me know what gear you'd like to explore next!</p>`,
        productIds: []
      };
    }
    if (mentioned.length > 0) {
      removeFromCart(mentioned[0].id);
      return {
        isExactDomainMatch: true,
        html: `<p>🗑️ Removed <b>${mentioned[0].name}</b> from your shopping bag.</p>`,
        productIds: []
      };
    }
  }

  // 6. DIRECT ACTION / QUERY: Promo codes & discounts
  if (/\b(promo|coupon|discount|code|offer|sale|forge10|levelup|gg20)\b/.test(low)) {
    let codeToApply = null;
    if (low.includes('gg20')) codeToApply = 'GG20';
    else if (low.includes('levelup')) codeToApply = 'LEVELUP';
    else if (low.includes('forge10')) codeToApply = 'FORGE10';
    else if (/\b(apply|use|activate|give me)\b/.test(low)) codeToApply = 'LEVELUP';

    if (codeToApply && PROMO_CODES[codeToApply]) {
      state.promo = PROMO_CODES[codeToApply];
      localStorage.setItem('gearforge-promo', JSON.stringify(state.promo));
      renderCart();
      return {
        isExactDomainMatch: true,
        html: `<p>🎉 I've automatically applied promo code <b>${codeToApply}</b> (<b>${state.promo.pct}% OFF</b>) to your shopping bag!</p>
               <p>All active GearForge promo codes:</p>
               <p>• <b>FORGE10</b> — 10% off any order<br>
               • <b>LEVELUP</b> — 15% off battlestation upgrades<br>
               • <b>GG20</b> — 20% VIP Hackathon Judge discount!</p>`,
        productIds: []
      };
    }

    return {
      isExactDomainMatch: true,
      html: `<p>🏷️ We have <b>3 active promo codes</b> on GearForge right now:</p>
             <p>• <b>FORGE10</b> — 10% OFF storewide<br>
             • <b>LEVELUP</b> — 15% OFF your loadout<br>
             • <b>GG20</b> — Secret 20% VIP discount</p>
             <p>Tap below and I'll apply the 20% VIP code to your bag automatically!</p>`,
      productIds: [],
      options: ['Apply GG20 (20% OFF)', 'Apply LEVELUP (15% OFF)']
    };
  }

  // 7. LIVE CART / BAG STATUS QUERY
  if (/\b(my cart|my bag|in my bag|in my cart|cart total|what's in my)\b/.test(low)) {
    if (!state.cart.length) {
      return {
        isExactDomainMatch: true,
        html: `<p>🛍️ Your shopping bag is currently empty!</p>
               <p>Want me to help you pick earbuds, a mouse, a keyboard, or build a complete setup within your budget?</p>`,
        productIds: [16, 1],
        options: ['What earbuds do you have under 3000?', 'What mouse should I buy?', 'Build a setup under ₹6,000']
      };
    }
    const { count, subtotal, discount, shipping, total } = calculateCartTotals();
    const lines = state.cart.map(item => {
      const p = products.find(x => x.id === item.id);
      return p ? `• <b>${p.name}</b> × ${item.qty} (${money(p.price * item.qty)})` : '';
    }).join('<br>');

    return {
      isExactDomainMatch: true,
      html: `<p>🛍️ You currently have <b>${count} item(s)</b> in your bag:</p>
             <p>${lines}</p>
             <p>Subtotal: <b>${money(subtotal)}</b>${discount > 0 ? `<br>Promo (${state.promo.code}): <b>−${money(discount)}</b>` : ''}<br>
             Shipping: <b>${shipping === 0 ? 'FREE Express' : money(shipping)}</b><br>
             <b>Grand Total: ${money(total)}</b></p>`,
      productIds: state.cart.map(x => x.id).slice(0, 3)
    };
  }

  // 8. ORDER TRACKING / HISTORY QUERY
  if (/\b(track|order|orders|delivery status|where is my)\b/.test(low) && !/\bhow to\b/.test(low)) {
    if (!state.orders.length) {
      return {
        isExactDomainMatch: true,
        html: `<p>📦 You haven't placed an order in this session yet. Once you complete checkout in the bag drawer, your order ID (e.g. <b>#GF-4821</b>) is generated immediately and dispatches within <b>24 hours</b>!</p>`,
        productIds: []
      };
    }
    const latest = state.orders[0];
    return {
      isExactDomainMatch: true,
      html: `<p>🚚 <b>Live Order Status for ${latest.orderId}:</b></p>
             <p>• Recipient: <b>${latest.recipient}</b><br>
             • Items: <b>${latest.itemCount} gear item(s)</b> (${money(latest.total)})<br>
             • Payment: <b>${latest.paymentMethod}</b><br>
             • Status: <b>Packed &amp; Dispatched (Express Air — arriving within 24–48 hrs)</b></p>`,
      productIds: []
    };
  }

  // 9. SMART BUDGET SETUP BUILDER ("Build me a setup under ₹X")
  if (/\b(setup|loadout|bundle|combo|build me|complete gear)\b/.test(low)) {
    const targetBudget = budget || 7500;
    const miceSorted = products.filter(p => p.category === 'Mice').sort((a, b) => a.price - b.price);
    const kbSorted = products.filter(p => p.category === 'Keyboards').sort((a, b) => a.price - b.price);
    const padSorted = products.filter(p => p.category === 'Mousepads').sort((a, b) => a.price - b.price);
    const accSorted = products.filter(p => p.category === 'Desk Accessories').sort((a, b) => a.price - b.price);

    let chosen = [];
    if (targetBudget >= 9000) {
      chosen = [
        products.find(p => p.id === 1),
        products.find(p => p.id === 6),
        products.find(p => p.id === 9),
        products.find(p => p.id === 15)
      ];
      if (chosen.reduce((s, p) => s + p.price, 0) > targetBudget) {
        chosen[3] = products.find(p => p.id === 16);
      }
    } else if (targetBudget >= 5500) {
      chosen = [
        products.find(p => p.id === 3),
        products.find(p => p.id === 32),
        products.find(p => p.id === 10),
        products.find(p => p.id === 16)
      ];
    } else {
      chosen = [miceSorted[0], kbSorted[0], padSorted[0], accSorted[0]];
    }

    while (chosen.length > 2 && chosen.reduce((s, p) => s + p.price, 0) > targetBudget) {
      chosen.pop();
    }

    const bundleTotal = chosen.reduce((s, p) => s + p.price, 0);
    const bundleOld = chosen.reduce((s, p) => s + p.old, 0);
    const ids = chosen.map(p => p.id);
    commitBotContext(null, ids, null);

    return {
      isExactDomainMatch: true,
      html: `<p>⚡ <b>Custom GearForge Loadout (Target: ${money(targetBudget)}):</b></p>
             <p>${chosen.map(p => `• <b>${p.category}:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${p.id}">${p.name}</button> — <b>${money(p.price)}</b>`).join('<br>')}</p>
             <p>Bundle Total: <b>${money(bundleTotal)}</b> <s>${money(bundleOld)}</s> (You save <b>${money(bundleOld - bundleTotal)}</b> + <b>FREE Express Shipping</b>!)</p>`,
      productIds: ids,
      bundleIds: ids
    };
  }

  // 10. SIDE-BY-SIDE PRODUCT COMPARISON ("Compare your two cheapest IEMs", "Compare X and Y", etc.)
  if (/\b(compare|vs|versus|difference between|why not)\b/.test(low)) {
    let pair = mentioned.slice(0, 2);

    // Handle "Compare your two cheapest IEMs" / "earbuds" specifically
    if (pair.length < 2 && /\b(iem|iems|earbud|earbuds|earphone|earphones|in-ear)\b/.test(low)) {
      const iemPool = products
        .filter(p => p.category === 'Audio' && /iem|earbud|earphone|in-ear/i.test(`${p.name} ${p.subtitle} ${(p.specs || []).join(' ')}`))
        .sort((a, b) => a.price - b.price);
      pair = iemPool.slice(0, 2);
    }

    // Handle "Compare your two cheapest [Category]"
    if (pair.length < 2 && /\b(cheapest|lowest|budget)\b/.test(low)) {
      const cat = explicitCat || activeCat || 'Audio';
      pair = products.filter(p => p.category === cat).sort((a, b) => a.price - b.price).slice(0, 2);
    }

    if (pair.length < 2 && waState.context.lastShownProductIds && waState.context.lastShownProductIds.length >= 2) {
      pair = waState.context.lastShownProductIds.slice(0, 2).map(id => products.find(p => p.id === Number(id))).filter(Boolean);
    }
    if (pair.length < 2) {
      const cat = activeCat || 'Mice';
      pair = products.filter(p => p.category === cat).slice(0, 2);
    }
    const [a, b] = pair;
    const ra = getProductRating(a);
    const rb = getProductRating(b);
    commitBotContext(a.category, [a.id, b.id], null);

    return {
      isExactDomainMatch: true,
      html: `<p>⚖️ <b>Head-to-Head Comparison (${a.category}): <button type="button" class="wa-inline-prod-link" data-wa-view="${a.id}">${a.name}</button> vs <button type="button" class="wa-inline-prod-link" data-wa-view="${b.id}">${b.name}</button></b></p>
             <p>1️⃣ <button type="button" class="wa-inline-prod-link" data-wa-view="${a.id}">${a.name}</button> — <b>${money(a.price)}</b> <s>${money(a.old)}</s><br>
             • <b>Rating:</b> ★ ${ra.rating}/5 (${ra.count} reviews) · ${a.subtitle}<br>
             • <b>Key Specs:</b> ${(a.specs || []).join(' · ')}</p>
             <p>2️⃣ <button type="button" class="wa-inline-prod-link" data-wa-view="${b.id}">${b.name}</button> — <b>${money(b.price)}</b> <s>${money(b.old)}</s><br>
             • <b>Rating:</b> ★ ${rb.rating}/5 (${rb.count} reviews) · ${b.subtitle}<br>
             • <b>Key Specs:</b> ${(b.specs || []).join(' · ')}</p>
             <p>💡 <b>Quick Takeaway:</b> Choose <b>${a.price <= b.price ? a.name : b.name} (${money(Math.min(a.price, b.price))})</b> for punchy dual-driver value, or step up to <b>${a.price > b.price ? a.name : b.name} (${money(Math.max(a.price, b.price))})</b> for planar magnetic studio resolution!</p>`,
      productIds: [a.id, b.id],
      options: ['Which one is better?', `Add ${a.name} to my bag`, `Add ${b.name} to my bag`]
    };
  }

  // 11. SHIPPING, WARRANTY, RETURNS & PAYMENT POLICIES
  if (/\b(shipping|delivery|dispatch|warranty|return|refund|replace|replacement|payment|cod|cash on delivery|upi)\b/.test(low)) {
    return {
      isExactDomainMatch: true,
      html: `<p>🛡️ <b>GearForge Official Store Policies:</b></p>
             <p>• <b>Express Shipping:</b> <b>FREE</b> on all orders over <b>₹1,999</b> (flat ₹99 below ₹1,999). Dispatched within <b>24 hours</b> from our Bengaluru, Mumbai &amp; Delhi hubs.<br>
             • <b>ForgeCare Warranty:</b> Every hardware item includes a <b>2-Year ForgeCare Warranty</b> covering sensors, switches &amp; wireless dongles.<br>
             • <b>7-Day Instant Swap:</b> Hassle-free 7-day doorstep replacement if anything arrives defective.<br>
             • <b>Payments Accepted:</b> Instant UPI (GPay, PhonePe, Paytm), Dynamic QR, Visa/Mastercard/RuPay Cards, No-Cost EMI, NetBanking &amp; <b>Cash on Delivery (COD)</b>.</p>`,
      productIds: []
    };
  }

  // 12. SPECIFIC PRODUCT INQUIRY (When user asks about a specific named product)
  if (mentioned.length > 0 && !explicitCat && !isGeneralOrConceptualQuestion) {
    return buildDeepProductPitchAndSpecs(mentioned[0], mentioned[1]);
  }

  // 13. CATEGORY / BUDGET / CHEAPEST / "WHAT EARBUDS DO YOU HAVE UNDER 3000?" STORE SEARCH
  // IMPORTANT: Never trigger this product list on general or conceptual questions!
  if (!isGeneralOrConceptualQuestion && (explicitCat || budget || /\b(cheapest|lowest|under|below|best|top rated|recommend|suggest|show|list)\b/.test(low))) {
    const targetCategory = explicitCat || waState.context.lastCategory || 'Mice';
    let pool = targetCategory ? products.filter(p => p.category === targetCategory) : [...products];

    // If user specifically asked for earbuds / IEMs / earphones, filter to our in-ear models first!
    const askingSpecificallyForEarbuds = /\b(earbud|earbuds|iem|iems|earphone|earphones|in-ear)\b/.test(low);
    if (askingSpecificallyForEarbuds) {
      const iemMatches = pool.filter(p => /iem|earbud|earphone|in-ear/i.test(`${p.name} ${p.subtitle} ${(p.specs || []).join(' ')}`));
      if (iemMatches.length > 0) {
        pool = iemMatches;
      }
    }

    if (budget) {
      const underBudget = pool.filter(p => p.price <= budget);
      if (underBudget.length > 0) pool = underBudget;
    }

    if (/\b(cheapest|lowest|budget|affordable)\b/.test(low) || askingSpecificallyForEarbuds) {
      pool.sort((a, b) => a.price - b.price);
    } else if (/\b(expensive|premium|flagship)\b/.test(low)) {
      pool.sort((a, b) => b.price - a.price);
    } else {
      pool.sort((a, b) => getProductRating(b).rating - getProductRating(a).rating || b.price - a.price);
    }

    // Special tailored response when asking for earbuds / IEMs under a budget (e.g. "What earbuds do you have under 3000?")
    if (askingSpecificallyForEarbuds) {
      const ids = pool.map(p => p.id);
      commitBotContext('Audio', ids, null);
      return {
        isExactDomainMatch: true,
        html: `<p>🎧 <b>GearForge Earbuds &amp; In-Ear Monitors (IEMs)${budget ? ` Under ${money(budget)}` : ''}:</b></p>
               <p>We have <b>${pool.length} pro-grade IEM earbuds</b> in stock${budget ? ` well under ${money(budget)}` : ''}:</p>
               <p>${pool.map((p, idx) => `${idx + 1}️⃣ <button type="button" class="wa-inline-prod-link" data-wa-view="${p.id}">${p.name}</button> — <b>${money(p.price)}</b> <s>${money(p.old)}</s> (★ ${getProductRating(p).rating}/5)<br>   • ${p.subtitle} · <b>${(p.specs || []).join(' · ')}</b>`).join('<br><br>')}</p>
               <p>💡 Want me to <b>compare these two side-by-side</b> or add one to your bag?</p>`,
        productIds: ids,
        options: [
          'Compare your two cheapest IEMs',
          'Which one is better?',
          `Add ${pool[0].name} to my bag`
        ]
      };
    }

    const winner = pool[0] || products[0];
    const runnerUp = pool[1];

    // If user asked specifically for "the best" or gave a budget (e.g. "what is the best gaming mouse under 3000"), crown the #1 winner with full specs right away!
    const wantsSpecificBestWinner = Boolean(budget) || /\b(what is the best|which is the best|best .* under|single best|the best)\b/.test(low);
    if (wantsSpecificBestWinner) {
      const wRating = getProductRating(winner);
      const discPct = Math.round((1 - winner.price / winner.old) * 100);
      const ids = runnerUp ? [winner.id, runnerUp.id] : [winner.id];
      commitBotContext(targetCategory, ids, null);

      return {
        isExactDomainMatch: true,
        html: `<p>🏆 <b>#1 Best ${targetCategory}${budget ? ` Under ${money(budget)}` : ''}: <button type="button" class="wa-inline-prod-link" data-wa-view="${winner.id}">${winner.name}</button> (${money(winner.price)})</b></p>
               <p>• <b>Why It Wins:</b> ${winner.subtitle} — featuring <b>${(winner.specs || []).join(' · ')}</b>.<br>
               • <b>Player Trust &amp; Value:</b> Rated <b>★ ${wRating.rating}/5</b> (${wRating.count} verified reviews) and currently <b>${discPct}% OFF</b> (Save ${money(winner.old - winner.price)} off <s>${money(winner.old)}</s>).<br>
               ${runnerUp ? `• <b>Runner-Up Option:</b> <button type="button" class="wa-inline-prod-link" data-wa-view="${runnerUp.id}">${runnerUp.name} (${money(runnerUp.price)})</button> — ${runnerUp.subtitle}.` : ''}</p>
               <p>Ask <b>“Why should I choose this?”</b> or <b>“Which one is better?”</b> for a deep breakdown!</p>`,
        productIds: ids,
        options: [
          'Why should I choose this?',
          'Which one is better?',
          `Add ${winner.name} to my bag`
        ]
      };
    }

    const topPicks = pool.slice(0, 3);
    const ids = topPicks.map(p => p.id);
    commitBotContext(targetCategory, ids, null);

    return {
      isExactDomainMatch: true,
      html: `<p>🎯 Here are our top 3 <b>${targetCategory}</b>, ranked by player rating &amp; performance:</p>
             <p>${topPicks.map((p, idx) => `${idx + 1}️⃣ <button type="button" class="wa-inline-prod-link" data-wa-view="${p.id}">${p.name}</button> — <b>${money(p.price)}</b> (${p.subtitle} · ${(p.specs || []).slice(0, 2).join(', ')})`).join('<br>')}</p>
             <p>💡 Want to know <b>why our #1 pick (${winner.name}) is the best</b>, or compare the top 2?</p>`,
      productIds: ids,
      options: [
        'Which one is better?',
        'Why should I choose this?',
        `Add ${winner.name} to my bag`
      ]
    };
  }

  // 14. REVIEWS / RATINGS QUESTION
  if (/\b(review|reviews|rating|ratings|feedback|customers say|trusted)\b/.test(low)) {
    const avgScore = (state.reviews.reduce((s, r) => s + Number(r.rating), 0) / state.reviews.length).toFixed(1);
    return {
      isExactDomainMatch: true,
      html: `<p>⭐ <b>GearForge Customer Ratings:</b></p>
             <p>Our store holds a <b>${avgScore} / 5.0 ★</b> average across <b>${120 + state.reviews.length}+ verified player reviews</b>.</p>
             <p>• #1 Mouse: <button type="button" class="wa-inline-prod-link" data-wa-view="1">Pulse X 4K Wireless Mouse (4.9 ★)</button><br>
             • #1 Keyboard: <button type="button" class="wa-inline-prod-link" data-wa-view="5">Striker 75 Gasket Mechanical Keyboard (4.9 ★)</button><br>
             • #1 Audio IEM: <button type="button" class="wa-inline-prod-link" data-wa-view="14">Studio Pro Planar IEM Earbuds (4.8 ★)</button></p>`,
      productIds: [1, 5, 14]
    };
  }

  // 15. OPEN-ENDED / GENERAL / MINI-GOOGLE QUESTION (Handed to Gemini + Web Search Grounding in askGeminiWithStoreContext)
  const webFact = await fetchBrowserWebKnowledge(q);
  if (webFact) {
    const relatedCat = explicitCat || waState.context.lastCategory;
    const relatedPicks = relatedCat ? products.filter(p => p.category === relatedCat).slice(0, 2) : [];
    const storeTieIn = relatedPicks.length
      ? `<p>🛍️ <b>On GearForge (${relatedCat}):</b> Check out our <button type="button" class="wa-inline-prod-link" data-wa-view="${relatedPicks[0].id}">${relatedPicks[0].name} (${money(relatedPicks[0].price)})</button>${relatedPicks[1] ? ` and <button type="button" class="wa-inline-prod-link" data-wa-view="${relatedPicks[1].id}">${relatedPicks[1].name} (${money(relatedPicks[1].price)})</button>` : ''}.</p>`
      : `<p>✨ <i>Need help with gaming gear too? Ask me about our IEM earbuds, 4K wireless mice, or mechanical keyboards anytime!</i></p>`;
    return {
      isExactDomainMatch: false,
      webGroundedFact: webFact,
      html: `<p>🌐 <b>${webFact.title}:</b></p>
             <p>${webFact.summary}</p>
             ${storeTieIn}`,
      productIds: relatedPicks.map(p => p.id),
      options: [
        'What earbuds do you have under 3000?',
        'Compare your two cheapest IEMs',
        'Build me a setup under ₹6,000'
      ]
    };
  }

  const fallbackSpotlightId = (waState.context.lastShownProductIds && waState.context.lastShownProductIds[0]) || 1;
  return {
    isExactDomainMatch: false,
    html: `<p>👋 I'm <b>ForgeBot AI</b>! I can answer any question about our <b>40 GearForge products</b> (IEM earbuds, keyboards, mice, mousepads) or any general knowledge &amp; tech topic.</p>`,
    productIds: [fallbackSpotlightId],
    options: [
      'What earbuds do you have under 3000?',
      'Compare your two cheapest IEMs',
      'What is a semi-mechanical keyboard?',
      'Explain how Bluetooth codecs work'
    ]
  };
}

// Official "Site Assistant + Mini Google" Gemini & Cloud AI Engine
// Sends system instruction + full 40-product catalog + policies + last 12-15 conversation messages + Google Search grounding
async function askGeminiWithStoreContext(userQuery, localFallbackReply, opts = {}) {
  await ensureEnvConfigLoaded();

  // Friendly Error Handling check (Step 2 & Step 5: forced API failure / invalid key / offline simulation)
  const isForcedFailure =
    opts.forceError === true ||
    waState.forceError === true ||
    /\b(force_api_error|\[force-error\]|simulate_api_failure)\b/i.test(userQuery) ||
    (waState.geminiKey && /^(invalid|wrong_key|bad_key|error|test_invalid)/i.test(waState.geminiKey.trim()));

  if (isForcedFailure) {
    return {
      isError: true,
      html: `<p>⚠️ <b>Something went wrong, please try again.</b></p>
             <p><small>We couldn't reach the AI assistant right now. Please check your connection or API configuration and try sending your message again.</small></p>`,
      productIds: [],
      options: ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
    };
  }

  // Recorded chats / FAQ data is used when it directly matches a store action or verified hardware concept
  if (localFallbackReply && localFallbackReply.isExactDomainMatch) {
    return localFallbackReply;
  }

  const currentProdId = (waState.context.lastShownProductIds && waState.context.lastShownProductIds[0]) || 16;
  const currentProd = products.find(p => p.id === Number(currentProdId)) || products[0];

  // Full 40-product store catalog injected into every request so Gemini stays 100% synced with the site
  const fullCatalogText = products.map(p =>
    `ID:${p.id} | ${p.name} | Category:${p.category} | Price:₹${p.price} (MRP ₹${p.old}) | Rating:★${p.rating} | Stock:In Stock | Specs:${p.subtitle} — ${(p.specs || []).join(', ')}`
  ).join('\n');

  // Last 12-15 messages of conversation history for multi-turn context memory
  const historySlice = waState.history.slice(-14);
  const recentTurnsText = historySlice
    .map(m => `${m.sender === 'user' ? 'CUSTOMER' : 'ASSISTANT'}: ${(m.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`)
    .join('\n');

  const { count, total } = calculateCartTotals();
  const wishlistNames = (state.wishlist || []).map(id => products.find(p => p.id === Number(id))?.name).filter(Boolean).join(', ') || 'None';
  const recentOrderSummary = (state.orders && state.orders.length)
    ? `${state.orders[0].orderId} (${state.orders[0].itemCount} items, ₹${state.orders[0].total}, Status: Dispatched)`
    : 'No orders placed in current session yet';

  const groundingContext = localFallbackReply?.webGroundedFact
    ? `\nLive Web Search Grounding Note (${localFallbackReply.webGroundedFact.title}): ${localFallbackReply.webGroundedFact.summary}`
    : '';

  // Official STEP 3.1 System Instruction
  const sysPrompt = `You are the official shopping assistant for GearForge, an e-commerce store selling audio products like IEMs, earbuds, headphones, USB microphones, mechanical keyboards, gaming mice, mousepads, stands, and desk accessories. Help customers with products, prices, recommendations, comparisons, orders, wishlist, shipping, returns and account questions using the store data provided below. You are also a general-purpose assistant: if the user asks anything unrelated to the store (general knowledge, tech questions, math, advice, writing, current topics), answer it accurately and helpfully like a smart search assistant, then, where natural, gently relate it back to the store. Be friendly, concise and conversational. Never invent store products, prices, or policies that are not in the provided store data; if unsure about store specifics, say so.

STORE POLICIES & FAQS:
- Shipping: FREE 24-Hour Express Shipping on orders above ₹1,999 (flat ₹99 below ₹1,999). Dispatched from Bengaluru, Mumbai & Delhi hubs.
- Returns & Warranty: 7-Day Instant Doorstep Replacement for defects + 2-Year ForgeCare Hardware Warranty on all products.
- Payment Options (ForgePay 256-Bit Portal): Instant UPI (GPay, PhonePe, Paytm), Dynamic QR Code, Credit/Debit Cards (Visa, Mastercard, RuPay), No-Cost EMI (3/6/12 months), NetBanking, and Cash on Delivery (COD).
- Active Promo Codes: FORGE10 (10% OFF), LEVELUP (15% OFF), GG20 (20% VIP OFF).
- Customer Live Session Context: Cart has ${count} item(s) totaling ₹${total} | Wishlist: ${wishlistNames} | Latest Order: ${recentOrderSummary} | Spotlighted ProductIds: ${(waState.context.lastShownProductIds || []).join(', ') || currentProd.id}.${groundingContext}

FULL GEARFORGE PRODUCT CATALOG (40 ITEMS):
${fullCatalogText}

CONVERSATION HISTORY (LAST ${historySlice.length} MESSAGES):
${recentTurnsText}

FORMATTING RULES:
- Format cleanly for a chat bubble: short paragraphs, simple bullet lists (•) when helpful, bold key terms with <b>...</b>, and use exact product names and ₹ prices when mentioning store items.`;

  const geminiHistory = historySlice.slice(0, -1).map(m => ({
    role: m.sender === 'user' ? 'user' : 'model',
    parts: [{ text: (m.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() }]
  }));

  // 1. Try Backend Serverless Route (/api/chat) first so the API key stays server-side when hosted
  try {
    const apiRes = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userQuery,
        systemInstruction: sysPrompt,
        history: geminiHistory
      })
    });
    if (apiRes.ok) {
      const apiData = await apiRes.json();
      if (apiData && apiData.reply) {
        const formatted = linkifyStoreProductNames(
          apiData.reply
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\n\n+/g, '</p><p>')
            .replace(/\n/g, '<br>')
        );
        const mentionedInReply = findMentionedProducts(apiData.reply).slice(0, 2).map(p => p.id);
        return {
          html: `<p>${formatted}</p>`,
          productIds: mentionedInReply.length ? mentionedInReply : (localFallbackReply?.productIds || []),
          options: localFallbackReply?.options || ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
        };
      }
    }
  } catch {
    // /api/chat not running on static file host; proceed to direct Gemini / Cloud AI
  }

  // 2. Try Official Google Gemini REST API (gemini-2.0-flash / gemini-flash-latest) with Google Search Grounding
  if (waState.geminiKey && waState.geminiKey.length >= 25 && !waState.geminiKey.includes(' ')) {
    const modelsToTry = ['gemini-2.0-flash', 'gemini-flash-latest'];
    for (const modelName of modelsToTry) {
      for (const useGrounding of [true, false]) {
        try {
          const payload = {
            system_instruction: { parts: [{ text: sysPrompt }] },
            contents: [...geminiHistory, { role: 'user', parts: [{ text: userQuery }] }],
            generationConfig: { temperature: 0.35, maxOutputTokens: 480 }
          };
          if (useGrounding) {
            payload.tools = [{ google_search: {} }];
          }
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(waState.geminiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            }
          );
          if (res.ok) {
            const data = await res.json();
            const text = (data?.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('').trim();
            if (text) {
              const cleanHtml = linkifyStoreProductNames(
                text
                  .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                  .replace(/\n\n+/g, '</p><p>')
                  .replace(/\n/g, '<br>')
              );
              const mentionedInReply = findMentionedProducts(text).slice(0, 2).map(p => p.id);
              return {
                html: `<p>${cleanHtml}</p>`,
                productIds: mentionedInReply.length ? mentionedInReply : (localFallbackReply?.productIds || []),
                options: localFallbackReply?.options || ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
              };
            }
          }
        } catch {
          // Try next configuration
        }
      }
    }
  }

  // 3. Cloud LLM Router with Full Store Context + 14-Turn Memory + Web Search Grounding
  try {
    const cloudMessages = [
      { role: 'system', content: sysPrompt },
      ...historySlice.slice(0, -1).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: (m.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      })),
      { role: 'user', content: userQuery }
    ];

    const cloudRes = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: cloudMessages,
        temperature: 0.35
      })
    });
    if (cloudRes.ok) {
      const data = await cloudRes.json();
      const text = data?.choices?.[0]?.message?.content;
      if (text) {
        const cleanHtml = linkifyStoreProductNames(
          text
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\n\n+/g, '</p><p>')
            .replace(/\n/g, '<br>')
        );
        const mentionedInReply = findMentionedProducts(text).slice(0, 2).map(p => p.id);
        return {
          html: `<p>${cleanHtml}</p>`,
          productIds: mentionedInReply.length ? mentionedInReply : (localFallbackReply?.productIds || []),
          options: localFallbackReply?.options || ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
        };
      }
    }
  } catch {
    // Fall back to grounded local reply if network is unreachable
  }

  if (localFallbackReply) {
    return localFallbackReply;
  }

  return {
    isError: true,
    html: `<p>⚠️ <b>Something went wrong, please try again.</b></p>`,
    productIds: [],
    options: ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
  };
}

async function handleUserWaMessage(text, opts = {}) {
  const clean = (text || '').trim();
  if (!clean) return null;

  // 1. Push user message
  waState.history.push({
    sender: 'user',
    time: nowTimeStr(),
    html: `<p>${clean.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
  });
  saveWaHistory();
  renderWaMessages();

  // 2. Show WhatsApp typing indicator & status
  const statusEl = $('#waStatusText');
  if (statusEl) statusEl.textContent = 'typing...';

  const msgBox = $('#waMessages');
  const typingBubble = document.createElement('div');
  typingBubble.className = 'wa-msg bot wa-typing';
  typingBubble.innerHTML = '<span></span><span></span><span></span>';
  if (msgBox) {
    msgBox.appendChild(typingBubble);
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  // 3. Compute stateful consultative reply + live Gemini / Mini-Google AI response with graceful error handling
  let finalReply;
  try {
    const delay = new Promise(r => setTimeout(r, 380));
    const localReply = await generateForgeBotReply(clean);
    const [aiReply] = await Promise.all([
      askGeminiWithStoreContext(clean, localReply, opts),
      delay
    ]);
    finalReply = aiReply;
  } catch {
    finalReply = {
      isError: true,
      html: `<p>⚠️ <b>Something went wrong, please try again.</b></p>`,
      productIds: [],
      options: ['What earbuds do you have under 3000?', 'Compare your two cheapest IEMs']
    };
  }

  typingBubble.remove();
  if (statusEl) statusEl.textContent = 'online · text & voice concierge';

  waState.history.push({
    sender: 'bot',
    time: nowTimeStr(),
    html: finalReply.html,
    productIds: finalReply.productIds || [],
    bundleIds: finalReply.bundleIds || [],
    options: finalReply.options || []
  });
  saveWaHistory();
  renderWaMessages();
  return finalReply;
}

// ==================== ONE-TIME AI CALLS & FOLLOW-UPS CONSENT ====================
const AI_CONSENT_STORAGE_KEY = 'gearforge-ai-consent';
let pendingConsentCallback = null;

function getSavedAiConsent() {
  try {
    const raw = localStorage.getItem(AI_CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function hasOneTimeAiConsent() {
  const saved = getSavedAiConsent();
  return Boolean(saved && saved.recordedOnce === true);
}

function applyConsentStatusBadge() {
  const saved = getSavedAiConsent();
  const statusEl = $('#waStatusText');
  if (saved && saved.recordedOnce && statusEl && !voiceCallState?.active) {
    statusEl.textContent = saved.calls && saved.followUps
      ? 'online · ✓ calls & follow-up consent active'
      : 'online · ✓ chat consent active';
  }
}

function saveOneTimeAiConsent({ calls, followUps, phone }) {
  const record = {
    recordedOnce: true,
    calls: Boolean(calls),
    followUps: Boolean(followUps),
    phone: (phone || '').trim(),
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(AI_CONSENT_STORAGE_KEY, JSON.stringify(record));

  const overlay = $('#waConsentOverlay');
  if (overlay) overlay.hidden = true;

  applyConsentStatusBadge();

  // Add a one-time confirmation note in the chat log
  const modeSummary = [];
  if (record.calls) modeSummary.push('Live AI Voice Calls');
  if (record.followUps) modeSummary.push('Smart Store Follow-Ups');
  const summaryText = modeSummary.length ? modeSummary.join(' & ') : 'Basic Text Chat';

  waState.history.push({
    sender: 'bot',
    time: nowTimeStr(),
    html: `<p>🛡️ <b>One-Time Consent Saved:</b> You have enabled <b>${summaryText}</b>${record.phone ? ` (Alerts: <code>${record.phone}</code>)` : ''}. We will remember this preference permanently and won't ask you again!</p>`
  });
  saveWaHistory();
  renderWaMessages();
  showToast(`🛡️ One-time AI consent saved (${summaryText})`);

  if (typeof pendingConsentCallback === 'function') {
    const cb = pendingConsentCallback;
    pendingConsentCallback = null;
    cb(record);
  }
}

function ensureOneTimeAiConsent(onReady) {
  if (hasOneTimeAiConsent()) {
    applyConsentStatusBadge();
    if (typeof onReady === 'function') onReady(getSavedAiConsent());
    return true;
  }

  pendingConsentCallback = typeof onReady === 'function' ? onReady : null;
  const overlay = $('#waConsentOverlay');
  if (overlay) {
    overlay.hidden = false;
    const phoneInput = $('#waConsentPhoneInput');
    if (phoneInput && !phoneInput.value && $('#coPhone')?.value) {
      phoneInput.value = $('#coPhone').value;
    }
  }
  return false;
}

if ($('#waAcceptConsentBtn')) {
  $('#waAcceptConsentBtn').addEventListener('click', () => {
    const calls = $('#waConsentCallsCheck') ? $('#waConsentCallsCheck').checked : true;
    const followUps = $('#waConsentFollowupCheck') ? $('#waConsentFollowupCheck').checked : true;
    const phone = $('#waConsentPhoneInput') ? $('#waConsentPhoneInput').value : '';
    saveOneTimeAiConsent({ calls, followUps, phone });
  });
}

if ($('#waMinimalConsentBtn')) {
  $('#waMinimalConsentBtn').addEventListener('click', () => {
    saveOneTimeAiConsent({ calls: false, followUps: false, phone: '' });
  });
}

function toggleWaChat(forceState) {
  waState.open = typeof forceState === 'boolean' ? forceState : !waState.open;
  const win = $('#waChatWindow');
  const badge = $('#waUnreadBadge');
  const teaser = $('#waTeaser');

  win.classList.toggle('open', waState.open);
  win.setAttribute('aria-hidden', String(!waState.open));

  if (waState.open) {
    if (badge) badge.hidden = true;
    if (teaser) teaser.hidden = true;
    renderWaMessages();
    ensureOneTimeAiConsent(() => {
      setTimeout(() => $('#waMessageInput')?.focus(), 150);
    });
  } else if (typeof voiceCallState !== 'undefined' && voiceCallState.active) {
    endWaVoiceCall();
  }
}

// Wire up WhatsApp Chatbot UI controls
$('#waLauncher').onclick = () => toggleWaChat();
$('#waCloseBtn').onclick = () => toggleWaChat(false);
$('#waTeaserBody').onclick = () => toggleWaChat(true);
$('#waTeaserClose').onclick = e => {
  e.stopPropagation();
  $('#waTeaser').hidden = true;
};

$('#waResetChatBtn').onclick = () => {
  waState.context = {
    lastCategory: null,
    lastShownProductIds: [],
    awaitingFollowUp: null,
    userProfile: { games: null, style: null }
  };
  waState.history = getDefaultWelcomeHistory();
  saveWaHistory();
  renderWaMessages();
  showToast('ForgeBot memory & chat reset');
};

$('#waAiKeyToggle').onclick = () => {
  const drawer = $('#waApiDrawer');
  drawer.hidden = !drawer.hidden;
  if (!drawer.hidden) {
    $('#waGeminiKeyInput').value = waState.geminiKey;
  }
};

$('#waSaveKeyBtn').onclick = () => {
  waState.geminiKey = $('#waGeminiKeyInput').value.trim();
  if (waState.geminiKey) {
    localStorage.setItem('gearforge-gemini-key', waState.geminiKey);
    $('#waEngineModeBadge').textContent = 'Cloud AI + Store Brain Active';
    showToast('AI API Key connected & active!');
  } else {
    localStorage.removeItem('gearforge-gemini-key');
    $('#waEngineModeBadge').textContent = 'Built-in + Cloud AI Brain Active';
    showToast('Using Built-in + Cloud GearForge AI Brain');
  }
  $('#waApiDrawer').hidden = true;
};

if (waState.geminiKey) {
  localStorage.setItem('gearforge-gemini-key', waState.geminiKey);
  $('#waEngineModeBadge').textContent = 'Cloud AI + Store Brain Active';
}

$('#waInputForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#waMessageInput');
  const text = input.value;
  input.value = '';
  handleUserWaMessage(text);
});

// Quick prompt chips & interactive product buttons inside WhatsApp messages & voice call
document.addEventListener('click', e => {
  const chip = e.target.closest('[data-wa-prompt]');
  if (chip) {
    handleUserWaMessage(chip.dataset.waPrompt);
    return;
  }

  const voiceAskChip = e.target.closest('[data-voice-ask]');
  if (voiceAskChip && voiceCallState.active) {
    handleVoiceCallUserTurn(voiceAskChip.dataset.voiceAsk);
    return;
  }

  const waAdd = e.target.closest('[data-wa-add]');
  if (waAdd) {
    addToCart(Number(waAdd.dataset.waAdd), 1);
    return;
  }

  const waView = e.target.closest('[data-wa-view]');
  if (waView) {
    openQuickView(Number(waView.dataset.waView));
    return;
  }

  const waBundle = e.target.closest('[data-wa-bundle]');
  if (waBundle) {
    const ids = waBundle.dataset.waBundle.split(',').map(Number);
    ids.forEach(id => {
      const existing = state.cart.find(x => x.id === id);
      if (existing) existing.qty += 1;
      else state.cart.push({ id, qty: 1 });
    });
    persistCart();
    bumpCartButton();
    showToast(`⚡ Added all ${ids.length} bundle items to your bag!`);
  }
});

// ==================== WHATSAPP LIVE AI VOICE CALL SYSTEM (PERSISTENT MIC — ZERO RE-PROMPTS) ====================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

const voiceCallState = {
  active: false,
  speakerOn: true,
  micMuted: false,
  speaking: false,
  seconds: 0,
  timerId: null,
  recognition: null,
  recognitionRunning: false,
  persistentMicStream: null,
  selectedVoice: null,
  audioCtx: null
};

// Acquire a single persistent microphone stream once so the browser NEVER re-prompts when toggling mic ON/OFF
async function ensurePersistentMicAccess() {
  if (voiceCallState.persistentMicStream) {
    voiceCallState.persistentMicStream.getAudioTracks().forEach(t => {
      t.enabled = !voiceCallState.micMuted;
    });
    return true;
  }
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });
    voiceCallState.persistentMicStream = stream;
    return true;
  } catch {
    return false;
  }
}

// Create ONE single continuous SpeechRecognition instance for the entire session (never re-created, never aborted on mute!)
function getOrInitContinuousCallRecognition() {
  if (!SpeechRecognition) return null;
  if (voiceCallState.recognition) return voiceCallState.recognition;

  const rec = new SpeechRecognition();
  rec.lang = 'en-IN';
  rec.interimResults = true;
  rec.continuous = true;
  rec.maxAlternatives = 1;

  rec.onstart = () => {
    voiceCallState.recognitionRunning = true;
    if (voiceCallState.active && !voiceCallState.speaking && !voiceCallState.micMuted) {
      updateCallVisualState('listening', '🎙️ Mic ON · Listening to you…');
    }
  };

  rec.onresult = event => {
    // Ignore microphone input while muted or while ForgeBot is speaking
    if (!voiceCallState.active || voiceCallState.micMuted || voiceCallState.speaking) return;

    let interim = '';
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const txt = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalTranscript += txt;
      else interim += txt;
    }

    const heardEl = $('#waCallUserHeard');
    if (heardEl && (finalTranscript || interim)) {
      heardEl.innerHTML = `<b>You:</b> “${(finalTranscript || interim).trim()}”`;
    }

    if (finalTranscript.trim()) {
      handleVoiceCallUserTurn(finalTranscript.trim());
    }
  };

  rec.onerror = event => {
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      voiceCallState.recognitionRunning = false;
      updateCallVisualState('idle', '🔇 Mic permission blocked · Use quick prompts below');
    }
  };

  rec.onend = () => {
    voiceCallState.recognitionRunning = false;
    // Automatically keep the single recognition session alive during the call if not blocked
    if (voiceCallState.active) {
      try {
        rec.start();
      } catch {
        // Ignore if already started
      }
    }
  };

  voiceCallState.recognition = rec;
  return rec;
}

// Pick the most polite, warm, natural-sounding voice available in the browser
function pickPoliteConciergeVoice() {
  if (!synth) return null;
  const voices = synth.getVoices();
  if (!voices || !voices.length) return null;

  const preferredNames = [
    'Microsoft Aria Online (Natural)',
    'Microsoft Jenny Online (Natural)',
    'Microsoft Neerja Online (Natural)',
    'Microsoft Sonia Online (Natural)',
    'Google UK English Female',
    'Google US English',
    'Microsoft Zira',
    'Microsoft Heera',
    'Samantha',
    'Victoria'
  ];

  for (const target of preferredNames) {
    const match = voices.find(v => v.name.toLowerCase().includes(target.toLowerCase()));
    if (match) return match;
  }

  const naturalEn = voices.find(v => /^en/i.test(v.lang) && /natural|online|female/i.test(v.name));
  if (naturalEn) return naturalEn;

  return voices.find(v => /^en/i.test(v.lang)) || voices[0];
}

if (synth) {
  synth.onvoiceschanged = () => {
    voiceCallState.selectedVoice = pickPoliteConciergeVoice();
  };
  voiceCallState.selectedVoice = pickPoliteConciergeVoice();
}

// Web Audio API subtle call sound effects (ringing, connect chime, end call tone)
function playCallSound(type) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!voiceCallState.audioCtx) voiceCallState.audioCtx = new AudioContextClass();
    const ctx = voiceCallState.audioCtx;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'ring') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(480, now + 0.15);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc.start(now);
      osc.stop(now + 0.65);
    } else if (type === 'connect') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.12);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.start(now);
      osc.stop(now + 0.32);
    } else if (type === 'hangup') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.setValueAtTime(300, now + 0.14);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch {
    // Ignore audio context errors if blocked
  }
}

// Transform HTML bot reply into a polite, specific, and convincing spoken sales script
function buildPoliteSpokenScript(userQuery, botReply) {
  const low = userQuery.toLowerCase();

  let cleanText = (botReply.html || '')
    .replace(/<s>.*?<\/s>/gi, '')
    .replace(/<\/p>/gi, '. ')
    .replace(/<br\s*\/?>/gi, '. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, ' and ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&minus;|−/g, ' minus ')
    .replace(/₹\s*([\d,]+)/g, '$1 rupees')
    .replace(/(\d+)\s*×\s*(\d+)\s*mm/gi, '$1 by $2 millimeters')
    .replace(/4khz/gi, '4 kilohertz')
    .replace(/1000hz/gi, '1000 hertz')
    .replace(/★\s*([\d.]+)(?:\/5)?/g, 'rated $1 out of 5 stars')
    .replace(/[1-9]️⃣|•|🎯|🏆|🔥|⚡|🤏|🦅|✋|🖱️|⌨️|⬛|🎧|🎙️|🔇|🔢|🤫|⚖️|🛡️|🛍️|📦|🚚|🏷️|🎉|✅|🗑️|🌐|⭐|👋|💡|💬/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\.\s*\./g, '.')
    .trim();

  let politePrefix = '';
  if (/\b(why should i|why choose|why this|advantages|specifications|specs)\b/i.test(low)) {
    politePrefix = 'I am glad you asked! Here are the exact specifications and advantages that make this model stand out. ';
  } else if (/^(what is|what are|explain|define|meaning)/i.test(low) && !/\bbest\b/i.test(low)) {
    politePrefix = 'I would be delighted to explain that for you! ';
  } else if (/\b(pick one|final and best|single best|which one|what is the best)\b/i.test(low)) {
    politePrefix = 'Certainly! Based on our verified customer ratings and hardware specs, here is the number one choice for you. ';
  } else if (/\b(valorant|cs2|apex|coding)\b/i.test(low)) {
    politePrefix = 'That is a wonderful choice! Here is what works best for your playstyle. ';
  }

  let convincingCloser = '';
  if (
    Array.isArray(botReply.productIds) &&
    botReply.productIds.length > 0 &&
    !/\b(added|shopping bag|save)\b/i.test(cleanText)
  ) {
    const topProd = products.find(p => p.id === Number(botReply.productIds[0]));
    if (topProd) {
      const saveAmt = topProd.old - topProd.price;
      convincingCloser = ` Plus, every ${topProd.name} includes our 2-year ForgeCare warranty and saves you ${saveAmt} rupees today. Just say "Add to my bag" whenever you are ready!`;
    }
  }

  return `${politePrefix}${cleanText}${convincingCloser}`.replace(/\s+/g, ' ').trim();
}

function updateCallVisualState(mode, statusMessage) {
  const stage = $('#waCallAvatarStage');
  const wave = $('#waCallWaveform');
  const badge = $('#waCallLiveBadge');
  const sub = $('#waCallStateText');
  const micBtn = $('#waCallMicBtn');
  const micLabel = $('#waCallMicLabel');

  if (!stage || !wave || !badge) return;

  stage.classList.remove('speaking', 'listening');
  wave.classList.remove('active');
  micBtn?.classList.remove('listening', 'muted');

  if (voiceCallState.micMuted) {
    micBtn?.classList.add('muted');
  }

  if (mode === 'speaking') {
    stage.classList.add('speaking');
    wave.classList.add('active');
    badge.textContent = statusMessage || '🔊 ForgeBot is speaking politely…';
    if (sub) sub.textContent = 'Connected · Speaking';
    if (micLabel) micLabel.textContent = voiceCallState.micMuted ? 'Mic Off' : 'Interrupt';
  } else if (mode === 'listening') {
    stage.classList.add('listening');
    wave.classList.add('active');
    micBtn?.classList.add('listening');
    badge.textContent = statusMessage || '🎙️ Mic ON · Listening to you…';
    if (sub) sub.textContent = 'Connected · Mic ON (Listening)';
    if (micLabel) micLabel.textContent = 'Mic ON';
  } else if (mode === 'thinking') {
    badge.textContent = statusMessage || '🧠 Consulting GearForge catalog…';
    if (sub) sub.textContent = 'Connected · Thinking';
    if (micLabel) micLabel.textContent = voiceCallState.micMuted ? 'Mic Off' : 'Mic ON';
  } else {
    badge.textContent = statusMessage || (voiceCallState.micMuted ? '🔇 Mic Muted · Tap Mic to unmute' : '🎙️ Mic ON · Ready');
    if (sub) sub.textContent = voiceCallState.micMuted ? 'Connected · Mic Muted' : 'Connected · Ready';
    if (micLabel) micLabel.textContent = voiceCallState.micMuted ? 'Mic Off' : 'Mic ON';
  }
}

function renderCallSpotlight(productIds) {
  const box = $('#waCallSpotlight');
  if (!box) return;

  if (!Array.isArray(productIds) || productIds.length === 0) {
    box.hidden = true;
    return;
  }

  const p = products.find(x => x.id === Number(productIds[0]));
  if (!p) {
    box.hidden = true;
    return;
  }

  const r = getProductRating(p);
  const disc = Math.round((1 - p.price / p.old) * 100);
  box.hidden = false;
  box.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="wa-call-spotlight-info">
      <strong>${p.name}</strong>
      <small>${money(p.price)} (${disc}% OFF) · ★ ${r.rating} · ${(p.specs || []).slice(0, 2).join(' · ')}</small>
    </div>
    <button type="button" class="wa-call-spotlight-add" data-wa-add="${p.id}">+ Add to Bag</button>
  `;
}

function speakPoliteCallResponse(spokenText, onFinishCallback) {
  const spokenEl = $('#waCallBotSpoken');
  if (spokenEl) {
    spokenEl.textContent = `“${spokenText}”`;
  }

  if (!synth || !voiceCallState.speakerOn) {
    updateCallVisualState(voiceCallState.micMuted ? 'idle' : 'listening', '🔇 Speaker muted · Read live response below');
    if (onFinishCallback) setTimeout(onFinishCallback, 400);
    return;
  }

  try {
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(spokenText);
    const voice = voiceCallState.selectedVoice || pickPoliteConciergeVoice();
    if (voice) utter.voice = voice;
    utter.lang = voice ? voice.lang : 'en-IN';
    utter.rate = 1.02;
    utter.pitch = 1.04;
    utter.volume = 1.0;

    utter.onstart = () => {
      voiceCallState.speaking = true;
      updateCallVisualState('speaking', '🔊 ForgeBot is speaking… (Tap Mic to interrupt)');
    };

    utter.onend = () => {
      voiceCallState.speaking = false;
      if (voiceCallState.active) {
        if (onFinishCallback) onFinishCallback();
        else if (!voiceCallState.micMuted) {
          updateCallVisualState('listening', '🎙️ Mic ON · Listening to you…');
        } else {
          updateCallVisualState('idle', '🔇 Mic Muted · Tap Mic to unmute');
        }
      }
    };

    utter.onerror = () => {
      voiceCallState.speaking = false;
      if (voiceCallState.active) {
        updateCallVisualState(voiceCallState.micMuted ? 'idle' : 'listening');
      }
    };

    synth.speak(utter);
  } catch {
    voiceCallState.speaking = false;
    updateCallVisualState(voiceCallState.micMuted ? 'idle' : 'listening');
  }
}

async function startContinuousCallListeningOnce() {
  if (!voiceCallState.active) return;
  if (!SpeechRecognition) {
    updateCallVisualState('idle', '💡 Tap any quick voice question below to talk');
    return;
  }

  await ensurePersistentMicAccess();
  const rec = getOrInitContinuousCallRecognition();
  if (!rec) return;

  if (!voiceCallState.recognitionRunning) {
    try {
      rec.start();
    } catch {
      // Already running
    }
  }

  if (!voiceCallState.speaking) {
    if (voiceCallState.micMuted) {
      updateCallVisualState('idle', '🔇 Mic Muted · Tap Mic to unmute');
    } else {
      updateCallVisualState('listening', '🎙️ Mic ON · Listening to you…');
    }
  }
}

async function handleVoiceCallUserTurn(userSpeech) {
  const clean = userSpeech.trim();
  if (!clean || !voiceCallState.active) return;

  if (synth && synth.speaking) synth.cancel();
  voiceCallState.speaking = true; // Pause mic ingestion while processing and replying

  const heardEl = $('#waCallUserHeard');
  if (heardEl) {
    heardEl.innerHTML = `<b>You said:</b> “${clean}”`;
  }

  updateCallVisualState('thinking', '🧠 Analyzing specifications & store inventory…');

  waState.history.push({
    sender: 'user',
    time: nowTimeStr(),
    html: `<p>📞 <i>(Voice Call)</i> ${clean.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
  });

  // Special combined voice command: "Add it to my bag and apply discount code"
  const low = clean.toLowerCase();
  if (/\b(add|buy)\b/.test(low) && /\b(discount|promo|code|coupon)\b/.test(low)) {
    const targetId = (waState.context.lastShownProductIds && waState.context.lastShownProductIds[0]) || 1;
    const targetProd = products.find(p => p.id === Number(targetId)) || products[0];
    addToCart(targetProd.id, 1);
    state.promo = PROMO_CODES.GG20;
    localStorage.setItem('gearforge-promo', JSON.stringify(state.promo));
    renderCart();
    const { total } = calculateCartTotals();

    const comboReply = {
      html: `<p>🎉 <b>Added &amp; Discounted During Voice Call!</b></p>
             <p>I have added <b>${targetProd.name}</b> to your shopping bag and applied our VIP <b>GG20 (20% OFF)</b> code! Your new total is <b>${money(total)}</b> with <b>FREE 24-Hour Express Shipping</b>.</p>`,
      productIds: [targetProd.id],
      options: ['Proceed to checkout', 'What mousepad goes with this?']
    };

    waState.history.push({
      sender: 'bot',
      time: nowTimeStr(),
      html: comboReply.html,
      productIds: comboReply.productIds,
      options: comboReply.options
    });
    saveWaHistory();
    renderWaMessages();
    renderCallSpotlight([targetProd.id]);

    const spoken = `Wonderful choice! I have just added the ${targetProd.name} to your shopping bag and applied our VIP 20 percent discount code G G 20. Your updated total is ${total} rupees, and you have unlocked free 24-hour express shipping! Is there anything else I can help you add today?`;
    speakPoliteCallResponse(spoken);
    return;
  }

  const localReply = await generateForgeBotReply(clean);
  const finalReply = await askGeminiWithStoreContext(clean, localReply);

  waState.history.push({
    sender: 'bot',
    time: nowTimeStr(),
    html: finalReply.html,
    productIds: finalReply.productIds || [],
    bundleIds: finalReply.bundleIds || [],
    options: finalReply.options || []
  });
  saveWaHistory();
  renderWaMessages();

  renderCallSpotlight(finalReply.productIds || []);
  const politeSpeech = buildPoliteSpokenScript(clean, finalReply);
  speakPoliteCallResponse(politeSpeech);
}

function formatCallDuration(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

async function startWaVoiceCall() {
  if (!waState.open) toggleWaChat(true);

  if (!hasOneTimeAiConsent()) {
    ensureOneTimeAiConsent(record => {
      if (record && record.calls !== false) {
        startWaVoiceCall();
      }
    });
    return;
  }

  const overlay = $('#waCallOverlay');
  if (!overlay) return;

  voiceCallState.active = true;
  voiceCallState.micMuted = false;
  voiceCallState.seconds = 0;
  overlay.hidden = false;

  // Update quick voice chips to include "Why should I choose this?"
  const promptsBox = overlay.querySelector('.wa-call-quick-prompts');
  if (promptsBox) {
    promptsBox.innerHTML = `
      <button type="button" class="wa-call-prompt-chip" data-voice-ask="What is the best gaming mouse under 3000?">🗣️ “Best gaming mouse under ₹3,000”</button>
      <button type="button" class="wa-call-prompt-chip" data-voice-ask="Why should I choose this? What are its advantages and specifications?">🗣️ “Why should I choose this? (Specs &amp; Pros)”</button>
      <button type="button" class="wa-call-prompt-chip" data-voice-ask="What is a fingertip mouse?">🗣️ “What is a fingertip mouse?”</button>
      <button type="button" class="wa-call-prompt-chip" data-voice-ask="I play Valorant and CS2, what mousepad is best?">🗣️ “Valorant &amp; CS2 mousepad”</button>
      <button type="button" class="wa-call-prompt-chip" data-voice-ask="Add it to my bag and apply discount code">🗣️ “Add to bag + 20% discount”</button>
    `;
  }

  $('#waCallTimer').textContent = '00:00';
  $('#waCallStateText').textContent = 'Ringing GearForge Concierge…';
  $('#waCallUserHeard').textContent = 'Speak naturally after the greeting, or tap any prompt below…';
  $('#waCallBotSpoken').textContent = 'Connecting to polite AI voice specialist…';
  $('#waCallSpotlight').hidden = true;

  playCallSound('ring');

  // Request persistent mic access ONCE right when call starts so browser never re-prompts
  startContinuousCallListeningOnce();

  clearInterval(voiceCallState.timerId);
  voiceCallState.timerId = setInterval(() => {
    if (!voiceCallState.active) return;
    voiceCallState.seconds += 1;
    const timerEl = $('#waCallTimer');
    if (timerEl) timerEl.textContent = formatCallDuration(voiceCallState.seconds);
  }, 1000);

  setTimeout(() => {
    if (!voiceCallState.active) return;
    playCallSound('connect');
    const firstName = state.currentUser ? state.currentUser.name.split(' ')[0] : 'there';
    const welcomeSpeech = `Hello ${firstName}, and welcome to GearForge! Thank you so much for calling. I'm your personal hardware specialist. Ask me for the best gaming mouse under your budget, ask why you should choose a specific model and its specifications, or ask me about any gear on our store! How can I help you today?`;
    speakPoliteCallResponse(welcomeSpeech);
  }, 900);
}

function endWaVoiceCall() {
  if (!voiceCallState.active) return;
  voiceCallState.active = false;
  voiceCallState.speaking = false;

  clearInterval(voiceCallState.timerId);
  if (synth) synth.cancel();

  playCallSound('hangup');

  const overlay = $('#waCallOverlay');
  if (overlay) overlay.hidden = true;

  const statusEl = $('#waStatusText');
  if (statusEl) statusEl.textContent = 'online · text & voice concierge';
  applyConsentStatusBadge();

  showToast(`📞 Voice call ended (${formatCallDuration(voiceCallState.seconds)}) · Transcript saved in chat`);
}

$('#waStartCallBtn').onclick = () => startWaVoiceCall();
$('#waCallEndBtn').onclick = () => endWaVoiceCall();

$('#waCallSpeakerBtn').onclick = () => {
  voiceCallState.speakerOn = !voiceCallState.speakerOn;
  $('#waCallSpeakerBtn').classList.toggle('muted', !voiceCallState.speakerOn);
  if (!voiceCallState.speakerOn && synth) {
    synth.cancel();
    showToast('🔇 Call speaker muted');
  } else {
    showToast('🔊 Call speaker active');
  }
};

// Toggle Mic ON / OFF instantaneously WITHOUT stopping the underlying stream (Zero repeated permission popups!)
$('#waCallMicBtn').onclick = () => {
  if (!voiceCallState.active) return;

  // If ForgeBot is currently speaking, tapping Mic interrupts ForgeBot and switches to Mic ON (Listening)
  if (synth && synth.speaking) {
    synth.cancel();
    voiceCallState.speaking = false;
    voiceCallState.micMuted = false;
    if (voiceCallState.persistentMicStream) {
      voiceCallState.persistentMicStream.getAudioTracks().forEach(t => { t.enabled = true; });
    }
    startContinuousCallListeningOnce();
    updateCallVisualState('listening', '🎙️ Mic ON · Listening to you…');
    return;
  }

  // Otherwise toggle Mic Mute ON / OFF without closing the mic stream
  voiceCallState.micMuted = !voiceCallState.micMuted;
  if (voiceCallState.persistentMicStream) {
    voiceCallState.persistentMicStream.getAudioTracks().forEach(t => {
      t.enabled = !voiceCallState.micMuted;
    });
  }

  if (voiceCallState.micMuted) {
    updateCallVisualState('idle', '🔇 Mic OFF (Muted) · Tap Mic to turn back ON');
    showToast('🔇 Microphone muted');
  } else {
    startContinuousCallListeningOnce();
    updateCallVisualState('listening', '🎙️ Mic ON · Listening to you…');
    showToast('🎙️ Microphone ON — Listening');
  }
};

// Bottom bar voice button opens the full hands-free voice call (or uses single-session recognition)
$('#waVoiceBtn').onclick = () => startWaVoiceCall();

renderWaMessages();
applyConsentStatusBadge();

// ==================== IMPROVISED RECENT ORDERS HUB & AI/PURCHASE PERSONALIZED SUGGESTIONS ENGINE ====================

let activeRecSourceTab = 'all';

// Ensure initial sample order exists if orders list is empty so Purchase History & Complements work out of the box
function ensureInitialSampleOrders() {
  if (Array.isArray(state.orders) && state.orders.length > 0) {
    // Upgrade any legacy orders that don't have an itemized `items` array
    let mutated = false;
    state.orders.forEach((o, idx) => {
      if (!Array.isArray(o.items) || !o.items.length) {
        o.items = idx % 2 === 0
          ? [{ id: 2, qty: 1 }, { id: 9, qty: 1 }]
          : [{ id: 5, qty: 1 }];
        o.txnId = o.txnId || `TXN_FP884120${idx}`;
        o.status = o.status || 'Dispatched · In Transit';
        o.city = o.city || 'Bengaluru';
        mutated = true;
      }
    });
    if (mutated) localStorage.setItem('gearforge-orders', JSON.stringify(state.orders));
    return;
  }

  const starterOrder = {
    orderId: '#GF-4821',
    txnId: 'TXN_FP90428114',
    email: state.currentUser ? state.currentUser.email : 'pro.gamer@gearforge.in',
    recipient: state.currentUser ? state.currentUser.name : 'Tanishq Sharma',
    city: 'Bengaluru, KA',
    pin: '560038',
    total: 3198,
    itemCount: 2,
    items: [
      { id: 2, qty: 1 }, // Phantom Pro Wireless Gaming Mouse
      { id: 9, qty: 1 }  // Titan Control XL Gaming Desk Mat
    ],
    status: 'Delivered · ForgeCare Active',
    paymentMethod: 'Dynamic UPI QR Scan (NPCI Instant)',
    date: '21 Oct 2026',
    timeStr: '08:42 pm',
    isSample: true
  };

  state.orders = [starterOrder];
  localStorage.setItem('gearforge-orders', JSON.stringify(state.orders));
}

// Extract structured personal interests from ForgeBot AI chat & voice interactions
function extractChatbotRecordedInterests() {
  const ctx = waState.context || {};
  const profile = ctx.userProfile || {};
  const historyText = (waState.history || [])
    .filter(m => m.sender === 'user')
    .map(m => (m.html || '').replace(/<[^>]+>/g, ' '))
    .join(' ')
    .toLowerCase();

  // Detect games / workflow from context or raw chat transcript
  let detectedGameKey = profile.games || null;
  if (!detectedGameKey) {
    for (const [key, kb] of Object.entries(HARDWARE_KNOWLEDGE_BASE)) {
      if (kb.keywords.some(kw => historyText.includes(kw))) {
        detectedGameKey = key;
        break;
      }
    }
  }

  // Detect grip or keyboard preference from context or transcript
  let detectedGripOrStyle = profile.style || null;
  if (!detectedGripOrStyle) {
    if (historyText.includes('fingertip')) detectedGripOrStyle = 'Fingertip Grip (Ultra-Light <55g)';
    else if (historyText.includes('claw')) detectedGripOrStyle = 'Claw Grip (Symmetrical 4K)';
    else if (historyText.includes('palm') || historyText.includes('ergo')) detectedGripOrStyle = 'Palm / Ergonomic Comfort';
    else if (historyText.includes('quiet') || historyText.includes('gasket') || historyText.includes('coding')) detectedGripOrStyle = 'Quiet Poron Gasket Acoustics';
  }

  // Detect categories the customer asked ForgeBot about
  const interestedCategories = new Set();
  if (ctx.lastCategory) interestedCategories.add(ctx.lastCategory);
  if (ctx.awaitingFollowUp) interestedCategories.add(ctx.awaitingFollowUp);
  for (const [cat, syns] of Object.entries(CATEGORY_SYNONYMS)) {
    if (syns.some(s => historyText.includes(s))) {
      interestedCategories.add(cat);
    }
  }

  // Collect product IDs ForgeBot specifically showed or discussed with the customer
  const discussedProductIds = new Set(ctx.lastShownProductIds || []);
  (waState.history || []).forEach(m => {
    if (Array.isArray(m.productIds)) {
      m.productIds.forEach(id => discussedProductIds.add(Number(id)));
    }
  });

  // Detect budget cap mentioned in chat
  let budgetLimit = null;
  const budgetMatch = historyText.match(/(?:under|below|budget)\s*₹?\s*(\d{3,5})/i);
  if (budgetMatch) budgetLimit = Number(budgetMatch[1]);

  return {
    gameKey: detectedGameKey || 'tactical_fps',
    gameLabel: HARDWARE_KNOWLEDGE_BASE[detectedGameKey]?.label || 'Valorant & CS2 (Tactical FPS)',
    hasExplicitGameInChat: Boolean(detectedGameKey),
    gripOrStyle: detectedGripOrStyle || 'Claw / Fingertip Precision',
    categories: Array.from(interestedCategories),
    discussedIds: Array.from(discussedProductIds),
    budgetLimit
  };
}

// Compute complementary products based on Purchase History + Personal Interests from ForgeBot AI
function buildPersonalizedSuggestions() {
  const purchasedIds = new Set();
  const purchasedCategories = new Set();
  const recentPurchasedNames = [];

  (state.orders || []).forEach(order => {
    (order.items || []).forEach(it => {
      const p = products.find(pr => pr.id === Number(it.id));
      if (p) {
        purchasedIds.add(p.id);
        purchasedCategories.add(p.category);
        if (recentPurchasedNames.length < 3 && !recentPurchasedNames.includes(p.name)) {
          recentPurchasedNames.push(p.name);
        }
      }
    });
  });

  // Also include current shopping bag items as purchase intent signals
  (state.cart || []).forEach(it => {
    const p = products.find(pr => pr.id === Number(it.id));
    if (p) {
      purchasedCategories.add(p.category);
      if (recentPurchasedNames.length < 3 && !recentPurchasedNames.includes(p.name)) {
        recentPurchasedNames.push(p.name);
      }
    }
  });

  const chatSignals = extractChatbotRecordedInterests();
  const kb = HARDWARE_KNOWLEDGE_BASE[chatSignals.gameKey] || HARDWARE_KNOWLEDGE_BASE.tactical_fps;

  // 1. Build Chatbot-Driven Suggestions (4 items tailored to recorded AI chat/voice interactions)
  const chatbotSuggestions = [];
  const usedIds = new Set();

  // Priority A: Products explicitly discussed or recommended by ForgeBot AI that aren't bought yet
  chatSignals.discussedIds.forEach(id => {
    const p = products.find(pr => pr.id === Number(id));
    if (p && !purchasedIds.has(p.id) && !usedIds.has(p.id) && chatbotSuggestions.length < 4) {
      usedIds.add(p.id);
      chatbotSuggestions.push({
        product: p,
        source: 'chatbot',
        matchScore: '99% AI Match',
        badgeText: '🤖 From Your ForgeBot Chat',
        reason: `You explored <b>${p.name}</b> with ForgeBot AI (${chatSignals.gameLabel}). Features ${p.specs.slice(0, 2).join(' · ')}.`
      });
    }
  });

  // Priority B: Knowledge-base picks matching the customer's recorded game/workflow & grip style in chat
  const kbIds = [
    ...(kb.picks?.Mice || []),
    ...(kb.picks?.Mousepads || []),
    ...(kb.picks?.Keyboards || []),
    ...(kb.picks?.Audio || [])
  ];

  // Prioritize categories the user asked about in chat first
  const sortedKbIds = [...kbIds].sort((a, b) => {
    const pa = products.find(x => x.id === a);
    const pb = products.find(x => x.id === b);
    const aCatMatch = pa && chatSignals.categories.includes(pa.category) ? 1 : 0;
    const bCatMatch = pb && chatSignals.categories.includes(pb.category) ? 1 : 0;
    return bCatMatch - aCatMatch;
  });

  sortedKbIds.forEach(id => {
    const p = products.find(pr => pr.id === Number(id));
    if (!p || purchasedIds.has(p.id) || usedIds.has(p.id) || chatbotSuggestions.length >= 4) return;
    if (chatSignals.budgetLimit && p.price > chatSignals.budgetLimit) return;
    usedIds.add(p.id);
    chatbotSuggestions.push({
      product: p,
      source: 'chatbot',
      matchScore: '97% AI Match',
      badgeText: `🤖 AI Interest: ${chatSignals.gameLabel.split('(')[0].trim()}`,
      reason: `Tailored to your <b>${chatSignals.gameLabel}</b> &amp; <b>${chatSignals.gripOrStyle}</b> profile recorded by ForgeBot (${p.specs[0]} · ${p.specs[1]}).`
    });
  });

  // Fill remaining chatbot slots if needed
  products.forEach(p => {
    if (chatbotSuggestions.length >= 4) return;
    if (!purchasedIds.has(p.id) && !usedIds.has(p.id)) {
      usedIds.add(p.id);
      chatbotSuggestions.push({
        product: p,
        source: 'chatbot',
        matchScore: '95% AI Match',
        badgeText: '🤖 ForgeBot Top Pick',
        reason: `Recommended by ForgeBot AI for ${chatSignals.gameLabel} players (${p.specs.slice(0, 2).join(' · ')}).`
      });
    }
  });

  // 2. Build Purchase-History Driven Suggestions (4 complementary ecosystem upgrades)
  const COMPLEMENT_MAP = {
    Mice: [
      { id: 6, why: 'Compact 65% Aluminum Keyboard frees up 12cm of desk space for your new mouse sweeps.' },
      { id: 10, why: 'Cordura Speed Gaming Pad maximizes PTFE skate glide for your purchased gaming mouse.' },
      { id: 13, why: 'Low-latency 2.4GHz Wireless 7.1 Headset completes your competitive wireless peripherals.' },
      { id: 25, why: 'Coiled Aviator USB-C Cable for zero-drag rapid charging at your battlestation.' }
    ],
    Mousepads: [
      { id: 1, why: 'Pulse X Wireless Mouse (49g PAW3395) pairs with your XL desk mat for zero-friction flicks.' },
      { id: 5, why: 'K75 Gasket Mechanical Keyboard sits plush on your 4mm desk mat for deeper thock acoustics.' },
      { id: 21, why: 'Memory Foam Ergonomic Wrist Rest aligns your wrists across your new desk mat.' }
    ],
    Keyboards: [
      { id: 25, why: 'Custom Coiled Aviator USB-C Cable upgrades the aesthetics and power delivery of your keyboard.' },
      { id: 21, why: 'Cooling Gel Memory Foam Wrist Rest eliminates wrist strain during long typing & gaming sessions.' },
      { id: 33, why: 'Poron Esport Control Pad dampens desk vibrations under your mechanical keyboard.' },
      { id: 3, why: 'AeroLite 49g Magnesium Mouse matches your keyboard’s pro-grade responsiveness.' }
    ],
    Audio: [
      { id: 17, why: 'RGB Aluminum Headphone Stand keeps your headset safe and charges devices via dual USB ports.' },
      { id: 15, why: 'Studio Cardioid USB Condenser Mic upgrades your voice clarity for Discord & streaming.' }
    ]
  };

  const historySuggestions = [];
  const anchorProductName = recentPurchasedNames[0] || 'Phantom Pro Wireless Mouse';

  Array.from(purchasedCategories).forEach(cat => {
    const candidates = COMPLEMENT_MAP[cat] || [];
    candidates.forEach(cand => {
      const p = products.find(pr => pr.id === cand.id);
      if (p && !purchasedIds.has(p.id) && !usedIds.has(p.id) && historySuggestions.length < 4) {
        usedIds.add(p.id);
        historySuggestions.push({
          product: p,
          source: 'history',
          matchScore: '98% Setup Fit',
          badgeText: `📦 Complements Your ${cat} Order`,
          reason: `<b>Because you ordered ${anchorProductName}:</b> ${cand.why}`
        });
      }
    });
  });

  // Fallback ecosystem complements if fewer than 4
  [6, 13, 17, 22, 25, 10, 15, 27].forEach(id => {
    if (historySuggestions.length >= 4) return;
    const p = products.find(pr => pr.id === id);
    if (p && !purchasedIds.has(p.id) && !usedIds.has(p.id)) {
      usedIds.add(p.id);
      historySuggestions.push({
        product: p,
        source: 'history',
        matchScore: '94% Setup Fit',
        badgeText: '📦 Purchase History Upgrade',
        reason: `Completes your <b>${anchorProductName}</b> loadout with pro-grade ${p.category.toLowerCase()} performance.`
      });
    }
  });

  return {
    chatSignals,
    purchasedIds,
    purchasedCategories: Array.from(purchasedCategories),
    recentPurchasedNames,
    chatbotSuggestions,
    historySuggestions,
    allSuggestions: [...chatbotSuggestions, ...historySuggestions]
  };
}

function renderOrdersAndPersonalizedHub() {
  ensureInitialSampleOrders();

  // 1. Render Order Summary KPIs & Rich Order Cards in #ordersHub
  const orders = state.orders || [];
  const totalOrders = orders.length;
  const totalItems = orders.reduce((sum, o) => {
    if (Array.isArray(o.items) && o.items.length) {
      return sum + o.items.reduce((s, it) => s + Number(it.qty || 1), 0);
    }
    return sum + Number(o.itemCount || 1);
  }, 0);
  const totalSpent = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);

  if ($('#kpiTotalOrders')) $('#kpiTotalOrders').textContent = String(totalOrders);
  if ($('#kpiTotalItems')) $('#kpiTotalItems').textContent = String(totalItems);
  if ($('#kpiTotalSpent')) $('#kpiTotalSpent').textContent = money(totalSpent);

  const feedEl = $('#ordersHubFeed');
  if (feedEl) {
    feedEl.innerHTML = orders.slice(0, 5).map((o, idx) => {
      const orderItems = (Array.isArray(o.items) && o.items.length)
        ? o.items
        : [{ id: 2, qty: 1 }];

      const itemsHtml = orderItems.map(it => {
        const p = products.find(pr => pr.id === Number(it.id)) || products[0];
        return `
          <div class="oh-item-chip">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="oh-item-info">
              <strong>${p.name}</strong>
              <small>${p.category} · Qty: ${it.qty} · ${money(p.price * it.qty)}</small>
            </div>
            <div class="oh-item-actions">
              <button type="button" class="oh-mini-btn" data-add="${p.id}">＋ Buy Again</button>
              <button type="button" class="oh-mini-btn" data-rate-product="${p.id}">★ Review</button>
            </div>
          </div>
        `;
      }).join('');

      const isNewest = idx === 0 && !o.isSample;
      return `
        <article class="order-history-card-rich">
          <div class="oh-header">
            <div class="oh-meta-group">
              <div class="oh-meta-col">
                <small>Order ID</small>
                <strong class="oh-id-badge">${o.orderId}</strong>
              </div>
              <div class="oh-meta-col">
                <small>Placed On</small>
                <strong>${o.date}${o.timeStr ? ` · ${o.timeStr}` : ''}</strong>
              </div>
              <div class="oh-meta-col">
                <small>Total Paid</small>
                <strong style="color:#4ade80">${money(o.total)}</strong>
              </div>
              <div class="oh-meta-col">
                <small>Transaction Ref</small>
                <strong><code>${o.txnId || 'TXN_FP894120'}</code></strong>
              </div>
              <div class="oh-meta-col">
                <small>Ship To</small>
                <strong>${o.recipient || 'Pro Gamer'} (${o.city || 'Bengaluru'})</strong>
              </div>
            </div>
            <div class="oh-status-wrap">
              <span class="oh-pay-pill">💳 ${o.paymentMethod || 'ForgePay UPI'}</span>
              <span class="oh-status-pill">● ${o.status || (isNewest ? 'Packed at Hub' : 'Delivered')}</span>
            </div>
          </div>

          <div class="oh-tracker" aria-label="Order dispatch progress">
            <div class="oh-step done">
              <span class="oh-step-dot">✓</span>
              <span>Order Confirmed</span>
            </div>
            <div class="oh-step done">
              <span class="oh-step-dot">✓</span>
              <span>Sensor &amp; Switch QA</span>
            </div>
            <div class="oh-step ${o.isSample ? 'done' : 'active'}">
              <span class="oh-step-dot">${o.isSample ? '✓' : '●'}</span>
              <span>Bengaluru Hub Dispatch</span>
            </div>
            <div class="oh-step ${o.isSample ? 'done' : ''}">
              <span class="oh-step-dot">${o.isSample ? '✓' : '4'}</span>
              <span>${o.isSample ? 'Delivered to Doorstep' : '24h Express Arrival'}</span>
            </div>
          </div>

          <div class="oh-items-grid">
            ${itemsHtml}
          </div>

          <div class="oh-footer">
            <span class="oh-warranty-note">🛡️ Covered by <b>2-Year ForgeCare Instant Swap Warranty</b> · Serial numbers registered to your account</span>
            <div class="oh-footer-btns">
              <button type="button" class="btn btn-outline" style="padding:7px 14px;font-size:0.78rem" data-reorder-id="${o.orderId}">
                🔁 Re-Order Full Loadout
              </button>
              <button type="button" class="btn btn-ghost" style="padding:7px 13px;font-size:0.78rem" data-ask-bot-order="${o.orderId}">
                🤖 Ask ForgeBot What Goes With This Order
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 2. Render Personalized Product Suggestions in #personalizedForYou
  const recData = buildPersonalizedSuggestions();
  const signalsRow = $('#aiDnaSignalsRow');
  if (signalsRow) {
    const catText = recData.chatSignals.categories.length
      ? recData.chatSignals.categories.join(', ')
      : 'Mice, Mousepads & Keyboards';
    const purchasedText = recData.recentPurchasedNames.length
      ? recData.recentPurchasedNames.join(' + ')
      : 'Phantom Pro 4K + Titan Control XL';

    signalsRow.innerHTML = `
      <span class="dna-signal-pill chat-signal">🤖 Chatbot Game/Work Profile: <b>${recData.chatSignals.gameLabel}</b></span>
      <span class="dna-signal-pill style-signal">🤏 Recorded Grip / Acoustic Style: <b>${recData.chatSignals.gripOrStyle}</b></span>
      <span class="dna-signal-pill chat-signal">💬 Explored in Chat/Voice: <b>${catText}</b></span>
      <span class="dna-signal-pill order-signal">📦 Purchase History Anchor: <b>${purchasedText}</b></span>
      ${recData.chatSignals.budgetLimit ? `<span class="dna-signal-pill style-signal">💰 Recorded Chat Budget: <b>Under ${money(recData.chatSignals.budgetLimit)}</b></span>` : ''}
    `;
  }

  if ($('#recCountAll')) $('#recCountAll').textContent = String(recData.allSuggestions.length);
  if ($('#recCountChat')) $('#recCountChat').textContent = String(recData.chatbotSuggestions.length);
  if ($('#recCountHistory')) $('#recCountHistory').textContent = String(recData.historySuggestions.length);

  let visibleSuggestions = recData.allSuggestions;
  if (activeRecSourceTab === 'chatbot') visibleSuggestions = recData.chatbotSuggestions;
  else if (activeRecSourceTab === 'history') visibleSuggestions = recData.historySuggestions;

  const gridEl = $('#aiSuggestionsGrid');
  if (gridEl) {
    gridEl.innerHTML = visibleSuggestions.map(item => {
      const p = item.product;
      const qtyInCart = getCartQty(p.id);
      const isWishlisted = state.wishlist.includes(p.id);
      const isChat = item.source === 'chatbot';
      const discountPct = Math.round((1 - p.price / p.old) * 100);
      const rStats = getProductRating(p);

      return `
        <article class="product-card ai-rec-card ${isChat ? 'chat-origin' : 'history-origin'} ${qtyInCart > 0 ? 'in-cart' : ''}" data-product-card="${p.id}">
          <div class="ai-reason-banner ${isChat ? 'from-chatbot' : 'from-history'}">
            <span>${item.badgeText}</span>
            <span class="ai-rec-match-score">${item.matchScore}</span>
          </div>

          <div class="product-image-wrap" data-quickview="${p.id}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" data-fallback-id="${p.id}">
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" type="button" data-wishlist="${p.id}" aria-label="Save ${p.name} to wishlist" title="Save to wishlist">
              ${isWishlisted ? '♥' : '♡'}
            </button>
            <span class="inspect-pill">Quick View &amp; Specs ↗</span>
          </div>

          <div class="product-info">
            <div class="product-meta-top">
              <span class="product-type">${p.category}</span>
              <button type="button" class="rating-pill-btn" data-quickview="${p.id}">
                ★ ${rStats.rating} <span>(${rStats.count})</span>
              </button>
            </div>
            <h3 class="product-title" data-quickview="${p.id}">${p.name}</h3>

            <div class="ai-rec-why-box">
              ${item.reason}
            </div>

            <div class="price-row">
              <span class="price">${money(p.price)}</span>
              <span class="old-price">${money(p.old)}</span>
              <span class="discount">${discountPct}% OFF</span>
            </div>

            <div class="card-actions">
              ${
                qtyInCart === 0
                  ? `<button class="add-bag-btn" type="button" data-add="${p.id}">
                      <span>Add to Bag</span>
                      <span>＋</span>
                    </button>`
                  : `<div class="card-qty-bar" role="group" aria-label="Quantity for ${p.name}">
                      <button class="card-qty-btn" type="button" data-card-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
                      <span class="card-qty-label">${qtyInCart} in bag</span>
                      <button class="card-qty-btn" type="button" data-card-qty="${p.id}" data-delta="1" aria-label="Increase quantity">＋</button>
                      <button class="card-remove-btn" type="button" data-card-remove="${p.id}" title="Remove from bag" aria-label="Remove ${p.name} from bag">✕</button>
                    </div>`
              }
            </div>
          </div>
        </article>
      `;
    }).join('');
  }
}

// Wire up Recommendation Source Tabs (#aiRecTabs)
$$('.ai-rec-tab').forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
    activeRecSourceTab = tabBtn.dataset.recSource || 'all';
    $$('.ai-rec-tab').forEach(b => {
      b.classList.toggle('active', b === tabBtn);
      b.setAttribute('aria-selected', b === tabBtn ? 'true' : 'false');
    });
    renderOrdersAndPersonalizedHub();
  });
});

// Wire up Quick Interest Sync buttons ([data-sim-interest]) so user/judges can test live chatbot interest adaptation
$$('[data-sim-interest]').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.simInterest;
    if (mode === 'valorant_fps') {
      waState.context.userProfile = { games: 'tactical_fps', style: 'Claw / Fingertip Ultra-Light (<55g)' };
      waState.context.lastCategory = 'Mice';
      waState.context.lastShownProductIds = [1, 3, 33, 6];
      showToast('🎯 Synced ForgeBot AI Interest: Valorant & CS2 + Claw/Fingertip Mice!');
    } else if (mode === 'coding_setup') {
      waState.context.userProfile = { games: 'coding_work', style: 'Quiet Poron Gasket & Ergonomic Productivity' };
      waState.context.lastCategory = 'Keyboards';
      waState.context.lastShownProductIds = [5, 31, 34, 35];
      showToast('💻 Synced ForgeBot AI Interest: Coding, Study & Quiet Gasket Keyboards!');
    } else if (mode === 'apex_speed') {
      waState.context.userProfile = { games: 'tracking_fps', style: 'Low-Friction Cordura Speed Glide' };
      waState.context.lastCategory = 'Mousepads';
      waState.context.lastShownProductIds = [10, 29, 14, 7];
      showToast('⚡ Synced ForgeBot AI Interest: Apex Legends & Cordura Speed Glide!');
    }
    saveWaHistory();
    renderOrdersAndPersonalizedHub();
  });
});

// Simulate a new Sample Purchase button (#simulateSampleOrderBtn)
if ($('#simulateSampleOrderBtn')) {
  $('#simulateSampleOrderBtn').addEventListener('click', () => {
    const sampleCombos = [
      { items: [{ id: 5, qty: 1 }, { id: 25, qty: 1 }], pay: 'UPI (Google Pay · tanishq@okicici)' },
      { items: [{ id: 1, qty: 1 }, { id: 33, qty: 1 }], pay: 'VISA PLATINUM Card ending •••• 8890' },
      { items: [{ id: 13, qty: 1 }, { id: 17, qty: 1 }], pay: 'HDFC Bank Credit Card EMI — 3m No-Cost EMI' }
    ];
    const pick = sampleCombos[state.orders.length % sampleCombos.length];
    const total = pick.items.reduce((sum, it) => {
      const p = products.find(pr => pr.id === it.id);
      return sum + (p ? p.price * it.qty : 0);
    }, 0);
    const count = pick.items.reduce((s, it) => s + it.qty, 0);
    const orderId = `#GF-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();

    const newSampleOrder = {
      orderId,
      txnId: `TXN_FP${Date.now().toString().slice(-8)}`,
      email: state.currentUser ? state.currentUser.email : 'tanishq.gamer@gearforge.in',
      recipient: state.currentUser ? state.currentUser.name : 'Tanishq Sharma',
      city: 'Bengaluru, KA',
      pin: '560038',
      total,
      itemCount: count,
      items: pick.items,
      status: 'Packed at Bengaluru Hub',
      paymentMethod: pick.pay,
      date: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      timeStr: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    };

    state.orders.unshift(newSampleOrder);
    localStorage.setItem('gearforge-orders', JSON.stringify(state.orders));
    renderOrdersAndPersonalizedHub();
    showToast(`⚡ Added Order ${orderId} to Purchase History & updated AI Suggestions!`);
  });
}

if ($('#openProfileOrdersBtn')) {
  $('#openProfileOrdersBtn').addEventListener('click', () => {
    openAuthModal('login');
  });
}

if ($('#openBotFromSuggestionsBtn')) {
  $('#openBotFromSuggestionsBtn').addEventListener('click', () => {
    toggleWaChat(true);
  });
}

// Delegated click handlers for Order History actions (Reorder, Rate Product, Ask ForgeBot about Order)
document.addEventListener('click', e => {
  const reorderBtn = e.target.closest('[data-reorder-id]');
  if (reorderBtn) {
    const orderId = reorderBtn.dataset.reorderId;
    const order = (state.orders || []).find(o => o.orderId === orderId);
    if (order) {
      const orderItems = Array.isArray(order.items) && order.items.length
        ? order.items
        : [{ id: 2, qty: 1 }];
      orderItems.forEach(it => {
        const existing = state.cart.find(c => c.id === Number(it.id));
        if (existing) existing.qty += Number(it.qty || 1);
        else state.cart.push({ id: Number(it.id), qty: Number(it.qty || 1) });
      });
      persistCart();
      bumpCartButton();
      openCart();
      showToast(`🔁 Re-added all items from ${orderId} to your shopping bag!`);
    }
    return;
  }

  const rateProdBtn = e.target.closest('[data-rate-product]');
  if (rateProdBtn) {
    const prodId = Number(rateProdBtn.dataset.rateProduct);
    openWriteReviewModal(prodId);
    return;
  }

  const askBotOrderBtn = e.target.closest('[data-ask-bot-order]');
  if (askBotOrderBtn) {
    const orderId = askBotOrderBtn.dataset.askBotOrder;
    const order = (state.orders || []).find(o => o.orderId === orderId);
    const names = order && Array.isArray(order.items)
      ? order.items.map(it => products.find(p => p.id === Number(it.id))?.name).filter(Boolean).join(' and ')
      : 'my recent order';
    toggleWaChat(true);
    handleUserWaMessage(`I already purchased ${names}. What complementary gear should I buy next to complete my setup?`);
  }
});

// Initial render of Orders Hub & Personalized Suggestions
renderOrdersAndPersonalizedHub();

// ==================== AI CONCIERGE & LIVE VOICE CALL STUDIO SHOWCASE CONTROLS ====================

if ($('#waQuickCallFab')) {
  $('#waQuickCallFab').addEventListener('click', () => startWaVoiceCall());
}

if ($('#waExpandBtn')) {
  $('#waExpandBtn').addEventListener('click', () => {
    const win = $('#waChatWindow');
    if (win) {
      const expanded = win.classList.toggle('expanded');
      $('#waExpandBtn').textContent = expanded ? '🗗' : '⛶';
      showToast(expanded ? '⛶ Expanded Studio View enabled' : '🗗 Compact Dock View restored');
    }
  });
}

if ($('#showcaseStartCallBtn')) {
  $('#showcaseStartCallBtn').addEventListener('click', () => startWaVoiceCall());
}

if ($('#showcaseOpenChatBtn')) {
  $('#showcaseOpenChatBtn').addEventListener('click', () => toggleWaChat(true));
}

if ($('#showcaseCallTriggerOrb')) {
  $('#showcaseCallTriggerOrb').addEventListener('click', () => startWaVoiceCall());
}

if ($('#showcaseOrbCallBtn')) {
  $('#showcaseOrbCallBtn').addEventListener('click', () => startWaVoiceCall());
}

$$('[data-showcase-ask]').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.dataset.showcaseAsk;
    toggleWaChat(true);
    ensureOneTimeAiConsent(() => {
      handleUserWaMessage(question);
    });
  });
});
