- @title = "Oops! - Amber Framework"
.banner-wrap
  .wsite-elements.wsite-not-footer.wsite-header-elements
    .wsite-section-wrap
      .wsite-section.wsite-header-section.wsite-section-bg-color style="height: auto;vertical-align: middle;background-color: #f4994b;background-image: none;is_customized: 1;"
        .wsite-section-content
          .container
            .banner
              h1 Internal server error
              p.paragraph Oops!, Something bad happened.
              - if Amber::Settings.env =~ /development/
                pre style="text-align: left; background: #000; padding: 5px" = ex.inspect_with_backtrace
