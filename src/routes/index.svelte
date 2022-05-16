<script>
	
    import {
       Content,
      Grid,
      Row,
      Column,
      Tile,
ImageLoader,
      
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
          <h1>Find Artworks</h1>
          
        <SearchArt/>
        
        <div class="sketchfab-embed-wrapper"> 
            <iframe title="Lodes Atspulgs" frameborder="0" 
            width="100%"
                      height="600px"
                      allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
                      src="https://sketchfab.com/models/5bdca21846fc43dab771ce075405089c/embed?autospin=1&autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&dnt=1"> </iframe> </div>
        </Column>
    </Row>
    </Grid>
 