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
     
      
    } from "carbon-components-svelte";

    let isSideNavOpen = false;
    let theme = "g90";
   
  </script>
 
 <Header  href="/"  platformName="Sfera Gallery" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
   
  </Header>

  <SideNav 
 
  bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink text="Home" href="/" />
      <SideNavLink text="Gallery" href="/gallery" />
      <SideNavLink text="Artists" href="/artists"/>
      <SideNavLink text="Exibitions" href="/exibitions"/>
      <SideNavMenu text="Service">
        <SideNavMenuItem href="/" text="Artwork scan" />
        <SideNavMenuItem href="/" text="Augmented exibition" />
      </SideNavMenu>
      <SideNavDivider />
      <SideNavLink text="Contacts" href="/contacts"/>
      <div class="toogle">
        <Theme 
        bind:theme persist persistKey="__carbon-theme"
          render="toggle"
          toggle={{
          themes: ["g90", "g10"],
          labelA: "Dark mode",
          labelB: "Light mode",
          hideLabel: true,
          size: "md",
        }}
      />
      </div>
      
     
    </SideNavItems>
  </SideNav>
  
  <Content>
   
          <slot/>
   
  </Content>
    
   <style>
     .toogle{
       margin-left: 1em;
     }
   </style>