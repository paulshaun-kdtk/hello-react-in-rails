class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order('RANDOM()').first&.content
    render json: @greetings
  end
end
