/* Sapphire, a theme for Redmine 7
 * Copyright (C) 2026  Nick Gorbikoff
 * GNU General Public License, version 2 or later. See the LICENSE file.
 *
 * A small script that adds three things CSS cannot: a lozenge around the status text, initials next to assignees, and a
 * breadcrumb above the page title. It reads the page and writes nothing to Redmine. Without it the theme still works. */
(function () {
  "use strict";

  function addLozenges() {
    document.querySelectorAll("table.list td.status").forEach(function (cell) {
      var text = cell.textContent.trim();
      if (!text || cell.querySelector(".lozenge")) { return; }
      var lozenge = document.createElement("span");
      lozenge.className = "lozenge";
      lozenge.textContent = text;
      cell.textContent = "";
      cell.appendChild(lozenge);
    });
  }

  function addInitials() {
    document.querySelectorAll("table.list td.assigned_to").forEach(function (cell) {
      var link = cell.querySelector("a");
      if (!link || cell.querySelector(".assignee-initials")) { return; }
      var words = link.textContent.trim().split(/\s+/);
      var initials = (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
      var sum = 0;
      for (var index = 0; index < initials.length; index++) { sum += initials.charCodeAt(index); }
      var badge = document.createElement("span");
      badge.className = "assignee-initials tone-" + (sum % 6);
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = initials;
      badge.title = link.textContent.trim();
      link.classList.add("assignee-name");
      cell.insertBefore(badge, cell.firstChild);
    });
  }

  function addBreadcrumb() {
    var title = document.querySelector("#content > h2");
    var project = document.querySelector("#header h1 a:last-of-type, #header h1 .current-project");
    if (!title || !project || document.querySelector("nav.page-breadcrumb")) { return; }
    var nav = document.createElement("nav");
    nav.className = "page-breadcrumb";
    nav.setAttribute("aria-label", "Breadcrumb");
    var projects = document.createElement("a");
    projects.href = "/projects";
    projects.textContent = "Projects";
    var current = document.createElement("a");
    current.href = project.getAttribute("href") || "#";
    current.textContent = project.textContent.trim();
    var separator = document.createElement("span");
    separator.textContent = "/";
    nav.appendChild(projects);
    nav.appendChild(separator);
    nav.appendChild(current);
    title.insertAdjacentElement("beforebegin", nav);
  }

  function run() {
    addLozenges();
    addInitials();
    addBreadcrumb();
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", run); } else { run(); }
})();
