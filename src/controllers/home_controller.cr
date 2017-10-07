class HomeController < Amber::Controller::Base
  LAYOUT = "application.slang"
  @title : String = "Amber - Crystal Web Application Framework"
  @container_class = "container"

  def index
    render("index.slang")
  end

  def guides
    @container_class = "container-fluid"
    render("guides.slang")
  end

  def roadmap
    render("roadmap.slang")
  end

  def media
    render("media.slang")
  end
end
