
<script>
  // @ts-nocheck
  
  
    import { ImageLoader, Button, Tile, Grid, Row, Column  } from "carbon-components-svelte";
    import InfiniteLoading from 'svelte-infinite-loading';
    
    const api = 'https://api.sketchfab.com/v3/search?archives_flavours=false&count=24';
    
    let page = 0;
    let list = [];
    
    function infiniteHandler({ detail: { loaded, complete } }) {
      fetch(`${api}&cursor=${page}&type=models&user=sferagallery`)
        .then(response => response.json())
        .then(data => {
          if (data.results) {
            page += 24; 
            list = [...list, ...data.results];
            loaded();
          } else {
            complete();
          }
        });
    }
  </script>
  
  <div id="app">
   
    <Grid narrow>
      <Row padding>
    {#each list as item, index}
    

    <Column sm={8} md={8} lg={6}>
    <Tile>
      <div class="" data-num={index + 1}>
        
          
          <ImageLoader
              src="{item.thumbnails.images[0].url}"
              alt="{item.name}"
            />
      
 <Tile >
    <div class="">
            <h1>{item.name}</h1>
              <a  href="#{item.uid}"><Button>3D / AR</Button></a>
            </div>
         
          <div class="empty"></div>
        </Tile>
      </Tile>
    </Column>
  
            <div id="{item.uid}" class="overlay">
              <div class="popup">
                <h2>{item.name}</h2>
                <a class="close" href="#{item.uid+1}">&times;</a>
                
                  <div class="sketchfab-embed-wrapper, content"> 
                    <iframe 
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    title="{item.name}" 
                    frameborder="0" 
                  width="100%"
                  height="500px"
                   
                    allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
                    src="https://sketchfab.com/models/{item.uid}/embed?ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_settings=0&ui_vr=0&ui_annotations=0"> 
                  </iframe> 
                 
                </div>
                <p class="descript">
                  {@html item.description}
                </p>
                
              </div>
            </div>
    {/each}
    
  </Row>
</Grid>
  
  
  
    <InfiniteLoading on:infinite={infiniteHandler} />
  </div>
  
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
        