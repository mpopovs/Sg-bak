<script>
    import Icon from '@iconify/svelte';
    import { 
      Button,
      Grid,
      Row,
      Column, } from "carbon-components-svelte";
    import {goto} from '$app/navigation';
    

   
  </script>
  
  <Grid>
    <Row>
      <Column>
    <Button on:click={() => {goto('/')}} size="field" kind="tertiary"><Icon icon="carbon:arrow-left"  class="h-4"/>Back</Button>
  </Column>
  <Column>
  </Column>
  </Row>
  </Grid>
  <slot></slot>