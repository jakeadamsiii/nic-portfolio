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
      :title="'Selfridges'"
      :categories="'UX Design - UI Design'"
      :sub="'Daniel Arsham Corner Shop'"
      :para="'Shoppable online destination for Daniel Arsham for the Selfridges Corner Shop, a boutique in-store space for new product launches and brand collaborations.'"
      :bg="'#F7F6F3'"
    />
    
   <TwoCentredImages 
      :images="ImageArray"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="false"
      :rightSmall="true"
     />

    <ImageCopy 
      :right="false"
      :imageBg="'#D5D1CD'"
      :image="require('../images/selfridges3.jpg')"
      :head="'The Approach'"
      :text="`To create a digital experience for the in-store boutique that allowed users to digitally navigate through the house of Daniel Arsham, including in-store blueprints, artworks and products.`"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="true"
      :rightSmall="false"
     />

    <PageHeading 
      :sub="'I created a dynamic layout that not only incorporated Daniel Arsham’s strong brand identity, but also showcased the full in-store experience.'"
      :para="'Using a blueprint from the store experience, I was able to break the page up into the rooms, making it easy for the user to navigate the page, whilst also being able to experience the boutique without actually being there.  This made the page not only shoppable but also showcased the artists unique sculptures.'"
      :bg="'#F7F6F3'"
    />

   <TwoCentredImages 
      :images="ImageArrayThree"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="false"
      :rightSmall="true"
     />

   <NextProject
      :title="'Makers 50'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/makers50'"
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
            src: require('../images/selfridges1.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/selfridges2.png'),
            alt: "Warehouse lookbook"
          },
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/selfridges4.png'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/selfridges5.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
           {
            src: require('../images/selfridges6.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/selfridges7.png'),
            alt: "Warehouse lookbook"
          }
        ],
      }
    },
     methods: {
      enterPassword: function(val) {
        if (val === "NicPortfolio") {
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
