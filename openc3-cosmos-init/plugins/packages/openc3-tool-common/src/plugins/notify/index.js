/*
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
# All changes Copyright 2024, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.
*/

import vuetify from '../vuetify'
import Toast from './Toast.vue'

class Notify {
  constructor(options = {}) {
    this.$store = options.store
    this.mounted = false
    this.$root = null
  }

  mount = function () {
    if (this.mounted) return

    const app = window.Vue.createApp(Toast)
    app.use(vuetify)

    const el = document.createElement('div')
    document.querySelector('#openc3-app-toolbar > div').appendChild(el)
    this.$root = app.mount(el)

    this.mounted = true
  }

  open = function ({
    method,
    title,
    body,
    message,
    level,
    duration,
    type = 'alert',
    logToConsole = false,
    saveToHistory = true,
  }) {
    this.mount()
    if (logToConsole) {
      // eslint-disable-next-line no-console
      if (message) {
        console.log(`${level.toUpperCase()} - ${message}`)
      } else {
        console.log(`${level.toUpperCase()} - ${title}: ${body}`)
      }
    }
    if (saveToHistory) {
      this.$store.commit('notifyAddHistory', { title, body, message, level })
    }
    this[method]({ title, body, message, level, duration, type })
  }

  toast = function ({ title, body, message, level, duration, type }) {
    this.$root.toast(
      {
        title,
        body,
        message,
        level,
        type,
      },
      duration,
    )
  }

  critical = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'critical',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
  FATAL = this.critical
  ERROR = this.critical

  serious = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'serious',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
  caution = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'caution',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
  WARN = this.caution

  normal = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'normal',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
  INFO = this.normal
  DEBUG = this.normal

  standby = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'standby',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
  off = function ({
    title,
    body,
    message,
    type,
    duration,
    logToConsole,
    saveToHistory,
  }) {
    this.open({
      method: 'toast',
      level: 'off',
      title,
      body,
      message,
      type,
      duration,
      logToConsole,
      saveToHistory,
    })
  }
}

export default {
  install(app, options) {
    if (!app.config.globalProperties.hasOwnProperty('$notify')) {
      app.config.globalProperties.$notify = new Notify(options)
    }
  },
}
