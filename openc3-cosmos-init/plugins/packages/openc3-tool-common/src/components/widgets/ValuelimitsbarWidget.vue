<!--
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

# Modified by OpenC3, Inc.
# All changes Copyright 2022, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.
-->

<template>
  <div ref="container" class="d-flex flex-row" :style="computedStyle">
    <value-widget
      v-bind="$attrs"
      :parameters="parameters"
      :settings="[...appliedSettings]"
      :screen-values="screenValues"
      :screen-time-zone="screenTimeZone"
      :widget-index="0"
    />
    <limitsbar-widget
      v-bind="$attrs"
      :parameters="parameters.slice(0, 3)"
      :settings="[...appliedSettings]"
      :screen-values="screenValues"
      :widget-index="1"
    />
  </div>
</template>

<script>
import ValueWidget from './ValueWidget.vue'
import LimitsbarWidget from './LimitsbarWidget.vue'
import Widget from './Widget'

export default {
  mixins: [Widget],
  components: {
    ValueWidget,
    LimitsbarWidget,
  },
}
</script>
