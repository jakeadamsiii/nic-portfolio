<template>
  <div class="copy-container">
      <div class="container">
        <div class="row"> 
            <div class="col-1 hidden-sm"></div>
            <div class="col-2" v-if="$props.title">
                <h2>{{$props.title}}</h2>
            </div>
            <div :class="{col8: $props.title, col10: !$props.title}">
                <p v-if="$props.copy" class="copy">{{$props.copy}}</p>
                <p v-if="$props.sub" class="sub">{{$props.sub}}</p>
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
        copy: String,
        sub: String,
    },
    methods: {
     
    },
    mounted: function(){
    }
  }
</script>

<style scoped>

.copy-container {
    margin: 145px 0;
}

h2 {
    font-weight: 400;
    font-family: "David-Regular", sans-serif;
    font-size: 20px;
    margin: 0 0 20px;
}

.copy {
    font-family: "David-Light", sans-serif;
    font-size: 20px;
    margin: 0 0 20px;
}

.sub {
    font-size: 14px;
    font-family: "David-ExtraLight", sans-serif;
}

@media only screen and (min-width: 660px) {

}

</style>
