import { Plugin } from 'obsidian';

import { SettingsTab, Settings, DEFAULT_SETTINGS } from './settings';
import { codeBlockProcessor } from './post-processor/codeBlockProcessor';

export default class ObsidianChess extends Plugin {
  settings: Settings;

  async onload() {
    console.log('Chess plugin: loaded');

    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.addSettingTab(new SettingsTab(this.app, this));

    this.registerMarkdownCodeBlockProcessor(
      'chess',
      codeBlockProcessor.bind(this)
    );
  }

  onunload() {
    console.log('Chess plugin: unloaded');
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
