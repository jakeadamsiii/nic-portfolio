<template>
  <div class="page-heading" :class="{hover: $props.hover}" >
    <div class="container" >
      <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-2">
            <h2 class="change" data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h2>
          </div>
          <div class="col-3 hidden-sm">
            <div class="line" data-aos="fade" data-aos-duration="1000"></div>
          </div>
          <div class="col-5" >
            <p data-aos="fade" data-aos-duration="1000" v-if="$props.sub" class="sub">{{ $props.sub }}</p>
            <p data-aos="fade" data-aos-duration="1000" v-if="$props.para" class="para">{{ $props.para }}</p>
            <ul data-aos="fade" data-aos-duration="1000" class="list" v-if="$props.list">
              <li class="change" v-for="item in $props.list" >
                {{item}}
              </li>
            </ul>
            <ul data-aos="fade" data-aos-duration="1000" class="list-two" v-if="$props.list && $props.listTwo">
              <li class="change" v-for="item in $props.listTwo" >
                {{item}}
              </li>
            </ul>
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
      hover: Boolean, 
      sub: String,
      para: String,
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
  }

  h2 {
    margin: 0;
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    font-size: 40px;
    font-weight: 300;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #000;
    margin-top: 30px;
  }


  .sub {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 16px;
    float: left;
    width: 100%;
    margin: 45px 0 0 ;
  }

  .para {
    font-size: 12px;
    float: right;
    width: 100%;
    margin: 30px 0 0 ;
  }

  .list, .list-two  {
    list-style: none;
    width: 100%;
  }

  .list {
    margin: 65px 0 0 ;
  }

  .list li, .list-two li  {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 16px;
  }


@media only screen and (min-width: 768px) {

  h2 {
    margin: 0 0 2rem;
    font-size: 50px;
  }

  .sub, .list {
    width: 50%;
    margin: 0;
    float: left;
  }

  .para, .list-two {
    width: 40%;
    margin: 0;
    float: right;
  }

  .change {
    color: #000;
    transition: all 1s ease;
  }

  .list, .list-two  {
    margin: 23px 0 0 0;
  }

  .page-heading {
    width: 100%;
    padding: 170px 0 100px;
  }

}

</style>
