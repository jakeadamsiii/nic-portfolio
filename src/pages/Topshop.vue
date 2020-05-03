<template>
  <main-layout>
    <Nav />

    <ProjectHeading 
      :title="'Topshop.'"
      :categories="'UI DESIGN | UX DESIGN | VISUAL IDENTITY'"
      :sub="'Website redesign.'"
      :para="'Responsive site redesign of Topshop.com, focusing on improving the experience of the shopping journey including product listing pages, product description pages, bag drawer and menus.'"
      :bg="'#fff'"
    />

    <FullImage 
      :images="imageArray"
      :bg="'#C8C1BB'"
      :hero="true"
    />

    <ImageCopy 
      :right="false"
      :imageBg="'#E2DCD4'"
      :image="require('../images/topshop-image.jpg')"
      :head="'The Approach'"
      :text="'Mobile first approach to all pages, simplifying and cleaning up pages.  Introducing intuitive swipes and expanding accordions, but focusing on immersive imagery and dynamic pages.'"
    />

    <TwoCentredImages 
      :images="PLPImageArray"
      :bg="'#C8C1BB'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="false"
      :rightSmall="true"
     />

    <PageHeading 
      :sub="'Dynamic image focused product listing pages.'"
      :para="'Image is key for topshop.com, so working with the Art Director we established a fresher feeling page by introducing more types of shots to the product photography.  Creating different experiences across devices allows a truly tailored experience for the customer.'"
      :bg="'#fff'"
    />

    <TwoCentredImages 
      :images="PDPImageArray"
      :bg="'#E2DCD4'"
      :bottomLeft="false"
      :bottomRight="false"
      :leftSmall="true"
      :rightSmall="false"
     />

   <PageHeading 
      :sub="'Clean and simplified product description pages.'"
      :para="'Working out where best to hold content across the site I was able to simplify the product listing pages, making them purely about highlighting the product in the best possible way.'"
      :bg="'#fff'"
    />

    <ImageCopy 
      :right="true"
      :alt="true"
      :imageBg="'#C8C1BB'"
      :image="require('../images/topshop-menu-mob.png')"
      :head="'Improved site navigation and filtering.'"
      :text="'Cleaning up the navigation and filtering elements made a significant difference to the page.  Allowing users to hide and show menus across PLPs so filtering doesn’t interfere with their shopping experience.'"
    />

   <FullImage 
      :images="MenuImageArray"
      :bg="'#E2DCD4'"
    />

    <ImageCopy 
      :right="false"
      :alt="true"
      :imageBg="'#C8C1BB'"
      :image="require('../images/topshop-editorial.png')"
      :head="'Shoppable content and editorial.'"
      :text="'Finding an integrated and intuitive way to make editorial content stoppable was a key objective of the redesign.  Overlaying functionality to beautifully shot editorial gave a rich and truly integrated experience.'"
    />

   <FullImage 
      :images="EditorialImageArray"
      :bg="'#E2DCD4'"
    />

    <NextProject
      :title="'ASOS.'"
      :categories="'UI DESIGN | UX DESIGN | VISUAL IDENTITY'"
      :sub="'Next project.'"
      :bg="'#fff'"
      :link="'/asos'"
    />

    <Footer />

  </main-layout>
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

  export default {

    data: function () {
      return {
          imageArray: [
          {
            src: require('../images/topshop-hero2.jpg'),
            alt: "Topshop Homepage"
          },
        ],  
          PLPImageArray: [
            {
              src: require('../images/topshop-plp-desktop.jpg'),
              alt: "ASOS drop down"
            },
            {
              src: require('../images/topshop-plp-mob.png'),
              alt: "ASOS drop down"
            }
          ],
          PDPImageArray: [
            {
              src: require('../images/topshop-pdp-mob.png'),
              alt: "Topshop PDP Mobile"
            },
            {
              src: require('../images/topshop-pdp-dekstop.jpg'),
              alt: "Topshop PDP Desktop"
            }
          ],
            MenuImageArray: [
            {
              src: require('../images/topshop-menu.jpg'),
              alt: "Topshop Filter"
            }
          ],
          EditorialImageArray: [
            {
              src: require('../images/topshop-editorial-desktop.jpg'),
              alt: "Topshop Filter"
            }
          ]
      }
    },

    components: {
      MainLayout, PageHeading, Nav, ImageCopy, FullImage, TwoCentredImages, ProjectHeading, NextProject, Footer
    }
  }
</script>

<style scoped>



</style>
