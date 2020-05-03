<template>
  <main-layout>
    <Nav />
    <div class="work" :class="{asos: asosHover, topshop: topshopHover, made: madeHover, warehouse: warehouseHover, rollacoaster: rollacoasterHover, selfridges: selfridgesHover, harrods: harrodsHover, netflix: netflixHover, magazine: magazineHover}">
    <div v-if="isDesktop" class="follower hidden-tab"></div>
    <div class="container">
      <div class="row">
        <div class="col-1 hidden-sm"></div>
        <div class="col-4">
          <h1 data-aos="fade" data-aos-duration="1000">Work.</h1>
        </div>
        <div class="col-2 hidden-sm"></div>
        <div class="col-4">
          <h2 data-aos="fade" data-aos-duration="1000">Selected projects</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-1 hidden-sm"></div>
        <div class="col-10">
           <ul class="this hidden-desk" data-aos="fade" data-aos-duration="1000">
            <li id="topshop"><span>01.</span><a href="/topshop"><p class="underline" @mouseover="topshopHover = true" @mouseleave="topshopHover = false">Topshop.</p></a></li>
            <li id="asos"><span>02.</span><a href="/asos"><p class="underline" @mouseover="asosHover = true" @mouseleave="asosHover = false">ASOS.</p></a></li>
            <li id="made"><span>03.</span><a href="/made"><p class="underline" @mouseover="madeHover = true" @mouseleave="madeHover = false">Made.com.</p></a></li>
            <li id="warehouse"><span>04.</span><a href="/warehouse"><p class="underline" @mouseover="warehouseHover = true" @mouseleave="warehouseHover = false">Warehouse.</p></a></li>
            <li id="rollacoaster" ><span>05.</span><a href="/rollacoaster"><p class="underline" @mouseover="rollacoasterHover = true" @mouseleave="rollacoasterHover = false">Rollacoaster.</p></a></li>
            <li id="netflix"><span>06.</span><a href="/netflix"><p class="underline" @mouseover="netflixHover = true" @mouseleave="netflixHover = false">Netflix.</p></a></li>
            <li id="magazine"><span>07.</span><a href="/1883"><p class="underline" @mouseover="magazineHover = true" @mouseleave="magazineHover = false">1883 Magazine.</p></a></li>
          </ul> 

          <div class="list hidden" data-aos="fade" data-aos-duration="1000">
            <div class="rows">
              <div class="div-topshop"><span>01.</span><a href="/topshop"><p class="underline" @mouseover="topshopHover = true" @mouseleave="topshopHover = false">Topshop.</p></a></div>
              <div class="line"></div>
              <div class="div-asos"><span>02.</span><a href="/asos"><p class="underline" @mouseover="asosHover = true" @mouseleave="asosHover = false">ASOS.</p></a></div>
            </div>
            <div class="rows offset">
              <div class="div-made"><span>03.</span><a href="/made"><p class="underline" @mouseover="madeHover = true" @mouseleave="madeHover = false">Made.com.</p></a></div>
              <div class="line"></div>
              <div class="div-warehouse"><span>04.</span><a href="/warehouse"><p class="underline" @mouseover="warehouseHover = true" @mouseleave="warehouseHover = false">Warehouse.</p></a></div>
            </div>
            <div class="rows">
              <div class="div-rollacoaster" ><span>05.</span><a href="/rollacoaster"><p class="underline" @mouseover="rollacoasterHover = true" @mouseleave="rollacoasterHover = false">Rollacoaster.</p></a></div>
              <div class="line"></div>
              <div class="div-netflix"><span>06.</span><a href="/netflix"><p class="underline" @mouseover="netflixHover = true" @mouseleave="netflixHover = false">Netflix.</p></a></div>
            </div>
            <div class="rows offset">
              <div class="div-magazine"><span>07.</span><a href="/1883"><p class="underline" @mouseover="magazineHover = true" @mouseleave="magazineHover = false">1883 Magazine.</p></a></div>
              <div class="line"></div>
            </div>
          </div> 

          <img class="mobile-image hidden-desk imageasos" src="../images/ASOS-hover.png" alt="example of asos work">
          <img class="mobile-image hidden-desk imagetopshop" src="../images/Topshop-hover.png" alt="example of topshop work">
          <img class="mobile-image hidden-desk imagemade" src="../images/Made-hover.png" alt="example of made work">
          <img class="mobile-image hidden-desk imagewarehouse" src="../images/Warehouse-hover.png" alt="example of warehouse work">
          <img class="mobile-image hidden-desk imagerollacoaster" src="../images/Rollacoaster-hover.png" alt="example of rollacoaster work">
          <img class="mobile-image hidden-desk imagenetflix" src="../images/Netflix-hover.png" alt="example of netflix work">
          <img class="mobile-image hidden-desk imagemagazine" src="../images/1883-hover.png" alt="example of 1883 magazine work">

        </div>
      </div>
    </div>
    </div>
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
        asosHover: false,
        topshopHover: false,
        madeHover: false,
        warehouseHover: false,
        rollacoasterHover: false,
        selfridgesHover: false,
        harrodsHover: false,
        netflixHover: false,
        magazineHover: false,
        isMobile: window.innerWidth <= 768 ? true : false,
        isDesktop: true,
      }
    },
    components: {
      MainLayout, Nav, Footer
    },
    methods:{
      mobileScorll: function() {
         
          var asosY = document.querySelector('#asos').getBoundingClientRect().top;
          var topshopY = document.querySelector('#topshop').getBoundingClientRect().top;
          var madeY = document.querySelector('#made').getBoundingClientRect().top;
          var warehouseY = document.querySelector('#warehouse').getBoundingClientRect().top;
          var rollacoasterY = document.querySelector('#rollacoaster').getBoundingClientRect().top;
          var netflixY = document.querySelector('#netflix').getBoundingClientRect().top;
          var magazineY = document.querySelector('#magazine').getBoundingClientRect().top;

          switch (true) {
            case topshopY <= 400 && topshopY > 0:
                this.asosHover = false;
                this.topshopHover = true;
                this.madeHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.netflixHover = false;
                this.magazineHover = false;
              break;
            case asosY <= 800 && asosY > 0:
                
                this.asosHover = true;
                this.topshopHover = false;
                this.madeHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.netflixHover = false;
                this.magazineHover = false;
              break;
            case madeY <= 800 && madeY > 0:    
                this.asosHover = false;
                this.topshopHover = false;
                this.madeHover = true;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.netflixHover = false;
                this.magazineHover = false;
              break;
            case warehouseY <= 800 && warehouseY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.madeHover = false;
                this.warehouseHover = true;
                this.rollacoasterHover = false;
                this.netflixHover = false;
                this.magazineHover = false;
                
              break;
            case rollacoasterY <= 800 && rollacoasterY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.madeHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = true;
                this.netflixHover = false;
                this.magazineHover = false;
                
              break;
            case netflixY <= 800 && netflixY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.madeHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.netflixHover = true;
                this.magazineHover = false;

              break;
            case magazineY <= 800 && magazineY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.madeHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.netflixHover = false;
                this.magazineHover = true;

              break;
            default:
              this.asosHover = false;
              this.topshopHover = false;
              this.madeHover = false;
              this.warehouseHover = false;
              this.rollacoasterHover = false;
              this.netflixHover = false;
              this.magazineHover = false;
          }

        },
      checkDesktop: function() {
        var that = this;
        //check if desktop
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768 ) {
          this.isDesktop = false;
          document.addEventListener('scroll', function(e) {
              that.mobileScorll();
          });
        } else {
          //if desktop add follower div to follow cursor
          this.isDesktop = true;
          document.addEventListener('mousemove', function(e) {
            document.querySelector('.follower').style.left = (e.pageX + 20) + "px";
            document.querySelector('.follower').style.top = ( e.pageY + -90) + "px";
          });
        }
      }
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

  .hidden {
    display: none;
  }

  .main {
    padding: 0;
  }

  .work {
    background-color: #fff;
    transition: background-color 1s ease;
    padding: 90px 0 0 0;
  }

  .container, .row {
    height: unset;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 40px;
    letter-spacing: -0.04em;
    margin: 55px 0 0;
    position: relative;
    z-index: 2;
  }

  h2 {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 16px;
    margin: 90px 0 200px;
  }

  ul {
    list-style: none;
    z-index: 2;
    position: relative;
  }

  li {
    font-family: 'Roboto-medium', sans-serif;
    margin: 0 0 65vh;
    font-size: 24px;
    opacity: 1;
    transition: opacity 1s ease;
    position: relative;
    z-index: 2;
  }

  li p {
    font-family: 'Roboto-regular', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 35px;
    display: inline;
  }

  li span {
    font-size: 15px;
    padding: 0 15px 0 0;
  }

  .hidden-tab {
    display: none;
  }

  .this {
    margin: 0;
  }

  .mobile-image {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    transition: opacity ease .5s;
    max-width: 90%;
    z-index: 0;
  }

  .list .line {
    height: 3px;
    width: 100%; 
    background: #000;
  }

  .list .rows div {
    margin: 0 0 125px;
    font-size: 40px;
    color: black;
    transition: all 1s ease;
    position: relative;
    z-index: 1;
    width: fit-content;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.02em;
  }

  .list .rows {
    display: flex;
    position: relative;
  }

  .list .rows span {
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    margin-right: 15px;
    color: #000;
    transition: color 1s ease;
  }

  .list .rows p {
    font-size: 45px;
    font-family: 'Roboto-regular', sans-serif;
    letter-spacing: -0.02em;
    color: #000;
    transition: color 1s ease;
  }

    .list .rows .line {
      max-width: 500px;
      width: 25%;
      height: 3px;
      margin: 25px 30px;
      background: #000;
    }

    .list .rows.offset {
      margin: 0 0 0 70px;
    }

    .list .rows.no-margin div {
      margin: 0;
    }

    .list .rows.no-margin div.line {
      margin: 25px 30px;
    }

 /* transitions */

  .asos .imageasos {
    opacity: 1;
  }

  .topshop .imagetopshop {
    opacity: 1;
  }

  .made .imagemade {
    opacity: 1;
  }

  .warehouse .imagewarehouse {
    opacity: 1;
  }

  .rollacoaster .imagerollacoaster {
    opacity: 1;
  }

  .selfridges .imageselfridges {
    opacity: 1;
  }

  .harrods .imageharrods {
    opacity: 1;
  }

  .netflix .imagenetflix {
    opacity: 1;
  }

  .magazine .imagemagazine {
    opacity: 1;
  }


  .topshop.work {
    background-color: #C8C1BB;
  }

  .topshop .list .rows div:not(.div-topshop) span,
  .topshop .list .rows div:not(.div-topshop) p,
  .topshop .this li:not(#topshop) span,
  .topshop .this li:not(#topshop) p {
    color: #FFDBC5;
  }

  .topshop .list .line {
    background: #FFDBC5;
  }

  .asos.work {
    background-color: #D6BDAE;
  }

  .asos .list .rows div:not(.div-asos) span,
  .asos .list .rows div:not(.div-asos) p,
  .asos .this li:not(#asos) span,
  .asos .this li:not(#asos) p {
    color: #FFDBC5;
  }

  .asos .list .line {
    background: #FFDBC5;
  }

  .made.work {
    background-color: #B7B6BB;
  }

  .made .list .rows div:not(.div-made) span,
  .made .list .rows div:not(.div-made) p,
  .made .this li:not(#made) span,
  .made .this li:not(#made) p {
    color: #FFDBC5;
  }

  .made .list .line {
    background: #FFDBC5;
  }

  .warehouse.work {
    background-color: #AB9389;
  }

  .warehouse .list .rows div:not(.div-warehouse) span,
  .warehouse .list .rows div:not(.div-warehouse) p,
  .warehouse .this li:not(#warehouse) span,
  .warehouse .this li:not(#warehouse) p {
    color: #FFDBC5;
  }

  .warehouse .list .line {
    background: #FFDBC5;
  }

  .rollacoaster .list .rows div:not(.div-rollacoaster) span,
  .rollacoaster .list .rows div:not(.div-rollacoaster) p,
  .rollacoaster .this li:not(#rollacoaster) span,
  .rollacoaster .this li:not(#rollacoaster) p {
    color: #FFDBC5;
  }

  .rollacoaster .list .line {
    background: #FFDBC5;
  }

  .rollacoaster.work {
    background-color: #D6BDAE;
  }

  .selfridges.work {
    background-color: #C8C1BB;
  }

  .harrods.work {
    background-color: #C8C1BB;
  }

  .netflix .list .rows div:not(.div-netflix) span,
  .netflix .list .rows div:not(.div-netflix) p,
  .netflix .this li:not(#netflix) span,
  .netflix .this li:not(#netflix) p {
    color: #FFDBC5;
  }

  .netflix .list .line {
    background: #FFDBC5;
  }

  .netflix.work {
    background-color: #C8C1BB;
  }

  .magazine .list .rows div:not(.div-magazine) span,
  .magazine .list .rows div:not(.div-magazine) p,
  .magazine .this li:not(#magazine) span,
  .magazine .this li:not(#magazine) p {
    color: #FFDBC5;
  }

  .magazine .list .line {
    background: #FFDBC5;
  }

  .magazine.work {
    background-color: #AB9389;
  }

  .underline {
      display: inline;
      position: relative;
      overflow: hidden;
    }
    .underline:after {
      content: "";
      position: absolute;
      z-index: -1;
      right: 0;
      width: 0;
      bottom: -5px;
      background: #000;
      height: 3px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    .underline:hover:after,
    .underline:focus:after,
    .underline:active:after,
    .topshop #topshop .underline:after,
    .asos #asos .underline:after,
    .made #made .underline:after,
    .warehouse #warehouse .underline:after,
    .netflix #netflix .underline:after,
    .rollacoaster #rollacoaster .underline:after,
    .magazine #magazine .underline:after {
      left: 0;
      right: auto;
      width: 100%;
    }
  

  @media only screen and (max-width: 768px) {
    li {
      width: 100%;
    }

    .hidden {
      display: none;
    }

  }

  @media only screen and (min-width: 768px) {

      .hidden {
        display: block;
      }

      .list .rows p {
        font-size: 35px;
      }

      h1 {
        margin: 100px 0 90px;
        font-size: 55px;
      }

      .this {
        margin: 0 0 50px;
      }

      h2 {
        margin: 0 0 90px;
      }

    .hidden-desk {
      display: none;
    }

    .hidden-tab {
      display: block;
    }

    .follower {
      height: 198px;
      width: 442px;
      position: absolute;
      float: left;
      opacity: 0;
      transition: opacity 1s ease;
      background-size: contain;
      background-repeat: no-repeat;
    }


    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li, li:last-of-type {
      margin: 0 0 160px 0;
      width: 50%;
      box-sizing: border-box;
    }

    li:nth-child(even) {
      padding: 0 0 0 12%;
    }

    .image {
      top: 50%;
      transform: translateY(-50%);
      right: 10%;
    }

    .asos .follower {
      opacity: 1;
      background-image: url('../images/ASOS-hover.png');
    }

    .topshop .follower {
      opacity: 1;
      background-image: url('../images/Topshop-hover.png');
    }

    .made .follower {
      opacity: 1;
      background-image: url('../images/Made-hover.png');
    }

    .warehouse .follower {
      opacity: 1;
      background-image: url('../images/Warehouse-hover.png');
    }

    .rollacoaster .follower {
      opacity: 1;
      background-image: url('../images/Rollacoaster-hover.png');
    }

    /*.selfridges .follower {
      opacity: 1;
      background-image: url('../images/Topshop-hover.png');
    }

    .harrods .follower {
      opacity: 1;
      background-image: url('../images/Topshop-hover.png');
    }*/

    .netflix .follower {
      opacity: 1;
      background-image: url('../images/Netflix-hover.png');
    }

    .magazine .follower {
      opacity: 1;
      background-image: url('../images/1883-hover.png');
    }

  }

    @media only screen and (min-width: 1024px) {

      h1 {
        margin: 100px 0 145px;
      }

      h2 {
        margin: 135px 0 0;
      }

      .list .rows p {
        font-size: 45px;
      }
    }

</style>
