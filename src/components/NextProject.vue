<template>
  <div class="next-project" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container" >
      <div class="row">
        <div class="col-5 hidden-sm"></div>

          <div class="col-3 mob">
            <div data-aos="fade" data-aos-duration="1000" class="line"></div>
          </div>
          <div class="col-3 mob" data-aos="fade" data-aos-duration="1000">
            <p v-if="$props.sub" class="sub">{{ $props.sub }}</p>
            <a :href="$props.link" ><h2 class="underline">{{ $props.title }}</h2></a>
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
      bg: String,
      link: String
    },

    methods: {

    }
  }
</script>

<style scoped>

  .next-project {
    width: 100%;
    padding: 55px 0 100px;
  }

  h2 {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    font-size: 30px;
    font-weight: 300;
    margin: 0 0 20px 0;
  }

  .sub {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 55px 0 20px 0;
    text-transform: uppercase;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #000;
    margin-top: 62px;
  }


  .underline {
    text-decoration: underline;
  }

@media only screen and (max-width: 768px) {

    .mob{
     width: 38%;
     float:left;
  }
}

@media only screen and (min-width: 768px) {

  .next-project {
    padding: 150px 0 220px;
  }

  .sub {
    margin: 0 0 25px;
    font-size: 14px;
  }

  .line {
    margin-top: 5px;
  }

  .underline {
    text-decoration: none;
  }
  
.underline {
      display: inline;
      position: relative;
      overflow: hidden;
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

@media only screen and (min-width: 1024px) {

  h2 {
    margin: 0;
    font-size: 50px;
  }

  .line {
    margin-top: 5px;
  }

}

</style>
