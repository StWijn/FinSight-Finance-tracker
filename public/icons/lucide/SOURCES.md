# Local Lucide icons

These SVG assets were downloaded from the official [Lucide repository](https://github.com/lucide-icons/lucide) on 2026-10-19.

- Pinned source revision: [`296ab246a86188db59bfb48aabbf10b2eb694c06`](https://github.com/lucide-icons/lucide/tree/296ab246a86188db59bfb48aabbf10b2eb694c06/icons)
- Source URL pattern: `https://raw.githubusercontent.com/lucide-icons/lucide/296ab246a86188db59bfb48aabbf10b2eb694c06/icons/<name>.svg`
- Exception: local `trash-2.svg` is the unchanged upstream `trash.svg` from the same revision. The local alias keeps the app's delete icon name stable.
- License: [Lucide license](https://lucide.dev/license). The unchanged upstream `LICENSE` in this directory includes the ISC notice and the MIT notice for Feather-derived icons.
- SVG files are unmodified. Color and size are applied by the Angular icon component using CSS masks.
- The application serves these files locally; no CDN or external icon request is required at runtime.

## Included icons

`arrow-left`, `briefcase-business`, `car`, `chart-no-axes-combined`, `chevron-down`, `coins`, `ellipsis`, `gift`, `heart-pulse`, `house`, `landmark`, `list-filter`, `plane`, `plus`, `receipt`, `rotate-ccw`, `shield-check`, `shopping-bag`, `shopping-cart`, `ticket`, `trash-2`, `trending-down`, `trending-up`, `utensils`, `wallet`, `zap`.

## Usage

Import `IconComponent` in the standalone component that uses it:

```html
<app-icon name="wallet" />
```

The icon inherits `currentColor` and defaults to a 1.25rem square. It is decorative (`aria-hidden="true"`): an icon-only button still needs its own meaningful `aria-label`.

Use `getCategoryAppearance(category)` from `src/app/shared/category-appearance.ts` to keep category icons and their color tones consistent across the transaction list and summary cards.
