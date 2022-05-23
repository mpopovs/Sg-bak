<script>
    import {goto} from "$app/navigation";
    import Keydown from "svelte-keydown";
    import { Search, Button, Grid,
      Row,
      Column, } from "carbon-components-svelte";
  
  var searched = '';
  const search = () => {
  goto(`${searched}`)
  };
  </script>
   <Grid
   noGutter='true'
   >
       
       <Row noGutter='true' >
           <Column 
           noGutter='true'
           >
  <section class="search">


      <Search bind:value={searched}
      autocomplete = "on"
      placeholder = "Search art..."
      />
      <Keydown on:Enter={search}/>
      <div class="button">
        <Button size="field" on:click={search} kind="primary">Search</Button>

      </div>
      
  </section>
           </Column>
       </Row>
   </Grid>
  <style>
   :global(
       .bx--search-input{border-bottom: none;}
        .bx--btn{}
)
.search{
    position: relative;
}
.button{
position: absolute;
top: 4px;
right: 4px;  
      }
    
  </style>