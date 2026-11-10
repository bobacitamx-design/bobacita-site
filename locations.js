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
    pdfVersion: "20261110-blue-raspberry-santa-fe",
    downloadLabel: { es: "DESCARGAR MENÚ DE BEBIDAS", en: "DOWNLOAD DRINK MENU" },
    artwork: ["assets/menus/santa-fe.png"],
    assetsReady: true,
    onlineMenu: "shared",
    ordering: { countryCode: "52", phone: "5662849695" },
    hours: null, announcements: [], featuredProducts: []
  },
  {
    slug: "palacio-municipal",
    name: { es: "PALACIO MUNICIPAL", en: "CITY HALL" },
    description: { es: "Menú especial disponible en Palacio Municipal.", en: "Special menu available at City Hall." },
    maps: "https://maps.app.goo.gl/sFQaknf4Np5rZkrQ9?g_st=ic",
    address: null,
    pdf: "assets/menus/bobacita-menu-palacio-municipal.pdf",
    pdfVersion: "20261110-blue-raspberry-palacio",
    downloadLabel: { es: "DESCARGAR MENÚ DE BEBIDAS", en: "DOWNLOAD DRINK MENU" },
    artwork: [
      "assets/menus/palacio-municipal-bebidas-blue-raspberry.jpeg"
    ],
    extraDownloads: [
      {
        pdf: "assets/menus/chica-chun-kun-menu-palacio-municipal.pdf",
        pdfVersion: "20261107-food",
        label: { es: "DESCARGAR MENÚ DE COMIDA", en: "DOWNLOAD FOOD MENU" }
      }
    ],
    assetsReady: true,
    onlineMenu: "shared",
    ordering: {
      phone: "5662849695",
      countryCode: "52",
      message: {
        es: "Hola Bobacita 👋\nQuiero hacer un pedido para recoger en Palacio Municipal.\n\nMi pedido:\n________________\n\nNombre:\n________________",
        en: "Hello Bobacita 👋\nI would like to place an order for pickup at City Hall.\n\nMy order:\n________________\n\nName:\n________________"
      }
    },
    hours: null, announcements: [], featuredProducts: [],
    favoritePhotos: [
      { image: "assets/web/municipal/menu/dragon-fruit.webp", name: { es: "Limonada de Dragon Fruit", en: "Dragon Fruit Lemonade" }, product: "municipal-dragon-fruit", group: "municipal-base" },
      { image: "assets/web/municipal/menu/fresa.webp", name: { es: "Limonada de Fresa", en: "Strawberry Lemonade" }, product: "municipal-fresa", group: "municipal-base" },
      { image: "assets/web/municipal/menu/creme-brulee.webp", name: { es: "Azúcar Crème Brûlée", en: "Brown Sugar Crème Brûlée" }, product: "municipal-creme-brulee", group: "municipal-cafe" },
      { image: "assets/web/municipal/menu/horchata-ube.webp", name: { es: "Horchata de Ube", en: "Ube Horchata" }, product: "municipal-horchata-ube", group: "municipal-aguas" }
    ],
    groups: [
      { id:"municipal-bottled", expandable:true, defaultOpen:true, heading: {es:"Bebidas embotelladas",en:"Bottled drinks"}, products: [
        {name:{es:"Sueño Saigón",en:"Sueño Saigón"}, description:{es:"Café Vietnamita",en:"Vietnamese Coffee"}, size:"240 mL", price:95, image:"assets/web/municipal/sueno-saigon.webp"},
        {name:{es:"Sube el Thai",en:"Sube el Thai"}, description:{es:"Té Tailandés",en:"Thai Tea"}, size:"500 mL", price:95, image:"assets/web/municipal/sube-el-thai-clean-20260928.webp"},
        {name:{es:"Horchata de Ube",en:"Ube Horchata"}, description:{es:"Horchata cremosa con ube",en:"Creamy horchata with ube"}, size:"500 mL", price:95, image:"assets/web/municipal/horchata-de-ube-clean-20260928.webp"},
        {name:{es:"Jugo de Mango Pop",en:"Mango Juice Pop"}, description:{es:"Jugo de mango con popping boba de mango",en:"Mango juice with mango popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/mango-juice-pop-smooth-20260928.webp"},
        {name:{es:"Jugo de Fresa Pop",en:"Strawberry Juice Pop"}, description:{es:"Jugo de fresa con popping boba de fresa",en:"Strawberry juice with strawberry popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/strawberry-juice-pop-smooth-20260928.webp"},
        {name:{es:"Jamaica con Arándano Pop",en:"Jamaica Blueberry Pop"}, description:{es:"Jamaica con popping boba de arándano",en:"Jamaica with blueberry popping boba"}, size:"500 mL", price:95, image:"assets/web/municipal/jamaica-blueberry-pop-smooth-20260928.webp"}
      ] },
      { id:"municipal-base", expandable:true, heading:{es:"Limonadas · Sabores base",en:"Lemonades · Base flavors"}, additionalSize:"700 mL", products:[
        {id:"municipal-original",name:{es:"Original",en:"Original"},size:"1 L",price:125,image:"assets/web/municipal/menu/original.webp"},
        {id:"municipal-frambuesa-azul",name:{es:"Frambuesa Azul",en:"Blue Raspberry"},size:"1 L",price:125,image:"assets/web/municipal/menu/frambuesa-azul.webp"},
        {id:"municipal-fresa",name:{es:"Fresa",en:"Strawberry"},size:"1 L",price:125,image:"assets/web/municipal/menu/fresa.webp"},
        {id:"municipal-mango",name:{es:"Mango",en:"Mango"},size:"1 L",price:125,image:"assets/web/municipal/menu/mango.webp"},
        {id:"municipal-lavanda",name:{es:"Lavanda",en:"Lavender"},size:"1 L",price:125,image:"assets/web/municipal/menu/lavanda.webp"},
        {id:"municipal-vainilla",name:{es:"Vainilla",en:"Vanilla"},size:"1 L",price:125,image:"assets/web/municipal/menu/vainilla.webp"},
        {id:"municipal-coco",name:{es:"Coco",en:"Coconut"},size:"1 L",price:125,image:"assets/web/municipal/menu/coco.webp"},
        {id:"municipal-pina",name:{es:"Piña",en:"Pineapple"},size:"1 L",price:125,image:"assets/web/municipal/menu/pina.webp"},
        {id:"municipal-dragon-fruit",name:{es:"Dragon Fruit (Pitahaya)",en:"Dragon Fruit (Pitahaya)"},size:"1 L",price:125,image:"assets/web/municipal/menu/dragon-fruit.webp"},
        {id:"municipal-frambuesa",name:{es:"Frambuesa",en:"Raspberry"},size:"1 L",price:125,image:"assets/web/municipal/menu/frambuesa.webp"}
      ]},
      { id:"municipal-mixes", expandable:true, heading:{es:"Mezclas especiales de limonadas",en:"Special lemonade mixes"}, additionalSize:"700 mL", products:[
        {name:{es:"Fresa Tropical",en:"Tropical Strawberry"},description:{es:"Fresa + mango",en:"Strawberry + mango"},image:"assets/web/municipal/menu/fresa-tropical.webp"},
        {name:{es:"Berry Azul",en:"Blue Berry Mix"},description:{es:"Frambuesa azul + frambuesa",en:"Blue raspberry + raspberry"},image:"assets/web/municipal/menu/berry-azul.webp"},
        {name:{es:"Lavanda Berry",en:"Lavender Berry"},description:{es:"Lavanda + frambuesa azul",en:"Lavender + blue raspberry"},image:"assets/web/municipal/menu/lavanda-berry.webp"},
        {name:{es:"Mango Fresco",en:"Fresh Mango"},description:{es:"Mango + Tajín",en:"Mango + Tajín"},image:"assets/web/municipal/menu/mango-fresco.webp"},
        {name:{es:"Berry Rosa",en:"Pink Berry Mix"},description:{es:"Fresa + frambuesa",en:"Strawberry + raspberry"},image:"assets/web/municipal/menu/berry-rosa.webp"},
        {name:{es:"Lavanda Fresa",en:"Lavender Strawberry"},description:{es:"Lavanda + fresa",en:"Lavender + strawberry"},image:"assets/web/municipal/menu/lavanda-fresa.webp"},
        {name:{es:"Mango Azul",en:"Blue Mango"},description:{es:"Mango + frambuesa azul",en:"Mango + blue raspberry"},image:"assets/web/municipal/menu/mango-azul.webp"},
        {name:{es:"Lavanda Vainilla",en:"Lavender Vanilla"},description:{es:"Lavanda + vainilla",en:"Lavender + vanilla"},image:"assets/web/municipal/menu/lavanda-vainilla.webp"},
        {name:{es:"Piña Colada",en:"Piña Colada"},description:{es:"Piña + coco",en:"Pineapple + coconut"},image:"assets/web/municipal/menu/pina-colada.webp"},
        {name:{es:"Mango Piña",en:"Mango Pineapple"},description:{es:"Mango + piña",en:"Mango + pineapple"},image:"assets/web/municipal/menu/mango-pina.webp"},
        {name:{es:"Coco Berry",en:"Coconut Berry"},description:{es:"Coco + fresa",en:"Coconut + strawberry"},image:"assets/web/municipal/menu/coco-berry.webp"},
        {name:{es:"Piña Azul",en:"Blue Pineapple"},description:{es:"Piña + frambuesa azul",en:"Pineapple + blue raspberry"},image:"assets/web/municipal/menu/pina-azul.webp"},
        {name:{es:"Rosa Tropical",en:"Pink Tropical"},description:{es:"Piña + mango + frambuesa",en:"Pineapple + mango + raspberry"},image:"assets/web/municipal/menu/tropical-rosa.webp"},
        {name:{es:"Fresa con Tajín",en:"Strawberry with Tajín"},description:{es:"Fresa + Tajín",en:"Strawberry + Tajín"},image:"assets/web/municipal/menu/fresa-tajin.webp"}
      ].map(product=>({size:"1 L",price:125,...product}))},
      { id:"municipal-aguas", expandable:true, heading:{es:"Aguas Frescas",en:"Aguas Frescas"}, products:[
        {id:"municipal-jamaica",name:{es:"Jamaica con Arándano",en:"Hibiscus Blueberry"},image:"assets/web/municipal/menu/jamaica-arandano.webp"},
        {id:"municipal-horchata",name:{es:"Horchata Original",en:"Original Horchata"},image:"assets/web/municipal/menu/horchata.webp"},
        {id:"municipal-horchata-ube",name:{es:"Horchata de Ube (Taro)",en:"Ube Horchata (Taro)"},image:"assets/web/municipal/menu/horchata-ube.webp"}
      ].map(product=>({price:95,...product}))},
      { id:"municipal-cafe", expandable:true, heading:{es:"Café y tés · Boba favoritos",en:"Coffee & tea · Boba favorites"}, products:[
        {id:"municipal-cafe-saigon",name:{es:"Sueño Saigón",en:"Sueño Saigón"},description:{es:"Café vietnamita",en:"Vietnamese coffee"},price:95,image:"assets/web/municipal/menu/sueno-saigon.webp"},
        {id:"municipal-te-thai",name:{es:"Té Tailandés",en:"Thai Tea"},price:95,image:"assets/web/municipal/menu/sube-el-thai.webp"},
        {id:"municipal-creme-brulee",name:{es:"Azúcar Crème Brûlée",en:"Brown Sugar Crème Brûlée"},price:115,image:"assets/web/municipal/menu/creme-brulee.webp"}
      ]},
      { heading: {es:"Toppings disponibles para limonadas",en:"Lemonade toppings"}, items: {es:["Popping Boba de Mango","Popping Boba de Fresa","Popping Boba de Arándano"],en:["Mango Popping Boba","Strawberry Popping Boba","Blueberry Popping Boba"]} }
    ]
  }
];

// Both branches display the same drinks. Each keeps its own location details and downloads.
window.BobacitaLocations[0].favoritePhotos = window.BobacitaLocations[1].favoritePhotos;
window.BobacitaLocations[0].groups = window.BobacitaLocations[1].groups;
