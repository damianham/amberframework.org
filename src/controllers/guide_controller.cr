class GuideController < ApplicationController
  include GuideHelper
  @source : String? = DOCUMENTATION["guides/README.md"]

  def index
    @container_class = "container-fluid"
    render("index.slang")
  end

  def show
    @container_class = "container-fluid"
    render("index.slang")
  end
end
