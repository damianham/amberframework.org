AMBER_ENV = ARGV[0]? || ENV["AMBER_ENV"]? || "development"

require "option_parser"
require "amber"
require "./**"
require "./*"
require "../config/*"
require "markdown"

Amber::Server.start
