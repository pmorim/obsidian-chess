<script lang="ts">
  import { settings } from '../settings';

  export let fenCode: string;
  const pathToPieces = 'assets/piece-sets';

  const isUpperCase = (char: string) => /^[A-Z]*$/.test(char);
  $: color = isUpperCase(fenCode) ? 'w' : 'b';
  $: file = `${color}${fenCode.toUpperCase()}.svg`;
  $: path = `${pathToPieces}/${$settings.pieceSet}/${file}`;
</script>

<img class="piece {fenCode}" src={path} alt={fenCode} />

<style>
  .piece {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
</style>
