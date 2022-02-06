<template>
  <div class="bg-three-image" ref="bgThreeImage" :class="{fit: $props.bgImage.length <= 0, single: $props.Images.length === 1}">
    <div class="image-container" >
        <div class="bg-image" :style="'background-image: url('+ $props.bgImage[0].src +')'"/>
        <div class="three-image-container">
          <img v-if="$props.Images[0]" :src="$props.Images[0].src" :alt="$props.Images[0].alt" />
          <img v-if="$props.Images[1]" :src="$props.Images[1].src" :alt="$props.Images[1].alt" />
          <img v-if="$props.Images[2]" :src="$props.Images[2].src" :alt="$props.Images[2].alt" />
        </div>
    </div>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
        imageZoom: 1,
        scrollPos: 0
      }
    },
    props: {
      bgImage: Array,
      Images: Array,
    },
    methods: {
      parallaxScroll(direction) {
        var app = this;
        var el = app.$refs.bgThreeImage;
        var rect = el.getBoundingClientRect();
        var image = el.querySelector('.bg-image');
        if (rect.top <= window.innerHeight * .75 && (rect.top + window.innerHeight > 0) && direction === "down") {
          app.imageZoom = app.imageZoom + 0.0015;
        } else if((rect.top + window.innerHeight > 0) && direction === "up")  {
          app.imageZoom > 1 ? app.imageZoom = app.imageZoom - 0.0015 : null
        }
        image.style.transform = "translate(-50%) scale(" + app.imageZoom + ")"
      },
      detectScrollDirection() {
        var app = this;
        if ((document.body.getBoundingClientRect()).top > app.scrollPos) {
          app.parallaxScroll("up")
         } else {
          app.parallaxScroll("down")
         }
        app.scrollPos = (document.body.getBoundingClientRect()).top;
      }
    },
    mounted: function(){
      var app = this;
      if (app.$props.bgImage[0]) {
        document.addEventListener("scroll", app.detectScrollDirection);
      }
    },
    beforeDestroy: function() {
      var app = this;
      if (app.$props.bgImage[0]) {
        document.removeEventListener("scroll", app.detectScrollDirection);
      }
    }
  }
</script>

<style scoped>

  .bg-three-image {
    position: relative;
    height: 50vh;
    overflow: hidden;
  }

  .three-image-container img {
    border: 5px solid #000;
    border-radius: 16px;
  }

  .image-container {    
    height: 50vh;
    overflow: hidden;
    position: relative;
  }

  .image-container .bg-image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }

  .three-image-container {
    display: flex;
    height: 100%;
    width: 88%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .single .three-image-container {
    justify-content: space-around;
  }

  .three-image-container img {
    position: relative;
    width: 25%;
  }

  .fit {
    margin-top: -25%;
  }

@media  only screen and (min-width: 450px) {
  .image-container, .bg-three-image {   
    height: 100vh;
  }
}

@media  only screen and (min-width: 550px) {
  .fit {
    margin-top: -10%;
  }

  .three-image-container {
    width: 75%;
  }
}

@media only screen and (min-width: 1024px) {
  .fit {
    margin-top: calc(-1* (100vh - 483px) / 2);
  }

  .three-image-container {
    flex-direction: row;
    width: 624px;
  }

  .image-container .bg-image {
    width: 100%;
  }
}

</style>
