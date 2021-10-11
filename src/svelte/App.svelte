<script lang="ts" context="module">
  export interface Params {
    /**
     * The FEN code of the position
     */
    fen?: string;
    /**
     * If the board should be flipped to black's perspective
     */
    flipBoard?: boolean;
    /**
     * The two squares to be highlighted as a last move
     */
    lastMove?: string;
    /**
     * The square to be highlighted as a check
     */
    check?: string;
  }

  export const DEFAULT_PARAMS: Params = {
    fen: '8/8/8/8/8/8/8/8',
    flipBoard: false,
    lastMove: null,
    check: null,
  };
</script>

<script lang="ts">
  import Board from './Board.svelte';
  import Coords from './Coords.svelte';
  import { settings } from 'src/settings';

  $: boardSize = parseInt($settings.boardSize, 10);
  $: squareSize = boardSize / 8;
  $: coordSize = squareSize / 4;
</script>

<div
  class="chess"
  style="--boardSize: {boardSize}px; --coordSize: {coordSize}px"
>
  <Board {...$$props} />
  <Coords type="ranks" reverse={$$props.flipBoard} />
  <Coords type="files" reverse={$$props.flipBoard} />
</div>

<style>
  .chess {
    display: grid;
    grid-template-rows: var(--boardSize) var(--coordSize);
    grid-template-columns: var(--boardSize) var(--coordSize);
    grid-template-areas:
      'board ranks'
      'files .';
  }
</style>
