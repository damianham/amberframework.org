class BlogController < ApplicationController
  def index
    render("index.slang")
  end

  def post
    name = "blog/#{params["post"]}.md"
    if File.exists? name
      render("show.slang")
    else
      raise Amber::Exceptions::RouteNotFound.new(context.request)
    end
  end
end
