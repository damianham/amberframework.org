doctype html
html lang="en"
  head
    meta charset="utf-8"
    meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"
    meta name="description" content="Amber aims to deliver developer happiness, productivity and bare metal performance"
    meta name="keywords" content="ambre, mvc, Framework, generator, cli, statically typed, crystal language"
    title = @title
    link href="assets/css/core.min.css" rel="stylesheet"
    link href="assets/css/thesaas.css" rel="stylesheet"
    link href="assets/css/style.css" rel="stylesheet"
    link rel="apple-touch-icon" href="favicon.png"
    link rel="icon" href="favicon.png"
    link rel="icon" type="image/x-icon" href="favicon.ico"

  body
    == render_template "src/views/layouts/_nav.slang"
    == content
    - unless context.request_handler.action == :guides
      == render_template "layouts/_footer.slang"

    script src="assets/js/core.min.js"
    script src="assets/js/thesaas.js"
    script src="assets/js/script.js"
    link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/ocean.min.css" rel="stylesheet"
    script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
    script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/crystal.min.js"
    script src="//cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"

    javascript:
       var md = new Remarkable();
       var base_url = "https://raw.githubusercontent.com/amberframework/online-docs/master/"

      $(document).ready(function() {
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

        $('a[data-sidebar-toggle]').on('click', function(elem){
          $("a[data-sidebar-toggle]").toggleClass("hamburger-hide");
          $(elem.currentTarget.dataset.target).toggleClass("sidebar-hidden");
          $("#main-content").toggleClass("main-content-full")

          elem.preventDefault();
        });

        if(window.location.pathname === "/guides") {
          $(document).ready(function() {
            content_url = base_url + "README.md"
            $.get(content_url).done(function( data ) {
              content = md.render(data);
              $("#guide-content").html(content);
              $('pre code').each(function(i, block) {
                  hljs.highlightBlock(block);
                });
            });
          });
        }

        $("a.list-group-item").on("click", function (elem){
          $("a.list-group-item").removeClass("active")
          elem.preventDefault();
          if( !elem.target.dataset.href ) return;
          if ( !elem.target.dataset.href.includes("https://") ) {
            content_url = base_url + elem.target.dataset.href
          }
          else {
            content_url = elem.target.dataset.href
          }


          $(elem.target).addClass("active")
          $.get(content_url).done(function( data ) {
            content = md.render(data);
            $("#guide-content").html(content);
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
              });
          });
        });
      });

