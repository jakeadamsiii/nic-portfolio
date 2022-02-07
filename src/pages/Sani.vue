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
      :title="'Sani Resorts'"
      :num="'07'"
      :sub="'Website Redesign'"
    />

    <BgThreeImages 
      :bgImage="BgImageSani1"
      :Images="SaniImages1"
    />

    <Copy 
      :title="'The Approach'"
      :copy="'The Sani resort is a unique luxury destination in Halkidiki, Greece, that offers five unique hotels and a world-class dining and entertainment experience. I was asked to improve the user experience of the website to increase conversions.'"
      :sub="`Because of the resort's extensive offering, it was important to make it easy for guests to explore the different hotels, experiences, activities and restaurants beforehand, as well as pre-book activities.  With consideration given to the content and structure of the pages, a strong brand narrative was built with engaging autoplay videos and rich imagery across the site, as well as clear content hierarchy and defined calls to action.`" 
    />

   <HorizontalImage 
      :bgImage="[]"
      :Image="SaniImages2"
    />

   <BgThreeImages 
      :bgImage="BgImageSani2"
      :Images="SaniImages3"
    />

     <LongImage 
      :Image="SaniImages4"
    />

    <Next
      :nextUrl="'/d-maris-bay'"
      :prevUrl="'/apes-hill'"
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
        BgImageSani1: [
          {
            src: require('../images/Background_Sani_1.jpg'),
            alt: "Background"
          }
        ],  
        SaniImages1: [
          {
            src: require('../images/Screen_Sani_1.png'),
            alt: "Sani Screen"
          },
          {
            src: require('../images/Screen_Sani_2.png'),
            alt: "Sani Screen"
          },
          {
            src: require('../images/Screen_Sani_3.png'),
            alt: "Sani Screen"
          }
        ],  
        SaniImages2: [
          {
            src: require('../images/Screen_Sani_4.png'),
            alt: "Sani Screen"
          }
        ], 
        BgImageSani2: [
          {
            src: require('../images/Background_Sani_2.jpg'),
            alt: "Background"
          }
        ],  
        SaniImages3: [
          {
            src: require('../images/Screen_Sani_5.png'),
            alt: "Sani Screen"
          },
          {
            src: require('../images/Screen_Sani_6.png'),
            alt: "Sani Screen"
          },
          {
            src: require('../images/Screen_Sani_7.png'),
            alt: "Sani Screen"
          }
        ],  
        SaniImages4: [
          {
            src: require('../images/Screen_Sani_8.png'),
            alt: "Sani Screen"
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
