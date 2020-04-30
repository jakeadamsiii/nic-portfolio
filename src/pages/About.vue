<template>
  <main-layout>
    <Nav />
    <AboutHeading 
      :title="'About.'"
      :sub="'Hey, Im Nic, a senior designer with over 8 years experience designing for ecommerce brands, publication houses and design agencies.'"
      :bg="'#fff'"
    />

    <PageHeading 
      :sub="'I have a diverse range of experience in a number of different disciplinaries including UI and UX design, print and publication design and art direction.'"
      :para="'With my experience of designing in house for large fashion and lifestyle brands and my knowledge of ecommerce as a whole, I am greatly successful at designing effective solutions that have proved their value whilst taking into account the business needs and priorities.  I have a diverse background of experience and always excited by new and interesting projects.'"
      :bg="'#fff'"
    />

    <PageHeading 
      :title="'Skills.'"
      :bg="'#fff'"
      :list="['UI / UX', 'Prototyping', 'Art Direction', 'Visual Design', 'Mobile and Web Design', 'HTML / CSS']"
      :listTwo="['Product Design', 'Video Editing / Animation', 'Iconography', 'Print / Packaging Design', 'Branding', 'Typography']"
    />

    <ScrollList 
      :title="'Clients.'"
      :bg="'#fff'"
      :brandList="['Rollacoaster', 'Harrods', 'Warehouse', 'Made.com', 'Netflix', 'POP Magazine', 'ASOS', 'Selfridges', 'Topshop', 'Topman', 'Velour Magazine', 'Ivy Park', '1883 Magazine', 'Rollacoaster', 'Harrods', 'Warehouse', 'Made.com', 'Netflix', 'POP Magazine', 'ASOS', 'Selfridges', 'Topshop', 'Topman', 'Velour Magazine', 'Ivy Park', '1883 Magazine']"
    />

    <Footer />

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import AboutHeading from '../components/AboutHeading.vue'
  import PageHeading from '../components/PageHeading.vue'
  import ScrollList from '../components/ScrollList.vue'
  import Footer from '../components/Footer.vue'


  export default {
    data: function () {
      return {
        
      }
    },
    components: {
      MainLayout, AboutHeading, PageHeading, Nav, ScrollList, Footer
    }
  }
</script>

<style scoped>



</style>