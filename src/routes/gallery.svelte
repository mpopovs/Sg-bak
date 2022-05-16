<Content><h1>Gallery!</h1></Content>
<script>
    import "carbon-components-svelte/css/g90.css";
    import { onMount } from "svelte";
    import {apiData, artWorks} from "../store";
    import { Grid, Row, Column } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";
    import { ImageLoader, Content, PaginationNav } from "carbon-components-svelte";
  
    


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
<main>
       
        
    <div class="">
      <Grid narrow padding>
        <Row>
    {#each $artWorks as artWork}
   
          <Column sm={1} md={4} lg={8}>

    
<ImageLoader

src="{artWork.thumbnails.images[0].url}"
/>
             

              
              <div class=" ">
                <a  href="#{artWork.uid}"><Button>3D / AR</Button></a>
              </div>
              
              <div id="{artWork.uid}" class="overlay">
                <div class="popup">
                  <h2>{artWork.name}</h2>
                  <a class="close" href="#{artWork.uid+1}">&times;</a>
                  
                    <div class="sketchfab-embed-wrapper, content"> 
                      <iframe 
                      title="{artWork.name}" 
                      frameborder="0" 
                    width="100%"
                    height="500px"
                     
                      allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
                      src="https://sketchfab.com/models/{artWork.uid}/embed?ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_settings=0&ui_vr=0&ui_annotations=0"> 
                    </iframe> 
                   
                  </div>
                  <p class="descript">
                    {@html artWork.description}
                  </p>
                  
                </div>
              </div>
             
              
            </Column>
     
    {/each}
  </Row>
  <Row>
    <Column></Column>
    <Column>
      <PaginationNav />
    </Column>
    <Column></Column>
    
  </Row>
</Grid>
    </div>
    
</main>

<style> 
a {
text-decoration: none;
}
.descript{
color: #333;
}
.overlay {
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.7);
transition: opacity 500ms;
visibility: hidden;
opacity: 0;
z-index: 1;
}
.overlay:target {
visibility: visible;
opacity: 1;
}
.overlay:target {
visibility: visible;
opacity: 1;
}

.popup {
margin: 70px auto;
padding: 20px;
background: #fff;
border-radius: 5px;
width: 30%;
position: relative;
transition: all 5s ease-in-out;
}

.popup h2 {
margin-top: 0;
color: #333;
font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
position: absolute;
top: 20px;
right: 30px;
transition: all 200ms;
font-size: 30px;
font-weight: bold;
text-decoration: none;
color: #333;
}
.popup .close:hover {
color: #06D85F;
}
.popup .content {
max-height: 70%;
overflow: auto;
}

@media screen and (max-width: 700px){

.popup{
width: 70%;
}
}

</style>
