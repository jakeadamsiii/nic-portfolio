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
      :title="'ASOS'"
      :num="'05'"
      :sub="'AUGMENTED REALITY MAKE-UP APP'"
    />

    <BgThreeImages
      :bgImage="BgImageAsos1"
      :Images="AsosImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="`To create an augmented reality make-up app to coincide with the launch of ASOS's new beauty range. Working with a 3rd party, I led the design and enhancement of their existing technology to build a bespoke experience for ASOS.`"
      :sub="'Beginning from the user journey, wireframes, and finally the applied UI, I ensured a clean and simple experience for the user. It was important to include both brand curated content and user generated content into the experience. I also explored functionality that allowed users to scan barcodes of beauty products, try them on and purchase them at the click of a button.'" 
    />
        
    <BgThreeImages
      :bgImage="BgImageAsos2"
      :Images="AsosImages2"
    />

    <Next
      :nextUrl="'/apes-hill'"
      :prevUrl="'/made'"
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
        BgImageAsos1: [
          {
            src: require('../images/Background_ASOS_1.jpg'),
            alt: "Background"
          }
        ],  
        AsosImages1: [
          {
            src: require('../images/VideoStill_ASOS_1.jpg'),
            alt: "Asos Screen"
          },
        ], 
        BgImageAsos2: [
          {
            src: require('../images/Background_ASOS_2.jpg'),
            alt: "Background"
          }
        ],  
        AsosImages2: [
          {
            src: require('../images/Screen_ASOS_1.png'),
            alt: "Asos Screen"
          },
          {
            src: require('../images/Screen_ASOS_2.png'),
            alt: "Asos Screen"
          },
          {
            src: require('../images/Screen_ASOS_3.png'),
            alt: "Asos Screen"
          },
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
