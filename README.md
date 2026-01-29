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
