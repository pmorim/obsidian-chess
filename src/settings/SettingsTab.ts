import {
  App,
  PluginSettingTab,
  Setting,
  TextComponent,
  DropdownComponent,
} from 'obsidian';
import lodash from 'lodash';

import { settings as settingsStore } from './store';
import { Settings, BOARD_THEMES_RECORD, PIECE_SETS_RECORD } from './types';

export class SettingsTab extends PluginSettingTab {
  plugin: any;
  settings: Settings;

  constructor(app: App, plugin: any) {
    super(app, plugin);
    this.plugin = plugin;

    settingsStore.set(this.plugin.settings);
    settingsStore.subscribe((value) => (this.settings = <Settings>value));
  }

  display() {
    this.containerEl.empty();
    this.settingsTitle('Obsidian Chess');

    this.generalSettings();
    this.customThemes();
  }

  generalSettings() {
    this.sectionTitle('General');

    this.textSetting(
      'Board Size',
      'The width and height of the board, in pixels'
    );
    this.dropdownSetting(
      'Piece Set',
      'The style of the pieces',
      PIECE_SETS_RECORD
    );
    this.dropdownSetting(
      'Board Theme',
      'The colors of the board tiles',
      BOARD_THEMES_RECORD
    );
  }

  customThemes() {
    this.sectionTitle('Custom Themes');
    this.containerEl.createEl('p', { text: 'Coming soon...' });
  }

  textSetting(name: string, desc: string) {
    const key = lodash.camelCase(name);
    new Setting(this.containerEl)
      .setName(name)
      .setDesc(desc)
      .addText((text: TextComponent) =>
        text.setValue(this.settings[key]).onChange(this.onSettingChange(key))
      );
  }

  dropdownSetting(name: string, desc: string, options: Record<string, string>) {
    const key = lodash.camelCase(name);
    new Setting(this.containerEl)
      .setName(name)
      .setDesc(desc)
      .addDropdown((dropdown: DropdownComponent) => {
        dropdown
          .addOptions(options)
          .setValue(this.settings[key])
          .onChange(this.onSettingChange(key));
      });
  }

  onSettingChange(key: string) {
    return async (value: string) => {
      settingsStore.update((settings) => ({ ...settings, [key]: value }));

      this.plugin.settings[key] = value;
      await this.plugin.saveSettings();
    };
  }

  settingsTitle(text: string) {
    this.containerEl.createEl('h2', { text });
  }

  sectionTitle(text: string) {
    this.containerEl.createEl('h3', { text });
  }
}
