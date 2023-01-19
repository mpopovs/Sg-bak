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
<Row>
  <Content><h5>Suported by:</h5>
  </Content>
</Row>
    <Row>
  
  <Column><Content><ImageLoader src='https://static.sketchfab.com/img/press/logos/sketchfab-logo-text.png'/></Content></Column>
  <Column><Content><ImageLoader src='data:image/png;base64,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'/></Content></Column>
  <Column><Content><ImageLoader src='https://scontent.frix1-1.fna.fbcdn.net/v/t1.18169-9/15940697_1806320976297858_2902089738209501302_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=JCa1FDpUPk4AX90tdqG&_nc_ht=scontent.frix1-1.fna&oh=00_AfA6uW26-z2XLj2j8_tC9AMhamVwoDCfuJhHKBgP50yx6g&oe=63F08D3D'/></Content></Column>
  <Column><Content><ImageLoader src=''/></Content></Column>
  <Column><Content><ImageLoader src=''/></Content></Column>
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
  



