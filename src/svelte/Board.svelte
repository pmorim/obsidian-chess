<script lang='ts'>
  import Square from './Square.svelte';
  import { buildBoard } from '../chess-utils/board';

  export let size: number = 360;
  export let fen: string;
  export let lastMove: string;

  $: squares = buildBoard(fen, lastMove, size);
</script>

<div style='--size: {size}px;'>
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