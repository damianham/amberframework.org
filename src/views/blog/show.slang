- @title = "#{post["title"]} - Blog - Amber Framework"
main
  section.section
    .container.post_content
      h1 = post["title"]
      p = post["date"]
        | by
        a href="#{post["profile"]}"
          = post["author"]
      == Markdown.to_html(File.read(filepath))
