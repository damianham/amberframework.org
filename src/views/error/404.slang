- @title = "Request not found - Amber Framework"
.banner-wrap
  .wsite-elements.wsite-not-footer.wsite-header-elements
    .wsite-section-wrap
      .wsite-section.wsite-header-section.wsite-section-bg-color style="height: auto;vertical-align: middle;background-color: #f4994b;background-image: none;is_customized: 1;"
        .wsite-section-content
          .container
            .banner
              h1 The request was not found

              p.paragraph
                = context.request.method
                | -
                = context.request.path
