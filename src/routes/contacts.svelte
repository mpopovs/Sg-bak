


<script>
    import {
        Grid,
        Row,
        Column,
      FluidForm,
      TextInput,
      TextArea,
      FormGroup,
      Button,
     Content
    } from "carbon-components-svelte";
 
   import Icon from '@iconify/svelte';
  </script>
  <Content>
    <h1>Contacts</h1>
  </Content>
 <!-- <Grid padding
  >
  <Row
  >
    <Column>
    <TextInput labelText="First Name" placeholder="First Name..." required />
</Column>
    <Column>
    <TextInput labelText="Last Name" placeholder="Last Name..." required />
</Column>
</Row>
<Row>
    <Column>
    <TextInput labelText="Email" placeholder="your@mail.com" required />
</Column>
<Column>
    <TextInput labelText="Phone" placeholder="Phone number" required />
</Column>
</Row>
<Row>
    <Column>
        <TextInput labelText="Addres" placeholder="Adress " required />
    </Column>
</Row>

  <Row>
      <Column>
        <TextArea labelText="Message" placeholder="Type your message here..." />
    </Column>
  </Row>
<Row>
    <Column>
      <div class="button">
    <Button>Send</Button>
  </div>
    </Column>
</Row>

</Grid>
-->
<Content>
<Grid>
  <Row>
    <Column>
     <div class="center">

     <a href="https://www.facebook.com/sferagallery" target="_blank" class="cursor-pointer"><Icon icon="fa-brands:facebook" width="120" height="120" /></a>
    </div>
    </Column>
  </Row>
</Grid>

</Content>


<style>
  .center{
    align-items: center;
  }
</style>