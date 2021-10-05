<script lang="ts">
  import Piece from './Piece.svelte';
  import { settings } from '../settings';

  export let isLightSquare: boolean;
  export let pieceCode: string;

  $: boardSize = parseInt($settings.boardSize, 10);
  $: size = boardSize / 8;
</script>

<div
  class="square {$settings.boardTheme} {isLightSquare ? 'light' : 'dark'}"
  style="--size: {size}px;"
>
  {#if pieceCode}
    <Piece fenCode={pieceCode} />
  {/if}
</div>

<style>
  /* Theme colors */
  .blue {
    --light: #dee3e6;
    --dark: #8ca2ad;
  }
  .brown {
    --light: #f0d9b5;
    --dark: #b58863;
  }
  .green {
    --light: #86a666;
    --dark: #86a666;
  }
  .ic {
    --light: #ececec;
    --dark: #c1c18e;
  }
  .purple {
    --light: #9f90b0;
    --dark: #9f90b0;
  }

  /* Light or Dark square */
  .light {
    --color: var(--light);
  }
  .dark {
    --color: var(--dark);
  }

  /* The square */
  .square {
    width: var(--size);
    height: var(--size);
    background-color: var(--color);
  }
</style>
