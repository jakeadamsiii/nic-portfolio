<template>
  <div class="scroll-list" :class="{hover: $props.hover}">
    <div class="container" >
      <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-4">
            <h2 class="change" data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h2>
          </div>
      </div>
    </div>
    <div class="slider">
      <ul class="slide-track" v-if="$props.brandList">
        <li class="slide" v-for="item in $props.brandList">
          <a class="client underline change" :href="item.href">{{item.name}}</a>
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
      hover: Boolean,
      bg: String,
      brandList: Array
    },
    components: {
    },
    mounted: function() {
      const that = this;
      const clients = document.querySelectorAll("a.client")
        for (const client of clients) {
          client.addEventListener('mouseenter', function(event) {
            that.$emit('clientHover');
          });
          client.addEventListener('mouseleave', function(event) {
            that.$emit('clientHover');
          })
        }
    }
  }
</script>

<style scoped>

h2 {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    font-size: 40px;
    font-weight: 300;
    margin: 0 0 70px;
  }

  a {
    text-decoration: none;
  }

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-220px * 13))}
}

.slider {
	height: 45px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100%;
  padding: 0 0 100px;
}
	
.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(220px * 26);
  list-style: none;
}
	
.slide {
  height: 45px;
  width: 220px;
  font-family: 'Roboto-medium', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
}

a.underline:hover {
  color: #000!important;
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
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 50px;
    }

    .scroll-list {
        padding-top: 80px;
    }
  }

</style>
