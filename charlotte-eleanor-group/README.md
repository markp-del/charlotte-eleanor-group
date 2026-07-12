# Charlotte Eleanor Group — website

Consumer-first site for **www.charlotteeleanor.co.uk**: clients book a mobile hairdresser; franchising, education and investors sit behind. Burgundy/gold/champagne theme, no build tools.

## Pages

| Path | Purpose |
|---|---|
| `/` | The grab page — book a mobile hairdresser |
| `/services/` | Full service & guide-price list |
| `/bridal/` | Bridal & events (premium mobile niche) |
| `/book/` | Booking: request form now, SaaS booking button ready to switch on |
| `/education/` | Education-first page for Clwydian Academy (links out) |
| `/franchise/` `/scaling/` | The franchise offer and the franchisee ladder |
| `/about/` `/investors/` `/contact/` | Group, governance, plan-on-request |

## Switching on online booking (when Jobber is live)

In `book/index.html`, find the section `id="online-booking"`:
1. Delete the `hidden` attribute from the `<section>` tag.
2. Replace `href="#"` with your Jobber client-booking URL.
That's it — the "Open the diary" panel appears above the request form. You can also point every "Book now" button straight at the same URL later (search for `/book/`).

## Publish

1. GitHub: upload this `charlotte-eleanor-group` folder into your `charlotte-eleanor-group` repository.
2. Vercel: Add New → Project → import that repo → set **Root Directory** to `charlotte-eleanor-group` → Deploy.
3. Domain: project Settings → Domains → add `www.charlotteeleanor.co.uk` + apex redirect. Vercel shows the DNS records to add at Namecheap.

## ⚠️ DNS warning — protect your email

`charlotteeleanor.co.uk` carries no email, so its DNS is safe to change freely. But if you ever point `charlotteeleanorgroup.uk` here too, remember that domain runs your email: only touch the website `A` (@) and `CNAME` (www) records — **never MX or SPF/DKIM TXT records**.

## After launch

- Search Console: add the domain property (DNS TXT at Namecheap) and submit `https://www.charlotteeleanor.co.uk/sitemap.xml`.
- The campaign photography is iStock — make sure the standard licence for each image is purchased under your account before the site goes live, and swap in your own shoots over time.
- Earnings figures on the franchise pages carry "illustrative projection" disclaimers; keep them.
