<template>
  <div class="two-centered-images" >
    
    <div class="image-container" v-bind:style="{ backgroundColor:  $props.bg }" :class="{ bottom:  $props.bottomLeft, small: $props.leftSmall }">
      <img v-if="$props.hero" :src="$props.images[0].src" :alt="$props.images[0].alt" data-aos="fade-up" data-aos-offset="-400">
      <img v-if="!$props.hero":src="$props.images[0].src" :alt="$props.images[0].alt" data-aos="fade-up">
    </div>

    <div class="image-container" v-bind:style="{ backgroundColor:  $props.bg }" :class="{ bottom:  $props.bottomRight, small: $props.rightSmall }">
      <img v-if="$props.hero" :src="$props.images[1].src" :alt="$props.images[1].alt" data-aos="fade-up" data-aos-offset="-400">
      <img v-if="!$props.hero" :src="$props.images[1].src" :alt="$props.images[1].alt" data-aos="fade-up">
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
      images: Array,
      bottomLeft: Boolean,
      bottomRight: Boolean,
      bg: String,
      hero: Boolean,
      leftSmall: Boolean,
      rightSmall: Boolean
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  .two-centered-images {
    width: 100%;
    margin-top: 2px;
  }

  .image-container {
    width: 100%;
    height: 375px;
    background-position: center;
    background-size: cover;
    float: left;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 75%;
    max-width: 90%;
  }

  img[src*=".jpg"] {
    border: 2px solid #fff;
  }

  @media only screen and (min-width: 768px) {


    .image-container {
      width: 50%;
      height: 100%;
    }

    .image-container.bottom {
      align-items: flex-end;
    }

    .two-centered-images {
      height: 100vh;
      min-height: 500px;
      max-height: 800px;
    }

    .small img {
      max-height: 55%;
    }

  }

  @media only screen and (min-width: 1024px) {
  }

</style>
