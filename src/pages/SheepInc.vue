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
      :title="'Sheep Inc'"
      :categories="'UX design — UI Design'"
      :sub="'Homepage redesign'"
      :para="'Homepage UI redesign and UX improvements, focusing on creating a reusable component library and improving the structure and hierarchy of the page.'"
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
      :image="require('../images/sheepinc4.png')"
      :head="'The Approach'"
      :text="'To restructure the page, giving the right amount of weighting towards telling the story of Sheep Inc and showcasing the range of product, without overwhelming the user.'"
    />

    <PageHeading 
      :sub="'Card based design system that had tailored user experiences across mobile and desktop'"
      :para="'I worked on UX improvements, subtle animation and interaction elements to reveal more information on hover, accordions and mobile carousels, tailored to reduce this content for smaller screen sizes, but given more space on larger screens.'"
      :bg="'#F7F6F3'"
    />

     <TwoCentredImages 
      :images="ImageArray3"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="false"
      :rightSmall="true"
     />

    <PageHeading 
      :sub="'Conveying the quality of the product range'"
      :para="'When introducing the range of product to the customer, it was important to show the detail of the knit, range of colours and quality.  This allowed users to understand the difference between the knits on first glance before even diving deeper to product pages.'"
      :bg="'#F7F6F3'"
    />

   <TwoCentredImages 
      :images="ImageArray2"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="true"
      :rightSmall="false"
     />

    <NextProject
      :title="'Sivvi'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/sivvi'"
    />

    <Footer />

  </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import PageHeading from '../components/PageHeading.vue'
  import ProjectHeading from '../components/ProjectHeading.vue'
  import ImageCopy from '../components/ImageCopy.vue'
  import FullImage from '../components/FullImage.vue'
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
          imageArray: [
          {
            src: require('../images/sheepinc1.jpg'),
            alt: "Sheep Inc"
          }
        ],   
          ImageArray2: [
          {
            src: require('../images/sheepinc2.png'),
            alt: "Sheep Inc"
          },
          {
            src: require('../images/sheepinc3.jpg'),
            alt: "Sheep Inc"
          }
          ],
          ImageArray3: [
          {
            src: require('../images/sheepinc6.jpg'),
            alt: "Sheep Inc"
          },
          {
            src: require('../images/sheepinc5.png'),
            alt: "Sheep Inc"
          }
          ]
      }
    },
    methods: {
      enterPassword: function(val) {
        if (val === "Farfetch") {
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
      MainLayout, PageHeading, Nav, ImageCopy, FullImage, TwoCentredImages, ProjectHeading, NextProject, Footer, passwordProtect
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
