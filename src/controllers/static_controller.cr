class StaticController < Amber::Controller::Base
  def index
    Amber::Exceptions::RouteNotFound.new(request).set_response(response)
    ""
  end
end
