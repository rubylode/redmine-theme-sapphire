/* Rubylode Sapphire, a theme for Redmine 7
 * Copyright (C) 2026  Nick Gorbikoff
 * GNU General Public License, version 2 or later. See the LICENSE file.
 * Generated from the shared base of the Rubylode themes: a change made here is overwritten by the next build. */

/* Two small touches CSS cannot do alone. It only reads the page and writes nothing to Redmine; without it the theme still works.
 *  1. In an issue list grouped by status, each group row gets data-group-status with the status id of its issues, so the
 *     stylesheet can put the status dot beside the group name.
 *  2. Once the page is scrolled, the body gets the class page-scrolled, which gives the top bar a soft shadow. */
(function () {
  "use strict";

  function tagStatusGroups() {
    document.querySelectorAll("table.list.issues tr.group").forEach(function (group) {
      var row = group.nextElementSibling;
      while (row && !row.classList.contains("group") && !row.classList.contains("issue")) { row = row.nextElementSibling; }
      if (!row || !row.classList.contains("issue")) { return; }
      var match = row.className.match(/(?:^|\s)status-(\d+)(?:\s|$)/);
      if (!match) { return; }
      var statusIds = [];
      for (var next = row; next && !next.classList.contains("group"); next = next.nextElementSibling) {
        var found = next.className.match(/(?:^|\s)status-(\d+)(?:\s|$)/);
        if (found && statusIds.indexOf(found[1]) === -1) { statusIds.push(found[1]); }
      }
      if (statusIds.length === 1) { group.setAttribute("data-group-status", statusIds[0]); }
    });
  }

  function watchScroll() {
    var update = function () { document.body.classList.toggle("page-scrolled", window.scrollY > 4); };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function start() {
    tagStatusGroups();
    watchScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
