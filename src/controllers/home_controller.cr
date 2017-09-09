class HomeController < Amber::Controller::Base
  LAYOUT = "application.slang"
  @title : String?

  def index
    render("index.slang")
  end

  def guides
    render("guides.slang")
  end
end
