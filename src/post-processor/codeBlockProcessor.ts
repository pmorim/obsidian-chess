import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';
import Board from '../svelte/Board.svelte';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params = parseYaml(source);

  // Render board
  const element = createDiv('chess-container');
  const board = new Board({ target: element, props: { size: 360, ...params } });
  el.appendChild(element);
}
