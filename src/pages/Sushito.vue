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
      :categories="'UX Design - UI Design'"
      :sub="'Magazine Issue 8'"
      :para="'Magazine layout design for Rollacoaster Issue 8.  As Art Editor I created a visual language, unique to each issue, and experimented with layouts for the magazine.'"
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
      :text="`To give the magazine a 'zine' feel I experimented with typography, materials and techniques to create interesting layouts for the magazine.`"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

    <PageHeading 
      :sub="'Using not only digital techniques but also experimenting with physical techniques gave the magazine a tactile feel'"
      :para="'Each page was created using a range of physical techniques, including collaging, painting, scanning, manipulating paper and photographing the results, before finally scanning them in and editing digitally. I really enjoyed this project as it gave me the chance to push the boundaries of what could be created, treating each page like a piece of art.'"
      :bg="'#F7F6F3'"
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
      :head="'Bringing the final publication together'"
      :text="'I assisted in the commissioning of photographers and collaborators for the magazine, ensuring they were right for the issue and it all came together cohesively.  Finally I press-passed the final print run to ensure the final result was to high standard.'"
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
