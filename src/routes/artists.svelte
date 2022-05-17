<script>
    import {
        Grid,
        Row,
        Column,
        Tile,
      FluidForm,
      TextInput,
      TextArea,
      FormGroup,
      Button,
     Content,
     ImageLoader,
     ClickableTile
    } from "carbon-components-svelte";
  </script>
  <Content>
    <h1>Artists</h1>
  </Content>
  <Grid
  noGutter='true'
  >
<Row noGutter='true'>
    <Column sm={4} md={4} lg={4}>
  <ClickableTile href="../artistcv/aivarsbaranovskis">
   
  
            <ImageLoader
            
            src= "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/aivars.jpg?v=1652802000785"
          />
          Aivars Baranovskis
        </ClickableTile>

    </Column>
    <Column sm={4} md={4} lg={4}>
        <ClickableTile href="../artistcv/egle">
            <ImageLoader
            
            src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/egle.jpg?v=1652802003551"
          />
          Egle Einikyte-Narkeviciene
        </ClickableTile>
    </Column>
    <Column sm={4} md={4} lg={4}>
          <ClickableTile href="../artistcv/elinatitane">
            <ImageLoader
            
            src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/elina.jpg?v=1652802007364"
          />
          Elina Titane
        </ClickableTile>
    </Column>
        <Column sm={4} md={4} lg={4}>
          <ClickableTile href="../artistcv/valentinspetjko">
          <ImageLoader
          
          src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/valentins.jpg?v=1652802012351"
        />
        Valentins Petjko
    </ClickableTile>
</Column>
</Row>
  </Grid>
