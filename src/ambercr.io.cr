AMBER_ENV = ARGV[0]? || ENV["AMBER_ENV"]? || "development"

require "option_parser"
require "amber"
require "./**"
require "./*"
require "../config/*"

OptionParser.parse! do |opts|
  opts.on("-p PORT", "--port PORT", "define port to run server") do |opt|
    Amber::Server.settings.port = opt.to_i
  end
end

Amber::Server.start
