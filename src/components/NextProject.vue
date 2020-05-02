<template>
  <div class="next-project" v-bind:style="{ backgroundColor:  $props.bg }">
    <div class="container" >
      <div class="row">
          <div class="col-9 hidden-sm"></div>
          <div class="col-3">
            <p v-if="$props.sub" class="sub">{{ $props.sub }}</p>
            <h1>{{ $props.title }}</h1>
          </div>
          <div class="col-2 hidden-sm"></div>
          <div class="col-3 flex" >
          </div>
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
      title: String,
      sub: String,
      bg: String,
    },

    methods: {

    }
  }
</script>

<style scoped>

  .next-project {
    width: 100%;
    padding: 55px 0 100px;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 40px;
    margin: 0 0 20px 0;
  }

  .sub {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 15px;
    margin: 55px 0 75px 0;
  }



@media only screen and (min-width: 768px) {

  .next-project {
    padding: 150px 0;
  }

  .sub {
    margin: 0 0 40px;
  }


}

@media only screen and (min-width: 1024px) {

    h1 {
    margin: 0;
  }

  .flex {
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

}

</style>
