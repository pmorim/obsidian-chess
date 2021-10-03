import { App, PluginSettingTab, Setting } from 'obsidian';

export class SettingsTab extends PluginSettingTab {
  plugin: any;

  constructor(app: App, plugin: any) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;
    containerEl.empty();

    containerEl.createEl('h2', { text: 'Obsidian Chess' });

    new Setting(containerEl)
      .setName('Board Theme')
      .setDesc('The theme of the board tiles')
      .addText((text) =>
        text
          .setPlaceholder('Board Theme')
          .setValue('blue')
          .onChange(async (value) => {
            this.plugin.settings.boardTheme = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Piece Set')
      .setDesc('The style of the pieces')
      .addText((text) =>
        text
          .setPlaceholder('Piece Set')
          .setValue('cburnett')
          .onChange(async (value) => {
            this.plugin.settings.pieceSet = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Board Size')
      .setDesc('The size of the board, in CSS units')
      .addText((text) =>
        text
          .setPlaceholder('Board Size')
          .setValue('360')
          .onChange(async (value) => {
            this.plugin.settings.pieceSet = parseInt(value, 10);
            await this.plugin.saveSettings();
          })
      );
  }
}
