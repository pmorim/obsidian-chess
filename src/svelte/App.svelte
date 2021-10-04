<script lang="ts" context="module">
  export interface Params {
    fen?: string;
    flipBoard?: boolean;
    lastMove?: string;
    check?: string;
  }
</script>

<script lang="ts">
  import Board from './Board.svelte';
  import Coords from './Coords.svelte';
  import { settings } from 'src/settings';

  $: boardSize = parseInt($settings.boardSize, 10);
  $: squareSize = boardSize / 8;
  $: coordSize = squareSize / 4;
</script>

<div style="--boardSize: {boardSize}px; --coordSize: {coordSize}px">
  <Board {...$$props} />
  <Coords type="ranks" reverse={$$props.flipBoard} />
  <Coords type="files" reverse={$$props.flipBoard} />
</div>

<style>
  div {
    display: grid;
    grid-template-rows: var(--boardSize) var(--coordSize);
    grid-template-columns: var(--boardSize) var(--coordSize);
    grid-template-areas:
      'board ranks'
      'files .';
  }
</style>
