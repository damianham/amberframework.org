class GuideController < ApplicationController
  def index
    @container_class = "container-fluid"
    render("index.slang")
  end

  def show
    @container_class = "container-fluid"
    render("index.slang")
  end
end
