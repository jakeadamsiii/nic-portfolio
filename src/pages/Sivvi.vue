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
      :title="'Sivvi'"
      :categories="'UX design — App Design - Identity'"
      :sub="'App redesign'"
      :para="'Full app redesign for Sivvi, a fashion retailer based in the UAE, Saudi Arabia and Egypt, focused on introducing a new bolder brand identity and improved user experience across all pages including product, checkout and editorial.'"
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
      :image="require('../images/sivvi-mob5.png')"
      :head="'The Approach'"
      :text="'To introduce a more elevated and strong brand identity to complement the new product photography, giving a bolder, fresher look to the app.'"
    />

    <PageHeading 
      :sub="'Improving user experience across the entire app journey.'"
      :para="'Attention was given to improving and enhancing features across the app including, reducing steps for users to add products to bag, reducing clutter on product pages and introducing wishlist functionality.'"
      :bg="'#F7F6F3'"
    />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/sivvi-mob6.png')"
      :head="'Simplifying and enhancing product pages'"
      :text="'Making imagery as large as possible with unnecessary information hidden on initial land allowed users to swipe through product imagery and quickly add to bag without having to scroll.   Size and colour information is clearly displayed in a compact space with product information available lower down should the user wish to read more.'"
    />

    <FullImage 
      :images="ImageArray2"
      :bg="'#D5D1CD'"
    />

    <ImageCopy 
      :right="false"
      :alt="true"
      :imageBg="'#D5D1CD'"
      :image="require('../images/sivvi-mob11.png')"
      :head="'Improved menu and site navigation'"
      :text="'Restructuring the full navigation across site made for a much cleared journey for customers.  Separating product categories initially by gender gave a clearer structure to the navigation and allowed users to find specific product categories much quicker.'"
    />

    <FullImage 
      :images="ImageArray3"
      :bg="'#D5D1CD'"
    />

    <NextProject
      :title="'Made.com'"
      :sub="'Next project'"
      :bg="'#F7F6F3'"
      :link="'/made'"
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
            src: require('../images/sivvi-mob1.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob2.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob3.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob4.jpg'),
            alt: "Sivvi"
          }
        ],  
          ImageArray2: [
               {
            src: require('../images/sivvi-mob7.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob8.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob9.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob10.jpg'),
            alt: "Sivvi"
          }
        ],  
          ImageArray3: [
          {
            src: require('../images/sivvi-mob12.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob13.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob14.jpg'),
            alt: "Sivvi"
          },
          {
            src: require('../images/sivvi-mob15.jpg'),
            alt: "Sivvi"
          }
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
      MainLayout, PageHeading, Nav, ImageCopy, FullImage, TwoCentredImages, ProjectHeading, NextProject, Footer, passwordProtect
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
