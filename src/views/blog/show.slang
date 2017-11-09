- @title = "#{post["title"]} - Blog - Amber Framework"
header.header.header-inverse.overflow-hidden.orange-header
  .container.text-center
    .row
      .col-12.col-lg-8.offset-lg-2
        h1 = post["title"]
        p.fs-20.opacity-70
          = post["date"]
          | by
          strong
            a.author-link href="#{post["profile"]}"
              = post["author"]
main
  section.section
    .container.post_content
      == Markdown.to_html(File.read(filepath))
