module Amber::Exceptions
  class RouteNotFound < Base
    include Amber::Controller::Render
    LAYOUT = "application.slang"
    @title : String?

    def initialize(request)
      @status_code = 404
      io = IO::Memory.new
      response = HTTP::Server::Response.new(io)
      context = HTTP::Server::Context.new(request, response)
      flash = context.flash
      super(render("404.slang"))
    end

    def set_response(response)
      response.headers["Content-Type"] = "text/html"
      response.print message
      response.status_code = status_code
    end
  end
end

class ErrorHandler < Amber::Pipe::Base
  include Amber::Controller::Render
  LAYOUT = "application.slang"
  @title : String?

  def call(context)
    call_next(context)
  rescue ex
    flash = context.flash
    context.response.status_code = 500
    context.response.content_type = "text/html"
    context.response.print render("500.slang")
  end
end
