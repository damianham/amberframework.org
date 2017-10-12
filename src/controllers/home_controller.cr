class HomeController < ApplicationController
  def index
    render("index.slang")
  end

  def guides
    @container_class = "container-fluid"
    render("guides.slang")
  end

  def media
    render("media.slang")
  end
end
