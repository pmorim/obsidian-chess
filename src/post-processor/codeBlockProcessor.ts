import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';

import { renderBoard } from '../render/renderBoard';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params = parseYaml(source);
  const board = renderBoard(el, this.settings);

  //const FEN = "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR";
  //fenReader(FEN);
}
