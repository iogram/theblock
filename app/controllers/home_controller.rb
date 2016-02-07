class HomeController < ApplicationController
  def index
        if !@articles.first.title.empty?
            @articles = Article.last(2)
        end
  end
end
