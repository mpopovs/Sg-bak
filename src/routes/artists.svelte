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
            
            src= "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/aivars.jpg?v=1652793289422"
          />
          Aivars Baranovskis
        </ClickableTile>

    </Column>
    <Column sm={4} md={4} lg={4}>
        <ClickableTile href="/">
            <ImageLoader
            
            src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/egle.jpg?v=1652793270752"
          />
          Egle Einikyte-Narkeviciene
        </ClickableTile>
    </Column>
    <Column sm={4} md={4} lg={4}>
          <ClickableTile href="/">
            <ImageLoader
            
            src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/elina.jpg?v=1652793273561"
          />
          Elina Titane
        </ClickableTile>
    </Column>
        <Column sm={4} md={4} lg={4}>
          <ClickableTile href="/">
          <ImageLoader
          
          src="https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/valentins.jpg?v=1652793277247"
        />
        Valentins Petjko
    </ClickableTile>
</Column>
</Row>
  </Grid>
