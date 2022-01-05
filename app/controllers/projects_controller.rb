class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!

  def front_end
  end

  def full_stack
  end
end
