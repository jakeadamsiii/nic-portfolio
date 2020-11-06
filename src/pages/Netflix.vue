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
      :title="'Netflix'"
      :categories="'UX design — UI Design'"
      :sub="'Stranger Things x Topshop'"
      :para="'Responsive online hub design for a brand partnership campaign with Topshop and Netflix for the launch of Stranger Things 2. As lead designer, I worked on initial concept through to final delivery for the online presence to accompany the in-store event experience.'"
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
      :image="require('../images/Netflix5.jpg')"
      :head="'The Approach'"
      :text="'I wanted to create an immersive digital experience, reflective of that in the show, to enhance the shopping journey for the exclusive Stranger Things collection.'"
    />

    <PageHeading 
      :sub="'Recreating the Stranger Things experience in the digital space'"
      :para="'Users could toggle between an ‘upside down’ world where the page content and imagery would flip upside down and overlay a particle effect to mimic the atmospheric iconic scenes from the series. Using a toggle meant that on land, it did not disrupt the initial purchasing journey, but instead added a fun layer to the page should the user interact.'"
      :bg="'#F7F6F3'"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

   <NextProject
      :title="'1883 Magazine'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/1883'"
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
            src: require('../images/Netflix1.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/Netflix2.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/Netflix3.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/Netflix4.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/Netflix6.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/Netflix7.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
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
      MainLayout, Nav, ProjectHeading, TwoCentredImages, ImageCopy, FullImage, PageHeading, NextProject, Footer, passwordProtect
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
