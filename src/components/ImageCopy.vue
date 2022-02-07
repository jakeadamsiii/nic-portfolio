<template>
  <div class="image-copy" :class="{ right:  $props.right }" v-bind:style="{ backgroundColor:  $props.bg }">

    <div v-if="!$props.imageBg" class="image" v-bind:style="{ backgroundImage: 'url(' + $props.image + ')' }"></div>
    
    <div v-if="$props.imageBg" class="image-container" v-bind:style="{ backgroundColor:  $props.imageBg }">
      <img :src="$props.image" :alt="$props.alt">
    </div>

    <div class="text-container" :class="{ alt: $props.alt }">
      <h2 v-if="$props.head" class="header">{{ $props.head }}</h2>
      <p v-if="$props.text" class="text">{{ $props.text }}</p>
      <h2 v-if="$props.headTwo" class="header two">{{ $props.headTwo }}</h2>
      <p v-if="$props.textTwo" class="text two">{{ $props.textTwo }}</p>
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
      right: Boolean,
      image: String,
      alt: String,
      text: String,
      head: String,
      textTwo: String,
      alt: Boolean,
      headTwo: String,
      bg: String,
      imageBg: String,
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  .image-copy {
    width: 100%;
    margin-top: 2px;
  }

  .image,
  .image-container {
    width: 100%;
    height: 375px;
    background-position: center;
    background-size: cover;
    float: left;
  }

  .image-container {
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

  .text-container {
    float: right;
    box-sizing: border-box;
    margin: 0 6%;
  }

  .text {
    line-height: 40px;
    font-size: 35px;
    font-family: 'spectral-light', serif;
    letter-spacing: -3px;
    margin: 40px 0 60px;
  }

  .header {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 60px 0 0;
    text-transform: uppercase;
  }

  .text-container.alt {
    margin: 80px 6%;
  }

  .text-container.alt .header{
    margin: 0 0 15px;
  }

  .text-container.alt .header.two{
    margin: 40px 0 15px;
  }

  .text-container.alt .text  {
    font-family: 'Roboto-regular', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: unset;
    margin:0;
    line-height: unset;
  }

  @media only screen and (min-width: 768px) {

    .image,
    .image-container {
      width: 50%;
      height: 100%;
    }

    .image-copy {
      height: 100vh;
      min-height: 500px;
      max-height: 800px;
      display: flex;
      align-items: center;
    }

    .text-container {
      margin: 0 10%;
      width: 30%;
      display: flex; 
     flex-direction: column; 
     justify-content: center;
    }
    

    .header {
      margin: 0 0 40px;
      font-size: 14px;
    }

    .text {
      margin: 0;
      line-height: 45px;
      font-size: 40px;
    }

    img {
      max-height: 55%;
    }

    .image-copy.right {
      display: flex;
    }

    .right .image,
    .right .image-container {
      order: 2;
    }

   .text-container.alt {
      margin: 0 10%;
    }
    .text-container.alt .header{
      margin: 0 0 15px;
    }

    .text-container.alt .text  {
      font-family: 'Roboto-regular', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: unset;
    }
  }


</style>
