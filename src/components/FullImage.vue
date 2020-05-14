<template>
  <div class="full-image" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container">
      <div class="row flex"> 
        <div class="col-1 hidden-sm"></div>
        <div class="col-10">

          <ul v-if="$props.images.length > 0" :class="{one: $props.images.length === 1, four: $props.images.length === 4}" >
            <li v-for="image in $props.images">
                <img v-if="$props.hero" v-bind:src="image.src" :alt="image.alt" data-aos="fade-up" data-aos-offset="-400">
                <img v-if="!$props.hero" v-bind:src="image.src" :alt="image.alt" data-aos="fade-up">
            </li>
          </ul>
          
        </div>
        <div class="col-1 hidden-sm"></div>
      </div>
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
      bg: String,
      hero: Boolean
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  .full-image {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 2px;
  }

  .flex {
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  ul {
    display: grid;
    width: 100%;
    max-height: 75%;
    list-style: none;
    row-gap: 26px; 
    column-gap: 26px; 
    grid-template-columns: repeat(2, calc(50% - 13px));
    margin: 85px 0;
  }

  ul.one {
    grid-template-columns: repeat(1, 100%);
  }

  img {
    width: 100%;
    height: auto;
  }

    @media only screen and (max-width: 768px) {

      ul.one li img {
        max-width: 100%;
        height: auto;
      }
    }

  @media only screen and (min-width: 768px) {

    .full-image  {
      height: 100vh;
      min-height: 500px;
      max-height: 800px;
    }

    ul.one li {
      display: flex;
    }

    ul {
      grid-template-columns: repeat(6, calc(16.66666666% - 25px));
      row-gap: 30px; 
      column-gap: 30px; 
      margin: 0;
    }

    ul.four {
      grid-template-columns: repeat(4, calc(25% - 20px));
      width: 66.66666%;
      margin: 0 auto;
    }

  }

    @media only screen and (min-width: 1024px) {
      ul.one img {
        max-height: 80vh;
        max-width: 75%;
        margin: auto;
      }

    }

</style>
