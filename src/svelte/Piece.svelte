<script lang='ts'>
  export let pieceCode: string;

  const pathToPieces = ('assets/piece-sets');
  const pieceSet = 'cburnett';
</script>

<img
  src='{pathToPieces}/{pieceSet}/{pieceCode}.svg'
  alt={pieceCode}
/>
