<template>
  <div class="image-full"  v-bind:style="{ backgroundColor:  $props.bg }">

    <img :src="img" alt="topshop desktop cool">

  </div>
</template>

<script>

  export default {

    data: function () {
      return {
        img: require('../images/topshop-desktop.jpg')
      }
    },
    props: {
      right: Boolean,
      image: String,
      text: String,
      head: String,
      bg: String
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  .image-full {
    width: 100%;
    position: relative;
  }

  img {
    height: 600px;
    width: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  @media only screen and (min-width: 768px) {

    .image {
      width: 50%;
      height: 100%;
    }

    .image-full {
      height: 100vh;
      min-height: 500px;
      max-height: 800px;
    }
  }


</style>
