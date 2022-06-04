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
import { src_url_equal } from "svelte/internal";

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
            <Content></Content>
            <Content>
              <SearchArt/>
            </Content>
          <Content><h1>Contemporary ceramic digital library with augmented reallity</h1>
          </Content>
         
        </Column>
                    
    </Row>
 
<Row>
  
  <Column >
    <!--
    <Content>
    
      {#each $artWorks as artWork}
      
      {#each artWork.tags as tagName }
        <Tag >{tagName.name}</Tag>
      {/each}
       {/each}


</Content>
-->
<Content>
<ImageLoader src='https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622'/>
</Content> 
</Column>
  
</Row>
</Grid>





 <div class="sfera">
 
 </div>
<style>
  .sfera{
    padding-top: 2rem;
    margin: 2rem;
  }
</style>
  



