<script>
	
    import {
       Content,
      Grid,
      Row,
      Column,
      Tile,
ImageLoader,
InlineLoading,
      
    } from "carbon-components-svelte";
import SearchArt from '../components/SearchArt.svelte';
   
</script>


    <Grid
    noGutter='true'
    >
        
        <Row>
            <Column 
            noGutter='true'
            >
          <Content><h1>Find Artworks</h1></Content>
          
        <SearchArt/>
        
        <ImageLoader
  src="https://media.sketchfab.com/models/db152d54b6514ec3a981ea9fd877ac23/thumbnails/1e131d25f2154819b4de6abff6948092/2bb65402441c41e8b1156e6fff07ef1b.jpeg"
>
  <svelte:fragment slot="loading">
    <InlineLoading />
  </svelte:fragment>
  <svelte:fragment slot="error">An error occurred.</svelte:fragment>
</ImageLoader>
        
                   
    
 
            <ImageLoader
            src="https://media.sketchfab.com/models/49cde16e02dd43ef8c902acb5000b50f/thumbnails/db71ce98d53a46bc9a0b995b2deac7f7/2318711c06db4c269e2c53212be3a66e.jpeg"
          >
            <svelte:fragment slot="loading">
              <InlineLoading />
            </svelte:fragment>
            <svelte:fragment slot="error">An error occurred.</svelte:fragment>
          </ImageLoader>
       

       
            <ImageLoader
            src="https://media.sketchfab.com/models/96d73f4ccbd547969a1e659ec9c0193c/thumbnails/5f3da2523b1446718b0ce457fb851b0c/02ff08169a284a5fabefcec31d00578d.jpeg"
          >
            <svelte:fragment slot="loading">
              <InlineLoading />
            </svelte:fragment>
            <svelte:fragment slot="error">An error occurred.</svelte:fragment>
          </ImageLoader>
       
        </Column>
                    
    </Row>
    </Grid>
 