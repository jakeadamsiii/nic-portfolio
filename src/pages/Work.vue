<template>
  <main-layout >
    <Nav />
      <section class="work" :class="{asos: asosHover, harrods: harrodsHover}">
         <div class="container" >
           <div class="row" >
            <div class="col-1 hidden-sm"></div>
            <div class="col-10">
              <div class="page-content">
                <div v-if="isDesktop" class="follower"></div>
                <h2>Work</h2>
                <ul class="work-list">
                    <li class="work-li" @mouseover="harrodsHover = true" @mouseleave="harrodsHover = false">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li" @mouseover="asosHover = true" @mouseleave="asosHover = false">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                    <li class="work-li">
                      <router-link to="/">
                        <span>01</span>
                        <p class="underline">Harrods</p>
                      </router-link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'

  export default {
    data: function () {
      return {
        isDesktop: true,
        harrodsHover: false,
        asosHover: false,
        degrees: 0,
        forwards: true,
      }
    },
    components: {
      MainLayout, Nav, Footer
    },
    methods:{
      checkDesktop: function() {
        var that = this;
        //check if desktop
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768 ) {
          this.isDesktop = false;
        } else {
          //if desktop add follower div to follow cursor
          this.isDesktop = true;
          document.addEventListener('mousemove', function(e) {
            document.querySelector('.follower').style.left = (e.pageX - 100) + "px";
            document.querySelector('.follower').style.top = ( e.pageY + -90) + "px";
            if (that.degrees <= 8 && that.forwards) {
              that.degrees = that.degrees + .5;
              document.querySelector('.follower').style.transform = "rotate(" + that.degrees + "deg)";
            } else if(that.degrees >= 8) {
              that.forwards = false;
              that.degrees = that.degrees - .5;
              document.querySelector('.follower').style.transform = "rotate(" + that.degrees + "deg)";
            } else if (that.degrees <= 0) {
              that.forwards = true;
              that.degrees = that.degrees + .5;
              document.querySelector('.follower').style.transform = "rotate(" + that.degrees + "deg)";
            } else {
              that.degrees = that.degrees - .5;
              document.querySelector('.follower').style.transform = "rotate(" + that.degrees + "deg)";
            }
            
          });
        }
      },
    }, 
    mounted: function() {
      var that = this;
      this.checkDesktop();
      window.addEventListener('resize', function(e) {
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

  .work-li {
    margin: 0 0 30px;
    position: relative;
    float: left;
  }

  .work-li span {
    font-size: 14px;
  }

  .work-li a {
    position: relative;
    display: flex;
    color: #000;
    transition: color .5s ease; 
  }

  .work-li a:hover {
    color: #C7BC9B;
  }

  .work-li p {
    font-size: 64px;
    line-height: 0.8;
    display: inline;
    overflow: inherit;
    margin: 0 0 0 20px;
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
    background: green;
  }

  .asos .follower {
    opacity: 1;
    background: red;
  }


  @media only screen and (min-width: 1024px) {

    .work-li {
      width: 50%;
    }
  }

</style>