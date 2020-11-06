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
      :title="'Harrods'"
      :categories="'UX design — UI Design'"
      :sub="'Brand Activation'"
      :para="'Following a full side redesign, where I worked alongside a branding agency to redefine the Harrods.com online experience, I was tasked with translating these concepts to commercially driving pages for brands such as Saint Laurent, Gucci and Burberry. '"
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
      :image="require('../images/harrods5.jpg')"
      :head="'The Approach'"
      :text="'To seamlessly integrate brands into the new identity of harrods.com whilst maintaining both brand identities, creating an elevated experience similar to that of the store.'"
    />

    <PageHeading 
      :sub="'Identifying the approach for each brand.'"
      :para="'Treating each brand individually, I visited the store and identified textures, imagery and colours to imitate the store boutique experience and maintain Harrods unique luxury store feel.'"
      :bg="'#F7F6F3'"
    />

   <TwoCentredImages 
      :images="ImageArrayTwo"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="false"
      :rightSmall="true"
     />

    <PageHeading 
      :sub="'Integrating content throughout the site across product pages, brand pages and homepage'"
      :para="'The approach was to Integrate content throughout the shopping experience, rather than holding editorial and brand stories in a completely separate area.  This meant creating placements throughout the site which felt integrated and relevant, allowing users to have a rich shopping experience.'"
      :bg="'#F7F6F3'"
    />

    <TwoCentredImages 
      :images="ImageArrayThree"
      :bg="'#D5D1CD'"
      :bottomLeft="false"
      :bottomRight="false"
     />

    <FullImage 
      :images="ImageArrayFour"
      :bg="'#D5D1CD'"
      :hero="false"
    />

   <NextProject
      :title="'Warehouse'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/warehouse'"
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
            src: require('../images/harrods1.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods2.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods3.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods4.jpg'),
            alt: "Warehouse lookbook"
          }
        ],  
        ImageArrayTwo: [
          {
            src: require('../images/harrods6.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/harrods7.png'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayThree: [
          {
            src: require('../images/harrods8.jpg'),
            alt: "Warehouse lookbook"
          },
         {
            src: require('../images/harrods9.jpg'),
            alt: "Warehouse lookbook"
          }
        ],
        ImageArrayFour: [
               {
            src: require('../images/harrods10.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods11.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods12.jpg'),
            alt: "Warehouse lookbook"
          },
          {
            src: require('../images/harrods13.jpg'),
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
