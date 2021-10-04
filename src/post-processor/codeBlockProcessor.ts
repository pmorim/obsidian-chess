import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';
//import Board from '../svelte/Board.svelte';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params = parseYaml(source);

  //const board = new Board();
  //el.appendChild(board);
}
