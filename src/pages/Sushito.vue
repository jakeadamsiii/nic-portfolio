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
      :title="'Sushito'"
      :categories="'UX Design - UI Design - Branding'"
      :sub="'Branding Concept'"
      :para="'Illustrated branding and online menu build-your-own product concept for an sushi burrito restaurant.'"
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
      :image="require('../images/sushito5.jpg')"
      :head="'The Approach'"
      :text="``"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />


   <TwoCentredImages 
      :images="ImageArrayThree"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/sushito10.jpg')"
      :head="''"
      :text="''"
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
            src: require('../images/sushito1.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/sushito2.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/sushito3.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/sushito4.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/sushito6.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/sushito7.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
          {
            src: require('../images/sushito8.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/sushito9.jpg'),
            alt: "Warehouse lookbook"
          }
        ], 
      }
    },
    methods: {
      enterPassword: function(val) {
        if (val === "Folio2020") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed4", true);
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
      if (localStorage.getItem("allowed4") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scoped>



</style>
