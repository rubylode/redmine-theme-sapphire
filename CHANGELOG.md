# Changelog

All notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.1.2] - 2026-11-03

### Changed

- The chart colours are now a muted editorial set.

## [2.1.1] - 2026-11-02

### Added

- The theme defines the chart colour tokens the Stats plugin reads.

## [2.1.0] - 2026-11-02

### Changed

- The base text size is 16px, up from 14px. It is the token `--theme-font-size`.
- List text is 14px, up from 11.4px. The sidebar is 14px, up from 12.3px. Fields and buttons are 15px, up from 13.3px.
- Labels, chips, headings, the header and the action buttons grew in the same proportion.
- `--theme-font` starts with Noto Sans and `--theme-font-monospace` with Noto Sans Mono, before the system fonts.
- Chips in the issue list, the action buttons and the label column of the issue page grow with the text.
- In a tight issue list, a date and its time stack on two lines, and cells have 8px of padding at each side in the sidebar layout.
- The project switcher in the top bar is 184px wide, up from 160px.
- The status lozenge is 1.82 times its text tall, so it grows with the text.

### Added

- The theme ships Noto Sans for text and Noto Sans Mono for code, as woff2 files in `sapphire/fonts/`, so nothing is loaded from another site.
- The font files are under the SIL Open Font License 1.1, and the licence texts are in `sapphire/fonts/`.

### Fixed

- The corners of the status lozenge sit inside it; they stood 1px out at the top and bottom.
- On pages with no project menu, such as My page and the welcome page, the sidebar now holds the global links (Home, My page, Projects, Administration for an administrator, Help). They leave the top bar there, so they show once.
- Redmine's right-hand sidebar is 200px wide in the sidebar layout, down from 260px.
- The subject column of the issue list wraps down to 9em in the sidebar layout, which leaves more room for the other columns.
- A list that is still too wide scrolls sideways inside its wrapper, and its right edge fades while there is more to scroll to.

## [2.0.0] - 2026-11-02

### Changed

- The theme is built on the shared Rubylode theme base. The stylesheets, `javascripts/theme.js`, `test/`, `bin/demo` and `docker-compose.yml` are generated from it, and a drift check compares them with the base.
- `application.css` is now a small file that loads Redmine's own stylesheet, then `tokens.css`. `responsive.css` loads `structure.css`, `plugins.css`, `dark.css` and `flourishes.css`.
- The dark set moved from the end of `application.css` to `dark.css`. To keep the theme light-only, remove its import from `responsive.css`.
- Colours, corners, fonts and sizes are `--theme-*` tokens, with the same names in every Rubylode theme. Custom overrides that used the old names need the new ones (see the table below).
- The sidebar layout from 1100px up, the status lozenge, the priority arrow and the tracker square moved to `flourishes.css`.
- The status lozenge takes its colours from the status tokens instead of fixed pastel pairs, so New is grey, In Progress blue, Resolved and Closed green, Feedback yellow and Rejected red, as before, with slightly different tints.
- Tables, panels, the issue card, the filters and the sidebar on the right have a thin border and no shadow, where before only some had a border.
- The sign-in card, flash messages, tabs, pagination and the text editor follow the base, so they differ in small ways from 1.0.0.
- The page check covers 29 pages instead of 19, and the demo mounts every Rubylode plugin it finds.
- The workflows and `docs/ci.md` match the other Rubylode themes: manual runs only on `main`, and a release job that runs after the check job.

### Added

- Styles for the pages 1.0.0 did not cover: the roadmap, subtasks and child issues, the Gantt chart, the calendar, spent time, project settings, administration and the wiki editor.
- The Rubylode plugins' blocks take the theme's colours: Projects, Home, To-do, Uptime Kuma, GlitchTip, Windmill, Beszel, Stats and the New issue button.
- A status dot beside the group name in an issue list grouped by status.
- The round initials beside the assignee in issue lists, as in 1.0.0, and now on the issue page too, where the name stays visible beside them. Their six colours are `--theme-initials-tone-*` tokens.
- The breadcrumb above the page title, as in 1.0.0. Both now come from the theme's own part of `javascripts/theme.js`.
- The overdue date in a list takes the danger ink, which reaches AA in dark mode where Redmine's own red does not.
- `docs/accessibility.md` with the measured contrast ratios in light and dark.
- Screenshots and walkthroughs from the new demo data, with the plugin pages in them.
- Tested on Redmine 7.0.2 and the 7.0 line: 116 of 116 gated page runs in light, dark and phone width, with no console errors, no failed requests, no sideways scrolling and text at AA contrast.

### Removed

- The to-do and wiki screenshots; the walkthrough still shows both pages.

### Token names

| 1.0.0 | 2.0.0 |
|---|---|
| `--sapphire-blue-0` to `--sapphire-blue-8` | `--theme-accent-0` to `--theme-accent-8` |
| `--sapphire-page` | `--theme-page` |
| `--sapphire-sidebar` | `--theme-surface-sunken` |
| `--sapphire-sidebar-line` | `--theme-line` |
| `--sapphire-sidebar-width` | `--sapphire-sidebar-width`, unchanged |
| `--sapphire-topbar` | `--theme-header-background` |
| `--sapphire-radius` | `--theme-radius-small` |
| `--sapphire-shadow` | `--theme-shadow-popup` |
| `--sapphire-phone-menu`, `--sapphire-phone-menu-ink` | no token; the colours are in `flourishes.css` |
| `--oc-gray-0` to `--oc-gray-9` | `--theme-neutral-0` to `--theme-neutral-9` |
| `--oc-white` | `--theme-redmine-white` |

## [1.0.0] - 2026-10-26

### Added

- The theme: cool blue-greys and one blue on a white page, set through the Open Color variables Redmine 7 is built on.
- On screens 1100px and wider, the general links, search, project jump and profile form a white bar across the top, and the project title and menu form a sidebar on the left (the administration menu, on admin pages). This is plain CSS. Narrower screens and the login page keep Redmine's own layout.
- A dense issue list: a type square, a priority arrow and a status lozenge on every row, round initials for the assignee, and a breadcrumb above the title. The lozenge, the initials and the breadcrumb come from `javascripts/theme.js`, which only reads the page. The squares and arrows are CSS, from the row's own classes.
- Activity as a feed: a small date label, then rows with hairlines.
- Striped rows and thin column lines in tables, a flat issue card, square fields and buttons, and a login card.
- A dark set for the system dark setting, in one block at the end of the stylesheet.
- The theme folder, the demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width. The gated pages, including the wiki, the activity page and the Rubylode to-do page, have no console errors, no failed requests, no sideways scrolling and text at AA contrast.
