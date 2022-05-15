<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
    import {
       Content,
      Grid,
      Row,
      Column,
      Tile,
ImageLoader,
      
    } from "carbon-components-svelte";
import SearchArt from '../components/SearchArt.svelte';
    let spin = 0;

	SC.onFrame(() => {
	spin += 0.01;
	});
</script>
<!--
​<SC.Canvas antialias background={new THREE.Color('#262626')} environment={new THREE.Texture('https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/pie_inzenieru%20arsenala.jpg?v=1652285412244')}>
	<SC.Mesh
		geometry={new THREE.SphereGeometry()}
		material={new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.3, metalness: 0.7 })}
        rotation={[0, spin, 0]}
       
	/>
	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.OrbitControls enableZoom={false} />
    <SC.AmbientLight intensity={1} />
	<SC.DirectionalLight intensity={2} position={[-2, 3, 2]} />

    
​</SC.Canvas>
-->
<Content>
    <Grid>
        
        <Row>
            <Column>
          <h1>Find Artworks</h1>
          <Tile>
        <SearchArt/>
        <ImageLoader
            src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/fo4o.jpg?v=1652294284989"
            alt="attels"
          />
        </Tile>
    </Column>
    </Row>
    </Grid>
  </Content>