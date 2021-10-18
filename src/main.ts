import { Plugin } from 'obsidian';

import { plugin as pluginStore } from './plugin';
import { SettingsTab, Settings, DEFAULT_SETTINGS } from './settings';
import { codeBlockProcessor } from './post-processor/codeBlockProcessor';

export default class ObsidianChess extends Plugin {
  settings: Settings;

  async onload() {
    console.log('Chess plugin: loaded');

    // Plugin store
    pluginStore.set(this);

    // Settings
    await this.loadSettings();
    this.addSettingTab(new SettingsTab(this));

    // Code blocks
    this.registerMarkdownCodeBlockProcessor(
      'chess',
      codeBlockProcessor.bind(this)
    );
  }

  onunload() {
    console.log('Chess plugin: unloaded');
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
