var md = new Remarkable();
var baseUrl = "https://raw.githubusercontent.com/amberframework/online-docs/master/";

$(document).ready(function () {
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  $('a[data-sidebar-toggle]').on('click', function (elem) {
    $("a[data-sidebar-toggle]").toggleClass("hamburger-hide");
    $(elem.currentTarget.dataset.target).toggleClass("sidebar-hidden");
    $("#main-content").toggleClass("main-content-full");
  });

  var contentUrl;
  var notFound = "<h1>Documentation not found</h1><p>We can't load this page, please try reloading or report an issue to <a href='https://github.com/amberframework/online-docs/issues'>documentation repository</a>.</p><p>Thanks you for learn Amber Framework!</p>";
  if (window.location.pathname === "/guides") {
    $(document).ready(function () {
      var hash = window.location.hash;
      if (hash) {
        contentUrl = baseUrl + hash.slice(1);
      } else {
        contentUrl = baseUrl + "README.md";
      }
      $.get(contentUrl).done(function (data) {
        content = md.render(data);
        $("#guide-content").html(content);
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }).fail(function (data) {
        $("#guide-content").html(notFound);
      });
    });
  }

  $("a.list-group-item").on("click", function (elem) {
    $("a.list-group-item").removeClass("active");
    var location = elem.target.hash.slice(1);
    var parent = elem.target.dataset.href;
    if (location) {
      if (parent) {
        contentUrl = parent + location;
      } else if (!elem.target.dataset.toggle) {
        contentUrl = baseUrl + location;
      }
    }

    $(elem.target).addClass("active")
    $.get(contentUrl).done(function (data) {
      content = md.render(data);
      $("#guide-content").html(content);
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
      });
    }).fail(function (data) {
      $("#guide-content").html(notFound);
    });;
  });
});