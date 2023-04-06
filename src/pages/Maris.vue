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

    <!-- <Video 
      :bgImage="BgImageMaris1"
      :Video="Video"
    />

    <VideoMobile 
      :bgImage="BgImageMaris1"
      :Video="VideoMobile"
    /> -->

    <HorizontalImage 
      :bgImage="BgImageMaris1"
      :Image="MarisImages1"
    />

  <Copy 
      :title="''"
      :copy="'D Maris Bay is a luxury resort located in Turkey, where Aegean Sea meets the Mediterranean.  The resort is secluded and immersed in nature, home to a number of exclusive sandy beaches, outdoor activities and fine dining restaurants.'"
      :sub="`In order to improve the resort's online presence and increase online bookings, I was asked to elevate the resort's brand creative, art direction, and website design to reflect the luxury experience of the resort.`" 
    />

    <BgThreeImages 
      :bgImage="[]"
      :Images="MarisImages2"
    />

    <HorizontalImage 
      :bgImage="BgImageMaris2"
      :Image="MarisImages3"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'The overall objective was to enhance the D Maris Bay online experience, increasing bookings through the website overall by elevating the visual identity, structuring pages clearly, and simplifying user journeys.'"
      :sub="'The sitemap was restructured to make it easier for users to navigate to their desired information, and improvements made to the booking process to require fewer clicks to checkout.  I created a comprehensive design system and module library that would facilitate building new pages and enhancing features in a consistent and efficient way.'" 
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

    <Copy 
      :title="'Art Direction'"
      :copy="'In my role as Art Director, I defined and mood boarded the overall direction for a 7-day photo shoot on the resort in Turkey, including casting, wardrobe styling, and make-up.'"
      :sub="'In collaboration with the production team, we planned and shot over 100 images with 10 models to build the brand narrative for content across the website. Taking into account their purpose and placement to elevate the brand and ensure consistency with the brand aesthetic.'" 
    />

    <ImageGrid 
      :Images="MarisImages8"
    />

    <Next
      :nextUrl="'/sivvi'"
      :prevUrl="'/soho-house'"
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
  import VideoMobile from '../components/VideoMobile.vue'
   
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
        ],
        Video: [
          require('../images/INTRO.mp4')
        ],
        VideoMobile: [
          require('../images/INTRO.mp4')
        ]
      }
    },

    methods: {
      enterPassword: function(val) {
        if (val === "Kerning2023") {
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
      MainLayout, Nav, Video, VideoMobile, ProjectHeading, BgThreeImages, passwordProtect, Copy, Next, HorizontalImage, ImageGrid, TrippleImage, LongImage
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
