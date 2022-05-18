<script>
    import "carbon-components-svelte/css/all.css";

import {
    Header,
    Theme ,
    SideNav,
      SideNavItems,
      SideNavMenu,
      SideNavMenuItem,
      SideNavLink,
      SideNavDivider,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
Tile,
     
      
    } from "carbon-components-svelte";
    import Icon from '@iconify/svelte';

    let isSideNavOpen = false;
    let theme = "g90";
   
  </script>
 
 <Header  href="/"  platformName="Sfera Gallery" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>

    <div class="toogle">
     
      <Theme 
        bind:theme
      
        render="toggle"
        toggle={{
        themes: ["g90", "g10"],
        labelA: ' ',
        labelB: ' ',
        
        
      }}
    />
    
    
  </div>
  </Header>

  <SideNav 
 
  bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink text="Home" href="/" />
      <SideNavLink text="Gallery" href="/gallery" />
      <SideNavLink text="Artists" href="/artists"/>
      
      <SideNavLink text="About" href="/about"/>
      <SideNavMenu text="Service">
        <SideNavMenuItem href="/" text="Artwork scan" />
        <SideNavMenuItem href="/" text="Augmented exibition" />
      </SideNavMenu>
      <SideNavDivider />
      <SideNavLink text="Contacts" href="/contacts"/>
      
      
     
    </SideNavItems>
  </SideNav>
  

  <Content>
    <Grid
    
    >
      <Row
      noGutter='true'
      >
        <Column
        
        >
          <slot/>
        </Column>
      </Row>
    </Grid>
  </Content>
          
        
 
    
   <style>
     .toogle{
       position: fixed;
       top:0 px;
       right: 18px;
      
       padding-bottom: 15px;
     }
    
    
     :global(.bx--side-nav~.bx--content){margin-left: 0rem;
    padding: 1rem;
    }
   </style>