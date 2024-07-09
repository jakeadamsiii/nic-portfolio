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
      :title="'Sivvi'"
      :num="'02'"
      :sub="'APP DESIGN'"
    />

    <BgThreeImages 
      :bgImage="BgImageSivvi1"
      :Images="SivviImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'Sivvi, leading fashion retailer in the UAE, Saudi Arabia and Egypt, was looking to improve its app experience.  My aim when leading the design of the app was to introduce a stronger brand identity, giving it a bold and modern look, setting it apart from competitors in a crowded and ever growing market.'"
      :sub="`By utilising a 'dark mode' in the design, the app felt very different from its competitors. I reworked the entire structure of the app, eliminated unneeded content in order to simplify pages, restructured the navigation to better categorise product listings, and added native features to create an intuitive and seamless app experience.`" 
    />

    <BgThreeImages 
      :bgImage="[]"
      :Images="SivviImages2"
    />

    <BgThreeImages 
      :bgImage="BgImageSivvi2"
      :Images="SivviImages3"
    />
    
    <Next
      :nextUrl="'/harrods'"
      :prevUrl="'/d-maris-bay'"
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
        BgImageSivvi1: [
          {
            src: require('../images/Background_Sivvi_1.jpg'),
            alt: "Background Sivvi"
          }
        ],  
        SivviImages1: [
          {
            src: require('../images/Screen_Sivvi_1.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_2.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_3.png'),
            alt: "Sivvi Screen"
          }
        ],
        SivviImages2: [
          {
            src: require('../images/Screen_Sivvi_4.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_5.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_6.png'),
            alt: "Sivvi Screen"
          }
        ], 
        BgImageSivvi2: [
          {
            src: require('../images/Background_Sivvi_2.jpg'),
            alt: "Background Sivvi"
          }
        ],  
        SivviImages3: [
          {
            src: require('../images/Screen_Sivvi_7.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_8.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/Screen_Sivvi_9.png'),
            alt: "Sivvi Screen"
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
