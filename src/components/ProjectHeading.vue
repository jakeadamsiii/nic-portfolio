<template>
  <div class="page-heading" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="copy-container">
      <span>{{$props.num}}</span>
      <p>{{$props.sub}}</p>
      <h1>{{$props.title}}</h1>
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
      title: String,
      sub: String,
      num: String,
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped>

  .page-heading {
    position: relative;
    height: 65vh;
    margin: 0 6%;
  }

  .copy-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 88%;
  }

  span {
    font-family: 'David-Regular', sans-serif;
    font-size: 20px;
    margin: 0 0 10px;
    text-align: center;
    display: block;
    letter-spacing: 1px;
  }

  p {
    font-family: 'David-ExtraLight', sans-serif;
    font-size: 20px;
    margin: 0 0 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .5px;
  }

  h1 {
    font-size: 64px;
    font-family: 'David-ExtraLight', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
  }

@media only screen and (min-width: 660px) {

  h1 {
    font-size: 120px;
  }
}

</style>
