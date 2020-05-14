<template>
  <div class="page-heading" :class="{hover: $props.hover}" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container" >
      <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-2">
            <h1 class="change" data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h1>
          </div>
          <div class="col-2" >
            <p data-aos="fade" data-aos-duration="1000" v-if="$props.sub" class="sub">{{ $props.sub }}</p>
            <ul data-aos="fade" data-aos-duration="1000" class="list" v-if="$props.list">
              <li class="change" v-for="item in $props.list" >
                {{item}}
              </li>
            </ul>
          </div>
          <div class="col-1 hidden-sm"></div>
          <div class="col-2">
            <p data-aos="fade" data-aos-duration="1000" v-if="$props.para" class="para">{{ $props.para }}</p>

            <ul data-aos="fade" data-aos-duration="1000" class="list-two" v-if="$props.list && $props.listTwo">
              <li class="change" v-for="item in $props.listTwo" >
                {{item}}
              </li>
            </ul>
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
      hover: Boolean, 
      sub: String,
      para: String,
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
    padding: 170px 0 100px;
    margin-top: 2px;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 40px;
    margin: 0;
  }


  .sub {
    font-family: 'Roboto-medium', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
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
    font-size: 20px;
  }



@media only screen and (min-width: 768px) {

  .page-heading {
    padding: 200px 0;
    transition: background 1s ease; 
  }

  .hover.page-heading {
    background: #D6BDAE;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 55px;
  }

  .sub, .list {
    margin: 0;
    float: left;
  }

  .para, .list-two {
    float: right;
  }

  .change {
    color: #000;
    transition: all 1s ease;
  }

  .hover .change {
    color: #FFDBC5;
  }

}


@media only screen and (min-width: 1024px) {

  .para, .list-two {
    margin: 0;
  }

  .sub {
    text-transform: initial;
    letter-spacing: 0;
  }
}

</style>
