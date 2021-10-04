import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';

import Board from '../svelte/Board.svelte';
import type { Params } from './Params';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params: Params = parseYaml(source);
  const element = createDiv('chess-container');
  const board = new Board({ target: element, props: params });
  el.appendChild(element);
}
