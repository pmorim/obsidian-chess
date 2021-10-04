import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';

import App from '../svelte/App.svelte';
import type { Params } from './Params';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params: Params = parseYaml(source);
  const element = createDiv('chess-container');
  const app = new App({ target: element, props: params });
  el.appendChild(element);
}
