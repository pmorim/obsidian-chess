import { MarkdownPostProcessorContext, parseYaml } from 'obsidian';
import lodash from 'lodash';

import App, { Params, DEFAULT_PARAMS } from '../svelte/App.svelte';

export async function codeBlockProcessor(
  source: string,
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
): Promise<void> {
  const params: Params = lodash.defaultsDeep(parseYaml(source), DEFAULT_PARAMS);
  const app = new App({ target: el, props: params });
}
