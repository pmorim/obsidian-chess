<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Square from '../svelte/Square.svelte';
</script>

<Meta title="Square" component={Square} />

<Template let:args>
  <Square {...args} />
</Template>

<Story
  name="Light Square"
  args={{
    variant: 'light',
  }}
/>

<Story
  name="Dark Square"
  args={{
    variant: 'dark',
  }}
/>
