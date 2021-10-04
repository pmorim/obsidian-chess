<script lang='ts'>
  import Square from './Square.svelte';
  import { buildBoard } from '../chess-utils';
  import { settings } from '../settings'

  export let fen: string;
  export let lastMove: string;

  $: squares = buildBoard(fen, lastMove, $settings.boardSize);
</script>

<div style='--size: {$settings.boardSize}px;'>
  {#each squares as square}
    <Square {...square}/>
  {/each}
</div>

<style>
  div {
    width: var(--size);
    height: var(--size);

    display: flex;
    flex-wrap: wrap;
  }
</style>