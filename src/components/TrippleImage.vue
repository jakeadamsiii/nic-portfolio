<template>
  <div class="tripple-image">
    <div class="image-container">
      <img v-if="$props.Images[0]" :src="$props.Images[0].src" :alt="$props.Images[0].alt" />
      <img v-if="$props.Images[1]" :src="$props.Images[1].src" :alt="$props.Images[1].alt" />
      <img v-if="$props.Images[2]" :src="$props.Images[2].src" :alt="$props.Images[2].alt" />
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
      Images: Array,
    },
    methods: {
    },
  }
</script>

<style scoped>

  .tripple-image {
    margin: 75px 0;
  }

  .image-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 88%;
  }

  img {
    width: 25%;
  }

@media  only screen and (min-width: 550px) {
  
  .image-container {
    width: 75%;
  }
}

@media only screen and (min-width: 1024px) {
  .image-container {
    width: 624px;
  }

  .tripple-image {
    margin: 100px 0;
  }
}

</style>
