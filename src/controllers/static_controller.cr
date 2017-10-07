class StaticController < ApplicationController
  def index
    Amber::Exceptions::RouteNotFound.new(request).set_response(response)
    ""
  end
end
