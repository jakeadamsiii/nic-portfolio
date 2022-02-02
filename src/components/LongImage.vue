<template>
  <div class="long-image">
    <img v-if="$props.Image[0]" :src="$props.Image[0].src" :alt="$props.Image[0].alt" />
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
       
      }
    },
    props: {
      Image: Array,
    },
    methods: {
      
    },
  }
</script>

<style scoped>


img {
  width: 88%;
  margin: 50px auto;
  display: block
}

@media  only screen and (min-width: 550px) {


  img {
    width: 75%;
    margin: 100px auto;
  }
}

@media  only screen and (min-width: 1024px) {

  img {
    width: 624px;
    margin: 200px auto;
  }
}

</style>
