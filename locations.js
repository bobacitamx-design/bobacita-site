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
    pdfVersion: "20260928-1",
    artwork: [
      "assets/menus/palacio-municipal-bottled-20260928.jpeg",
      "assets/menus/palacio-municipal-2.png"
    ],
    assetsReady: true,
    onlineMenu: "artwork",
    hours: null, announcements: [], featuredProducts: [],
    groups: [
      { heading: {es:"Limonadas",en:"Lemonades"}, items: {es:["Original","Fresa","Mango","Arándano"],en:["Original","Strawberry","Mango","Blueberry"]} },
      { heading: {es:"Bebidas embotelladas",en:"Bottled drinks"}, items: {es:["Sueño Saigón · Café Vietnamita","Sube el Thai · Té Tailandés","Horchata de Ube","Mango Juice Pop","Strawberry Juice Pop","Jamaica Blueberry Pop"],en:["Sueño Saigón · Vietnamese Coffee","Sube el Thai · Thai Tea","Ube Horchata","Mango Juice Pop","Strawberry Juice Pop","Jamaica Blueberry Pop"]} },
      { heading: {es:"Toppings disponibles para limonadas",en:"Lemonade toppings"}, items: {es:["Popping Boba de Mango","Popping Boba de Fresa","Popping Boba de Arándano"],en:["Mango Popping Boba","Strawberry Popping Boba","Blueberry Popping Boba"]} }
    ]
  }
];
