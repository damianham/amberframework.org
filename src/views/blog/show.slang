- @title = "#{name.gsub("blog/", "").gsub('-', ' ').gsub(".md", "").capitalize} - Blog - Amber Framework"
main
  section.section
    .container
      == Markdown.to_html(File.read(name))
