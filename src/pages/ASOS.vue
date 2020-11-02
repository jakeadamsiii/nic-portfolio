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
      :title="'ASOS'"
      :categories="'App design — UX design — UI Design'"
      :sub="'Augmented reality app design'"
      :para="'Augmented reality Make-up App design to coinside with the launch of ASOS’s new beauty range.  Working with a 3rd party, I lead the design and enhancement of their existing technology to build a bespoke experience for ASOS.'"
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
      :image="require('../images/asos-eyes.jpg')"
      :head="'The Approach'"
      :text="'Starting completely from scratch from the user journey, wireframes and finally the applied UI, ensuring a clean and simple experience for the user.'"
    />

    <PageHeading 
      :sub="'Simplifying the UI design, creating a well designed and easy to use interface'"
      :para="'Icons were very important in this project, being that there had to be around 30, each had to remain clear at small sizes and feel ASOS branded.  The focus of the UI had to be the camera element, so although important the menu needed to remain understated and easy to use.'"
      :bg="'#F7F6F3'"
    />

    <FullImage 
      :images="imageArrayTwo"
      :bg="'#D5D1CD'"
    />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/asos-purchase.png')"
      :head="'Saved and pre-loaded looks'"
      :text="'To enhance the shopping experience of the app, both curated content and the ability to save user generated content had to be integrated into the experience.  Pre-loaded looks and saved looks really enhance the experience to encourage users to return and always feel there is fresh content.'"
      :headTwo="'Scan products'"
      :textTwo="'Functionality that allowed users to scan the barcode of beauty products meant the app could be integrated into the customers everyday when it came to selecting beauty products.  Users were able to try on multiple products and purchase at the tap of a button.'"
    />

   <NextProject
      :title="'Sheep Inc'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/sheepinc'"
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
            src: require('../images/asos-drop-down.jpg'),
            alt: "ASOS drop down"
          },
          {
            src: require('../images/asos-firstscreen.jpg'),
            alt: "ASOS first screen"
          },
          {
            src: require('../images/asos-eyes.jpg'),
            alt: "ASOS eyes"
          },
          {
            src: require('../images/asos-application.jpg'),
            alt: "ASOS application"
          },
          {
            src: require('../images/asos-colour.jpg'),
            alt: "ASOS colour"
          },
          {
            src: require('../images/asos-overlay.jpg'),
            alt: "ASOS overlay"
          }
        ],  
        imageArrayTwo: [
          {
            src: require('../images/asos-drop-down.jpg'),
            alt: "ASOS drop down"
          },
          {
            src: require('../images/asos-complete.jpg'),
            alt: "ASOS complete looks"
          },
          {
            src: require('../images/asos-saved.jpg'),
            alt: "ASOS saved looks"
          },
          {
            src: require('../images/asos-look1.jpg'),
            alt: "ASOS look 1"
          },
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
      MainLayout, Nav, ProjectHeading, ImageCopy, FullImage, PageHeading, NextProject, Footer, passwordProtect
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
