section.section.bg-lightest style="padding-top:60px; padding-bottom: 0;"
  .row.flex-nowrap.wrapper
    == render_template "home/_sidebar.slang"
    #main-content.col.main-content-full
      a.hamburger-hide.affix data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#"
        i.fa.fa-navicon.py-2.p-1.text-muted
      #guide-content
