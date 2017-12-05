/**
 * Sidebar module for load Amber Framework documentation
 * using Ajax and Markdown preprocessor.
 * By @eliasjpr & @faustinoaq
 */

import Remarkable from "./remarkable.min.js";
import hljs from "./highlight.min.js";
import "./crystal.min.js";

const md = new Remarkable();
const notFound = "<h1>Documentation not found</h1><p>We can't load this page, please try reloading or report an issue to <a href='https://github.com/amberframework/online-docs/issues'>documentation repository</a>.</p><p>Thanks you for learn Amber Framework!</p>";

$(document).ready(() => {
  const location = $("#guide-content").data("href");

  loadContent(location);
  var hash = window.location.hash;

  if (hash) {
    $(hash).addClass("active");
  }

  $("a[data-sidebar-toggle]").on("click", (elem) => {
    elem.preventDefault();
    $("a[data-sidebar-toggle]").toggleClass("hamburger-hide");
    $(elem.currentTarget.dataset.target).toggleClass("sidebar-hidden");
    $("#main-content").toggleClass("main-content-full");
  });

  // Removes empty tags created by TheSaaS theme
  $("a.list-group-item").each((i, e) => {
    if (/^\s*$/.test($(e).text())) {
      $(e).addClass("d-none");
    }
  });
});

/**
 * Check blank string and create HTML content.
 * if string is blank then notFound is assigned.
 * @param {string} data 
 */
function buildContentFrom(data) {
  if (/^\s*$/.test(data)) {
    return notFound;
  } else {
    return md.render(data);
  }
}

/**
 * Load content from URL to guide content using Ajax.
 * Also shows error message when documentation isn't found.
 * @param {string} contentUrl 
 */
function loadContent(contentUrl) {
  var content;
  $("#guide-content").html("<div class='spinner'><div class='cube1'></div><div class='cube2'></div></div>");
  $.get(contentUrl).done(data => {
    content = buildContentFrom(data);
    $("#guide-content").html(content);
    $("pre code").addClass("hljs");
    $("pre code").each((i, block) => {
      hljs.highlightBlock(block);
    });
  }).fail((data) => {
    $("#guide-content").html(notFound);
  });
}
