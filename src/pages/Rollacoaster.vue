<template>
  <main-layout>
    <Nav />

    <ProjectHeading 
      :title="'Rollacoaster'"
      :categories="'Print Design - Publication design'"
      :sub="'Magazine Issue 8'"
      :para="'Magazine layout design for Rollacoaster Issue 8.  As Art Editor I created a visual language, unique to each issue, and experimented with layouts for the magazine.'"
      :bg="'#F7F6F3'"
    />

    <TwoCentredImages 
      :images="ImageArray"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :hero="true"
     />

    <ImageCopy 
      :right="false"
      :imageBg="'#D5D1CD'"
      :image="require('../images/rollacoaster3.jpg')"
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
      :sub="'Using not only digital techniques but also expeirmenting with physical techniques gave the magazine a tactile feel'"
      :para="'Each page was created using a range of physicla techniques, including collaging, painting, scanning, minipulating paper and photographing the results, before finally scanning them in and editing digitally.   I really enjoyed this project as it gave me the chance to push the boundries of what could be created, treating each page like a piece of art.'"
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
      :image="require('../images/rollacoaster8.jpg')"
      :head="'Bringing the final publication together'"
      :text="'I assisted in the comissioning of photographers and collaborators for the magazine, ensuring they were right for the issue and it all came together cohesively.  Finally I press-passed the final print run to ensure the final result was to high standard.'"
    />

   <NextProject
      :title="'Netflix'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/netflix'"
    />

    <Footer />

  </main-layout>
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

  export default {

    data: function () {
      return {
        ImageArray: [
          {
            src: require('../images/rollacoaster1.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/rollacoaster2.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/rollacoaster4.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/rollacoaster5.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
          {
            src: require('../images/rollacoaster6.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/rollacoaster7.jpg'),
            alt: "Warehouse lookbook"
          }
        ], 
      }
    },

    components: {
      MainLayout, Nav, ProjectHeading, TwoCentredImages, ImageCopy, FullImage, PageHeading, NextProject, Footer
    }
  }
</script>

<style scoped>



</style>
