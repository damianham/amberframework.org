class HomeController < Amber::Controller::Base
  LAYOUT = "application.slang"
  @title : String?

  def index
    raise "error!"
    render("index.slang")
  end

  def guides
    render("guides.slang")
  end
end
