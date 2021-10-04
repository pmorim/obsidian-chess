<script lang="ts">
  import { settings } from '../settings';

  export let type: 'ranks' | 'files';
  export let reverse = false;

  const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  $: coords = type === 'ranks' ? ranks.reverse() : files;
  $: if (reverse) coords = coords.reverse();

  $: boardSize = parseInt($settings.boardSize, 10);
  $: squareSize = boardSize / 8;
  $: coordSize = squareSize / 4;
</script>

<div
  class={type}
  style="--boardSize: {boardSize}px; --coordSize: {coordSize}px"
>
  {#each coords as coord}
    <p>{coord}</p>
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ranks {
    grid-area: ranks;
    flex-direction: column;

    width: var(--coordSize);
    height: var(--boardSize);
  }

  .files {
    grid-area: files;
    flex-direction: row;

    width: var(--boardSize);
    height: var(--coordSize);
  }

  div p {
    font-size: var(--coordSize);
    margin: 0 !important;
  }
</style>
