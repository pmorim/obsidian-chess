<script lang="ts">
  import Square from './Square.svelte';
  import { buildBoard } from '../chess-utils';
  import { settings } from '../settings';

  export let fen = '';
  export let flipBoard = false;
  export let lastMove = '';
  export let check = '';

  $: squares = buildBoard(fen, lastMove, check);
</script>

<div class:flipBoard style="--size: {$settings.boardSize}px;">
  {#each squares as square}
    <Square {...square} />
  {/each}
</div>

<style>
  div {
    grid-area: board;
    width: var(--size);
    height: var(--size);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .flipBoard {
    flex-direction: row-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
</style>
