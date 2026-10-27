# Parth Agencies · Scandinavian Atelier

[![LIVE PREVIEW](https://img.shields.io/badge/LIVE_PREVIEW-OPEN_WEBSITE-84b642?style=for-the-badge)](https://parth-agency.vercel.app)

**Live:** https://parth-agency.vercel.app
**Source:** https://github.com/satitech-admin/parth-agency

## Website
Responsive multi-page premium materials showroom experience for Parth Agencies, Betul, Madhya Pradesh. Handwritten HTML, CSS and vanilla JavaScript; no paid libraries or build step.

### Pages
- [Home](https://parth-agency.vercel.app/index.html) — cinematic hero video element, poster fallback, marquee, interactive category showcase, customer reviews
- [Collections](https://parth-agency.vercel.app/collection.html) — clickable category filters, individual category pages, searchable material subtype guides and product-specific WhatsApp enquiries
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
- Hero references a Pexels 1920×1080 landscape MP4 (https://www.pexels.com/video/kitchen-area-and-living-room-interior-7314522/). The source video's download URL was confirmed, but end-user browser playback remains unverified. Its poster fallback remains in place. Replace with a locally hosted optimized approved clip before final handoff.
- Source/client brief contained **three real Google review quotations**, displayed as a carousel. Ratings for Google were not verified; do not show an invented Google rating. Public Justdial pages gave inconsistent ratings (4.5 to 4.9 with 59 reviews), so these are not labeled as Google ratings.

### Before handing off to client
- Confirm exact store address, location pin and opening hours. Public sources give College Road / PNB vs Badora / Green Park.
- Confirm WhatsApp is active on +91 98260 37244.
- Supply actual product, showroom and project photographs and licensed hero video.
- Confirm official Facebook/YouTube accounts; these unverified links are intentionally excluded.
- Validate responsive layouts in actual Chrome, Safari and mobile devices.
- Material subtype cards are examples of options to discuss, NOT confirmed stock. Confirm actual grades, SKUs, brand permissions, sizes, prices and images with client. Backend inventory/CMS is not implemented.

## Development
Serve the directory with `python -m http.server 8000` and visit `http://localhost:8000`.

## Deployment
Vercel is connected to repository `satitech-admin/parth-agency` on the `main` branch, with production URL above. No build command required; static HTML/CSS/JS.

### Technical verification (27 October 2026)
- Fixed a JavaScript string-quoting syntax error that previously prevented rendering.
- JavaScript parser check passes, and lightweight scripted DOM rendering checks pass for home, all collections, selected category pages, about, gallery, reviews and contact.
- Fixed hidden-state styling for searchable category subtypes.
- Vercel production deployment reports READY. **Physical mobile/browser QA, all third-party image loads and hero media playback must still be checked manually.**
- `robots.txt` and `sitemap.xml` added for search engine discovery.

### Material guides
`collection.html?type=plywood` and corresponding laminate, veneer, hardware, locks and adhesives routes include a 4-option searchable materials guide and specific WhatsApp enquiry links. These examples are educational and need client stock confirmation.


## Scandinavian Atelier redesign (27 Oct 2026)
- New `atelier.css`: warm ivory, oak-inspired imagery, sage/forest-green colors, serif editorial typography and responsive page-specific visual layouts.
- New `atelier.js`: independent About/Reviews/Contact/Home editorial sections, gallery photograph changes, collection refinements and Font Awesome icon replacements.
- Font Awesome 6.7.2 loaded via cdnjs on each public HTML page; no paid kit or API key.
- Content browsing and WhatsApp form continue using `app.js`.
- All six HTML entrypoints load CSS and JS in matching order; deployment is automatic via Vercel.
- Some lifestyle images use Unsplash and hero video an external Pexels CDN, so actual content availability requires browser/network testing. Business logo is the client-provided graphic embedded in SVG.
