#sidebar-wrapper.sidebar-animation.affix
  #sidebar
    a.btn.sidebar-toggler.p-10.pull-right.affix data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#" aria-label="Hide"
      i.fa.fa-times.fs-25.p-4.text-muted aria-hidden="true" title="Hide sidebar"
    .list-group.border-0.text-md-left
      br
      strong PREFACE

      a.list-group-item href="#README.md" Introduction
      a.list-group-item href="#preface/contributing.md" Contributing
      a.list-group-item href="#preface/code-of-conduct.md" Code of Conduct

      br
      strong DOCUMENTATION

      a.list-group-item href="#getting-started/README.md" Getting Started
      a.list-group-item href="#getting-started/Installation/README.md" Installation
      a.list-group-item href="#getting-started/Installation/create-new-app.md" Create New App
      a.list-group-item href="#getting-started/Installation/directory-structure.md" Directory Structure
      a.list-group-item href="#getting-started/Installation/configuration.md" Configuration

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu1" Routing ↴
        #menu1.collapse
          a.list-group-item data-parent="#menu1" href="#getting-started/routing/pipelines.md" Pipelines
          a.list-group-item data-parent="#menu1" href="#getting-started/routing/routes.md" Routes
          a.list-group-item data-parent="#menu1" href="#getting-started/routing/forwarding.md" Forwarding

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu2" Controllers ↴
        #menu2.collapse
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/README.md" Intro
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/request-and-response-objects.md" Request & Response
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/params-validation.md" Params Validations
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/filters.md" Action Filters
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/cookies.md" Cookie
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/flash.md" Flash
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/redirecting.md" Redirection
          a.list-group-item data-parent="#menu2" href="#getting-started/controllers/halting.md" Request Halting

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu3" Models ↴
        #menu3.collapse
          a.list-group-item data-parent="#menu3" href="#getting-started/models/README.md" Intro

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu3sub2" Granite ↴
          #menu3sub2.collapse
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/README.md" Intro
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/migrations.md" Migrations
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/validations.md" Validations
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/callbacks.md" Callbacks
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/associations.md" Associations
            a.list-group-item data-parent="#menu3sub2" href="#getting-started/models/granite/querying.md" Querying

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu4sub2" Crecto ↴
          #menu4sub2.collapse
            a.list-group-item data-parent="#menu4sub2" href="#getting-started/models/crecto/README.md" Models
            a.list-group-item data-parent="#menu4sub2" href="#getting-started/models/crecto/migrations.md" Migrations

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu5sub2" Jennifer ↴
          #menu5sub2.collapse
            a.list-group-item data-parent="#menu5sub2" href="#getting-started/models/jennifer/README.md" Amber Configuration
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/configuration.md" Jennifer Configuration
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/migration.md" Migrations
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/model_mapping.md" Model Mapping
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/model_sti.md" Model STI
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/callbacks.md" Callbacks
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/validation.md" Validation
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/timestamps.md" Timestamps
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/relations.md" Relations
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/crud.md" CRUD
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/query_dsl.md" Query DSL
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/eager_loading.md" Eager loading
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/pagination_and_ordering.md" Pagination and Ordering
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/model_scopes.md" Model Scopes
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/aggregation.md" Aggregation
            a.list-group-item data-parent="#menu5sub2" data-href="https://raw.githubusercontent.com/imdrasil/" href="#jennifer.cr/master/docs/transaction_and_lock.md" Transaction and Lock

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu4" Views ↴
        #menu4.collapse
          a.list-group-item data-parent="#menu2" href="#getting-started/views/README.md" Intro
          a.list-group-item data-parent="#menu2" href="#getting-started/views/layouts.md" Layouts
          a.list-group-item data-parent="#menu2" href="#getting-started/views/templates.md"  Templates
          a.list-group-item data-parent="#menu2" href="#getting-started/views/partials.md"  Partials
          a.list-group-item data-parent="#menu2" href="#getting-started/views/jasper-helpers.html"  View Helpers

      a.list-group-item href="#getting-started/mailers/README.md" Mailers

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu5" Websockets ↴
        #menu5.collapse
          a.list-group-item data-parent="#menu5" href="#getting-started/websockets/README.md" Intro
          a.list-group-item data-parent="#menu5" href="#getting-started/websockets/channels.md" Channels
          a.list-group-item data-parent="#menu5" href="#getting-started/websockets/sockets.md" Sockets
          a.list-group-item data-parent="#menu5" href="#getting-started/websockets/client-js.md" Client JS

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu6" Testing ↴
        #menu6.collapse
          a.list-group-item data-parent="#menu6" href="#getting-started/testing/system.md" System Tests
          a.list-group-item data-parent="#menu6" href="#getting-started/testing/controller.md" Controller Tests
          a.list-group-item data-parent="#menu6" href="#getting-started/testing/integration.md" Integration Tests
          a.list-group-item data-parent="#menu6" href="#getting-started/testing/unit.md" Model Testing

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu7" CLI ↴
        #menu7.collapse
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/README.md" Intro
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/new.md" New
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/generate.md" Generate
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/migrate.md" Migrate
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/database.md" Database
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/console.md" Console
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/deploy.md" Deploy
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/encrypt.md" Encrypt
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/routes.md" Routes
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/run.md" Run
          a.list-group-item data-parent="#menu7" href="#getting-started/cli/watch.md" Watch
      br
      strong RECIPES

      a.list-group-item href="#recipes/examples/amber-auth-example.md" Amber Auth Example
      a.list-group-item href="#recipes/debugging/vs-code-debug.md" VS Code Debugging
      a.list-group-item href="#recipes/examples/heroku-deployments.md" Deploying To Heroku
      a.list-group-item href="#recipes/examples/digital-ocean-deployments.md" Deploying To Digital Ocean

      br
      strong Shards

      a.list-group-item data-href="https://raw.githubusercontent.com/crystal-lang/" href="#shards/master/README.md" Intro
      a.list-group-item data-href="https://raw.githubusercontent.com/veelenga/" href="#awesome-crystal/master/README.md" Awesome Crystal
