<template>
  <div class="image-grid">
    <!-- <div class="top">
      <img v-if="$props.Images[0]" :src="$props.Images[0].src" :alt="$props.Images[0].alt" />
      <div class="column">
        <img v-if="$props.Images[1]" :src="$props.Images[1].src" :alt="$props.Images[1].alt" />
        <img v-if="$props.Images[2]" :src="$props.Images[2].src" :alt="$props.Images[2].alt" />
      </div>
    </div>
    <div class="bottom">
      <img v-if="$props.Images[3]" :src="$props.Images[3].src" :alt="$props.Images[3].alt" />
      <img v-if="$props.Images[4]" :src="$props.Images[4].src" :alt="$props.Images[4].alt" />
      <img v-if="$props.Images[5]" :src="$props.Images[5].src" :alt="$props.Images[5].alt" />
    </div> -->
      <img class="big" v-if="$props.Images[0]" :src="$props.Images[0].src" :alt="$props.Images[0].alt" />
      <img v-if="$props.Images[1]" :src="$props.Images[1].src" :alt="$props.Images[1].alt" />
      <img v-if="$props.Images[2]" :src="$props.Images[2].src" :alt="$props.Images[2].alt" />

      <img v-if="$props.Images[3]" :src="$props.Images[3].src" :alt="$props.Images[3].alt" />
      <img v-if="$props.Images[4]" :src="$props.Images[4].src" :alt="$props.Images[4].alt" />
      <img v-if="$props.Images[5]" :src="$props.Images[5].src" :alt="$props.Images[5].alt" />
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

  .image-grid {
    margin: 75px auto 150px;
    width: 88%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8.333333333%;
    row-gap: 8.333333333%;
  }

  img {
    width: 100%;
  }

  .big {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    height: 100%;
    width: 100%;
  }


@media  only screen and (min-width: 550px) {
  
  .image-grid {
    width: 75%;
  }
}

@media only screen and (min-width: 1024px) {


  .image-grid {
    width: 624px;
    margin: 100px auto 200px;
  }
}

</style>
