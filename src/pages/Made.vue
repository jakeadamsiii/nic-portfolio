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
      :title="'Made.com'"
      :categories="'Product design - UX design — UI Design'"
      :sub="'Wishlist functionality'"
      :para="'Wish List concept for Made.com to improve their on-site functionality.  As this functionality already existed in the app, I was tasked with extending this to the mobile web experience.'"
      :bg="'#F7F6F3'"
    />

    <FullImage 
      :images="imageArray"
      :bg="'#D5D1CD'"
      :hero="true"
    />

    <ImageCopy 
      :right="false"
      :imageBg="'#D5D1CD'"
      :image="require('../images/made-wishlist5.png')"
      :head="'The Approach'"
      :text="'Taking elements and functionality I knew already worked within the app, I created a robust solution for the site that incorporated a basic wishlist but with enhanced features.'"
    />

    <PageHeading 
      :sub="'I created an enhanced experience for the website that made creating a wishlist useful and fun'"
      :para="'Allowing users to save products to an area which they could return to at a later date, easily adding from both PDP and PLP level, but also adding functionality so these products could be arranged and sorted into groups and easily moved around, much like a pin-board.'"
      :bg="'#F7F6F3'"
    />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/made-wishlist6.png')"
      :head="'Exploring augmented reality'"
      :text="'Giving users the ability to place products into their rooms using their phone camera. The mobile web application meant that users were not forced to download an app to easily interact with products on Made.com, with the goal of driving conversion through increased confidence and knowledge that the product would be right for them.'"
    />

    <FullImage 
      :images="imageArrayTwo"
      :bg="'#D5D1CD'"
    />

   <NextProject
      :title="'Harrods'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/harrods'"
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
  import NextProject from '../components/NextProject.vue'
  import Footer from '../components/Footer.vue'
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {

    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
        imageArray: [
          {
            src: require('../images/made-wishlist1.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/made-wishlist2.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/made-wishlist3.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/made-wishlist4.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        imageArrayTwo: [
          {
            src: require('../images/made-wishlist7.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/made-wishlist8.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/made-wishlist9.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/made-wishlist10.jpg'),
            alt: "Warehouse lookbook"
          }
        ] 
      }
    },
    methods: {
      enterPassword: function(val) {
        if (val === "N0Acce55") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed3", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    },

    components: {
      MainLayout, Nav, ProjectHeading, ImageCopy, FullImage, PageHeading, NextProject, Footer, passwordProtect
    },
    mounted: function() {
      if (localStorage.getItem("allowed3") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scoped>



</style>
