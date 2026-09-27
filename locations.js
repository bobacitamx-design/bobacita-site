// Add future locations here. The general URL remains bobacita.com; a location
// URL uses ?location=<slug> so it works on GitHub Pages without rewrites.
window.BobacitaLocations = [
  {
    slug: "santa-fe",
    name: { es: "SANTA FE", en: "SANTA FE" },
    maps: "https://maps.app.goo.gl/7Yb2uDG3mNyXJkx16?g_st=ic",
    address: null, // Display only after verification against the supplied pin.
    pdf: "assets/menus/bobacita-menu-santa-fe.pdf",
    artwork: ["assets/menus/santa-fe.png"],
    assetsReady: true,
    onlineMenu: "santa-fe"
  },
  {
    slug: "palacio-municipal",
    name: { es: "PALACIO MUNICIPAL", en: "CITY HALL" },
    maps: "https://maps.app.goo.gl/sFQaknf4Np5rZkrQ9?g_st=ic",
    address: null,
    pdf: "assets/menus/bobacita-menu-palacio-municipal.pdf",
    artwork: [
      "assets/menus/palacio-municipal-1.png",
      "assets/menus/palacio-municipal-2.png"
    ],
    assetsReady: true,
    onlineMenu: "artwork",
    groups: [
      { heading: {es:"Limonadas",en:"Lemonades"}, items: {es:["Original","Fresa","Mango","Arándano"],en:["Original","Strawberry","Mango","Blueberry"]} },
      { heading: {es:"Bebidas embotelladas",en:"Bottled drinks"}, items: {es:["Sueño Saigón · Café Vietnamita","Sube el Thai · Té Tailandés","Horchata de Ube","Mango Juice Pop","Strawberry Matcha Pop"],en:["Sueño Saigón · Vietnamese Coffee","Sube el Thai · Thai Tea","Ube Horchata","Mango Juice Pop","Strawberry Matcha Pop"]} },
      { heading: {es:"Toppings disponibles para limonadas",en:"Lemonade toppings"}, items: {es:["Popping Boba de Mango","Popping Boba de Fresa","Popping Boba de Arándano"],en:["Mango Popping Boba","Strawberry Popping Boba","Blueberry Popping Boba"]} }
    ]
  }
];
