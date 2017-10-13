- @title = "Guides & Documentation - Amber Framework"
section.section.bg-lightest.guides-spacing
  .row.flex-nowrap.wrapper
    == render_template "home/_sidebar.slang"
    #main-content.col.main-content-full
      a.btn.hamburger-hide.affix.p-10 data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#" aria-label="Show"
        i.fa.fa-navicon.fs-25.p-4.text-muted aria-hidden="true" title="Show sidebar"
      #guide-content
footer.site-footer.py-30.bg-gray.text-right
  .container
    .row
      .col-12.col-md-12.col-lg-12
        h6.heading-alt.text-uppercase.fs-14.mb-16
          img src="/assets/img/amber-white-bg.png" width="100" alt="amber logo"
        p.text-light
          | If you found any issue on Amber documentation please contact us at
          a href="https://gitter.im/amberframework/amber"
            | Gitter room.
        p.text-light
          | Copyright © 2017
          a href="https://amberframework.org"
            | Amber Framework
          | . All rights reserved.
