<template>
  <main-layout :class="{ui: uiHover, icons: iconHover, prints: printHover, publications: publicationHover, vi: viHover, ad: adHover, motion: motionHover, workHover: workHover, white: white}">
    <Nav 
      :isHomepage="true"
    />

    <div class="home" >  
      hello
    </div>

     
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import Nav from '../components/Nav.vue';
  import VueScrollSnap from "vue-scroll-snap";
  import FallingImage from '../components/FallingImage.vue'
   
  import ProjectHeading from '../components/ProjectHeading.vue'

  export default {
    data: function () {
      return {
        uiHover: false,
        iconHover: false,
        printHover: false,
        publicationHover: false,
        viHover: false,
        adHover: false,
        motionHover: false,
        workHover: false,
        white: false,
        mobVid: false,
        isMobile: window.innerWidth <= 768 ? 'fade-right' : '',
        isDesktop: true
      }
    },
    components: {
      MainLayout, Nav ,
    },
     methods: {


     },
     mounted: function() {
         
     }
  }
</script>


<style scoped>
  .home {
    height: 100vh;
  }
  .home:hover{
    color: red;
  }
</style>