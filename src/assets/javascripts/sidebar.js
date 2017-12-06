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

const host = "https://raw.githubusercontent.com";
const path = "/amberframework/online-docs/master";

$(document).ready(() => {
    var hash = window.location.hash;

    $("footer").addClass('sticky-footer');

    if (hash) {
        goToUrl(document.getElementById(hash.replace("#", '')));
    } else {
        goToUrl(document.getElementById("getting-started"));
    }

    $("a.list-group-item").on("click", (e) => {
        e.preventDefault();
        goToUrl(e.currentTarget)
    });

    $("a[data-sidebar-toggle]").on("click", (elem) => {
        elem.preventDefault();
        $("a[data-sidebar-toggle]").toggleClass("hamburger-hide");
        $(elem.dataset.target).toggleClass("sidebar-hidden");
        $("#main-content").toggleClass("main-content-full");
    });

    $(window).bind("popstate", function(e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            var url = new URL(host + path + window.location.pathname.replace("/guides", ''));
            loadContent(url.href);
        }
    });

    // Removes empty tags created by TheSaaS theme
    $("a.list-group-item").each((i, e) => {
        if (/^\s*$/.test($(e).text())) {
            $(e).addClass("d-none");
        }
    });
});

function goToUrl(e) {
    var $e = $(e);

    if ($e.data("toggle") === undefined) {
        var url = new URL(e.href);
        var new_location = '/guides' + url.pathname + url.hash;

        $("a.list-group-item").removeClass("active")
        loadContent(host + path + url.pathname);
        var $parent = $($e.data("parent"));
        $e.addClass("active");
        $parent.addClass("show");
        $parent.parent().addClass("show");

        window.history.pushState({
                slug: new_location,
                url: new_location,
            },
            'Amber Docs ' + url.hash, new_location);
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
};;