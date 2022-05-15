<script>
    import Icon from '@iconify/svelte';
    import { 
      Button,
      Grid,
      Row,
      Column, } from "carbon-components-svelte";
    import {goto} from '$app/navigation';
    import SearchArt from "../../components/SearchArt.svelte";

    const goBack = () => {
      window.history.back()
    };
  </script>
  
  <Grid>
    <Row>
      <Column sm={1} md={1} lg={1}>
    <Button on:click={() => {goto('/')}} size="field" kind="tertiary"><Icon icon="carbon:arrow-left"  class="h-4"/>Back</Button>
  </Column>
  <Column></Column>
  <Column >
    <SearchArt/>
  </Column>
  </Row>
  </Grid>
  <slot></slot>