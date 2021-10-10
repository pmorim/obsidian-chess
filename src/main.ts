import { Plugin } from 'obsidian';

import { SettingsTab, Settings, DEFAULT_SETTINGS } from './settings';
import { codeBlockProcessor } from './post-processor/codeBlockProcessor';

export default class ObsidianChess extends Plugin {
  settings: Settings;

  async onload() {
    console.log('Chess plugin: loaded');

    await this.loadSettings();
    this.addSettingTab(new SettingsTab(this.app, this));

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
