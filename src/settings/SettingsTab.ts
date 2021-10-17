import {
  PluginSettingTab,
  Setting,
  TextComponent,
  DropdownComponent,
  ToggleComponent,
} from 'obsidian';
import lodash from 'lodash';

import { settings as settingsStore } from './store';
import { Settings, BOARD_THEMES_RECORD, PIECE_SETS_RECORD } from './types';

export class SettingsTab extends PluginSettingTab {
  plugin: any;
  settings: Settings;

  constructor(plugin: any) {
    super(plugin.app, plugin);
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
      'Board Theme',
      'The colors of the board tiles',
      BOARD_THEMES_RECORD
    );
    this.dropdownSetting(
      'Piece Set',
      'The style of the pieces',
      PIECE_SETS_RECORD
    );
    this.toggleSetting(
      'Show Coords',
      'Wether or not the board coordinates should be displayed'
    );
  }

  customThemes() {
    this.sectionTitle('Custom Themes');
    this.containerEl.createEl('p', { text: 'Coming soon...' });
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

  toggleSetting(name: string, desc: string) {
    const key = lodash.camelCase(name);
    new Setting(this.containerEl)
      .setName(name)
      .setDesc(desc)
      .addToggle((toggle: ToggleComponent) => {
        toggle.setValue(this.settings[key]).onChange(this.onSettingChange(key));
      });
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

  onSettingChange(key: string) {
    return async (value: any) => {
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
