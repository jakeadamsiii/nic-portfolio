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
      :title="'Warehouse'"
      :categories="'UX design — UI Design'"
      :sub="'Lookbook feature'"
      :para="'Online shoppable lookbook design for Warehouse AW14 Collection. The desktop design offers an easily navigated lookbook that once interacted with, splits into detailed product imagery with the ability to add products directly to the bag.'"
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
      :image="require('../images/warehouse-lookbook-mob.jpg')"
      :head="'The Approach'"
      :text="'To create an easy to use, yet beautifully designed lookbook for customers to easily view and shop the latest collection from Warehouse.'"
    />

    <PageHeading 
      :sub="'Introducing a new way to make imagery shoppable'"
      :para="'Working with limited imagery, I came up with a solution that gave a originally static lookbook a dynamic and interactive layer.  Images could be clicked into, diving the screen into crops of the products, making them easily shoppable, even when limited with product shots.'"
      :bg="'#F7F6F3'"
    />

    <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/warehouse-lookbook-mobiles.png')"
      :head="'Simplified mobile journey for a more shoppable experience'"
      :text="'A simplified experience with swipeable imagery and shoppable overlay gave customers a quicker route to shop imagery on a smaller screen.'"
    />

   <NextProject
      :title="'Rollacoaster'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/rollacoaster'"
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
  import TwoCentredImages from '../components/TwoCentredImages.vue'
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
            src: require('../images/warehouse-lookbook.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/warehouse-lookbook-2.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/warehouse-lookbook-3.jpg'),
            alt: "Warehouse lookbook"
          },
        ]   
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
      MainLayout, Nav, ProjectHeading, ImageCopy, FullImage, PageHeading, TwoCentredImages, NextProject, Footer, passwordProtect
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
