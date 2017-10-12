module Helper::Application
  LAYOUT = "application.slang"
  @title = "Amber - Crystal Web Application Framework"
  @container_class = "container"
  @development = Amber::Settings.env =~ /development/ ? true : false
end
