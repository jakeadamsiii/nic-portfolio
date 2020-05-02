<template>
  <main-layout>
    <Nav />
    <div class="container" :class="{hover: hover}">

      <div class="row">
        <div class="col-1 hidden-sm"></div>
        <div class="col-2">
          <h1 class="title" data-aos="fade" data-aos-duration="1000">Contact.</h1>
        </div>
        <div class="col-1 hidden-sm"></div>
        <div class="col-2 line-container hidden-sm">
          <div class="line" data-aos="fade" data-aos-duration="1000"></div>
        </div>
        <div class="col-5 hidden-sm">
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
          <div class="line2" data-aos="fade" data-aos-duration="1000"></div>
          <div class="link-container">
            <a data-aos="fade" data-aos-duration="1000" href="mailto:hello@nicroberts.co.uk?Subject=Let%27s%20chat" target="_blank" class="address2">hello@nicroberts.co.uk</a>
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
        document.querySelector('.line2').classList.add('aos-animate');

      
      }, 200);
    }
  }
</script>

<style scoped>


  .title {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 40px;
    margin: 150px 0 45px;
    color: #000;
    transition: all 1s ease;
  }

  .line {
    width: 90%;
    height: 3px;
    margin: 175px 30px 20px 0;
    background: #000;
    transition: all 1s ease;
  }

  .line2 {
    width: 50px;
    height: 3px;
    background: #000;
    margin: 0 0 80px;
  }

  .address2 {
    font-family: 'Roboto-regular', sans-serif;
    font-size: 30px;
  }


  .text {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 20px;
    margin: 0 0 80px;
    color: #000;
    transition: all 1s ease;
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
    font-size: 45px;
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

  .col-3 {
    margin-right: 0!important;
  }

  .line-container {
    margin-left: 0!important;
  }

  .hidden {
    display: none;
  }

  .link-container {
     margin: 0 0 110px;
  }

  .container {
    background: #fff;
    transition: background 1s ease;
  }

  .hover.container {
    background: #C8C1BB;
  }

  .hover .line {
    background: #FFDBC5;
  }

  .hover .title,
  .hover .text {
    color: #FFDBC5;
  }

  @media only screen and (max-width: 340px) {
    .address2 {
      font-size: 25px;
    }
  }

  @media only screen and (min-width: 768px) {
    .hidden {
      display: block;
    }

    .title {
      font-size: 45px;
      margin: 150px 0 60px;
    }
  }

  @media only screen and (min-width: 1024px) {

    .connect {
      margin: 0 0 40px;
    }

    .col-5 {
      margin-bottom: 85px!important;
    }

    .link-container {
      margin: 150px 0 0;
    }

    .col-3 {
      width: 23%;
    }

    .hidden-desk {
      display: none;
    }

    .text {
      margin: 0 0 200px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .address, .title {
      font-size: 55px;
    }

    .line{
          margin: 185px 30px 20px 0;
    }
  }

</style>
