Amber::Server.configure do |settings|
  settings.name = "Amber Framework web application."
  settings.host = "0.0.0.0"
  settings.port = ENV["PORT"].to_i if ENV["PORT"]?
  in_development = Amber.env.development? ? true : false
  settings.logging.colorize = in_development
  settings.logging.severity = in_development ? "debug" : "info"
end
