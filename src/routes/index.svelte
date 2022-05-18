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
 
<Row>
  <Column>
    <Content>
      <div class="sfera">
 <ImageLoader
 src='https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/lodes_atspulgs.7.png?v=1652865501902'
 />
</div>
</Content>
  </Column>
</Row>
</Grid>
  
<style>
  .sfera{
    padding-top: 2rem;
    margin: 2rem;
  }
</style>
  



