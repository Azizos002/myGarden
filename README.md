# VerdaTun

Premium multi-language marketing website for a Tunisian turf and plant business.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Start

```bash
npm run start
```

## i18n Notes

- Locales are defined in `lib/constants.ts` and `lib/i18n.ts`.
- Translation files live in `messages/ar-TN.json`, `messages/fr.json`, and `messages/en.json`.
- Routes are localized under `/[locale]`, with `/` redirecting to `/ar-TN` via middleware.
- To add a language:
  1. Add the locale to `LOCALES` in `lib/constants.ts`.
  2. Add a new JSON file in `messages/`.
  3. Update the language switcher labels in `lib/i18n.ts`.

## SEO Notes

- Per-locale metadata is generated with `lib/seo.ts` and page `generateMetadata` functions.
- `app/sitemap.ts` generates a localized sitemap and `app/robots.ts` publishes the sitemap link.
- `hreflang` alternates are defined through metadata `alternates`.
- JSON-LD LocalBusiness is injected in `app/[locale]/layout.tsx` and Product schema in `app/[locale]/catalog/page.tsx`.

## Adding your photos

Place your local service photos in the following exact paths so the Services page renders them:

```
/public/images/services/gazon.jpg
/public/images/services/plantes.jpg
/public/images/services/entretien.jpg
```

**Recommended size:** 1600px wide (or larger), optimized to under 400KB each.

To replace placeholders:
1. Copy your photos into the paths above (create the folders if missing).
2. Keep the filenames exactly the same so Next.js picks them up.

If an image is missing, the UI shows a graceful “Image à ajouter” placeholder instead.

## Contact links

Set your contact details in `lib/constants.ts`:
- `WHATSAPP_PHONE` (e.g. `+216XXXXXXXX`)
- `FACEBOOK_PAGE_URL` (e.g. `https://www.facebook.com/profile.php?id=...`)

## Brand logo

Replace the file at `public/logo.svg` with your official VerdaTun logo (keep the same filename) so the header and footer update automatically.
