Amber::Server.configure do |app|
  app.name = "Amber Framework web application."
  app.host = "0.0.0.0"
  OptionParser.parse! do |opts|
    opts.on("-p PORT", "--port PORT", "define port to run server") do |opt|
      app.port = opt.to_i
    end
  end
  app.color = Amber.env.development?.not_nil!
  app.log = ::Logger.new(STDOUT)
  app.log.level = ::Logger::INFO
end
