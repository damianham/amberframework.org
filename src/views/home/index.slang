== render partial: "layouts/_header.slang"
main.main-content
  section.section
    .container
      header.section-header.mb-0
        small
          strong
            | Bare metal performance
        h2
          | Fun. Statically Typed. High Performance.
        hr
        p.lead
          | Amber makes building web applications simple, fast and enjoyable without sacrificing performance.
      .row
        .col-12.offset-md-2.col-md-8.mb-30
          .amber-yt-video
            iframe src="https://www.youtube.com/embed/nIHSuBhoYc0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""
      .row.gap-y
        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-tv.fs-25.pt-4.text-secondary
            div
              h5
                | Generators
              p
                | Use code generation and scaffolding features to rapidly build prototypes.

        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-university.fs-25.pt-4.text-secondary
            div
              h5
                | MIT License
              p
                | Amber is licensed under the MIT license which makes it perfect
                | for use in Commercial applications.

        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-cubes.fs-25.pt-4.text-secondary
            div
              h5
                | MVC Conventions
              p
                | Instead of having to plan where things go, Amber comes with a
                | set of conventions to guide you in developing your application.

        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-user-secret.fs-25.pt-4.text-secondary
            div
              h5
                | Build Secure Apps
              p
                | Built-in tools for input validation, CSRF protection, Form
                | tampering protection, SQL injection prevention, and XSS prevention,
                | helping you keep your application safe and secure.

        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-language.fs-25.pt-4.text-secondary
            div
              h5
                | A beautiful Type Safe Language
              p
                | Crystal inspired by Ruby is a statically type checked, so any type errors will be
                | caught early by the compiler rather than fail on runtime.
                | Crystal uses green threads, called fibers, to achieve concurrency.

        .col-12.col-md-6.col-xl-4
          .flexbox.gap-items-4
            div.icon
              i.fa.fa-wrench.fs-25.pt-4.text-secondary
            div
              h5
                | The Right Amount of Tooling
              p
                | The things you need are built-in. CLI, Translations, database access,
                | caching, validation, authentication, including tools for deployments
                | secrets encryption.

  section.section.text-center.bg-gray
    .container
      .row
        .col-12.offset-md-3.col-md-6
          p
            img src="/assets/img/bootstrap-github-1.png" alt="github logo"
          br
          h3.fw-900.mb-20
            | Fork the project on GitHub
          p.lead
            strong
              | Amber
            |  is open source! It’s hosted, developed, and maintained on GitHub by folks like you.
          br
          a.btn.btn-lg.btn-round.shadow-3.btn-primary href="https://github.com/amberframework" target="_blank"
            | Contribute On Github

  section.section.pb-0.overflow-hidden
    .container.mb-50
      header.section-header
        p
          img src="/assets/img/cta.png" alt="image about community"
        h2
          | Community Driven
        hr
        p.lead
          | Contributing to Amber can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine. Amber is a community effort and we want You to be part of ours.
      .flexbox.flex-grow-all.text-center.mx-auto.amber-stats
        div
          span.text-info.fs-50 data-provide="counter" data-from="0" data-to="15" data-speed="300" 14
          br
          p 15+ Releases
            i.fa.fa-github
            small
              a href="https://github.com/amberframework/amber/releases/latest" target="_blank" Version 0.3.0
        div
          span.text-info.fs-50 data-provide="counter" data-from="0" data-to="250" data-speed="300" 250
          br
          p 250+ Stars
            i.fa.fa-star
        div
          span.text-info.fs-50 data-provide="counter" data-from="0" data-to="630" data-speed="300" 630
          br
          p 630+ Commits
            i.fa.fa-file-text
      br
