<template>
  <div class="nav-container">
        <div class="flex">

            <div class="top">
              <router-link to="/">
                <p class="link">Nic Roberts.</p>
              </router-link>
              <router-link to="/work">
                <p class="link">Work</p>
              </router-link>
            </div>
            <div class="bottom">
              <router-link to="/about">
                <p class="link">about</p>
              </router-link>
              <router-link to="/contact">
                <p class="link">Contact</p>
              </router-link>
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
    components: {
    },
    methods: {
    },
    mounted: function(){
    }
  }
</script>

<style scoped>

  .nav {
    height: 90px;
    position: fixed;
    z-index: 12;
    background: transparent;
    border-top: 2px solid #000;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  .nav.container {
    max-width: 100%;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .nav-container { 
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    background: transparent;
    height: 100vh;
    box-sizing: border-box;
    pointer-events: none;
  }


  .link {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 16px;
    padding: 0;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    pointer-events: auto;
    padding: 10px 0;
  }

  .top, .bottom {
    margin: 40px;
    display: flex;
    justify-content: space-between;
  }

</style>
