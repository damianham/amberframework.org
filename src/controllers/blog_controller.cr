class BlogController < ApplicationController
  def index
    render("index.slang")
  end

  def show
    name = "blog/#{params["id"]}.md"
    if File.exists? name
      render("show.slang")
    else
      raise Amber::Exceptions::RouteNotFound.new(context.request)
    end
  end
end
