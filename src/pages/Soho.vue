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
      :title="'Soho House'"
      :num="'08'"
      :sub="'APP DESIGN'"
    />

    <BgThreeImages 
      :bgImage="BgImageSivvi1"
      :Images="SivviImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'Taking an iterative approach, I looked at a number of projects to improve user journeys across the Soho House app.'"
      :sub="`The main function of the app is for a member to get the most out of their membership, facilitate bookings and make payments in the Houses.  With this in mind, I looked at the IA of the app, rearchitucturing the navigation and introducing a bottom tab bar giving easy access to the most primary functions.  I also redesigned booking journeys, search and notifications, reducing clicks, decluttering and resturcturing pages to make them much simpler and cleaner.`"
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
      :nextUrl="'/d-maris-bay'"
      :prevUrl="'/sani-resorts'"
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
            src: require('../images/sh-background1.jpg'),
            alt: "Background Sivvi"
          }
        ],  
        SivviImages1: [
          {
            src: require('../images/sh-screen1.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen2.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen3.png'),
            alt: "Sivvi Screen"
          }
        ],
        SivviImages2: [
          {
            src: require('../images/sh-screen4.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen5.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen6.png'),
            alt: "Sivvi Screen"
          }
        ], 
        BgImageSivvi2: [
          {
            src: require('../images/sh-background2.jpg'),
            alt: "Background Sivvi"
          }
        ],  
        SivviImages3: [
          {
            src: require('../images/sh-screen7.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen8.png'),
            alt: "Sivvi Screen"
          },
          {
            src: require('../images/sh-screen9.png'),
            alt: "Sivvi Screen"
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
