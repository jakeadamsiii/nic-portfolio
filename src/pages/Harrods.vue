<template>
  <div>
  <passwordProtect
    :blocked="block"
    :tried="tried"
    @enterPassword="enterPassword"
  />
  <main-layout v-if="allowed">
    <Nav />

    <ProjectHeading 
      :title="'Harrods'"
      :num="'03'"
      :sub="'Website Redesign'"
    />

    <BgThreeImages 
      :bgImage="BgImageHarrods1"
      :Images="HarrodsImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'Taking elements and functionality I knew already worked within the app, I created a robust solution for the site that incorporated a basic wishlist but with enhanced features.'"
      :sub="'Allowing users to save products to an area which they could return to at a later date, easily adding from both PDP and PLP level, but also adding functionality so these products could be arranged and sorted into groups and easily moved around, much like a pin-board.'" 
    />

    <HorizontalImage
      :bgImage="BgImageHarrods2"
      :Image="HarrodsImages2"
    />

    <LongImage 
      :Image="HarrodsImages3"
    />
    
    <Next
      :nextUrl="'/made'"
      :prevUrl="'/sivvi'"
    />

  </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import ProjectHeading from '../components/ProjectHeading.vue'
  import BgThreeImages from '../components/BgThreeImages.vue'
  import HorizontalImage from '../components/HorizontalImage.vue'
  import Copy from '../components/Copy.vue'
  import LongImage from '../components/LongImage.vue'
  import TrippleImage from '../components/TrippleImage.vue'
  import Next from '../components/Next.vue'
  import ImageGrid from '../components/ImageGrid.vue'
   
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {

    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
        BgImageHarrods1: [
          {
            src: require('../images/Background_Harrods_1.jpg'),
            alt: "Background Image"
          }
        ],  
        HarrodsImages1: [
          {
            src: require('../images/Screen_Harrods_1.png'),
            alt: "Harrods Screen"
          },
          {
            src: require('../images/Screen_Harrods_2.png'),
            alt: "Harrods Screen"
          },
          {
            src: require('../images/Screen_Harrods_3.png'),
            alt: "Harrods Screen"
          }
        ],  
        BgImageHarrods2: [
          {
            src: require('../images/Background_Harrods_2.jpg'),
            alt: "Background Image"
          }
        ],  
        HarrodsImages2: [
          {
            src: require('../images/Screen_Harrods_4.png'),
            alt: "Harrods Screen"
          }
        ], 
        HarrodsImages3: [
          {
            src: require('../images/Screen_Harrods_5.png'),
            alt: "Harrods Screen"
          }
        ],   
 
      }
    },

    methods: {
      enterPassword: function(val) {
        if (val === "LoremIpsum") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed5", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    },
    components: {
      MainLayout, Nav, ProjectHeading, BgThreeImages, passwordProtect, Copy, Next, HorizontalImage, ImageGrid, TrippleImage, LongImage
    },
    mounted: function() {
      if (localStorage.getItem("allowed5") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scoped>



</style>
