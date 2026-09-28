// Add future locations here. The general URL remains bobacita.com; a location
// URL uses ?location=<slug> so it works on GitHub Pages without rewrites.
window.BobacitaLocations = [
  {
    slug: "santa-fe",
    name: { es: "SANTA FE", en: "SANTA FE" },
    description: { es: "Menú completo de Bobacita.", en: "Bobacita's full menu." },
    maps: "https://maps.app.goo.gl/7Yb2uDG3mNyXJkx16?g_st=ic",
    address: null, // Display only after verification against the supplied pin.
    pdf: "assets/menus/bobacita-menu-santa-fe.pdf",
    artwork: ["assets/menus/santa-fe.png"],
    assetsReady: true,
    onlineMenu: "santa-fe",
    hours: null, announcements: [], featuredProducts: []
  },
  {
    slug: "palacio-municipal",
    name: { es: "PALACIO MUNICIPAL", en: "CITY HALL" },
    description: { es: "Menú especial disponible en Palacio Municipal.", en: "Special menu available at City Hall." },
    maps: "https://maps.app.goo.gl/sFQaknf4Np5rZkrQ9?g_st=ic",
    address: null,
    pdf: "assets/menus/bobacita-menu-palacio-municipal.pdf",
    pdfVersion: "20260928-95-120",
    artwork: [
      "assets/menus/palacio-municipal-bottled-95-20260928.jpeg",
      "assets/menus/palacio-municipal-lemonades-120-20260928.jpeg"
    ],
    assetsReady: true,
    onlineMenu: "artwork",
    ordering: {
      phone: "5662849695",
      countryCode: "52",
      message: {
        es: "Hola Bobacita 👋\nQuiero hacer un pedido para recoger en Palacio Municipal.\n\nMi pedido:\n________________\n\nNombre:\n________________",
        en: "Hello Bobacita 👋\nI would like to place an order for pickup at City Hall.\n\nMy order:\n________________\n\nName:\n________________"
      }
    },
    hours: null, announcements: [], featuredProducts: [],
    groups: [
      { heading: {es:"Bebidas embotelladas",en:"Bottled drinks"}, products: [
        {name:{es:"Sueño Saigón",en:"Sueño Saigón"}, description:{es:"Café Vietnamita",en:"Vietnamese Coffee"}, size:"240 mL", price:95, image:"assets/web/municipal/sueno-saigon.webp"},
        {name:{es:"Sube el Thai",en:"Sube el Thai"}, description:{es:"Té Tailandés",en:"Thai Tea"}, size:"500 mL", price:95, image:"assets/web/municipal/sube-el-thai-clean-20260928.webp"},
        {name:{es:"Horchata de Ube",en:"Ube Horchata"}, description:{es:"Horchata cremosa con ube",en:"Creamy horchata with ube"}, size:"500 mL", price:95, image:"assets/web/municipal/horchata-de-ube-clean-20260928.webp"},
        {name:{es:"Jugo de Mango Pop",en:"Mango Juice Pop"}, description:{es:"Jugo de mango con popping boba de mango",en:"Mango juice with mango popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/mango-juice-pop-smooth-20260928.webp"},
        {name:{es:"Jugo de Fresa Pop",en:"Strawberry Juice Pop"}, description:{es:"Jugo de fresa con popping boba de fresa",en:"Strawberry juice with strawberry popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/strawberry-juice-pop-smooth-20260928.webp"},
        {name:{es:"Jamaica con Arándano Pop",en:"Jamaica Blueberry Pop"}, description:{es:"Jamaica con popping boba de arándano",en:"Jamaica with blueberry popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/jamaica-blueberry-pop-smooth-20260928.webp"}
      ] },
      { heading: {es:"Limonadas",en:"Lemonades"}, products: [
        {name:{es:"Original",en:"Original"},description:{es:"Limonada clásica y refrescante",en:"Classic, refreshing lemonade"},size:"1 L",price:120,image:"assets/web/municipal/limonada-original.webp"},
        {name:{es:"Fresa",en:"Strawberry"},description:{es:"Limonada de fresa con popping boba de fresa",en:"Strawberry lemonade with strawberry popping boba"},size:"1 L",price:120,image:"assets/web/municipal/limonada-fresa.webp"},
        {name:{es:"Mango",en:"Mango"},description:{es:"Limonada de mango con popping boba de mango",en:"Mango lemonade with mango popping boba"},size:"1 L",price:120,image:"assets/web/municipal/limonada-mango.webp"},
        {name:{es:"Arándano",en:"Blueberry"},description:{es:"Limonada de arándano con popping boba de arándano",en:"Blueberry lemonade with blueberry popping boba"},size:"1 L",price:120,image:"assets/web/municipal/limonada-arandano.webp"}
      ] },
      { heading: {es:"Toppings disponibles para limonadas",en:"Lemonade toppings"}, items: {es:["Popping Boba de Mango","Popping Boba de Fresa","Popping Boba de Arándano"],en:["Mango Popping Boba","Strawberry Popping Boba","Blueberry Popping Boba"]} }
    ]
  }
];
