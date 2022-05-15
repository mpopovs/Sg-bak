
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
   
    <Grid padding>
      <Row >
    {#each list as item, index}
    

    <Column sm={8} md={8} lg={8}>
    <Tile>
      <div class="" data-num={index + 1}>
        
          
          <ImageLoader
              src="{item.thumbnails.images[0].url}"
              alt="{item.name}"
            />
      
 <Tile >
    <div class="">
            <Tile>{item.name}</Tile>
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
          
          position: relative;
          transition: all 0.7s ease-in-out;
         
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
        
        @media screen and (max-width: 800px){
         
          .popup{
            
            width: 100%;
            height: 100%;
          }
        }
           
            </style>
        