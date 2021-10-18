<script lang="ts">
  import { settings } from '../settings';

  export let fenCode: string;

  const isUpperCase = (char: string) => /^[A-Z]*$/.test(char);
  const pathToPieces = 'assets/piece-sets';

  $: color = isUpperCase(fenCode) ? 'w' : 'b';
  $: piece = `${color}${fenCode.toUpperCase()}.svg`;
  $: path = `${pathToPieces}/${$settings.pieceSet}/${piece}`;
</script>

<img class="piece {fenCode}" src={path} alt={fenCode} />

<style>
  .piece {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
</style>
