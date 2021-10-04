<script lang='ts'>
  export let pieceCode: string;

  export let fenCode: string;
  const pathToPieces = ('assets/piece-sets');
  const pieceSet = 'cburnett';

  const isUpperCase = (char: string) => /^[A-Z]*$/.test(char)
  $: color = isUpperCase(fenCode) ? 'w' : 'b'
  $: file = `${color}${fenCode.toUpperCase()}.svg`
  $: path = `${pathToPieces}/${$settings.pieceSet}/${file}`
</script>

<img src={path} alt={fenCode} />
