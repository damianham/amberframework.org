require "amber"
require "markdown"
require "../src/controllers/application_controller"
require "../src/controllers/**"

Amber::Server.configure do |settings|
  settings.name = "Amber Framework web application."
  settings.host = "0.0.0.0"
  settings.port = ENV["PORT"].to_i if ENV["PORT"]?
  settings.logging.colorize = Amber.env.development?
  settings.logging.severity = Amber.env == :development ? "debug" : "info"
end
