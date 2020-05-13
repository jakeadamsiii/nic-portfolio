<template>
  <main-layout :class="{hover: hover}"> 
    <Nav />
    <div class="contact-page">
      <div class="container">

        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-3">
            <h1 class="title" data-aos="fade" data-aos-duration="1000">Contact</h1>
          </div>
          <div class="col-3 line-container hidden-sm">
            <div class="line" data-aos="fade" data-aos-duration="1000"></div>
          </div>
          <div class="col-4 hidden-sm">
            <div class="link-container ">
              <a data-aos="fade" data-aos-duration="1000" href="mailto:hello@nicroberts.co.uk?Subject=Let%27s%20chat" target="_blank" class="address" @mouseover="hover=true" @mouseleave="hover=false">hello@nicroberts.co.uk</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-3">
            <p class="text" data-aos="fade" data-aos-duration="1000">I am always interested in hearing about exciting projects so please feel free to get in touch to discuss.</p>
          </div>
        </div>

        <div class="row hidden-desk">
          <div class="col-10">
            <div class="link-container">
              <a data-aos="fade" data-aos-duration="1000" href="mailto:hello@nicroberts.co.uk?Subject=Let%27s%20chat" target="_blank" class="address2">hello@nicroberts.co.uk</a>
            </div>
          </div>
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
    data: function () {
      return {
        hover: false
      }
    },

    components: {
      MainLayout, Nav, Footer
    },
    mounted: function() {
      //deal with animation issue
      setTimeout(function(){ 
        
        document.querySelector('.address').classList.add('aos-animate');
        document.querySelector('.text').classList.add('aos-animate');
        document.querySelector('.line').classList.add('aos-animate');
        document.querySelector('h1').classList.add('aos-animate');
        document.querySelector('.address2').classList.add('aos-animate');

      
      }, 200);
    }
  }
</script>

<style scoped>


  .title {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    font-weight: 300;
    font-size: 50px;
    margin: 150px 0 45px;
    color: #000;
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 188px 30px 0px 0;
    background: #000;
  }

  .address2 {
    font-family: 'spectral-light', serif;
    letter-spacing: -2px;
    font-weight: 300;
    font-size: 30px;
  }

  .text {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 16px;
    margin: 0 0 80px;
    color: #000;
    transition: all 1s ease;
  }

  .address {
    font-family: 'spectral-light-italic', serif;
    letter-spacing: -2px;
    font-weight: 300;
    font-size: 50px;
    color: #000;
    text-decoration: none;
  }

  .svg-container svg {
    height: 33px;
    width: 33px;
    margin: 0 22px 80px 0;
  }

  .hidden {
    display: none;
  }

  .link-container {
     margin: 0 0 110px;
  }

  .contact-page {
    width: 100%;
    height:100%;
  }


  @media only screen and (max-width: 340px) {
    .address2 {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 768px) {
    .hidden {
      display: block;
    }

    .title {
      font-size: 60px;
      margin: 150px 0 120px;
    }
  }

  @media only screen and (min-width: 1024px) {

    .link-container {
      margin: 165px 0 0;
    }

    .hidden-desk {
      display: none;
    }

    .text {
      margin: 0 0 85px;
    }

    .address {
      font-size: 35px;
    }
  }

</style>

<style>

  .main,
  html {
    background: #F7F6F3;
    transition: background 1s ease;
  }

  .main.hover {
    background: #D5D1CD;
  }
</style>