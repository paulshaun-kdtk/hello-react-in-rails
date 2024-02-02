class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order('RANDOM()').first&.message
    render json: @greetings
  end
end
