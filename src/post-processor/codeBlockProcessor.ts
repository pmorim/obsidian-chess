import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';
import App, { Params } from '../svelte/App.svelte';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params: Params = parseYaml(source);
  const app = new App({ target: el, props: params });
}
