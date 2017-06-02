class HomeController < Amber::Controller::Base
  def index
    render("index.ecr", false)
  end

  def guides
    render("guides.ecr", false)
  end
end

