class HomeController < Amber::Controller::Base

  def static
    redirect_to "/index.html"
  end

  def index
    render("index.slang")
  end
end

