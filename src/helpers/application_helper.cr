module ApplicationHelper
  LAYOUT = "application.slang"
  @title = "Amber - Crystal Web Application Framework"
  @container_class = "container"
  @development : Bool? = Amber.env.development?
end
