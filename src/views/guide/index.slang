- @title = "Guides & Documentation - Amber Framework"
css:
  .topbar {
    background: #e57310 !important;
  }
section.section.bg-lightest.guides-spacing
  .row.flex-nowrap.wrapper
    == render_template "layouts/_sidebar.slang"
    #main-content.col.main-content-full
      a.btn.hamburger-hide.affix.p-10 data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#" aria-label="Show"
        i.fa.fa-navicon.fs-25.p-4.text-muted aria-hidden="true" title="Show sidebar"
      #guide-content data-href="#{@source}"
footer.site-footer.py-30.bg-gray.text-right
  .container
    .row
      .col-12.col-md-12.col-lg-12
        h6.heading-alt.text-uppercase.fs-14.mb-16
          img src="/assets/img/amber-white-bg.png" width="100" alt="amber logo"
        p.text-light
          | Some problem?, please contact us at
          a href="https://gitter.im/amberframework/amber"
            | Gitter room
          | or try
          a href="https://docs.amberframework.org/"
            | Gitbook
        p.text-light
          a href="https://amberframework.org"
            | Amber Framework
          | , 2017.
        a.github-button href="https://github.com/amberframework/amber" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star amberframework/amber on GitHub" Star
