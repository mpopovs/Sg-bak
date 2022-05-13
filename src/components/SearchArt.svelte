<script>
    import {goto} from "$app/navigation";
    import Keydown from "svelte-keydown";
    import { Search, Button  } from "carbon-components-svelte";
  
  var searched = '';
  const search = () => {
  goto(`${searched}`)
  };
  </script>
  
  <section>
  
    <div class="flex flex-col items-center justify-center ">
        <div class="bg-transparent w-full p-2 px-10 md:px20 lg:px-52">
        
  
      
      
      <Search bind:value={searched}/>
      <Keydown on:Enter={search}/>
      
      <Button size="field" on:click={search} kind="tertiary">Search</Button>
    </div>
      </div>
  </section>