<template>
  <a
    v-bind:href="href"
    v-bind:class="{ icon: $props.icon }"
    v-on:click="go"

  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'

  export default {
    props: {
      href: {
        type:String,
        required: true 
      },
      icon: Boolean,
      closeNav: Function
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        var that = this;
        event.preventDefault();
        this.$emit('closeNav');
        setTimeout(function(){ 
          that.$root.currentRoute = that.href
          window.history.pushState(
            null,
            routes[that.href],
            that.href
          )
        }, 250);
      }
    }
  }
</script>

<style scoped>

  a {
    text-decoration: none;
    color: #000;
    font-size: 35px;
    padding: 20px;
    font-family: 'Roboto-medium', sans-serif;
    cursor: url(../images/hover.png), pointer;
  }

  .home-icon {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 20px;
    padding: 0;
    text-decoration: none;
    line-height: 90px;
  }

  .icon {
    padding: 0;
  }
</style>
