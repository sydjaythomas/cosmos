# encoding: ascii-8bit

# Copyright 2022 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This program may also be used under the terms of a commercial or
# enterprise edition license of COSMOS if purchased from the
# copyright holder

require 'cosmos/models/gem_model'

class ModelController < ApplicationController
  def index
    return unless authorization('system')
    render :json => @model_class.names(scope: params[:scope])
  end

  def create(update_model = false)
    return unless authorization('admin')
    model = @model_class.from_json(params[:json], scope: params[:scope])
    if update_model
      model.update
      Cosmos::Logger.info("#{@model_class.name} updated: #{params[:json]}", scope: params[:scope], user: user_info(request.headers['HTTP_AUTHORIZATION']))
    else
      model.create
      Cosmos::Logger.info("#{@model_class.name} created: #{params[:json]}", scope: params[:scope], user: user_info(request.headers['HTTP_AUTHORIZATION']))
    end
    head :ok
  end

  def show
    return unless authorization('system')
    if params[:id].downcase == 'all'
      render :json => @model_class.all(scope: params[:scope])
    else
      render :json => @model_class.get(name: params[:id], scope: params[:scope])
    end
  end

  def update
    create(true)
  end

  def destroy
    return unless authorization('admin')
    @model_class.new(name: params[:id], scope: params[:scope]).destroy
    Cosmos::Logger.info("#{@model_class.name} destroyed: #{params[:id]}", scope: params[:scope], user: user_info(request.headers['HTTP_AUTHORIZATION']))
  end

  private

  # Authorize and rescue the possible execeptions
  # @return [Boolean] true if authorize successful
  def authorization(permission)
    begin
      authorize(
        permission: permission,
        scope: params[:scope],
        token: request.headers['HTTP_AUTHORIZATION'],
      )
    rescue Cosmos::AuthError => e
      render(json: { status: 'error', message: e.message }, status: 401) and
        return false
    rescue Cosmos::ForbiddenError => e
      render(json: { status: 'error', message: e.message }, status: 403) and
        return false
    end
    true
  end
end
