
const translations = {
  es: {
    nav_home:"Inicio", nav_menu:"Menú", nav_story:"Nuestra Historia", nav_follow:"Síguenos", nav_contact:"Contacto",
    hero_kicker:"BOBA • AGUAS FRESCAS • LIMONADA", hero_title_1:"Sabores frescos", hero_title_2:"con un toque especial.",
    hero_desc:"Sabores mexicanos con inspiración asiática, hechos para compartir en familia.",
    view_menu:"Ver menú", follow_us:"Síguenos",
    quality_title:"Ingredientes de calidad", quality_text:"Bebidas frescas y llenas de sabor.",
    love_title:"Hecho con amor", love_text:"Un proyecto familiar en Tijuana.",
    fusion_title:"México + Asia", fusion_text:"Sabores que unen dos culturas.",
    menu_kicker:"NUESTRO MENÚ", size_price:"1 LITRO • $100 MXN", menu_note:"Menú inicial. Sabores y disponibilidad pueden cambiar.",
    lemonade:"Limonada", lemonade_desc:"Refrescante y deliciosa con sabores frutales.",
    original:"Original", strawberry:"Fresa", blueberry:"Blueberry",
    aguas:"Aguas Frescas", aguas_desc:"Clásicos mexicanos que siempre refrescan.",
    boba_desc:"Tres bebidas con influencia asiática y el toque Bobacita.",
    thai:"Thai Tea", brulee:"Brown Sugar Brûlée", saigon:"Saigon Vietnamese",
    story_kicker:"NUESTRA HISTORIA", story_title:"De nuestra familia para la tuya.",
    story_p1:"Hace 7 años nuestra familia se mudó a Tijuana, México. Antes habíamos comenzado nuestro camino en el mundo del boba con una tienda en el sur de California, donde aprendimos a servir a nuestra comunidad y a desarrollar nuestra pasión por las bebidas.",
    story_p2:"Después de vender nuestro primer negocio, decidimos comenzar una nueva aventura: Bobacita. Nuestro sueño es combinar bebidas con influencia asiática con los sabores mexicanos que disfrutamos, y construir este proyecto junto a nuestros cinco hijos.",
    story_close:"Bienvenidos a nuestra familia. Bienvenidos a Bobacita. ♥",
    uber_text:"Próximamente podrás pedir tus bebidas favoritas por Uber Eats.",
    online_title:"Orden en línea", online_text:"Más adelante podrás ordenar directamente desde bobacita.com.",
    location_text:"Síguenos en redes sociales para saber dónde encontrarnos.",
    social_kicker:"SÍGUENOS", social_title:"Encuentra a Bobacita en redes."
  },
  en: {
    nav_home:"Home", nav_menu:"Menu", nav_story:"Our Story", nav_follow:"Follow Us", nav_contact:"Contact",
    hero_kicker:"BOBA • AGUAS FRESCAS • LEMONADE", hero_title_1:"Fresh flavors", hero_title_2:"with a special twist.",
    hero_desc:"Mexican flavors with Asian inspiration, made to share with family.",
    view_menu:"View menu", follow_us:"Follow us",
    quality_title:"Quality ingredients", quality_text:"Fresh drinks full of flavor.",
    love_title:"Made with love", love_text:"A family project in Tijuana.",
    fusion_title:"Mexico + Asia", fusion_text:"Flavors that bring two cultures together.",
    menu_kicker:"OUR MENU", size_price:"1 LITER • $100 MXN", menu_note:"Opening menu. Flavors and availability may change.",
    lemonade:"Lemonade", lemonade_desc:"Refreshing lemonade with fruity flavors.",
    original:"Original", strawberry:"Strawberry", blueberry:"Blueberry",
    aguas:"Aguas Frescas", aguas_desc:"Refreshing Mexican classics.",
    boba_desc:"Three Asian-inspired drinks with the Bobacita touch.",
    thai:"Thai Tea", brulee:"Brown Sugar Brûlée", saigon:"Saigon Vietnamese",
    story_kicker:"OUR STORY", story_title:"From our family to yours.",
    story_p1:"Seven years ago our family moved to Tijuana, Mexico. Before that, we began our boba journey with a shop in Southern California, where we learned to serve our community and build our passion for drinks.",
    story_p2:"After selling our first business, we decided to start a new adventure: Bobacita. Our dream is to combine Asian-inspired drinks with the Mexican flavors we enjoy, and to build this business together with our five children.",
    story_close:"Welcome to our family. Welcome to Bobacita. ♥",
    uber_text:"Soon you’ll be able to order your favorite drinks through Uber Eats.",
    online_title:"Online ordering", online_text:"Later, you’ll be able to order directly from bobacita.com.",
    location_text:"Follow us on social media to see where to find us.",
    social_kicker:"FOLLOW US", social_title:"Find Bobacita on social media."
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-switch button").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("bobacita-lang", lang);
}
document.querySelectorAll(".lang-switch button").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});
setLanguage(localStorage.getItem("bobacita-lang") || "es");
