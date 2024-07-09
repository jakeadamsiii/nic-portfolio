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
      :copy="'As part of a complete redesign of Harrods.com, I collaborated with a branding agency to create a new online experience, and was then tasked to translate these concepts into commercially driving pages for brands like Saint Laurent, Gucci and Burberry.'"
      :sub="`The aim was to incorporate affiliated brands while maintaining both the brand's integrity and providing an elevated experience similar to that of the store.  My goal was to create a design that seamlessly integrated content across the whole user journey, creating a rich shopping experience for the user.`" 
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
        if (val === "Portfolio2024") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed6", true);
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
      if (localStorage.getItem("allowed6") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scoped>



</style>
