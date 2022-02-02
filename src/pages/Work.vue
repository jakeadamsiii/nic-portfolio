<template>
<div>
  <passwordProtect
    :blocked="block"
    :tried="tried"
    @enterPassword="enterPassword"
  />

  <main-layout >
    <Nav />
      <section class="work" :class="{asos: asosHover, harrods: harrodsHover, maris: marisHover, sivvi: sivviHover, made: madeHover, apes: apesHover, sani: saniHover}">
         <div class="container" >
           <div class="row" >
            <div class="col-1 hidden-sm"></div>
            <div class="col-10">
              <div class="page-content">
                <div v-if="isDesktop" class="follower"></div>
                <h2>Work</h2>
                <ul class="work-list">
                    <li class="work-li" >
                      <router-link to="/d-maris-bay">
                        <span>01</span>
                        <p class="underline" @mouseover="marisHover = true" @mouseleave="marisHover = false">D Maris Bay</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/sivvi">
                        <span>02</span>
                        <p class="underline" @mouseover="sivviHover = true" @mouseleave="sivviHover = false">Sivvi</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/harrods">
                        <span>03</span>
                        <p class="underline" @mouseover="harrodsHover = true" @mouseleave="harrodsHover = false">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/made">
                        <span>04</span>
                        <p class="underline" @mouseover="madeHover = true" @mouseleave="madeHover = false">Made.com</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/asos">
                        <span>05</span>
                        <p class="underline" @mouseover="asosHover = true" @mouseleave="asosHover = false">ASOS</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/apes-hill">
                        <span>06</span>
                        <p class="underline" @mouseover="apesHover = true" @mouseleave="apesHover = false">Apes Hill</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/sani-resorts">
                        <span>07</span>
                        <p class="underline" @mouseover="saniHover = true" @mouseleave="saniHover = false">Sani resorts</p>
                      </router-link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import passwordProtect from '../components/PasswordProtect.vue'
   

  export default {
    data: function () {
      return {
        isDesktop: true,
        harrodsHover: false,
        asosHover: false,
        madeHover: false,
        apesHover: false,
        marisHover: false,
        sivviHover: false,
        saniHover: false,
        degrees: 0,
        forwards: true,
        tried: false,
        block: true,
      }
    },
    components: {
      MainLayout, Nav, passwordProtect
    },
    methods:{
      checkDesktop: function() {
        var that = this;
        //check if desktop
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768 ) {
          this.isDesktop = false;
        } else {
          //if desktop add follower div to follow cursor
          let follower = document.querySelector('.follower');
          this.isDesktop = true;
          document.addEventListener('mousemove', function(e) {
            follower ? follower.style.left = (e.pageX - 100) + "px": null;
            follower ? follower.style.top = ( e.pageY + -90) + "px": null;
            if (that.degrees <= 8 && that.forwards) {
              that.degrees = that.degrees + .5;
              follower ? follower.style.transform = "rotate(" + that.degrees + "deg)": null;
            } else if(that.degrees >= 8) {
              that.forwards = false;
              that.degrees = that.degrees - .5;
              follower ? follower.style.transform = "rotate(" + that.degrees + "deg)": null;
            } else if (that.degrees <= 0) {
              that.forwards = true;
              that.degrees = that.degrees + .5;
              follower ? follower.style.transform = "rotate(" + that.degrees + "deg)": null;
            } else {
              that.degrees = that.degrees - .5;
              follower ? follower.style.transform = "rotate(" + that.degrees + "deg)": null;
            }
            
          });
        }
      },
      enterPassword: function(val) {
        if (val === "Folio2020") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed4", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    }, 
    mounted: function() {
      var that = this;
      this.checkDesktop();

      if (localStorage.getItem("allowed4") === 'true') {
        this.allowed = true;
        this.block = false; 
      }

      window.addEventListener('resize', function(e) {
        that.checkDesktop();
      });
    },
    destroyed: function() {
      var that = this;
      window.removeEventListener('resize', function(e) {
        that.checkDesktop();
      });
    }
  }
</script>

<style scoped>
  .page-content {
    margin-top: 140px;
  }

  .col-10 {
    padding-bottom: 140px;
  }

  .work-list {
    list-style: none;
    margin: 50px 0 0 0;
  }

  h2 {
    font-size: 14px;
    font-family: "David-Regular", sans-serif;
    font-weight: 400;
  }

  .work-li {
    margin: 0 0 30px;
    position: relative;
    float: left;
    width: 100%;
  }

  .work-li span {
    font-size: 14px;
    font-family: "David-ExtraLight", sans-serif;
    letter-spacing: 1px;
  }

  .work-li a {
    position: relative;
    display: flex;
    color: #000;
    transition: color .5s ease; 
    width: fit-content;
  }

  .work-li a:hover {
    color: #C7BC9B;
  }

  .work-li p {
    font-size: 35px;
    line-height: 0.8;
    display: inline;
    overflow: inherit;
    margin: 0 0 0 20px;
    z-index: 1;
    font-family: "David-ExtraLight", sans-serif;
    text-transform: uppercase;
    white-space: normal; 
  }

  .work-li a:hover p,
  .work-li a:hover span {
    z-index: 3;
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
    bottom: -5px;
    background: #C7BC9B;
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  .work-li a:hover .underline:after {
    left: 0;
    right: auto;
    width: 100%;
  }

  .image-container {
    display: none;
    opacity: 0;
    transition: opacity .5s ease;
  }

  /* follower styles */

  .follower {
    height: 231px;
    width: 315px;
    position: absolute;
    float: left;
    background: grey;
    opacity: 0;
    transition: opacity .5s ease, background .5s ease, top .5s ease-out, left .5s ease-out, transform .5s ease-out;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(0deg);
    transform-style: preserve-3d;
  }

  .harrods .follower {
    opacity: 1;
    z-index: 2; 
    background: green;
  }

  .asos .follower {
    opacity: 1;
    z-index: 2; 
    background: red;
  }

  .maris .follower {
    opacity: 1;
    z-index: 2; 
    background: blue;
  }

  .sani .follower {
    opacity: 1;
    z-index: 2; 
    background: yellow;
  }

  .sivvi .follower {
    opacity: 1;
    z-index: 2; 
    background: olive;
  }

  .apes .follower {
    opacity: 1;
    z-index: 2; 
    background: orange;
  }

  .made .follower {
    opacity: 1;
    z-index: 2; 
    background: fuchsia;
  }

  @media only screen and (min-width: 660px) {
    h2 {
      font-size: 20px;
    }

    .work-li p{
      font-size: 50px;
    }

    .work {
      height: 100vh;
    }
  }

  @media only screen and (min-width: 1024px) {

    .work-li {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1200px) {

    .work-li p{
      font-size: 64px;
    }
  }

</style>