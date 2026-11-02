# Contrast

Sapphire aims at WCAG 2.2 AA in light and dark: 4.5:1 for text (3:1 for large text), and 3:1 for the parts of a control that
identify it (field borders), for focus indicators and for the priority arrows, which are graphics beside the priority name.

## How it is measured

- The page check (`npm run check`) loads 29 pages in light and dark, at 1280px and 390px wide, and measures every visible
  piece of text against the colour stacked behind it. On 2026-11-02 against Redmine 7.0.2 with the Rubylode plugins mounted it
  measured 5,652 text pairs across the 58 desktop runs and 6,690 across the 58 phone runs, and found none below AA: 116 of 116
  gated runs clean. At the 16px base size every measured pair also reaches 4.5:1, so none relies on the 3:1 allowance for large text.
- The tokens, one pair at a time, below (`tokens.css` and `dark.css`). The check skips text over a gradient or an image, and it
  does not see field borders, focus rings or the arrows, so those are measured here. Chip colours are the mixes the stylesheet
  makes (`color-mix`), worked out on the colour of the row they sit on: the panel, a stripe or a hovered row. The page and the
  panels are the same colour in Sapphire, so the page rows are not repeated. The header is a flat colour, so its text is
  measured on that colour.

## Light

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#0d1f3d` | `#ffffff` | 16.40 |
| Body text on a sunken panel or stripe | `#0d1f3d` | `#f7f8f9` | 15.42 |
| Secondary text on a panel | `#2c3e5d` | `#ffffff` | 10.75 |
| Muted text on the page | `#505f79` | `#ffffff` | 6.45 |
| Muted text on a sunken panel or stripe | `#505f79` | `#f7f8f9` | 6.07 |
| Muted text on a hovered row | `#505f79` | `#e9f2ff` | 5.72 |
| Link on a panel | `#0055cc` | `#ffffff` | 6.62 |
| Link on a sunken panel or stripe | `#0055cc` | `#f7f8f9` | 6.23 |
| Link on a hovered row | `#0055cc` | `#e9f2ff` | 5.87 |
| White on the primary | `#ffffff` | `#0c66e4` | 5.20 |
| White on the primary, hovered | `#ffffff` | `#0055cc` | 6.62 |
| Button text | `#2c3e5d` | `#f1f2f4` | 9.59 |
| Delete button text | `#ae2e24` | `#ffeceb` | 5.74 |
| Header links | `#44546f` | `#ffffff` | 7.65 |
| Code block (kept light) | `#172b4d` | `#f1f2f4` | 12.59 |
| Closed or up message | `#216e4e` | `#dcfff1` | 5.76 |
| Warning message | `#7f5f01` | `#fff7d6` | 5.52 |
| Status block, up | `#216e4e` | `#dcfff1` | 5.76 |
| Status block, unavailable | `#7f5f01` | `#fff7d6` | 5.52 |
| Chip New, on a panel | `#38404e` | `#e8eaee` | 8.67 |
| Chip New, on a stripe | `#38404e` | `#e1e4e8` | 8.18 |
| Chip New, on a hovered row | `#38404e` | `#d5dfee` | 7.76 |
| Chip In Progress, on a panel | `#073d89` | `#ddeafb` | 8.46 |
| Chip In Progress, on a stripe | `#073d89` | `#d6e4f6` | 7.99 |
| Chip In Progress, on a hovered row | `#073d89` | `#cadefb` | 7.53 |
| Chip Resolved, on a panel | `#134f36` | `#e0eee8` | 7.99 |
| Chip Resolved, on a stripe | `#134f36` | `#d9e8e3` | 7.55 |
| Chip Resolved, on a hovered row | `#134f36` | `#cde3e8` | 7.16 |
| Chip Feedback, on a panel | `#6b5000` | `#f4eedb` | 6.53 |
| Chip Feedback, on a stripe | `#6b5000` | `#ede8d6` | 6.17 |
| Chip Feedback, on a hovered row | `#6b5000` | `#e1e3db` | 5.85 |
| Chip Closed, on a panel | `#134f36` | `#e0eee8` | 7.99 |
| Chip Closed, on a stripe | `#134f36` | `#d9e8e3` | 7.55 |
| Chip Closed, on a hovered row | `#134f36` | `#cde3e8` | 7.16 |
| Chip Rejected, on a panel | `#79211a` | `#f7e3e1` | 8.33 |
| Chip Rejected, on a stripe | `#79211a` | `#f1dddc` | 7.88 |
| Chip Rejected, on a hovered row | `#79211a` | `#e5d8e1` | 7.45 |
| Chip High, on a panel | `#823213` | `#fae7e0` | 7.28 |
| Chip High, on a stripe | `#823213` | `#f3e1da` | 6.87 |
| Chip High, on a hovered row | `#823213` | `#e7dce0` | 6.51 |
| Chip Urgent, on a panel | `#79211a` | `#f7e3e1` | 8.33 |
| Chip Urgent, on a stripe | `#79211a` | `#f1dddc` | 7.88 |
| Chip Urgent, on a hovered row | `#79211a` | `#e5d8e1` | 7.45 |
| White on priority Immediate (issue page chip) | `#ffffff` | `#ae2e24` | 6.53 |
| Field border on a panel (control) | `#8590a2` | `#ffffff` | 3.23 |
| Focus ring on a panel | `#1d7afc` | `#ffffff` | 4.01 |
| Priority arrow (graphic) Low, on a stripe | `#1d7afc` | `#f7f8f9` | 3.77 |
| Priority arrow (graphic) Normal, on a stripe | `#b38600` | `#f7f8f9` | 3.12 |
| Priority arrow (graphic) High, on a stripe | `#d9531f` | `#f7f8f9` | 3.79 |
| Priority arrow (graphic) Urgent, on a stripe | `#c9372c` | `#f7f8f9` | 4.86 |
| Priority arrow (graphic) Immediate, on a stripe | `#ae2e24` | `#f7f8f9` | 6.14 |
| White on an assignee initials badge, lowest of the six | `#ffffff` | `#1f845a` | 4.66 |

