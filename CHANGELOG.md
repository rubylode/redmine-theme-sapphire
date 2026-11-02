# Changelog

All notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
