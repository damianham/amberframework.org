nav.topbar.topbar-inverse.topbar-expand-md.topbar-sticky style="background-color: #f4994b;"
  div class="#{ @container_class }"
    .topbar-left
      button.topbar-toggler
        | ☰
      a.topbar-brand href="/"
        img.logo-default src="assets/img/amber-logo-small-white.png" alt="logo" width="100"
        img.logo-inverse src="assets/img/amber-logo-small-white.png" alt="logo" width="100"
    .topbar-right
      ul.topbar-nav.nav style=" color: white"
        li.nav-item
          a.nav-link.menu-item-type-custom.menu-item-object-custom.menu-item-has-children href="/guides"
            | Learn
            i.fa.fa-caret-down
          .nav-submenu.depth-0
            a.nav-link.menu-item-type-post_type.menu-item-object-page href="/guides" Guides
            a.nav-link.menu-item-type-post_type.menu-item-object-page href="/api" Api
            a.nav-link.menu-item-type-post_type.menu-item-object-page href="/examples" Examples
        li.nav-item
          a.nav-link href="/media"
            | Media
        li.nav-item
          a.nav-link href="https://github.com/amberframework/" target="_blank"
            | Github
        li.nav-item
          a.nav-link href="https://gitter.im/amberframework/amber" target="_blank"
            | Gitter
        li.nav-item
          a.nav-link href="https://teespring.com/stores/amber-framework" target="_blank"
            | Goodies
