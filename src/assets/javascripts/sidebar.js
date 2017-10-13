/**
 * Sidebar module for load Amber Framework documentation
 * using Ajax and Markdown preprocessor.
 * By @eliasjpr & @faustinoaq
 */

import Remarkable from "./remarkable.min.js";
import hljs from "./highlight.min.js";

var content, contentUrl;
const md = new Remarkable();
const baseUrl = "https://raw.githubusercontent.com/";
const mainParent = "amberframework/online-docs/master/";
const notFound = "<h1>Documentation not found</h1><p>We can't load this page, please try reloading or report an issue to <a href='https://github.com/amberframework/online-docs/issues'>documentation repository</a>.</p><p>Thanks you for learn Amber Framework!</p>";

$(document).ready(() => {
  $("pre code").each((i, block) => {
    hljs.highlightBlock(block);
  });

  $("a[data-sidebar-toggle]").on("click", (elem) => {
    elem.preventDefault();
    $("a[data-sidebar-toggle]").toggleClass("hamburger-hide");
    $(elem.currentTarget.dataset.target).toggleClass("sidebar-hidden");
    $("#main-content").toggleClass("main-content-full");
  });

  if (window.location.pathname.startsWith("/guides")) {
    $(document).ready(() => {
      contentUrl = buildUrl(window.location.hash);
      loadContent(contentUrl);
    });
  }

  $("a.list-group-item").on("click", elem => {
    $("a.list-group-item").removeClass("active");
    if (elem.target.dataset.toggle) {
      elem.preventDefault();
      return;
    }
    $(elem.target).addClass("active");
    contentUrl = buildUrl(elem.target.hash);
    loadContent(contentUrl);
  });
});

/**
 * Varify id belongs to a valid github account.
 * update validAccounts array before include new foregin content.
 * @param {string} hash 
 */
function verifyAccepted (hash) {
  var validAccounts = [
    "#/veelenga/",
    "#/imdrasil/",
    "#/crystal-lang/"
  ];
  for (var i in validAccounts) {
    if (hash.startsWith(validAccounts[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Builds full url checking amber documentation and external sources.
 * Amber docs starts with #documentation.md
 * External docs starts with #/documentation.md
 * @param {string} hash 
 */
function buildUrl (hash) {
  if (hash) {
    if (hash.startsWith("#/") && verifyAccepted(hash)) {
      return baseUrl + hash.slice(2);
    } else {
      return baseUrl + mainParent + hash.slice(1);
    }
  } else {
    return baseUrl + mainParent + "README.md";
  }
}

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
  $("#guide-content").html("<div class='spinner'><div class='cube1'></div><div class='cube2'></div></div>");
  $.get(contentUrl).done(data => {
    content = buildContentFrom(data);
    $("#guide-content").html(content);
    $("pre code").each((i, block) => {
      hljs.highlightBlock(block);
    });
  }).fail((data) => {
    $("#guide-content").html(notFound);
  });
}
