- minify? = @development ? "" : ".min"
doctype html
html lang="en"
  head
    meta charset="utf-8"
    meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"
    meta name="description" content="Amber aims to deliver developer happiness, productivity and bare metal performance"
    meta name="keywords" content="ambre, mvc, Framework, generator, cli, statically typed, crystal language"
    title = @title
    link href="/assets/css/core.min.css" rel="stylesheet"
    link href="/assets/css/thesaas#{minify?}.css" rel="stylesheet"
    link href="/assets/css/style#{minify?}.css" rel="stylesheet"
    link href="/assets/css/main#{minify?}.css" rel="stylesheet"
    link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/ocean.min.css" rel="stylesheet"
    link rel="apple-touch-icon" href="/favicon.png"
    link rel="icon" href="/favicon.png"
    link rel="icon" type="image/x-icon" href="/favicon.ico"

  body
    == render_template "src/views/layouts/_nav.slang"
    == content
    - unless context.request.path == "/guides"
      == render_template "layouts/_footer.slang"

    script src="/assets/js/core.min.js"
    script src="/assets/js/thesaas#{minify?}.js"
    script src="/assets/js/script#{minify?}.js"
    script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
    script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/crystal.min.js"
    script src="//cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"
    script src="/assets/js/sidebar#{minify?}.js"
