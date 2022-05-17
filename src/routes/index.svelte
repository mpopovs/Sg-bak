<script>
	
    import {
       Content,
      Grid,
      Row,
      Column,
      ImageLoader,
      Tile,
      Tag,
      
    } from "carbon-components-svelte";
import { onMount } from "svelte";
import {apiData, artWorks} from "../store";
import SearchArt from '../components/SearchArt.svelte';

onMount(async () => {
      fetch("https://api.sketchfab.com/v3/models?user=sferagallery")
      .then(response => response.json())
      .then(results => {
            console.log(results);
        apiData.set(results);
      }).catch(error => {
        console.log(error);
        return [];
      });
    });
   
</script>


    <Grid
    noGutter='true'
    >
        
        <Row noGutter='true' >
            <Column 
            noGutter='true'
            >
          <Content><h1>Find Artworks</h1></Content>
          
        <SearchArt/>
       
        </Column>
                    
    </Row>
    </Grid>
 <!---->
 <main>
       
        
  <div class="">
    <Grid 
    noGutter='true'
    >
      <Row
      noGutter='true'
      >
  {#each $artWorks as artWork}
 
        <Column 
        noGutter='true'
        sm={1} md={2} lg={4}>

  <ImageLoader
     src="{artWork.thumbnails.images[0].url}"
     />
        </Column>
        <Column>
     <Tile>
      <h3> {artWork.name}</h3>
     </Tile>
     <ImageLoader
     src="{artWork.thumbnails.images[0].url}"
     />
    
 </Column>

   
  {/each}
</Row>

</Grid>
  </div>
  
</main>


