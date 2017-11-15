#sidebar-wrapper.sidebar-animation.affix
  #sidebar
    a.btn.sidebar-toggler.p-10.pull-right.affix data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#" aria-label="Hide"
      i.fa.fa-times.fs-25.p-4.text-muted aria-hidden="true" title="Hide sidebar"
    .list-group.border-0.text-md-left
      br
      strong PREFACE

      a.list-group-item href="/guides/#introduction" id="introduction" Introduction
      a.list-group-item href="/guides/preface/contributing.md#contributing" id="contributing" Contributing
      a.list-group-item href="/guides/preface/code-of-conduct.md#code-of-conduct" id="code-of-conduct" Code of Conduct

      br
      strong DOCUMENTATION

      a.list-group-item href="/guides/getting-started/README.md#getting-started" id="getting-started" Getting Started
      a.list-group-item href="/guides/getting-started/Installation/README.md#installation" id="installation" Installation
      a.list-group-item href="/guides/getting-started/Installation/minimal-configuration.md#minimal-configuration" id="minimal-configuration" Minimal Configuration

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu7" CLI ↴
        #menu7.collapse
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/README.md#cli-readme" id="cli-readme" Intro
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/new.md#cli-new" id="cli-new" New
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/generate.md#cli-generate" id="cli-generate" Generate
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/migrate.md#cli-migrate" id="cli-migrate" Migrate
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/database.md#cli-database" id="cli-database" Database
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/console.md#cli-console" id="cli-console" Console
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/deploy.md#cli-deploy" id="cli-deploy" Deploy
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/encrypt.md#cli-encrypt" id="cli-encrypt" Encrypt
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/routes.md#cli-routes" id="cli-routes" Routes
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/run.md#cli-run" id="cli-run" Run
          a.list-group-item data-parent="#menu7" href="/guides/getting-started/cli/watch.md#cli-watch" id="cli-watch" Watch
      a.list-group-item href="/guides/getting-started/Installation/create-new-app.md#create-new-app" id="create-new-app" Create New App
      a.list-group-item href="/guides/getting-started/Installation/directory-structure.md#directory-structure" id="directory-structure" Directory Structure
      a.list-group-item href="/guides/getting-started/Installation/configuration.md#configuration" id="configuration" Configuration

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu1" Routing ↴
        #menu1.collapse
          a.list-group-item data-parent="#menu1" href="/guides/getting-started/routing/pipelines.md#pipelines" id="pipelines" Pipelines
          a.list-group-item data-parent="#menu1" href="/guides/getting-started/routing/routes.md#routes" id="routes" Routes
          a.list-group-item data-parent="#menu1" href="/guides/getting-started/routing/forwarding.md#forwarding" id="forwarding" Forwarding

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu2" Controllers ↴
        #menu2.collapse
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/README.md#controllers-readme" id="controllers-readme" Intro
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/request-and-response-objects.md#controllers-request-and-response-objects" id="controllers-request-and-response-objects" Request & Response
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/params-validation.md#controllers-params-validation" id="controllers-params-validation" Params Validations
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/filters.md#controllers-filters" id="controllers-filters" Action Filters
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/cookies.md#controllers-cookies" id="controllers-cookies" Cookie
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/flash.md#controllers-flash" id="controllers-flash" Flash
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/redirecting.md#controllers-redirecting" id="controllers-redirecting" Redirection
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/controllers/halting.md#controllers-halting" id="controllers-halting" Request Halting

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu3" Models ↴

        #menu3.collapse
          a.list-group-item data-parent="#menu3" href="/guides/getting-started/models/README.md#models-readme" id="models-readme" Intro

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu3sub2" Granite ↴
          #menu3sub2.collapse
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/README.md#granite-readme" id="granite-readme" Intro
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/migrations.md#granite-migrations" id="granite-migrations" Migrations
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/validations.md#granite-validations" id="granite-validations" Validations
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/callbacks.md#granite-callbacks" id="granite-callbacks" Callbacks
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/associations.md#granite-associations" id="granite-associations" Associations
            a.list-group-item data-parent="#menu3sub2" href="/guides/getting-started/models/granite/querying.md#granite-querying" id="granite-querying" Querying

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu4sub2" Crecto ↴
          #menu4sub2.collapse
            a.list-group-item data-parent="#menu4sub2" href="/guides/getting-started/models/crecto/README.md#crecto-readme" id="crecto-readme" Models
            a.list-group-item data-parent="#menu4sub2" href="/guides/getting-started/models/crecto/migrations.md#crecto-migrations" id="crecto-migrations" Migrations

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu5sub2" Jennifer ↴
          #menu5sub2.collapse
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/README.md#jennifer-readme" id="jennifer-readme" Amber Configuration
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/configuration.md#jennifer-configuration" id="jennifer-configuration" Jennifer Configuration
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/migration.md#jennifer-migration" id="jennifer-migration" Migrations
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/model_mapping.md#jennifer-model-mapping" id="jennifer-model-mapping" Model Mapping
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/model_sti.md#jennifer-model-sti" id="jennifer-model-sti" Model STI
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/callbacks.md#jennifer-callbacks" id="jennifer-callbacks" Callbacks
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/validation.md#jennifer-validation" id="jennifer-validation" Validation
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/timestamps.md#jennifer-timestamps" id="jennifer-timestamps" Timestamps
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/relations.md#jennifer-relations" id="jennifer-relations" Relations
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/crud.md#jennifer-crud" id="jennifer-crud" CRUD
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/query_dsl.md#jennifer-query-dsl" id="jennifer-query-dsl" Query DSL
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/eager_loading.md#jennifer-eager-loading" id="jennifer-eager-loading" Eager loading
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/pagination_and_ordering.md#jennifer-pagination-and-ordering" id="jennifer-pagination-and-ordering" Pagination and Ordering
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/model_scopes.md#jennifer-model-scopes" id="jennifer-model-scopes" Model Scopes
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/aggregation.md#jennifer-aggregation" id="jennifer-aggregation" Aggregation
            a.list-group-item data-parent="#menu5sub2" href="/guides/getting-started/models/jennifer/transaction_and_lock.md#jennifer-transaction-and-lock" id="jennifer-transaction-and-lock" Transaction and Lock

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu4" Views ↴
        #menu4.collapse
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/views/README.md#views-readme" id="views-readme" Intro
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/views/layouts.md#views-layouts" id="views-layouts" Layouts
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/views/templates.md#views-templates" id="views-templates"  Templates
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/views/partials.md#views-partials" id="views-partials"  Partials
          a.list-group-item data-parent="#menu2" href="/guides/getting-started/views/jasper-helpers.md#views-jasper-helpers" id="views-jasper-helpers" View Helpers

      a.list-group-item href="/guides/getting-started/mailers/README.md#mailers" id="mailers" Mailers

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu5" Websockets ↴
        #menu5.collapse
          a.list-group-item data-parent="#menu5" href="/guides/getting-started/websockets/README.md#websockets-readme" id="websockets-readme" Intro
          a.list-group-item data-parent="#menu5" href="/guides/getting-started/websockets/channels.md#websockets-channels" id="websockets-channels" Channels
          a.list-group-item data-parent="#menu5" href="/guides/getting-started/websockets/sockets.md#websockets-sockets" id="websockets-sockets" Sockets
          a.list-group-item data-parent="#menu5" href="/guides/getting-started/websockets/client-js.md#websockets-client-js" id="websockets-client-js" Client JS

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu6" Testing ↴
        #menu6.collapse
          a.list-group-item data-parent="#menu6" href="/guides/getting-started/testing/system.md#testing-system" id="testing-system" System Tests
          a.list-group-item data-parent="#menu6" href="/guides/getting-started/testing/controller.md#testing-controller" id="testing-controller" Controller Tests
          a.list-group-item data-parent="#menu6" href="/guides/getting-started/testing/integration.md#testing-integration" id="testing-integration" Integration Tests
          a.list-group-item data-parent="#menu6" href="/guides/getting-started/testing/unit.md#testing-unit" id="testing-unit" Model Testing

      strong RECIPES

      a.list-group-item href="/guides/recipes/examples/amber-auth-example.md#amber-auth-example" id="amber-auth-example" Amber Auth Example
      a.list-group-item href="/guides/recipes/debugging/vs-code-debug.md#vs-code-debug" id="vs-code-debug" VS Code Debugging
      a.list-group-item href="/guides/recipes/examples/heroku-deployments.md#heroku-deployments" id="heroku-deployments" Deploying To Heroku
      a.list-group-item href="/guides/recipes/examples/digital-ocean-deployments.md#digital-ocean-deployments" id="digital-ocean-deployments" Deploying To Digital Ocean

      br
      strong Shards

      a.list-group-item href="/guides/shards#shards" id="shards" Intro
      a.list-group-item href="/guides/awesome-crystal#awesome-crystal" id="awesome-crystal" Awesome Crystal
