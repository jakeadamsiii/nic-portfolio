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
      :title="'D maris bay'"
      :num="'01'"
      :sub="'WEBSITE DESIGN & ART DIRECTION'"
    />

    <HorizontalImage 
      :bgImage="BgImageMaris1"
      :Image="MarisImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'Taking elements and functionality I knew already worked within the app, I created a robust solution for the site that incorporated a basic wishlist but with enhanced features.'"
      :sub="'Allowing users to save products to an area which they could return to at a later date, easily adding from both PDP and PLP level, but also adding functionality so these products could be arranged and sorted into groups and easily moved around, much like a pin-board.'" 
    />

    <BgThreeImages 
      :bgImage="[]"
      :Images="MarisImages2"
    />

    <HorizontalImage 
      :bgImage="BgImageMaris2"
      :Image="MarisImages3"
    />

    <TrippleImage 
      :Images="MarisImages4"
    />

     <LongImage 
      :Image="MarisImages5"
    />

    <BgThreeImages 
      :bgImage="BgImageMaris3"
      :Images="MarisImages7"
    />
    
    <ImageGrid 
      :Images="MarisImages8"
    />

    <Next
      :nextUrl="'/sivvi'"
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
        BgImageMaris1: [
          {
            src: require('../images/Background_DMaris_1.jpg'),
            alt: "Background"
          }
        ],  
        MarisImages1: [
          {
            src: require('../images/Screen_DMaris_1.png'),
            alt: "D Maris Bay Screen"
          }
        ],  
        MarisImages2: [
          {
            src: require('../images/Screen_DMaris_2.png'),
            alt: "D Maris Bay Screen"
          },
         {
            src: require('../images/Screen_DMaris_3.png'),
            alt: "D Maris Bay Screen"
          },         
          {
            src: require('../images/Screen_DMaris_4.png'),
            alt: "D Maris Bay Screen"
          }
        ],
        BgImageMaris2: [
          {
            src: require('../images/Background_DMaris_2.jpg'),
            alt: "Background"
          }
        ],
        MarisImages3: [
          {
            src: require('../images/Screen_DMaris_5.png'),
            alt: "D Maris Bay Screen"
          }
        ],
        MarisImages4: [
          {
            src: require('../images/Screen_DMaris_6.png'),
            alt: "D Maris Bay Screen"
          },
          {
            src: require('../images/Screen_DMaris_7.png'),
            alt: "D Maris Bay Screen"
          },        
          {
            src: require('../images/Screen_DMaris_8.png'),
            alt: "D Maris Bay Screen"
          }
        ],
         MarisImages5: [
          {
            src: require('../images/Screen_DMaris_9.png'),
            alt: "D Maris Bay Screen"
          }
        ],
        BgImageMaris3: [
          {
            src: require('../images/Background_DMaris_3.jpg'),
            alt: "D Maris Bay Screen"
          }
        ],  
        MarisImages7: [
          {
            src: require('../images/Screen_DMaris_10.png'),
            alt: "D Maris Bay Screen"
          },
         {
            src: require('../images/Screen_DMaris_11.png'),
            alt: "D Maris Bay Screen"
          },         
          {
            src: require('../images/Screen_DMaris_12.png'),
            alt: "D Maris Bay Screen"
          }
        ],
        MarisImages8: [
          {
            src: require('../images/Screen_DMaris_13.png'),
            alt: "D Maris Bay Screen"
          },
         {
            src: require('../images/Screen_DMaris_14.png'),
            alt: "D Maris Bay Screen"
          },         
          {
            src: require('../images/Screen_DMaris_15.png'),
            alt: "D Maris Bay Screen"
          },
           {
            src: require('../images/Screen_DMaris_16.png'),
            alt: "D Maris Bay Screen"
          },
         {
            src: require('../images/Screen_DMaris_17.png'),
            alt: "D Maris Bay Screen"
          },         
          {
            src: require('../images/Screen_DMaris_18.png'),
            alt: "D Maris Bay Screen"
          }
        ]
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
