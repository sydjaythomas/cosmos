/*
# Copyright 2023 OpenC3, Inc.
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
*/

// @ts-check
import { test, expect } from './../fixture'
import * as fs from 'fs'

test.use({
  toolPath: '/tools/admin/plugins',
  toolName: 'Administrator',
  storageState: 'adminStorageState.json',
})

test('shows and hides built-in tools', async ({ page, utils }) => {
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-demo',
  )
  if (process.env.ENTERPRISE === '1') {
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-enterprise-tool-admin',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-enterprise-tool-base',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-tool-autonomic',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-tool-calendar',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-tool-cmdhistory',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-tool-grafana',
    )
  } else {
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-cosmos-tool-admin',
    )
    await expect(page.locator('id=openc3-tool')).not.toContainText(
      'openc3-tool-base',
    )
  }
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-cmdsender',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-cmdtlmserver',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-dataextractor',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-dataviewer',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-docs',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-handbooks',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-iframe',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-limitsmonitor',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-packetviewer',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-scriptrunner',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-tablemanager',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-tlmgrapher',
  )
  await expect(page.locator('id=openc3-tool')).not.toContainText(
    'openc3-cosmos-tool-tlmviewer',
  )

  await page.locator('text=Show Default Tools').click()
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-demo',
  )
  if (process.env.ENTERPRISE === '1') {
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-enterprise-tool-admin',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-enterprise-tool-base',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-tool-autonomic',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-tool-calendar',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-tool-cmdhistory',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-tool-grafana',
    )
  } else {
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-cosmos-tool-admin',
    )
    await expect(page.locator('id=openc3-tool')).toContainText(
      'openc3-tool-base',
    )
  }
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-cmdsender',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-cmdtlmserver',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-dataextractor',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-dataviewer',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-docs',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-handbooks',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-iframe',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-limitsmonitor',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-packetviewer',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-scriptrunner',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-tablemanager',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-tlmgrapher',
  )
  await expect(page.locator('id=openc3-tool')).toContainText(
    'openc3-cosmos-tool-tlmviewer',
  )
})

test('shows targets associated with plugins', async ({ page, utils }) => {
  // Check that the openc3-demo contains the following targets:
  await expect(
    page
      .locator('[data-test=plugin-list] div:has-text("openc3-cosmos-demo")')
      .first(),
  ).toContainText('EXAMPLE')
  await expect(
    page
      .locator('[data-test=plugin-list] div:has-text("openc3-cosmos-demo")')
      .first(),
  ).toContainText('INST')
  await expect(
    page
      .locator('[data-test=plugin-list] div:has-text("openc3-cosmos-demo")')
      .first(),
  ).toContainText('INST2')
  await expect(
    page
      .locator('[data-test=plugin-list] div:has-text("openc3-cosmos-demo")')
      .first(),
  ).toContainText('SYSTEM')
  await expect(
    page
      .locator('[data-test=plugin-list] div:has-text("openc3-cosmos-demo")')
      .first(),
  ).toContainText('TEMPLATED')
})

// NOTE: The following tests must be run in order as they install, modify, edit and delete a plugin

// This is generated by the playwright github workflow via .github/workflows/playwright.yml
// Follow the steps there to generate a local copy for test
let plugin = 'openc3-cosmos-pw-test'
let pluginGem = 'openc3-cosmos-pw-test-1.0.0.gem'
let pluginGem1 = 'openc3-cosmos-pw-test-1.0.1.gem'

test('installs a new plugin', async ({ page, utils }) => {
  // Note that Promise.all prevents a race condition
  // between clicking and waiting for the file chooser.
  const [fileChooser] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('filechooser'),
    // Opens the file chooser.
    await page
      .getByLabel('Click to install new plugin .gem (NOT upgrade)', {
        exact: true,
      })
      .click(),
  ])
  await fileChooser.setFiles(`./${plugin}/${pluginGem}`)
  await expect(page.locator('.v-dialog:has-text("Variables")')).toBeVisible()
  await page.locator('data-test=edit-submit').click()
  await expect(page.locator('[data-test=plugin-alert]')).toContainText(
    'Started installing',
  )
  // Plugin install can go so fast we can't count on 'Running' to be present so try catch this
  let regexp = new RegExp(
    `Processing plugin_install: ${pluginGem}__.* - Running`,
  )
  try {
    await expect(page.locator('[data-test=process-list]')).toContainText(
      regexp,
      {
        timeout: 30000,
      },
    )
  } catch {}
  // Ensure no Running are left
  await expect(page.locator('[data-test=process-list]')).not.toContainText(
    regexp,
    {
      timeout: 30000,
    },
  )
  // Check for Complete
  regexp = new RegExp(`Processing plugin_install: ${pluginGem} - Complete`)
  await expect(page.locator('[data-test=process-list]')).toContainText(regexp)

  await expect(
    page.locator(`[data-test=plugin-list] div:has-text("${plugin}")`).first(),
  ).toContainText('PW_TEST')
  // Show the process output
  await page
    .locator(
      `[data-test=process-list] div:has-text("${plugin}") >> [data-test=show-output]`,
    )
    .first()
    .click()
  await expect(page.getByRole('dialog')).toContainText('Process Output')
  await expect(page.getByRole('dialog')).toContainText(
    `Loading new plugin: ${pluginGem}`,
  )
  await page.getByRole('button', { name: 'Ok' }).click()
})

