# Charlotte Eleanor Group — website

Consumer-first site for **www.charlotteeleanor.co.uk**: clients book a mobile hairdresser; franchising, education and investors sit behind. Burgundy/gold/champagne theme, no build tools.

>
> **August 2026 — photographic original + SEO layer (v2, 7 Aug):** the site is the original photographic design (photo hero, service tiles, education/franchise bands, gents split) with the SEO build merged on top: eleven new pages for franchise-recruitment and local-search keywords, FAQ schema and the corrected 8% + 2% fees on the franchise page, Areas navigation, and county-linked homepage section. All photography lives in `assets/img/` in this repo — the folder on the desktop named `ceg` is the original master copy; never deploy from an older folder that lacks the `.jpg` files.

## Pages

| Path | Purpose |
|---|---|
| `/` | The grab page — book a mobile hairdresser |
| `/services/` | Full service & guide-price list |
| `/bridal/` | Bridal & events (premium mobile niche) |
| `/book/` | Booking: request form now, online booking button ready to switch on |
| `/areas/` | The service area — the 36 villages of the CH7 round, client-facing |
| `/areas/mold/` | Local SEO landing page: "mobile hairdresser Mold" and the CH7 villages |
| `/education/` | Education-first page for Clwydian Academy (links out) |
| `/franchise/` | The franchise offer — targets "mobile hairdressing franchise UK" (an unowned search) + FAQ schema |
| `/franchise/north-wales/` + `/franchise/{county}/` | Franchise territory pages — "hairdressing franchise wales/wrexham" etc. |
| `/franchise/going-mobile/` | "Rent a chair vs going alone vs franchise" — captures stylists researching self-employment |
| `/scaling/` | The franchisee ladder |
| `/about/` `/investors/` `/contact/` | Group, governance, plan-on-request |

## Switching on online booking (when the booking system is live)

In `book/index.html`, find the section `id="online-booking"`:
1. Delete the `hidden` attribute from the `<section>` tag.
2. Replace `href="#"` with the client-booking URL.
That's it — the "Open the diary" panel appears above the request form. You can also point every "Book now" button straight at the same URL later (search for `/book/`).

## Publish (GitHub upload)

1. GitHub: upload the **contents of this `charlotte-eleanor-group` folder** into your repository (replacing the old files; the new folders — `areas/`, `franchise/north-wales/` etc. — must come with it).
2. Your host (Vercel or GitHub Pages) redeploys automatically from the repo. No build step — these are plain HTML files.
3. The live domain stays `www.charlotteeleanor.co.uk`. No DNS changes are needed for this update.

## ⚠️ DNS warning — protect your email

`charlotteeleanorgroup.uk` runs your email. At Namecheap, only add/replace the website `A` (@) and `CNAME` (www) records Vercel asks for. **Never touch MX records or SPF/DKIM TXT records** — those are your email. If unsure, do it with Claude in the browser.

## After this upload — 20 minutes that switch the SEO on

1. **Search Console** (search.google.com/search-console): add property `charlotteeleanor.co.uk` (Domain type), verify via DNS TXT at Namecheap, then submit `https://www.charlotteeleanor.co.uk/sitemap.xml`. The site is not yet in Google's index — this is what fixes that.
2. **Google Business Profile**: follow `GBP-setup-guide` in the *google business pack — charlotte eleanor* folder (service-area business, hidden address, all four counties).
3. **Bing Places + Apple Business Connect**: both free, both import/verify quickly.

## Notes

- Earnings figures on the franchise pages carry "illustrative projection" disclaimers; keep them — ASA rules on franchise earnings claims are strict.
- Replace the strand artwork with real photography as it's shot — hero and split sections are ready for images.
- Ongoing fees are **8% royalty + 2% marketing levy (10% total)** — stated consistently sitewide; don't reintroduce the old "10% royalty" wording.

## Prices and areas — where the truth lives

Prices on `/services/` and `/areas/mold/` are a mirror of the booking system's
`src/catalogue.js`, and the village list is a mirror of its `src/places.js`.
**Change them there first, then bring the site into line** — never the other way
round, or the site quotes a price the booking form will not honour.

Two rules that are easy to lose:

- Every published figure is a **from** price. Length and thickness are added by
  the booking form, which quotes exactly before the client confirms.
- **Colour prices do not include the wash and blow-dry** (unbundled 24 Aug 2026).
  Wherever a colour price appears, the line saying so has to appear beside it.
- **Colour correction is never a bookable price** — "from £50, quoted in person".

Client-facing pages name CH7 villages only, per the CH7-first rule. The
`/franchise/` section is the exception: territories there are county-level,
because a territory is what a franchisee buys.
