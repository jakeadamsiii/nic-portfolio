<template>
  <div class="next-project" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container" >
      <div class="row">
        <div class="col-7 hidden-sm"></div>
        <div class="flex">
          <div class="col-2">
            <div data-aos="fade" data-aos-duration="1000" class="line"></div>
          </div>
          <div class="col-2" data-aos="fade" data-aos-duration="1000">
            <p v-if="$props.sub" class="sub">{{ $props.sub }}</p>
            <a :href="$props.link" ><h2 class="underline">{{ $props.title }}</h2></a>
          </div>
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
      link: Boolean
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
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 30px;
    margin: 0 0 20px 0;
  }

  .sub {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 15px;
    margin: 55px 0 20px 0;
  }

  .line {
    height: 3px;
    width: 90%;
    background: #000;
    margin-top: 62px;
  }

  .flex {
    display: flex;
  }

  .flex .col-2 {

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



@media only screen and (min-width: 768px) {

  .next-project {
    padding: 150px 0;
  }

  .sub {
    margin: 0 0 25px;
  }


}

@media only screen and (min-width: 1024px) {

  h2 {
    margin: 0;
    font-size:40px;
  }

  .flex {
    display: block
  }

  .line {
    margin-top: 5px;
  }

}

</style>
