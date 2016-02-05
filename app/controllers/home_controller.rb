class HomeController < ApplicationController
  def index
   
    @articles = Article.last(2)

   
  end
end
