class HomeController < ApplicationController
  def index
    render("index.slang")
  end

  def media
    render("media.slang")
  end
end
