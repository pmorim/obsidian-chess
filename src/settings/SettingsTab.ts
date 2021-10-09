import { App, PluginSettingTab, Setting, TextComponent } from 'obsidian';
import lodash from 'lodash';

import { settings } from './store';
import type { Settings } from './types';

export class SettingsTab extends PluginSettingTab {
  plugin: any;

  constructor(app: App, plugin: any) {
    super(app, plugin);
    this.plugin = plugin;
  }

  createSetting(name: string, desc: string) {
    const key = lodash.camelCase(name);

    let store: Settings;
    settings.subscribe((value: Settings) => (store = value));

    new Setting(this.containerEl)
      .setName(name)
      .setDesc(desc)
      .addText((text: TextComponent) =>
        text.setValue(store[key]).onChange(async (value: string) => {
          // Svelte store
          settings.update((settings) => ({ ...settings, [key]: value }));

          // Obsidian
          this.plugin.settings[key] = value;
          await this.plugin.saveSettings();
        })
      );
  }

  display(): void {
    this.containerEl.empty();
    this.containerEl.createEl('h2', { text: 'Obsidian Chess' });

    this.containerEl.createEl('h3', { text: 'General' });
    this.createSetting('Board Theme', 'The theme of the board tiles');
    this.createSetting('Piece Set', 'The style of the pieces');
    this.createSetting(
      'Board Size',
      'The width and height of the board, in pixels'
    );

    this.containerEl.createEl('h3', { text: 'Advanced' });
    this.containerEl.createEl('p', { text: 'Coming soon...' });
  }
}
