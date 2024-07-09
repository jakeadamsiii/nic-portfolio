<template>
  <main-layout >
    <div class="scroll circle"></div>

    <Nav 
      :isHomepage="true"
    />

    <div class="home" :class="{maris: marisHover, sivvi: sivviHover, sani: saniHover, soho: sohoHover}"> 
      <div v-if="isDesktop" class="follower"></div>

      <div class="scroll-container">
        <div class="scroll left top"><h2>Design Leader</h2></div>
        <div class="scroll right top"><h2> &#160;&</h2></div>
        <div class="scroll left bottom"><h2>Art</h2></div>
        <div class="scroll right bottom"><h2> &#160;Director</h2></div>

      </div>

      <div class="mouse"></div>

      <div class="image-ghost"></div>
      <div class="image-container">

      <section class="recent">
        <h2>Latest work</h2>
        <ul class="work-list">
          <li class="work-li" >
            <router-link to="/soho-house">
              <p class="underline" @mouseover="sohoHover = true" @mouseleave="sohoHover = false">Soho house</p>
            </router-link>
          </li>
          <li class="work-li" >
            <router-link to="/d-maris-bay">
              <p class="underline" @mouseover="marisHover = true" @mouseleave="marisHover = false">D Maris Bay</p>
            </router-link>
          </li>
          <li class="work-li" >
            <router-link to="/sani-resorts">
              <p class="underline" @mouseover="saniHover = true" @mouseleave="saniHover = false">Sani resort</p>
            </router-link>
          </li>
          <li class="work-li" >
            <router-link to="/sivvi">
              <p class="underline" @mouseover="sivviHover = true" @mouseleave="sivviHover = false">sivvi</p>
            </router-link>
          </li>
        </ul>
      </section>
        
      </div>

    </div>

     
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import Nav from '../components/Nav.vue';

  export default {
    data: function () {
      return {
        isDesktop: true,
        marisHover: false,
        sivviHover: false,
        saniHover: false,
        sohoHover: false,
        degrees: 0,
        forwards: true,
      }
    },
    components: {
      MainLayout, Nav 
    },
     methods: {
       handleScroll(e) {
         var y = window.scrollY
         const mouse = document.querySelector('.mouse');
         const image = document.querySelector('.image-ghost').getBoundingClientRect();
         const topLeft = document.querySelector('.top.left');
         const topRight = document.querySelector('.top.right');
         const bottomLeft = document.querySelector('.bottom.left');
         const bottomRight = document.querySelector('.bottom.right');
         const circle = document.querySelector('.circle');
         let docHeight = document.documentElement.offsetHeight;
         let scrolled = window.scrollY / ( docHeight - window.innerHeight ),
             transformValue = 'translate(-50%, -50%) scale('+scrolled+')';
         topLeft.style.left = "calc( 7% - " +  (y/3)*2 + "px )";
         topRight.style.right = "calc( 8% - " +  (y/3) + "px )";
         bottomLeft.style.left = "calc( 9vw + 7% - " +  (y/3) + "px )";
         bottomRight.style.right = "calc( 9vw + 5% - " +  (y/3)*2 + "px )";
         circle.style.WebkitTransform = transformValue;
         circle.style.MozTransform = transformValue;
         circle.style.OTransform = transformValue;
         circle.style.transform = transformValue;

         window.scrollY > 250 ? mouse.classList.add("hide") : mouse.classList.remove("hide");
        
        if (image.top <= 0) {
          document.querySelector('.image-container').classList.add("fixed")
        } else {
          document.querySelector('.image-container').classList.remove("fixed")
        }
      },

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

     },
    mounted: function() {
      var that = this;
      this.checkDesktop();
      window.addEventListener('scroll', that.handleScroll);

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
  .home {
    height: 400vh;
  }

  .scroll-container {
    width: 90%;
    margin: 200px auto 0;
    position: relative;
    z-index: 1;
  }

  .scroll {
    display: inline-block;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }

  .circle {
    height: 2000px;
    width: 2000px;
    border-radius: 100%; 
    background: #f7f8fa; 
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    mix-blend-mode: difference;
    z-index: 1000;
    transform-origin: center;
    pointer-events: none;
  }

  .left {
    left: 7%;
  }

  .right {
    right: 8%;
  }

  .top {
    margin-top: -5vw;
  }

  .bottom {
    margin-top: 5vw;
  }

  .bottom.left {
    left: calc(9vw + 7%);
  }

  .bottom.right {
    right: calc(9vw + 5%);
  }

  .scroll h2 {
    position: relative;
  }

  h2 {
    font-size: 9.5vw;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "David-ExtraLight", sans-serif;
  }

  .mouse {
    height: 30px;
    width: 22px;
    border: 2px solid black;
    border-radius: 20px;
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%);
    opacity: 1;
    transition: opacity .5s ease;
  }

  .mouse.hide {
    opacity: 0;
  }

  .mouse::after {
    content: "";
    height: 6px;
    width: 6px;
    background: #000;
    border-radius: 100%;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: mouse 1.5s infinite ease;
  }

  .image-container,
  .image-ghost {
    height: 100vh;
    width: 100vw;
    background-size: contain;
    position: absolute;
    top: 120vh;
    z-index: 1;
  }

  .image-container {
    overflow: hidden;
  }

  .image-container.fixed {
    position: fixed;
    z-index: 1;
    top: 0;
    overflow: scroll;
  }

  .work-list {
    list-style: none;
    margin: 50px 0 0 0;
  }

  .recent {
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  .recent h2 {
    font-size: 20px;
    font-family: "David-ExtraLight", sans-serif;
    font-weight: 400;
    text-align: center;
    margin-top: 30%;
  }

  .work-li {
    position: absolute;
    width: 100%;
    top: 1000px;
    transition: 1s ease;
  }

  .work-li a {
    position: relative;
    display: flex;
    color: #000;
    transition: color .5s ease; 
    width: fit-content;
    width: 100%;
    justify-content: center;
  }

  .work-li a:hover {
    color: #2f3c5e;
  }

  .work-li p {
    font-size: 40px;
    line-height: 0.8;
    display: inline;
    overflow: inherit;
    margin: 0 0 0 20px;
    z-index: 3;
    font-family: "David-ExtraLight", sans-serif;
    text-transform: uppercase;
    white-space: normal; 
    width: 100%;
    text-align: center;
    width: fit-content;
  }

  .work-li a:hover p,
  .work-li a:hover span {
    z-index: 3;
  }
  
  .fixed .work-li:nth-child(1){
    top: 30%;
    transition-delay: 0s;
  }

  .fixed .work-li:nth-child(2){
    top: 45%;
    transition-delay: .5s;
  }

  .fixed .work-li:nth-child(3){
    top: 60%;
    transition-delay: .75s;
  }

  .fixed .work-li:nth-child(4){
    top: 75%;
    transition-delay: 1s;
  }

/* follower styles */

  .follower {
    height: 284px;
    width: 350px;
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

  .maris .follower {
    opacity: 1;
    background-image: url("../images/DMaris.jpg");
    filter: invert(1);
  }

  .sani .follower {
    opacity: 1;
    background-image: url("../images/Sani.jpg");
    filter: invert(1);
  }

  .soho .follower {
    opacity: 1;
    background-image: url("../images/sohohouse.jpg");
    filter: invert(1);
  }

  .sivvi .follower {
    opacity: 1;
    background-image: url("../images/Sivvi.jpg");
    filter: invert(1);
  }

  @media only screen and (min-width: 660px) {
  
    .image-container,
    .image-ghost  {
       top: 300%;
    }

    .work-li p {
      font-size: 100px;
      margin-bottom: 4%;
    }

    .recent h2 {
      margin-top: 17vh;
    }

  .fixed .work-li:nth-child(1){
    top: 30%;
  }

  .fixed .work-li:nth-child(2){
    top: 60%;
  }

  .fixed .work-li:nth-child(3){
    top: 90%;
  }

  .fixed .work-li:nth-child(4){
    top: 120%;
  }
}
</style>

<style>

  @keyframes mouse {
    0% {
      top: 8px;
      opacity: 1;
    }
    100% {
      top: 15px;
      opacity: 0;
    }
  }

</style>