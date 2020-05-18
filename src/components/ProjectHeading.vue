<template>


  <div class="page-heading" v-bind:style="{ backgroundColor:  $props.bg }">
      <div class="container" >
        <div class="row">
            <div class="col-1 hidden-sm"></div>
            <div class="col-3">
              <h1 data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h1>
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.categories" class="categories">{{ $props.categories }}</p>
            </div>
            <div class="col-4 hidden-sm">
              <div data-aos="fade" data-aos-duration="1000" class="line"></div>
            </div>
            <div class="col-3" >
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.sub" class="sub-header">{{ $props.sub }}</p>
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.para" class="para">{{ $props.para }}</p>
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.categories" class="categories2">{{ $props.categories }}</p>
              <div class="link-container" v-if="$props.error"><a class="error underline" href="/">Return Home</a></div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>

  export default {

    data: function () {
      return {
      }
    },
    props: {
      title: String,
      sub: String,
      para: String,
      error: Boolean,
      categories: String,
      bg: String,
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>


   .page-heading {
    width: 100%;
    padding: 145px 0 100px;
    position: relative;
    z-index: 1;
  }

  .sub-header {
    font-family: 'Roboto-medium', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 16px;
    float: left;
    width: 100%;
    margin: 100px 0 0;
    text-transform: uppercase;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #000;
    margin-top: 35px;
  }

  .categories {
    font-family: 'Roboto-medium', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 14px;
    text-transform: uppercase;
    display: none;
  }

  .categories2 {
    font-family: 'Roboto-medium', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 14px;
    text-transform: uppercase;
    margin: 60px 0 0 0;
  }

  h1 {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    line-height: 60px;
    font-size: 50px;
    position: relative;
    z-index: 2;
    font-weight: 300;
    margin: 0;
  }

  .para, .error {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 14px;
    display: inline-block;
    margin: 40px 0 0;
  }

  .error {
    margin: 20px 0 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .underline {
    text-decoration: underline;
  }



@media only screen and (min-width: 768px) {

  .page-heading {
    padding: 150px 0 150px;
  }

  .sub-header {
    font-size: 16px;
    margin: 28px 0 0 0;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 50px;
  }

  .para {
    margin: 140px 0 0;
    font-size: 14px;
  }

  .error {
    font-size: 14px;
  }
  
  .link-container {
    margin: 20px 0 150px;
  }

  .categories {
    font-size: 14px;
    margin: 105px 0 0;
    display: block;
  }

  .categories2 {
    display: none;
  }


.underline {
      display: inline;
      position: relative;
      overflow: hidden;
      text-decoration: none;
    }
    .underline:after {
      content: "";
      position: absolute;
      z-index: -1;
      right: 0;
      width: 0;
      bottom: -5px;
      background: #000;
      height: 2px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    .underline:hover:after,
    .underline:focus:after,
    .underline:active:after {
      left: 0;
      right: auto;
      width: 100%;
    }


}

 @media only screen and (min-width: 1400px) {
   h1 {
    font-size: 60px;
   }

   .line {
     margin-top: 40px;
   }

  .sub-header {
    margin: 33px 0 0 0;
  }
 }

</style>
