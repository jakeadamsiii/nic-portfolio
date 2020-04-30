<template>
  <main-layout>
    <Nav />
    <div class="container">

      <div class="row">
        <div class="col-1 hidden-sm"></div>
        <div class="col-5">
          <h1 data-aos="fade" data-aos-duration="1000">Contact.</h1>
        </div>
        <div class="col-6">
          <div class="hidden-sm link-container">
            <a data-aos="fade" data-aos-duration="1000" href="mailto:hello@nicroberts.co.uk?Subject=Let%27s%20chat" target="_blank" class="address">hello@nicroberts.co.uk</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-1 hidden-sm"></div>
        <div class="col-3">
          <p class="text" data-aos="fade" data-aos-duration="1000">I am always interested in hearing about exciting projects so please feel free to get in touch to discuss.</p>
        </div>
      </div>

    </div>
    <Footer />
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'

  export default {

    components: {
      MainLayout, Nav, Footer
    },
    mounted: function() {
      //deal with animation issue
      setTimeout(function(){ 
        
        document.querySelector('.subhead').classList.add('aos-animate');
        document.querySelector('.address').classList.add('aos-animate');
        document.querySelector('.text').classList.add('aos-animate');
        document.querySelector('h1').classList.add('aos-animate');
        document.querySelector('.connect').classList.add('aos-animate');
      
      }, 200);
    }
  }
</script>

<style scoped>


  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 55px;
    margin: 150px 0 90px;
  }


  .text {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 20px;
    margin: 0 0 85px;
  }

  .subhead {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 15px;
    margin: 0 0 40px;
  }

  .connect {
    margin: 40px 0;
  }

  .address {
    font-family: 'Roboto', sans-serif;
    font-size: 55px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: #000;
    text-decoration: none;
  }

  .svg-container svg {
    height: 33px;
    width: 33px;
    margin: 0 22px 80px 0;
  }

  .col-5 {
    margin-bottom: 50px!important;
  }

  @media only screen and (min-width: 1024px) {

    .connect {
      margin: 0 0 40px;
    }

    .address {
      font-size: 55px;
    }

    .col-5 {
      margin-bottom: 85px!important;
    }

    .link-container {
      margin: 150px 0 90px;
    }
  }


</style>