// Playwright requires a separate test.describe to then call test.use
test.describe(() => {
  // Must be the operator to modify files
  test.use({ storageState: 'storageState.json' })
  test('modifies plugin files', async ({ page, utils }) => {
    // Check that there are no links (a) under the current plugin (no modified files)
    await expect(
      await page.locator(
        `[data-test=plugin-list] div[role=listitem]:has-text("${plugin}") >> a`,
      ),
    ).toHaveCount(0)

    // Create a new script
    await page.goto('/tools/scriptrunner')
    await expect(page.locator('.v-app-bar')).toContainText('Script Runner')
    await page.locator('rux-icon-apps').getByRole('img').click()
    await page.locator('textarea').fill('puts "modify the PW_TEST"')
    await page.locator('[data-test=script-runner-file]').click()
    await page.locator('text=Save File').click()
    await page.locator('text=File Save As')
    const pwtest = page.getByText('PW_TEST')
    await page
      .locator('.v-list-item')
      .filter({ has: pwtest })
      .locator('.v-list-item-action')
      .click()
    await page.getByLabel('PW_TEST').getByText('procedures').click()
    await page.locator('[data-test=file-open-save-filename]').click()
    await page.type('[data-test=file-open-save-filename]', '/save_new.rb')
    await page.locator('[data-test=file-open-save-submit-btn]').click()
    await expect(page.locator('#sr-controls')).toContainText(
      'PW_TEST/procedures/save_new.rb',
    )

    // Create a new screen
    // await page.goto('/tools/tlmviewer')
    // await expect(page.locator('.v-app-bar')).toContainText('Telemetry Viewer')
    // await page.locator('rux-icon-apps').getByRole('img').click()
    // await page.locator('div[role="button"]:has-text("Select Target")').click()
    // await page.locator(`.v-list-item__title:text-is("PW_TEST")`).click()
    // await utils.sleep(500)
    // await page.locator('[data-test=new-screen]').click()
    // await expect(
    //   page.locator(`.v-toolbar:has-text("New Screen")`),
    // ).toBeVisible()
    // await page.locator('[data-test=new-screen-name]').fill('NEW_SCREEN')
    // await page.locator('button:has-text("Save")').click()
    // await expect(
    //   page.locator(`.v-toolbar:has-text("PW_TEST NEW_SCREEN")`),
    // ).toBeVisible()

    // Download the changes
    await page.goto('/tools/admin/plugins')
    await expect(page.locator('.v-app-bar')).toContainText('Administrator')
    await page.locator('rux-icon-apps').getByRole('img').click()

    // Check that we have a link to click
    await expect(
      await page
        .locator('[data-test=plugin-list]')
        .filter({ hasText: plugin })
        .locator('a'),
    ).toHaveCount(1)

    const [download1] = await Promise.all([
      // Start waiting for the download
      page.waitForEvent('download'),
      // Download the modified plugin
      page
        .locator('[data-test=plugin-list]')
        .filter({ hasText: plugin })
        .locator('a')
        .click(),
    ])
    // Wait for the download process to complete
    const JSZip = require('jszip')
    const path1 = await download1.path()
    fs.readFile(path1!, function (err, data) {
      if (err) throw err
      JSZip.loadAsync(data).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
          zip.files[filename].async('string').then(function (fileData) {
            // Check the zip file contents
            // We should have the new script:
            if (filename.includes('save_new.rb')) {
              expect(fileData).toBe('puts "modify the PW_TEST"')
            }
            // We should have the new screen:
            // if (filename.includes('new_screen.txt')) {
            //   expect(fileData).toContain('SCREEN')
            // }
          })
        })
      })
    })

    // Download the changes from the targets tab
    await page.goto('/tools/admin/targets')
    await expect(page.locator('.v-app-bar')).toContainText('Administrator')
    await page.locator('rux-icon-apps').getByRole('img').click()

    const [download2] = await Promise.all([
      // Start waiting for the download
      page.waitForEvent('download'),
      // Initiate the download
      page
        .locator('.v-list-item')
        .filter({ hasText: 'PW_TEST' })
        .getByRole('button')
        .nth(0)
        .click(),
    ])
    // Wait for the download process to complete
    const path2 = await download2.path()
    fs.readFile(path2!, function (err, data) {
      if (err) throw err
      JSZip.loadAsync(data).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
          zip.files[filename].async('string').then(function (fileData) {
            // Check the zip file contents
            // We should have the new script:
            if (filename.includes('save_new.rb')) {
              expect(fileData).toBe('puts "modify the PW_TEST"')
            }
            // We should have the new screen:
            // if (filename.includes('new_screen.txt')) {
            //   expect(fileData).toContain('SCREEN')
            // }
          })
        })
      })
    })
  })
})

