<Content><h1>Gallery</h1></Content>
<script>
    
    import { onMount } from "svelte";
    import {apiData, artWorks} from "../store";
    import { Grid, Row, Column, Button,ImageLoader, Content, PaginationNav } from "carbon-components-svelte";
  
    


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
      <Grid 
      noGutter='true'
      padding>
        <Row
        noGutter='true'
        >
    {#each $artWorks as artWork}
   
          <Column 
          noGutter='true'
          sm={8} md={8} lg={8}>

    
<ImageLoader

src="{artWork.thumbnails.images[0].url}"
/>
             

              
              <div class="button">
                <a  href="#{artWork.uid}"><Button>3D / AR</Button></a>
              </div>
              
              <div id="{artWork.uid}" class="overlay">
                <div class="popup">
                  <Content>
                  <h2>{artWork.name}</h2>
                  <a class="close" href="#{artWork.uid+1}">&times;</a>
                </Content>
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
      <PaginationNav total={3} loop/>
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
          padding-top: 1em;
        }
        .overlay {
          position: fixed;
          top: 30px;
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
  
        
        .popup {
          margin: 20px auto;
          padding: 10px;
          background: #fff;
          border-radius: 0px;
          width: 800px;
          left: 12%;
          position: relative;
          transition: all 0.7s ease-in-out;
          overflow: scroll;
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
          color: #0f62fe;
        }
        .popup .content {
          
          max-height: 900px;
          
        }
      
       
        
        @media screen and (max-width: 1056px){
         
          .overlay{
            left: 0;
          }
          .popup{
            left: 0px;
            width: 100%;
            height: 100%;
          }
        }
        
</style>
