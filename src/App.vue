<template>
  <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
            <router-link to="/plantlist" class="navbar-item">
           Plants
          </router-link>
          <router-link to="/projects" class="navbar-item">
           Projects
          </router-link>
           <router-link to="/about" class="navbar-item">
           About
          </router-link>
       </div>
     </div>
   </nav>
    <router-view></router-view>
 </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style>

</style>
<style lang="sass">
@import "~bulma/bulma.sass"
</style>