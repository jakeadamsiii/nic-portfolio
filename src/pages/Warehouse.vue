<template>
  <main-layout>
    <Nav />

    <ProjectHeading 
      :title="'Warehouse'"
      :categories="'UX design — UI Design'"
      :sub="'Lookbook feature'"
      :para="'Online shoppable lookbook design for Warehouse AW14 Collection. The desktop design offers an easily navigated lookbook that once interacted with, splits into detailed product imagery with the ability to add products directly to bag.'"
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
      :text="'To create a easy to use, yet beautifully designed lookbook for customers to easily view and shop the latest collection from Warehouse.'"
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
      :text="'A simplified experience with swipable imagery and shoppable overlay gave customers a quicker route to shop imagery on a smaller screen.'"
    />

   <NextProject
      :title="'Rollacoaster'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/rollacoaster'"
    />

    <Footer />

  </main-layout>
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

  export default {

    data: function () {
      return {
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

    components: {
      MainLayout, Nav, ProjectHeading, ImageCopy, FullImage, PageHeading, TwoCentredImages, NextProject, Footer
    }
  }
</script>

<style scoped>



</style>