## Dark

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#f1f2f4` | `#1d2125` | 14.46 |
| Body text on a sunken panel or stripe | `#f1f2f4` | `#22272b` | 13.46 |
| Secondary text on a panel | `#dee4ea` | `#1d2125` | 12.64 |
| Muted text on the page | `#9fadbc` | `#1d2125` | 7.08 |
| Muted text on a sunken panel or stripe | `#9fadbc` | `#22272b` | 6.59 |
| Muted text on a hovered row | `#9fadbc` | `#09326c` | 5.45 |
| Link on a panel | `#579dff` | `#1d2125` | 5.92 |
| Link on a sunken panel or stripe | `#579dff` | `#22272b` | 5.51 |
| Link on a hovered row | `#579dff` | `#09326c` | 4.55 |
| White on the primary | `#ffffff` | `#0c66e4` | 5.20 |
| White on the primary, hovered | `#ffffff` | `#0055cc` | 6.62 |
| Button text | `#dee4ea` | `#282e33` | 10.72 |
| Delete button text | `#ffaea5` | `#42221f` | 8.01 |
| Header links | `#c7d1db` | `#161a1d` | 11.31 |
| Code block (kept light) | `#172b4d` | `#f1f2f4` | 12.59 |
| Closed or up message | `#baf3db` | `#164b35` | 8.09 |
| Warning message | `#f8e6a0` | `#533f04` | 8.08 |
| Status block, up | `#7ee2b8` | `#164b35` | 6.43 |
| Status block, unavailable | `#f5cd47` | `#533f04` | 6.59 |
| Chip New, on a panel | `#cad2da` | `#3a4046` | 6.87 |
| Chip New, on a stripe | `#cad2da` | `#3e444b` | 6.44 |
| Chip New, on a hovered row | `#cad2da` | `#2a4d7e` | 5.58 |
| Chip In Progress, on a panel | `#a3c9ff` | `#2a3c55` | 6.59 |
| Chip In Progress, on a stripe | `#a3c9ff` | `#2e415a` | 6.12 |
| Chip In Progress, on a hovered row | `#a3c9ff` | `#1a4a8c` | 5.14 |
| Chip Resolved, on a panel | `#9ce4c6` | `#27473e` | 6.96 |
| Chip Resolved, on a stripe | `#9ce4c6` | `#2b4c43` | 6.46 |
| Chip Resolved, on a hovered row | `#9ce4c6` | `#185475` | 5.59 |
| Chip Feedback, on a panel | `#fae49a` | `#4d472c` | 7.38 |
| Chip Feedback, on a stripe | `#fae49a` | `#504c31` | 6.87 |
| Chip Feedback, on a hovered row | `#fae49a` | `#3d5464` | 6.27 |
| Chip Closed, on a panel | `#9ce4c6` | `#27473e` | 6.96 |
| Chip Closed, on a stripe | `#9ce4c6` | `#2b4c43` | 6.46 |
| Chip Closed, on a hovered row | `#9ce4c6` | `#185475` | 5.59 |
| Chip Rejected, on a panel | `#fbb1ac` | `#4d3334` | 6.52 |
| Chip Rejected, on a stripe | `#fbb1ac` | `#513738` | 6.14 |
| Chip Rejected, on a hovered row | `#fbb1ac` | `#3e406b` | 5.57 |
| Chip High, on a panel | `#f8bf95` | `#4c382b` | 6.75 |
| Chip High, on a stripe | `#f8bf95` | `#503d2f` | 6.28 |
| Chip High, on a hovered row | `#f8bf95` | `#3c4562` | 5.80 |
| Chip Urgent, on a panel | `#fbb1ac` | `#4d3334` | 6.52 |
| Chip Urgent, on a stripe | `#fbb1ac` | `#513738` | 6.14 |
| Chip Urgent, on a hovered row | `#fbb1ac` | `#3e406b` | 5.57 |
| White on priority Immediate (issue page chip) | `#ffffff` | `#ae2e24` | 6.53 |
| Field border on a panel (control) | `#6b7a89` | `#1d2125` | 3.68 |
| Focus ring on a panel | `#579dff` | `#1d2125` | 5.92 |
| Priority arrow (graphic) Low, on a stripe | `#1d7afc` | `#22272b` | 3.76 |
| Priority arrow (graphic) Normal, on a stripe | `#f5cd47` | `#22272b` | 9.84 |
| Priority arrow (graphic) High, on a stripe | `#f38a3f` | `#22272b` | 6.11 |
| Priority arrow (graphic) Urgent, on a stripe | `#f87168` | `#22272b` | 5.42 |
| Priority arrow (graphic) Immediate, on a stripe | `#f87168` | `#22272b` | 5.42 |
| White on an assignee initials badge, lowest of the six | `#ffffff` | `#1f845a` | 4.66 |

## Not covered

- Redmine's own avatar colours with white initials: the three that fall below 4.5:1 (red, orange, pink) are darkened; the rest
  are Redmine's.
- Syntax highlighting inside code blocks is Redmine's, made for a light background, which is why code blocks stay light in dark mode.
- Colour is never the only signal: the status lozenge and the priority carry their name, and the arrow shape changes with the level.
