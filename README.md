# Bobacita Website

Static bilingual website for bobacita.com.

## Current menu
- Limonada: Original, Fresa/Strawberry, Blueberry
- Aguas Frescas: Jamaica, Horchata
- Boba: Thai Tea, Brown Sugar Brûlée, Saigon Vietnamese
- Size/price: 1 litro / 1 liter — $100 MXN

## Publish free with GitHub Pages
1. Create a new GitHub repository named `bobacita-site`.
2. Upload all files in this folder to the repository.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. After GitHub gives you the temporary Pages address, set the custom domain to `bobacita.com`.
7. In Namecheap Advanced DNS, add the DNS records GitHub currently specifies for a custom apex domain, and add `www` as a CNAME to your GitHub Pages hostname.
8. Wait for DNS to update, then enable **Enforce HTTPS** in GitHub Pages.

Important: use GitHub's current official custom-domain DNS values when you connect the domain because infrastructure settings can change.

## Files
- `index.html` — website structure/content
- `styles.css` — responsive Bobacita design
- `script.js` — ES/EN language switcher
- `assets/bobacita-logo.png` — Bobacita transparent website logo
