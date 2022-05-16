<script>
    import Icon from '@iconify/svelte';
    import { 
      Button,
      } from "carbon-components-svelte";
    import {goto} from '$app/navigation';
    

   
  </script>
  
  
    <Button on:click={() => {goto('/')}} size="field" kind="tertiary"><Icon icon="carbon:arrow-left"  class="h-4"/>Back</Button>
 
  <slot></slot>