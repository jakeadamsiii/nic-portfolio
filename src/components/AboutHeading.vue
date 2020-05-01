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
            <p data-aos="fade" data-aos-duration="1000" v-if="$props.sub" class="sub">{{ $props.sub }}</p>
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
      list: Array,
      listTwo: Array
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
    padding: 80px 0 100px;
    margin: 90px 0 0 0;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 55px;
    margin: 0;
  }


  .sub {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 35px;
    float: left;
    width: 100%;
    margin: 45px 0 0 ;
  }

  .list, .list-two  {
    list-style: none;
    width: 100%;
  }

  .list {
    margin: 65px 0 0 ;
  }

  .list li, .list-two li  {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 20px;
  }


@media only screen and (min-width: 768px) {

  .page-heading {
    padding: 150px 0 150px;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 55px;
  }

  .list {
    width: 50%;
    margin: 0;
    float: left;
  }

  .list-two {
    width: 40%;
    margin: 0;
    float: right;
  }

  .line {
    height: 3px;
    width: 90%;
    background: #000;
    margin-top: 50px;
  }

}

</style>
