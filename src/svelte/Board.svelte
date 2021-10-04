<script lang='ts'>
  import Square from './Square.svelte'

  export let size: number = 360;
  export let fen: string;

  // Build the board
  const squares = new Array(64).fill(null)
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares[i + 8*j] = {
        size: size / 8,
        pieceCode: '',
        isLightSquare: 
          (i % 2 === 0 && j % 2 === 0) ||
          (i % 2 !== 0 && j % 2 !== 0),
      }
    }
  }
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