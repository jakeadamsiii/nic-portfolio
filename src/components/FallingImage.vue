<template>
  <div class="falling-image" v-bind:style="{left: $props.left}" :class="{home: $props.hp, mob: $props.mob}">
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
      }
    },
    props: {
      left: String,
      duration: String,
      hp: Boolean,
      delay: String,
      mob: Boolean
    },
    components: {
    },
    mounted: function() {
      var animate = "fall infinite linear " + this.$props.duration + " " + this.$props.delay;
      this.$el.style.animation = animate
    }
  }
</script>

<style >
  .falling-image {
    height: 40px;
    width: 40px;
    position: absolute;
    top: -40px;
    left: 0;
    background-image: url("../images/bad.png");
    background-size: contain;
    z-index: 0;
  }

  .falling-image.home {
    background-image: url("../images/smile1.png");
  }

  .falling-image.mob {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    
      .falling-image.mob {
        display: block;
      }
  }
  
  @keyframes fall {
    from {top: 0;}
    to {top: 100%;}
  }
</style>
