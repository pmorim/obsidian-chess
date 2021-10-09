<script lang="ts">
  import Piece from './Piece.svelte';
  import { settings } from '../settings';

  export let pieceCode = '';
  export let isLight = false;
  export let lastMove = false;
  export let check = false;

  $: boardSize = parseInt($settings.boardSize, 10);
  $: size = boardSize / 8;

  $: light = isLight;
  $: dark = !isLight;
</script>

<div
  style="--size: {size}px;"
  class="square {$settings.boardTheme}"
  class:light
  class:dark
>
  {#if lastMove}
    <div class="lastMove overlay" />
  {/if}
  {#if check}
    <div class="check overlay" />
  {/if}

  {#if pieceCode}
    <Piece fenCode={pieceCode} />
  {/if}
</div>

<style>
  /* Theme colors */
  .blue {
    --light: #dee3e6;
    --dark: #8ca2ad;
    --lastMove-light: #c3d887;
    --lastMove-dark: #92b166;
  }
  .brown {
    --light: #f0d9b5;
    --dark: #b58863;
    --lastMove-light: #cdd26a;
    --lastMove-dark: #aaa23a;
  }
  .green {
    --light: #ffffdd;
    --dark: #86a666;
    --lastMove-light: #96d6d4;
    --lastMove-dark: #4fa28e;
  }
  .ic {
    --light: #ececec;
    --dark: #c1c18e;
    --lastMove-light: #cbdd8b;
    --lastMove-dark: #80883e;
  }
  .purple {
    --light: #9f90b0;
    --dark: #7d4a8d;
    --lastMove-light: #9ea768;
    --lastMove-dark: #8a7e53;
  }

  /* Light or Dark square */
  .light {
    --color: var(--light);
    --lastMove-color: var(--lastMove-light);
  }
  .dark {
    --color: var(--dark);
    --lastMove-color: var(--lastMove-dark);
  }

  /* Color overlays */
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .lastMove {
    background-color: var(--lastMove-color);
  }
  .check {
    background: radial-gradient(#f00f, #f000);
  }

  /* The square */
  .square {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--size);
    height: var(--size);
    background-color: var(--color);
  }
</style>
