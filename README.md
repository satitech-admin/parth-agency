# Parth Agencies · Royal Emerald Luxe

[![LIVE PREVIEW](https://img.shields.io/badge/LIVE_PREVIEW-OPEN_WEBSITE-84b642?style=for-the-badge)](https://parth-agency.vercel.app)

**Live:** https://parth-agency.vercel.app
**Source:** https://github.com/satitech-admin/parth-agency

## Website
Responsive multi-page premium materials showroom experience for Parth Agencies, Betul, Madhya Pradesh. Handwritten HTML, CSS and vanilla JavaScript; no paid libraries or build step.

### Pages
- [Home](https://parth-agency.vercel.app/index.html) — cinematic hero video element, poster fallback, marquee, interactive category showcase, customer reviews
- [Collections](https://parth-agency.vercel.app/collection.html) — searchable by clickable category filters and individual category details via URL parameters
- [About](https://parth-agency.vercel.app/about.html)
- [Gallery](https://parth-agency.vercel.app/gallery.html) — labeled inspiration photos
- [Reviews](https://parth-agency.vercel.app/reviews.html) — manual sliding carousel containing user-provided Google review excerpts
- [Contact](https://parth-agency.vercel.app/contact.html) — validated form that opens prefilled WhatsApp message, phone, map and Instagram

### Design and interactions
Original client-supplied PA logo included as a compressed image embedded in `assets/parth-logo.svg`. Loader animation, scroll reveal, animated product image zoom, marquee, mobile menu, floating WhatsApp and back-to-top arrow. Responsive grids and reduced-motion preference support.

### Contact form behavior
The form validates the name, phone, material and requirement, **then opens WhatsApp** with a prefilled enquiry for +91 98260 37244. The visitor **must press Send in WhatsApp**. No message is automatically sent and no form database stores customer data.

### Photo/video disclosure
- Lifestyle photos are stock inspiration, **not verified product inventory or completed projects**.
- Hero currently references a Pexels remote MP4. It has an image fallback, but remote playback remains unverified. Replace with an approved optimized video asset for production.
- Source/client brief contained **three real Google review quotations**, displayed as a carousel. Ratings for Google were not verified; do not show an invented Google rating. Public Justdial pages gave inconsistent ratings (4.5 to 4.9 with 59 reviews), so these are not labeled as Google ratings.

### Before handing off to client
- Confirm exact store address, location pin and opening hours. Public sources give College Road / PNB vs Badora / Green Park.
- Confirm WhatsApp is active on +91 98260 37244.
- Supply actual product, showroom and project photographs and licensed hero video.
- Confirm official Facebook/YouTube accounts; these unverified links are intentionally excluded.
- Validate responsive layouts in actual Chrome, Safari and mobile devices.
- Complete full product dataset if the customer wants inventory-driven catalog management; this version uses locally defined data.

## Development
Serve the directory with `python -m http.server 8000` and visit `http://localhost:8000`.

## Deployment
Vercel is connected to repository `satitech-admin/parth-agency` on the `main` branch, with production URL above. No build command required; static HTML/CSS/JS.
