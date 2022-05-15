<script>
    
    import {page} from '$app/stores';
    import { ImageLoader, 
      Button,
       Tile,
       Grid, 
       Row,
      Column } from "carbon-components-svelte";
    import {afterUpdate} from "svelte";

    /**
* @type {any[]}
*/
    let artWorks = [];

    afterUpdate(async () => {
        var searched = $page.params.searched;
        const sketchfabArt =await fetch (`https://api.sketchfab.com/v3/search?type=models&q=${searched}&user=sferagallery&archives_flavours=false`)
        var res = await sketchfabArt.json();
        artWorks = res.results;
        console.log(artWorks)
    });
    </script>
    
    <section>
        
        <div><Grid>
            {#each artWorks as artWork}
          <Row>
            <Column>
            <Tile>
            <ImageLoader
            src="{artWork.thumbnails.images[0].url}"
            alt="{artWork.name}"
          />
            <h2>{artWork.name}</h2>
            <a  href="#{artWork.uid}"><Button>3D / AR</Button></a>
          </Tile>
        </Column>
        </Row>
                
              
              
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
                     
                      allowfullscreen mozAllowFullScreen="true" webkitallowfullscreen="true" 
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

            {/each}
          </Grid>
            </div>
    </section>

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
          border-radius: none;
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
          color: #0f62fe;
        }
        .popup .content {
          max-height: 70%;
          overflow: auto;
        }
        
        @media screen and (max-width: 700px){
         
          .popup{
            width: 100%;
          }
        }
           
            </style>