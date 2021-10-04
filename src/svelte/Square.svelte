<script lang='ts'>
  import Piece from './Piece.svelte';

  export let size: number;
  export let isLightSquare: boolean;
  export let pieceCode: string;
</script>

<div
  style='--size: {size}px;'
  class={isLightSquare ? 'light' : 'dark'}
>
  {#if pieceCode}
    <Piece fenCode={pieceCode}/>
  {/if}
</div>

<style>
  div {
    width: var(--size);
    height: var(--size);
  }

  .light {
    background-color: hsl(214, 18%, 92%);
  }

  .dark {
    background-color: hsl(216, 11%, 54%);
  }
</style>