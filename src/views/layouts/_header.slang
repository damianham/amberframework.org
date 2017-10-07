header.header.header-inverse.h-fullscreen.p-0.bg-primary.overflow-hidden style="background-image: linear-gradient( #f4994b 100px, #E67E25 50%);"
  canvas.constellation
  .container.text-center
    .row.h-full.align-items-center
      .col-12.col-md-8.offset-md-2
        img.img-fluid src="assets/img/amber-logo-t-bg.png" style="max-width: 50%; height: auto;"
        h1.display-4

        br
        p.lead.text-white.fs-20
          |  Amber is a web application framework written in Crystal inspired by Kemal, Rails, Phoenix and other popular application frameworks.
        br
        .btn-group
          button.btn.btn-round.fw-500.shadow-3.btn-outline-secondary.text-dark type="button"
            | amber new {name} --deps
          a.btn.btn.btn-round.fw-500.shadow-3.btn-primary href="/guides"
            | Getting Started
        br
