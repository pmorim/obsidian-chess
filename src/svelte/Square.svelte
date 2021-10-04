<script lang='ts'>
  export let size: number;
  export let isLightSquare: boolean;
</script>

<div
  style='width: {size}; height: {size};'
  class={isLightSquare ? 'light' : 'dark'}
/>

<style>
  .light {
    background-color: rgb(232, 235, 239);
  }

  .dark {
    background-color: rgb(125, 135, 150);
  }
</style>