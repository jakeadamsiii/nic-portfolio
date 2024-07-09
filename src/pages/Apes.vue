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
      :title="'Apes Hill'"
      :num="'06'"
      :sub="'Brand Identity'"
    />

     <Video 
      :bgImage="BgImageApes1"
      :Video="Video"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'Creating the brand identity for Apes Hill, a luxury golf resort in Barbados, included logo, colour palette, typography and art direction. Working with strategy, I established clear design principles to form the basis of the brand identity.'"
      :sub="`The laidback luxury feel of the brand set Apes Hill apart from its competitors.  This paradoxical approach I took involved combining typefraces that felt warm yet elegant, colour palettes that accentuated the resort's natural beauty and light-hearted art direction that enhanced the brand's playful side.`" 
    />

    <HorizontalImage 
      :bgImage="ApesImages2"
      :Image="[]"
    />

    <Next
      :nextUrl="'/sani-resorts'"
      :prevUrl="'/asos'"
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
  import Video from '../components/Video.vue'
   
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {

    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
        BgImageApes1: [
          {
            src: require('../images/Background_ApesHill_1.jpg'),
            alt: "Background"
          }
        ],  
        ApesImages1: [
          {
            src: require('../images/VideoStill_ApesHill_1.jpg'),
            alt: "Apes Hill Screen"
          }
        ],  
        ApesImages2: [
          {
            src: require('../images/Screen_ApesHill_1.png'),
            alt: "Apes Hill Screen"
          }
        ],
        Video: [
          require('../images/ApesHill.mp4')
        ]
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
      MainLayout, Nav, ProjectHeading, Video, BgThreeImages, passwordProtect, Copy, Next, HorizontalImage, ImageGrid, TrippleImage, LongImage
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
