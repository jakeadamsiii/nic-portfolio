<template>


  <div class="page-heading" v-bind:style="{ backgroundColor:  $props.bg }">
      <div class="container" >
        <div class="row">
            <div class="col-1 hidden-sm"></div>
            <div class="col-4">
              <h1 data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h1>
            </div>
            <div class="col-2 hidden-sm">
              <div data-aos="fade" data-aos-duration="1000" class="line"></div>
            </div>
            <div class="col-4" >
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.sub" class="sub-header">{{ $props.sub }}</p>
              <p data-aos="fade" data-aos-duration="1000" v-if="$props.para" class="para">{{ $props.para }}</p>
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
    padding: 170px 0 100px;
    position: relative;
    z-index: 1;
  }

  .sub-header {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-size: 25px;
    float: left;
    width: 100%;
    margin: 60px 0 0 ;
  }

  .line {
    height: 3px;
    width: 100%;
    background: #000;
    margin-top: 30px;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-size: 40px;
    margin: 0;
  }

  .para {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 12px;
    display: inline-block;
    margin: 40px 0 0;
  }

  .underline {
    text-decoration: underline;
  }

  .link-container {
    margin: 40px 0 0;
  }


@media only screen and (min-width: 768px) {

  .page-heading {
    padding: 150px 0 150px;
  }

  .sub-header {
    font-size: 35px;
    margin: 10px 0 0 0;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 50px;
  }

  .para {
    margin: 20px 0 0;
  }

  .error {
    font-size: 20px;
  }
  
  .link-container {
    margin: 20px 0 0;
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
      height: 3px;
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

</style>
