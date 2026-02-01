# Catalyst Hiring Solutions — Multi-Page Recruitment Website

A fully functional, production-ready static website for Catalyst Hiring Solutions recruitment consultancy in India.

## 📋 Pages Included

1. **Home** (index.html) — Hero, services overview, stats, and CTAs
2. **About** (about.html) — Company story, values, and team info
3. **Services** (services.html) — Detailed service descriptions (BPO, Manpower, Remote)
4. **Industries** (industries.html) — Industries served
5. **Jobs** (jobs.html) — Job listings with filtering (Remote, BPO, IT)
6. **Employers** (employers.html) — For hiring companies
7. **Candidates** (candidates.html) — For job seekers
8. **Contact** (contact.html) — Contact form and office info
9. **Privacy** (privacy.html) — Privacy policy

## ✨ Features

✓ Fully responsive mobile-first design  
✓ Job filtering (Remote, BPO, IT)  
✓ Contact form (ready for Formspree or backend)  
✓ Mobile navigation menu  
✓ SEO optimized with meta tags and canonical URLs  
✓ Organization schema (JSON-LD)  
✓ robots.txt & sitemap.xml  
✓ Fast loading & Core Web Vitals ready  
✓ Clean, editable code  

## 🚀 Quick Start

### Option 1: Open locally in browser
1. Download or clone this repository
2. Open `index.html` in your web browser
3. All pages work without a server needed

### Option 2: Run a local server
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```
Then visit `http://localhost:8000`

### Option 3: Deploy to Netlify
1. Push this folder to GitHub
2. Connect to Netlify
3. Set publish directory to `.` (root)
4. Deploy!

## 📁 File Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── industries.html         # Industries served
├── jobs.html               # Job listings
├── employers.html          # Employers page
├── candidates.html         # Candidates page
├── contact.html            # Contact & form
├── privacy.html            # Privacy policy
├── robots.txt              # SEO: Robots file
├── sitemap.xml             # SEO: Sitemap
├── README.md               # This file
├── assets/
│   ├── css/style.css       # All styles (responsive)
│   ├── js/main.js          # All JavaScript (lightweight)
│   └── images/             # Logos and graphics (SVG)
└── netlify.toml            # Netlify config (optional)
```

## 🎨 Customization

### Update company info
- Search for "Catalyst Hiring Solutions" in HTML files and replace
- Update phone (+91-98765-43210) and email (hello@catalysthiringsolutions.in)
- Update office location and hours in contact.html

### Update colors
In `assets/css/style.css`, change the color variables:
```css
:root{
  --accent:#0b6cf5;        /* Main blue */
  --text:#0b1724;          /* Dark text */
  --muted:#6b7280;         /* Gray text */
}
```

### Add your logo
Replace `assets/images/logo.svg` with your logo (keep dimensions ~180x40)

### Setup contact form
1. Go to [formspree.io](https://formspree.io)
2. Create an account and form
3. Copy your form ID (e.g., `f_ABC123`)
4. In `contact.html`, replace `YOUR_FORM_ID` in the form action

## 📊 SEO & Performance

- ✓ Unique meta titles & descriptions on every page
- ✓ Proper H1-H3 heading hierarchy
- ✓ Keyword-optimized for India recruitment market
- ✓ Internal linking between all pages
- ✓ Mobile responsive (tested)
- ✓ Fast CSS & minimal JavaScript
- ✓ Image alt tags on all graphics
- ✓ robots.txt & sitemap.xml included

## 🔧 Tech Stack

- Pure HTML5
- CSS3 (responsive, no framework)
- Vanilla JavaScript (minimal)
- No dependencies, no build tools needed

## 📞 Support

For issues or customization help, edit the HTML files directly in VS Code or your preferred editor.

---

Made for Catalyst Hiring Solutions © 2025
