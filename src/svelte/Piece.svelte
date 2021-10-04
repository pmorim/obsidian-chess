<script lang='ts'>
  export let pieceCode: string;

  const pathToPieces = ('assets/piece-sets');
  const pieceSet = 'cburnett';

  const isUpperCase = (char: string) => /^[A-Z]*$/.test(char)
  $: pieceColor = isUpperCase(pieceCode) ? 'w' : 'b'
  $: pieceFile = `${pieceColor}${pieceCode.toUpperCase()}.svg`
  $: piecePath = `${pathToPieces}/${pieceSet}/${pieceFile}`
</script>

<img src={piecePath} alt={pieceCode} />
