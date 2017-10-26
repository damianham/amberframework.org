class GuideController < ApplicationController
  include GuideHelper
  @source : String? = DOCUMENTATION["guides/README.md"]

  def index
    @container_class = "container-fluid"
    render("index.slang")
  end

  def show
    @container_class = "container-fluid"
    name = context.request.path.lchop
    @source = DOCUMENTATION[name]?
    if @source
      render("index.slang")
    else
      raise Amber::Exceptions::RouteNotFound.new(request)
    end
  end
end