test('upgrades existing plugin', async ({ page, utils }) => {
  // Note that Promise.all prevents a race condition
  // between clicking and waiting for the file chooser.
  const [fileChooser] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('filechooser'),
    // Opens the file chooser.
    await page
      .locator('.v-list-item')
      .filter({ hasText: plugin })
      .locator('[data-test=upgrade-plugin]')
      .click(),
  ])

  await fileChooser.setFiles(`./${plugin}/${pluginGem1}`)
  await expect(page.locator('.v-dialog:has-text("Variables")')).toBeVisible()
  await page.locator('data-test=edit-submit').click()
  await expect(page.locator('.v-dialog:has-text("Modified")')).toBeVisible()
  // Check the delete box
  await page.locator('text=DELETE MODIFIED').click()
  await page.locator('data-test=modified-plugin-submit').click()
  await expect(page.locator('[data-test=plugin-alert]')).toContainText(
    'Started installing',
  )
  // Plugin install can go so fast we can't count on 'Running' to be present so try catch this
  let regexp = new RegExp(
    `Processing plugin_install: ${pluginGem}__.* - Running`,
  )
  try {
    await expect(page.locator('[data-test=process-list]')).toContainText(
      regexp,
      {
        timeout: 30000,
      },
    )
  } catch {}
  // Ensure no Running are left
  await expect(page.locator('[data-test=process-list]')).not.toContainText(
    regexp,
    {
      timeout: 30000,
    },
  )
  // Check for Complete
  regexp = new RegExp(`Processing plugin_install: ${pluginGem1} - Complete`)
  await expect(page.locator('[data-test=process-list]')).toContainText(regexp)

  // Check that there are no longer any links (modified targets)
  await expect(
    await page.locator(
      `[data-test=plugin-list] div[role=listitem]:has-text("${plugin}") >> a`,
    ),
  ).toHaveCount(0)
})

test('edits existing plugin', async ({ page, utils }) => {
  // Edit then cancel
  await page
    .locator('.v-list-item')
    .filter({ hasText: plugin })
    .locator('[data-test=edit-plugin]')
    .click()
  await expect(page.locator('.v-dialog:has-text("Variables")')).toBeVisible()
  await page.locator('data-test=edit-cancel').click()
  await expect(
    page.locator('.v-dialog:has-text("Variables")'),
  ).not.toBeVisible()
  // Edit and change a target name (forces re-install)
  await page
    .locator('.v-list-item')
    .filter({ hasText: plugin })
    .locator('[data-test=edit-plugin]')
    .click()
  await expect(page.locator('.v-dialog:has-text("Variables")')).toBeVisible()
  await page
    .locator(
      '.v-dialog:has-text("Variables") .v-input:has-text("pw_test_target_name") >> input',
    )
    .fill('NEW_TGT')
  await page.locator('data-test=edit-submit').click()
  await expect(page.locator('[data-test=plugin-alert]')).toContainText(
    'Started installing',
  )
  // Plugin install can go so fast we can't count on 'Running' to be present so try catch this
  let regexp = new RegExp(
    `Processing plugin_install: ${pluginGem}__.* - Running`,
  )
  try {
    await expect(page.locator('[data-test=process-list]')).toContainText(
      regexp,
      {
        timeout: 30000,
      },
    )
  } catch {}
  // Ensure no Running are left
  await expect(page.locator('[data-test=process-list]')).not.toContainText(
    regexp,
    {
      timeout: 30000,
    },
  )
  // Check for Complete ... note new installs append '__<TIMESTAMP>'
  regexp = new RegExp(`Processing plugin_install: ${pluginGem1}__.* - Complete`)
  await expect(page.locator('[data-test=process-list]')).toContainText(regexp)
  // Ensure the target list is updated to show the new name
  await expect(
    await page
      .locator('[data-test=plugin-list]')
      .locator('.v-list-item')
      .filter({ hasText: plugin }),
  ).not.toContainText('PW_TEST')
  await expect(
    await page
      .locator('[data-test=plugin-list]')
      .locator('.v-list-item')
      .filter({ hasText: plugin }),
  ).toContainText('NEW_TGT')
  // Show the process output
  await page
    .locator('[data-test=process-list]')
    .locator('.v-list-item')
    .filter({ hasText: plugin })
    .locator('[data-test=show-output]')
    .first()
    .click()
  await expect(page.locator('.v-dialog')).toContainText('Process Output')
  // TODO: Should this be Loading new or Updating existing?
  // await expect(page.locator('.v-dialog--active')).toContainText('Updating existing plugin')
  await page.locator('.v-dialog>> button:has-text("Ok")').click()
})

