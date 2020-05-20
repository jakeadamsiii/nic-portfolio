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
      :title="'1883 Magazine'"
      :categories="'Print Design - Publication design'"
      :sub="'Magazine editorial layout'"
      :para="'Editorial layout design for issue 9 of the magazine.  The editorial spanned 8 pages of the magazine and I was tasked with designing the layout whilst on placement at the publication.'"
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
      :image="require('../images/18832.jpg')"
      :head="'The Approach'"
      :text="`1883's design style is very experiemental, so I approached this layout with this in mind, but also to showcase the imagery as best as possible.`"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

    <PageHeading 
      :sub="'Playing with white space and image sizes to create a dynamic layout'"
      :para="'To ensure I incorporated all imagery within the editorial to the five double page spreads, including the opener and credits, I decided to use a layout with both full bleed imagery and white space.  This also allowed credits to not interact with imagery and gave the editorial a nice flow.'"
      :bg="'#F7F6F3'"
    />

    <FullImage 
      :images="ImageArrayThree"
      :bg="'#D5D1CD'"
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
            src: require('../images/18831.jpg'),
            alt: "Warehouse lookbook"
          },
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/18833.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/18834.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
          {
            src: require('../images/18835.jpg'),
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
