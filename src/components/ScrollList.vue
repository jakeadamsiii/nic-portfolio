<template>
  <div class="scroll-list" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container" >
      <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-4">
            <h1 data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h1>
          </div>
      </div>
    </div>
    <div class="slider">
      <ul class="slide-track" v-if="$props.brandList">
        <li class="slide" v-for="item in $props.brandList" >
          {{item}}
        </li>
      </ul>
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
      bg: String,
      brandList: Array
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 55px;
    margin: 0 0 70px;
  }

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 13))}
}

.slider {
	background: white;
	height: 45px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100%;
  margin: 0 0 100px;
}
	
.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 26);
  list-style: none;
}
	
.slide {
  height: 45px;
  width: 250px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: -0.04em;
  font-size: 35px;
  text-align: center;
}

</style>
