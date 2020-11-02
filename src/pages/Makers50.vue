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
      :title="'Makers 50'"
      :categories="'UX Design - UI Design - Branding'"
      :sub="'Branding Concept'"
      :para="'Branding and website concept for a ceramic earthenware ecommerce company that creates limited runs of 50 pieces per design.'"
      :bg="'#F7F6F3'"
    />
    
   <FullImage 
      :images="ImageArray"
      :bg="'#D5D1CD'"
      :hero="true"
    />

    <ImageCopy 
      :right="false"
      :imageBg="'#D5D1CD'"
      :image="require('../images/makers5.jpg')"
      :head="'The Approach'"
      :text="`A bold, luxury website design with strong brand identity to highlight its unique limited run appeal.`"
    />

   <FullImage 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :hero="false"
    />

    <PageHeading 
      :sub="'Bold black and white structured layout and strong typography complemented the product imagery and gave a boutique, scandinavian feel.'"
      :para="'Product pages, listing pages and menus were designed clean, simple and bold, with typographic counters to denote the exclusivity of the unique product offering.'"
      :bg="'#F7F6F3'"
    />

   <FullImage 
      :images="ImageArrayThree"
      :bg="'#D5D1CD'"
      :hero="false"
    />

  <FullImage 
      :images="ImageArrayFour"
      :bg="'#D5D1CD'"
      :hero="false"
    />

   <NextProject
      :title="'Topshop'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/topshop'"
    />

    <Footer />

  </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import ProjectHeading from '../components/ProjectHeading.vue'
  import ImageCopy from '../components/ImageCopy.vue'
  import FullImage from '../components/FullImage.vue'
  import PageHeading from '../components/PageHeading.vue'
  import TwoCentredImages from '../components/TwoCentredImages.vue'
  import NextProject from '../components/NextProject.vue'
  import Footer from '../components/Footer.vue'
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {

    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
        ImageArray: [
          {
            src: require('../images/makers1.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/makers2.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/makers3.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/makers4.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/makers6.png'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
           {
            src: require('../images/makers7.png'),
            alt: "Warehouse lookbook"
          }
       ],
       ImageArrayFour: [
          {
            src: require('../images/makers8.png'),
            alt: "Warehouse lookbook"
          }
        ]
      }
    },
     methods: {
      enterPassword: function(val) {
        if (val === "Port2020") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    },

    components: {
      MainLayout, Nav, ProjectHeading, TwoCentredImages, ImageCopy, FullImage, PageHeading, NextProject, Footer, passwordProtect
    },
    mounted: function() {
      if (localStorage.getItem("allowed") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scoped>



</style>