// Playwright requires a separate test.describe to then call test.use
test.describe(() => {
  // Must be the operator to modify files
  test.use({ storageState: 'storageState.json' })
  test('creates new screen', async ({ page, utils }) => {
    // Create a new screen so we have modifications to delete
    await page.goto('/tools/tlmviewer')
    await expect(page.locator('.v-app-bar')).toContainText('Telemetry Viewer')
    await page.locator('rux-icon-apps').getByRole('img').click()
    await page.locator('[data-test=select-target] i').click()
    await page.getByRole('option', { name: 'NEW_TGT', exact: true }).click()
    await utils.sleep(500)
    await page.locator('[data-test=new-screen]').click()
    await expect(
      page.locator(`.v-toolbar:has-text("New Screen")`),
    ).toBeVisible()
    await page.locator('[data-test=new-screen-name] input').fill('NEW_SCREEN')
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(
      page.locator(`.v-toolbar:has-text("NEW_TGT NEW_SCREEN")`),
    ).toBeVisible()
  })
})

test('deletes a plugin', async ({ page, utils }) => {
  await page
    .locator('[data-test=plugin-list]')
    .locator('.v-list-item')
    .filter({ hasText: plugin })
    .locator('[data-test=delete-plugin]')
    .click()
  await expect(page.locator('.v-dialog')).toContainText('Confirm')
  await page.locator('[data-test=confirm-dialog-delete]').click()
  await expect(page.locator('.v-dialog:has-text("Modified")')).toBeVisible()
  // Check the delete box
  await page.locator('text=DELETE MODIFIED').click()
  await page.locator('data-test=modified-plugin-submit').click()

  await expect(page.locator('[data-test=plugin-alert]')).toContainText(
    'Removing plugin',
  )
  // Plugin uninstall can go so fast we can't count on 'Running' to be present so try catch this
  let regexp = new RegExp(
    `Processing plugin_install: ${pluginGem1}__.* - Running`,
  )
  try {
    await expect(page.locator('[data-test=process-list]')).toContainText(
      regexp,
      {
        timeout: 30000,
      },
    )
  } catch {}
  // Ensure no Running are left
  await expect(page.locator('[data-test=process-list]')).not.toContainText(
    regexp,
    {
      timeout: 30000,
    },
  )
  // Check for Complete ... note new installs append '__<TIMESTAMP>'
  regexp = new RegExp(
    `Processing plugin_uninstall: ${pluginGem1}__.* - Complete`,
  )
  await expect(page.locator('[data-test=process-list]')).toContainText(regexp)
  await expect(page.locator(`[data-test=plugin-list]`)).not.toContainText(
    plugin,
  )
  // Show the process output
  await page
    .locator('[data-test=process-list]')
    .locator('.v-list-item')
    .filter({ hasText: 'plugin_uninstall' })
    .locator('[data-test=show-output]')
    .first()
    .click()
  await expect(page.locator('.v-dialog')).toContainText('Process Output')
  await expect(page.locator('.v-dialog')).toContainText('PluginModel destroyed')
  await page.locator('.v-dialog >> button:has-text("Ok")').click()
})
