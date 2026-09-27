// Add future locations here. The general URL remains bobacita.com; a location
// URL uses ?location=<slug> so it works on GitHub Pages without rewrites.
window.BobacitaLocations = [
  {
    slug: "santa-fe",
    name: { es: "SANTA FE", en: "SANTA FE" },
    maps: "https://maps.app.goo.gl/7Yb2uDG3mNyXJkx16?g_st=ic",
    address: null, // Display only after verification against the supplied pin.
    pdf: "assets/menus/bobacita-menu-santa-fe.pdf",
    artwork: ["assets/menus/santa-fe.jpg"],
    assetsReady: false,
    onlineMenu: "santa-fe"
  },
  {
    slug: "palacio-municipal",
    name: { es: "PALACIO MUNICIPAL", en: "CITY HALL" },
    maps: "https://maps.app.goo.gl/sFQaknf4Np5rZkrQ9?g_st=ic",
    address: null,
    pdf: "assets/menus/bobacita-menu-palacio-municipal.pdf",
    artwork: [
      "assets/menus/palacio-municipal-1.jpg",
      "assets/menus/palacio-municipal-2.jpg",
      "assets/menus/palacio-municipal-3.jpg"
    ],
    assetsReady: false,
    onlineMenu: "artwork"
  }
];
