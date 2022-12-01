# encoding: ascii-8bit

# Copyright 2022 OpenC3, Inc
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

# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

module OpenC3
  module Api
    WHITELIST ||= []
    WHITELIST.concat([
                       'stash_set',
                       'stash_get',
                       'stash_all',
                       'stash_keys',
                       'stash_delete'
                     ])

    def stash_set(key, value, scope: $openc3_scope, token: $openc3_token)
      authorize(permission: 'script_run', scope: scope, token: token)
      StashModel.set({ key: key, value: value}, scope: scope)
    end

    def stash_get(key, scope: $openc3_scope, token: $openc3_token)
      authorize(permission: 'script_view', scope: scope, token: token)
      StashModel.get(key: key, scope: scope)
    end

    def stash_all(scope: $openc3_scope, token: $openc3_token)
      authorize(permission: 'script_view', scope: scope, token: token)
      StashModel.all(scope: scope)
    end

    def stash_keys(scope: $openc3_scope, token: $openc3_token)
      authorize(permission: 'script_view', scope: scope, token: token)
      StashModel.keys(scope: scope)
    end

    def stash_delete(key, scope: $openc3_scope, token: $openc3_token)
      StashModel.delete(key: key, scope: scope)
    end
  end
end
