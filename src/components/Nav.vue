<template>
  <div class="nav-container">
        <div class="flex">
            <div class="top">
              <router-link to="/">
                <p class="link">Nic Roberts.</p>
              </router-link>
              <router-link to="/work">
                <p class="link underline">Work</p>
              </router-link>
            </div>
            <div class="bottom">
              <router-link to="/about">
                <p class="link underline">about</p>
              </router-link>
              <div @click="toggleContact" class="contact">
                <p class="link underline contactToggle">Contact</p>
                <ul :class="{active: openContact}">
                  <li><a class="underline" href="https://www.linkedin.com/in/niclroberts/" target="_blank">LinkedIn</a></li>
                  <li><a class="underline" href="https://www.instagram.com/nicroberts.co.uk/" target="_blank">Instagram</a></li>
                  <li><a class="underline" href="mailto:hello@nicroberts.co.uk?Subject=Let%27s%20chat" target="_blank">Email me</a></li>
                </ul>
              </div>
            </div>
          
        </div>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
        openContact: false
      }
    },
    components: {
    },
    methods: {
      toggleContact: function() {
        this.openContact = !this.openContact;
      }
    },
    mounted: function(){
      var app = this;
      document.body.addEventListener("click", (e) => {
        if (!e.target.classList.contains('contactToggle')) {
          app.openContact = false;
        }
      })
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
    font-family: 'David-Regular', sans-serif;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: .8px;
    text-transform: uppercase;
    pointer-events: auto;
  }

  .top, .bottom {
    margin: 40px 6%;
    display: flex;
    justify-content: space-between;
  }

  .underline {
    display: inline;
    position: relative;
    overflow: hidden;
    
  }

  .underline:after {
    content: "";
    position: absolute;
    right: 0;
    width: 0;
    bottom: -3px;
    background: #000;
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  .contact {
    position: relative;
  }

  .contact ul{
    list-style: none;
    position: absolute;
    right: 0;
    bottom: 25px;
    height: 150px;
    width: 200px;
    overflow: hidden;
  }

  .contact li {
    pointer-events: auto;
    font-family: 'David-Regular', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 1px;
    margin: 0 0 15px;
    text-align: right;
    position: absolute;
    right:0;
    transition: bottom .25s ease;
  }

  .contact li:nth-child(1){
    bottom: -50px;
    transition-delay: .5s;
  }

  .contact li:nth-child(2){
    bottom: -90px;
    transition-delay: .25s;
  }

  .contact li:nth-child(3){
    bottom: -130px;
    transition-delay: 0s;
  }

  .contact .active li:nth-child(1){
    bottom: 90px;
    transition-delay: 0s;
  }

  .contact .active li:nth-child(2){
    bottom: 50px;
    transition-delay: .25s;
  }

  .contact .active li:nth-child(3){
    bottom: 10px;
    transition-delay: .5s;
  }

  a:hover .underline:after,
  .underline:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
  
  @media only screen and (min-width: 1024px) {
    .top, .bottom {
      margin: 40px;
    }
  }
</style>
