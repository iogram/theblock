class HomeController < ApplicationController
  def index
        if !Article.first.title.empty?
            @articles = Article.last(2)
        end
  end
end
