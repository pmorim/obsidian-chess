<script lang="ts">
  import { plugin } from '../plugin';
  import { settings } from '../settings';

  export let fenCode: string;

  const isUpperCase = (char: string) => /^[A-Z]*$/.test(char);

  function buildPath(pieceCode: string, pieceSet: string) {
    const pathToPieces = '/assets/piece-sets';
    const color = isUpperCase(pieceCode) ? 'w' : 'b';
    const piece = `${color}${pieceCode.toUpperCase()}`;
    return `${pathToPieces}/${pieceSet}/${piece}.svg`;
  }

  async function loadSVG(path: string) {
    // Read SVG as string
    const svg: string = await $plugin.app.vault.adapter.read(
      $plugin.manifest.dir + path
    );

    // Create blob for image source
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  }

  let absPath = '';
  $: relPath = buildPath(fenCode, $settings.pieceSet);
  $: loadSVG(relPath).then((path) => (absPath = path));

  const revokeURL = () => URL.revokeObjectURL(absPath);
</script>

<img
  class="piece noDrag noSelect"
  src={absPath}
  alt={fenCode}
  on:load|once={revokeURL}
/>

<style>
  .piece {
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .noDrag {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    /* 
    The line below triggers the warning:
    "Unknown property: 'user-drag' css(unknownProperties)"
    
    user-drag: none;
    */
  }

  .noSelect {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
