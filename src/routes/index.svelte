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
   
    var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "101880118977330");
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v14.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
 
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

<!-- Messenger Chat Plugin Code -->
<div id="fb-root"></div>

<!-- Your Chat Plugin code -->
<div id="fb-customer-chat" class="fb-customerchat">
</div>



<!-- Your SDK code -->




 <div class="sfera">
 
 </div>
<style>
  .sfera{
    padding-top: 2rem;
    margin: 2rem;
  }
</style>
  



