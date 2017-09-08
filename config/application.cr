Amber::Server.configure do |app|
  # Server options
  app_path = __FILE__ # Do not change unless you understand what you are doing.
  app.name = "Ambercr.io web application."
  app.host = "0.0.0.0"
  OptionParser.parse! do |opts|
    opts.on("-p PORT", "--port PORT", "define port to run server") do |opt|
      app.port = opt.to_i
    end
  end
  app.env = ENV.fetch("AMBER_ENV", "development").colorize(:green).to_s
  app.log = ::Logger.new(STDOUT)
  app.log.level = ::Logger::INFO
end