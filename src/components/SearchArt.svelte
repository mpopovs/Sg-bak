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
  <section class="serach">


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
      .button{
          float: right;
          
      }
      @media screen and (max-width: 1056px){
.search{
    position: relative;
}
.button{
position: absolute;
top: 182px;
right: 3px;  
      }
    }
  </style>