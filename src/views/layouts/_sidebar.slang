#sidebar-wrapper.sidebar-animation.affix
    a.btn.sidebar-toggler.p-10.pull-right.affix data-sidebar-toggle="" data-target="#sidebar-wrapper" href="#" aria-label="Hide"
      i.fa.fa-navicon.fs-25.p-4.text-muted aria-hidden="true" title="Hide sidebar"
  #sidebar.pt-10
    .list-group.border-0.text-md-left
      br
      strong QUICKSTART

      a.list-group-item href="/getting-started/quickstart/zero-to-deploy.md#zero-to-deploy" id="zero-to-deploy" Zero to Deploy

      br
      strong GUIDES

      a.list-group-item href="/getting-started/README.md#getting-started" id="getting-started" Overview
      a.list-group-item href="/getting-started/Installation/README.md#installation" id="installation" Installation
      a.list-group-item href="/getting-started/Installation/directory-structure.md#directory-structure" id="directory-structure" Directory Structure
      a.list-group-item href="/getting-started/Installation/configuration.md#configuration" id="configuration" Configuration

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu1" Routing ↴
        #menu1.collapse
          a.list-group-item data-parent="#menu1" href="/getting-started/routing/pipelines.md#pipelines" id="pipelines" Pipelines
          a.list-group-item data-parent="#menu1" href="/getting-started/routing/routes.md#routes" id="routes" Routes

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu2" Controllers ↴
        #menu2.collapse
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/README.md#controllers-readme" id="controllers-readme" Intro
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/request-and-response-objects.md#controllers-request-and-response-objects" id="controllers-request-and-response-objects" Request & Response
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/params-validation.md#controllers-params-validation" id="controllers-params-validation" Params Validations
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/filters.md#controllers-filters" id="controllers-filters" Action Filters
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/cookies.md#controllers-cookies" id="controllers-cookies" Cookie
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/flash.md#controllers-flash" id="controllers-flash" Flash
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/redirecting.md#controllers-redirecting" id="controllers-redirecting" Redirection
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/halting.md#controllers-halting" id="controllers-halting" Request Halting
          a.list-group-item data-parent="#menu2" href="/getting-started/controllers/respond_with.md#controllers-respond-with" id="controllers-respond-with" Respond With

      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu3" Models ↴

        #menu3.collapse
          a.list-group-item data-parent="#menu3" href="/getting-started/models/README.md#models-readme" id="models-readme" Intro

          a.list-group-item aria-expanded="false" data-toggle="collapse" href="#menu3sub2" Granite ↴
          #menu3sub2.collapse
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/README.md#granite-readme" id="granite-readme" Intro
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/migrations.md#granite-migrations" id="granite-migrations" Migrations
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/validations.md#granite-validations" id="granite-validations" Validations
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/callbacks.md#granite-callbacks" id="granite-callbacks" Callbacks
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/associations.md#granite-associations" id="granite-associations" Associations
            a.list-group-item data-parent="#menu3sub2" href="/getting-started/models/granite/querying.md#granite-querying" id="granite-querying" Querying


      a.list-group-item.collapsed aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu4" Views ↴
        #menu4.collapse
          a.list-group-item data-parent="#menu2" href="/getting-started/views/README.md#views-readme" id="views-readme" Intro
          a.list-group-item data-parent="#menu2" href="/getting-started/views/jasper-helpers.md#views-jasper-helpers" id="views-jasper-helpers" View Helpers

      a.list-group-item href="/getting-started/mailers/README.md#mailers" id="mailers" Mailers

      a.list-group-item aria-expanded="false" data-parent="#sidebar" data-toggle="collapse" href="#menu5" Websockets ↴
        #menu5.collapse
          a.list-group-item data-parent="#menu5" href="/getting-started/websockets/README.md#websockets-readme" id="websockets-readme" Intro
          a.list-group-item data-parent="#menu5" href="/getting-started/websockets/channels.md#websockets-channels" id="websockets-channels" Channels
          a.list-group-item data-parent="#menu5" href="/getting-started/websockets/sockets.md#websockets-sockets" id="websockets-sockets" Sockets
          a.list-group-item data-parent="#menu5" href="/getting-started/websockets/client-js.md#websockets-client-js" id="websockets-client-js" Client JS

      br
      strong TESTING
      a.list-group-item data-parent="#menu6" href="/getting-started/testing/system.md#testing-system" id="testing-system" System Tests
      a.list-group-item data-parent="#menu6" href="/getting-started/testing/controller.md#testing-controller" id="testing-controller" Controller Tests
      a.list-group-item data-parent="#menu6" href="/getting-started/testing/integration.md#testing-integration" id="testing-integration" Integration Tests
      a.list-group-item data-parent="#menu6" href="/getting-started/testing/unit.md#testing-unit" id="testing-unit" Model Testing

      br
      strong DEPLOYMENT
      a.list-group-item href="/recipes/examples/heroku-deployments.md#heroku-deployments" id="heroku-deployments" Deploying To Heroku
      a.list-group-item href="/recipes/examples/digital-ocean-deployments.md#digital-ocean-deployments" id="digital-ocean-deployments" Deploying To Digital Ocean


      br
      strong COMMAND LINE TOOL

      a.list-group-item data-parent="#menu7" href="/getting-started/cli/README.md#cli-readme" id="cli-readme" Amber CLI
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/new.md#cli-new" id="cli-new" New
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/generate.md#cli-generate" id="cli-generate" Generate
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/database.md#cli-database" id="cli-database" Database
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/exec.md#cli-exec" id="cli-exec" Exec
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/deploy.md#cli-deploy" id="cli-deploy" Deploy
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/encrypt.md#cli-encrypt" id="cli-encrypt" Encrypt
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/routes.md#cli-routes" id="cli-routes" Routes
      a.list-group-item data-parent="#menu7" href="/getting-started/cli/watch.md#cli-watch" id="cli-watch" Watch

      br
      strong RECIPES

      a.list-group-item href="/recipes/examples/amber-auth-example.md#amber-auth-example" id="amber-auth-example" Amber Auth Example
      a.list-group-item href="/recipes/debugging/vs-code-debug.md#vs-code-debug" id="vs-code-debug" VS Code Debugging
      a.list-group-item data-parent="#menu4sub2" href="/getting-started/models/crecto/README.md#crecto-readme" id="crecto-readme" Crecto ORM
