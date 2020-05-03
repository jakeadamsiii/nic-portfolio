<template>
  <div class="scroll-list" :class="{hover: $props.hover}">
    <div class="container" >
      <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-4">
            <h1 class="change" data-aos="fade" data-aos-duration="1000">{{ $props.title }}</h1>
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

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 40px;
    margin: 0 0 70px;
  }

  a {
    text-decoration: none;
  }

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 13))}
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

.scroll-list {
  background: #fff;
  transition: background 1s ease; 
  padding-top: 70px
}

.hover.scroll-list {
  background: #D6BDAE;
}

.change {
  color: #000;
  transition: all 1s ease;
}

.hover .change {
  color: #FFDBC5;

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
    h1 {
      font-size: 55px;
    }

    .scroll-list {
        padding-top: 80px;
    }
  }

</style>
