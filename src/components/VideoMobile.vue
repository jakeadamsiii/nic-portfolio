<template>
  <div class="video" ref="video" :class="{fit: $props.bgImage.length <= 0}">
    <div class="image-container" >
        <div v-if="$props.bgImage.length > 0" class="bg-image" :style="'background-image: url('+ $props.bgImage[0].src +')'"/>
        <div class="video-container">
          <video v-if="$props.Video" autoplay muted loop>
            <source :src="$props.Video[0]" type="video/mp4">
            Your browser does not support the video tag.
          </video>
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
      Video: Array,
    },
    methods: {
      parallaxScroll(direction) {
        var app = this;
        var el = app.$refs.video;
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

  .video {
    position: relative;
  }

  .video-container video {
    border: 5px solid #000;
    border-radius: 16px;
    position: relative;
    width: 25%;
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

  .video-container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }

  .fit {
    margin-top: -25%;
  }

@media  only screen and (min-width: 450px) {
  .image-container, .horizontal-image {   
    height: 100vh;
  }
}

@media  only screen and (min-width: 550px) {
  .fit {
    margin-top: -10%;
  }
  
}

@media only screen and (min-width: 1024px) {
  .fit {
    margin-top: calc(-1* (100vh - 483px) / 2);
  }

  .video-container {
    flex-direction: row;
  }

  .image-container .bg-image {
    width: 100%;
  }
}


</style>
