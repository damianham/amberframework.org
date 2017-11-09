- @title = "#{post["title"]} - Blog - Amber Framework"
header.header.header-inverse.overflow-hidden.orange-header
  .container.text-center
    .row
      .col-12.col-lg-8.offset-lg-2
        h1 = post["title"]
        p.fs-20.opacity-70
          = post["date"]
          | by
          = post["author"]
main
  section.section
    .container.post_content
      p = post["date"]
        | by
        a href="#{post["profile"]}"
          = post["author"]
      == Markdown.to_html(File.read(filepath))
