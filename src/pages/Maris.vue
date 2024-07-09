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
      :sub="`However, despite the resort's exceptional offerings, its online presence did not adequately reflect the luxury and modernity that guests experience on-site. This discrepancy posed a challenge in attracting potential guests and converting website visits into bookings.`" 
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
      :copy="'The primary objective was to revamp the online presence of D Maris Bay to better reflect the resorts luxury and modern experience, thereby increasing online bookings.'"
      :sub="'The approach included:'" 
      :copyHtml="`
        <ul class='main-list'>
          <li>
            <p>Website Structure and Navigation: A clear and intuitive website structure was essential to improve user experience. </p>
            <ul class='sub-list'>
              <li>Sitemap Restructuring: Simplifying the sitemap to ensure users can easily find information. Key sections included accommodations, dining, activities, and booking.</li>
              <li>User-Centric Navigation: Designing a navigation system that is intuitive, ensuring users can effortlessly move from one section to another.</li>
            </ul>
          </li>
          <li>
            <p>Visual Identity and Art Direction: The first step was to elevate the visual identity of the resort's online presence.</p>
            <ul class='sub-list'>
              <li>High-Quality Imagery: Showcasing the resort's stunning beaches, serene natural surroundings, and luxurious amenities through high-resolution images.</li>
              <li>Modern Aesthetic: Incorporating contemporary design elements and a sophisticated color palette to evoke a sense of luxury and exclusivity.</li>
              <li>Consistent Branding: Ensuring that all visual elements align with the brand’s identity, providing a cohesive and immersive user experience.</li>
            </ul>
          </li>
        </ul>`"
    />


    <TrippleImage 
      :Images="MarisImages4"
    />

     <LongImage 
      :Image="MarisImages5"
    />

    <Copy 
      :title="'Implementation'"
      :copy="'To bring the strategy to life, the following actions were taken:'"
      :sub="''" 
      :copyHtml="`
        <ul class='main-list'>
          <li>
            <p>Design System and Module Library:</p>
            <ul class='sub-list'>
              <li>A comprehensive design system and module library were created to ensure consistency and flexibility. This allowed for the easy creation of new pages and enhancement of existing features.</li>
            </ul>
          </li>

          <li>
            <p>Content Strategy:</p>
            <ul class='sub-list'>
              <li>Crafting compelling content that highlights the unique aspects of the resort, including detailed descriptions of accommodations, dining options, and activities.</li>
            </ul>
          </li>

          <li>
            <p>UX/UI Enhancements:</p>
            <ul class='sub-list'>
              <li>Implementing UX/UI best practices to ensure a user-friendly experience. This included optimizing load times, ensuring accessibility, and enhancing visual appeal.</li>
            </ul>
          </li>
        </ul>`"
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

    <Copy 
      :title="'The Results'"
      :copy="'The revamped online presence of D Maris Bay resulted in significant improvements:'"
      :sub="''" 
      :copyHtml="`
        <ul class='main-list'>
          <li>
            <p>Increased Bookings:</p>
            <ul class='sub-list'>
              <li>The primary book button, simplified booking bar and enhanced user experience led to a notable increase in online bookings.</li>
            </ul>
          </li>

          <li>
            <p>Enhanced User Engagement:</p>
            <ul class='sub-list'>
              <li>The modern visual identity and improved navigation resulted in longer site visits and lower bounce rates.</li>
            </ul>
          </li>

          <li>
            <p>Brand Perception:</p>
            <ul class='sub-list'>
              <li>The new website successfully communicated the luxury and exclusivity of D Maris Bay, aligning online perception with the on-site experience.</li>
            </ul>
          </li>
        </ul>`"
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
