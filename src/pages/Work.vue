<template>
  <div>
    <passwordProtect
      :blocked="block"
      :tried="tried"
      @enterPassword="enterPassword"
    />
    <main-layout v-if="allowed" :class="{asos: asosHover, topshop: topshopHover, made: madeHover, warehouse: warehouseHover, rollacoaster: rollacoasterHover, selfridges: selfridgesHover, harrods: harrodsHover, sushito: sushitoHover, makers: makersHover, netflix: netflixHover, magazine: magazineHover, sheep: sheepHover, sivvi: sivviHover}">
      <Nav />
      <div class="work" >
      <div v-if="isDesktop" class="follower asos hidden-tab"></div>
      <div v-if="isDesktop" class="follower topshop hidden-tab"></div>
      <div v-if="isDesktop" class="follower made hidden-tab"></div>
      <div v-if="isDesktop" class="follower warehouse hidden-tab"></div>
      <div v-if="isDesktop" class="follower rollacoaster hidden-tab"></div>
      <div v-if="isDesktop" class="follower netflix hidden-tab"></div>
      <div v-if="isDesktop" class="follower magazine hidden-tab"></div>
      <div v-if="isDesktop" class="follower harrods hidden-tab"></div>
      <div v-if="isDesktop" class="follower selfridges hidden-tab"></div>
      <div v-if="isDesktop" class="follower sushito hidden-tab"></div>
      <div v-if="isDesktop" class="follower makers hidden-tab"></div>
      <div v-if="isDesktop" class="follower sheep hidden-tab"></div>
      <div v-if="isDesktop" class="follower sivvi hidden-tab"></div>
      <div class="container">
        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-10">
            <h1 data-aos="fade" data-aos-duration="1000">Work</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-20">
            <h2 data-aos="fade" data-aos-duration="1000">Selected projects</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-10">
            <ul class="this hidden-desk" data-aos="fade" data-aos-duration="1000">
              <li id="topshop"><span>01.</span><a href="/topshop"><p class="underline" @mouseover="topshopHover = true" @mouseleave="topshopHover = false">Topshop</p></a></li>
              <li id="asos"><span>02.</span><a href="/asos"><p class="underline" @mouseover="asosHover = true" @mouseleave="asosHover = false">ASOS</p></a></li>
              <li id="sheep"><span>03.</span><a href="/sheepinc"><p class="underline" @mouseover="sheepHover = true" @mouseleave="sheepHover = false">SheepInc</p></a></li>
              <li id="sivvi"><span>04.</span><a href="/sivvi"><p class="underline" @mouseover="sivviHover = true" @mouseleave="sivviHover = false">Sivvi</p></a></li>
              <li id="made"><span>05.</span><a href="/made"><p class="underline" @mouseover="madeHover = true" @mouseleave="madeHover = false">Made.com</p></a></li>
              <li id="harrods"><span>06.</span><a href="/harrods"><p class="underline" @mouseover="harrodsHover = true" @mouseleave="harrodsHover = false">Harrods</p></a></li>
              <li id="warehouse"><span>07.</span><a href="/warehouse"><p class="underline" @mouseover="warehouseHover = true" @mouseleave="warehouseHover = false">Warehouse</p></a></li>
              <li id="rollacoaster" ><span>08.</span><a href="/rollacoaster"><p class="underline" @mouseover="rollacoasterHover = true" @mouseleave="rollacoasterHover = false">Rollacoaster</p></a></li>
              <!--<li id="netflix"><span>07.</span><a href="/netflix"><p class="underline" @mouseover="netflixHover = true" @mouseleave="netflixHover = false">Netflix</p></a></li>
              <li id="magazine"><span>08.</span><a href="/1883"><p class="underline" @mouseover="magazineHover = true" @mouseleave="magazineHover = false">1883 Magazine</p></a></li>
              <li id="selfridges"><span>09.</span><a href="/selfridges"><p class="underline" @mouseover="selfridgesHover = true" @mouseleave="selfridgesHover = false">Selfridges</p></a></li>
              <li id="makers"><span>10.</span><a href="/makers50"><p class="underline" @mouseover="makersHover = true" @mouseleave="makersHover = false">Makers 50</p></a></li>
              <li id="sushito"><span>10.</span><a href="/sushito"><p class="underline" @mouseover="sushitoHover = true" @mouseleave="sushitoHover = false">Sushito</p></a></li>-->
            </ul> 

            <div class="list hidden" data-aos="fade" data-aos-duration="1000">
              <div class="rows">
                <div class="div-topshop"><span>01.</span><a href="/topshop"><p class="underline" @mouseover="topshopHover = true" @mouseleave="topshopHover = false">Topshop</p></a></div>
                <div class="line"></div>
                <div class="div-asos"><span>02.</span><a href="/asos"><p class="underline" @mouseover="asosHover = true" @mouseleave="asosHover = false">ASOS</p></a></div>
              </div>
              <div class="rows offset">
                <div class="div-sheep"><span>03.</span><a href="/sheepinc"><p class="underline" @mouseover="sheepHover = true" @mouseleave="sheepHover = false">SheepInc</p></a></div>
                <div class="line"></div>
                <div class="div-sivvi"><span>04.</span><a href="/sivvi"><p class="underline" @mouseover="sivviHover = true" @mouseleave="sivviHover = false">Sivvi</p></a></div>
              </div>
              <div class="rows ">
                <div class="div-made"><span>05.</span><a href="/made"><p class="underline" @mouseover="madeHover = true" @mouseleave="madeHover = false">MADE.com</p></a></div>
                <div class="line"></div>
                <div class="div-harrods"><span>06.</span><a href="/harrods"><p class="underline" @mouseover="harrodsHover = true" @mouseleave="harrodsHover = false">Harrods</p></a></div>
              </div>
              <div class="rows offset">
                <div class="div-warehouse"><span>07.</span><a href="/warehouse"><p class="underline" @mouseover="warehouseHover = true" @mouseleave="warehouseHover = false">Warehouse</p></a></div>
                <div class="line"></div>
                <div class="div-rollacoaster" ><span>08.</span><a href="/rollacoaster"><p class="underline" @mouseover="rollacoasterHover = true" @mouseleave="rollacoasterHover = false">Rollacoaster</p></a></div>
              </div>
              <!--<div class="rows offset last">
                <div class="div-sushito"><span>10.</span><a href="/sushito"><p class="underline" @mouseover="sushitoHover = true" @mouseleave="sushitoHover = false">Sushito</p></a></div>
                <div class="line"></div>
              
              </div>-->
            </div> 

            <img class="mobile-image hidden-desk imageasos" src="../images/ASOS-hover2.png" alt="example of asos work">
            <img class="mobile-image hidden-desk imagetopshop" src="../images/Topshop-hover2.png" alt="example of topshop work">
            <img class="mobile-image hidden-desk imageharrods" src="../images/Harrods-hover2.png" alt="example of harrods work">
            <img class="mobile-image hidden-desk imagemade" src="../images/Made-hover.png" alt="example of made work">
            <img class="mobile-image hidden-desk imagewarehouse" src="../images/Warehouse-hover.png" alt="example of warehouse work">
            <img class="mobile-image hidden-desk imagerollacoaster" src="../images/Rollacoaster-hover.png" alt="example of rollacoaster work">
            <img class="mobile-image hidden-desk imagenetflix" src="../images/Netflix-hover.png" alt="example of netflix work">
            <img class="mobile-image hidden-desk imagemagazine" src="../images/1883-hover.png" alt="example of 1883 magazine work">
            <img class="mobile-image hidden-desk imageselfridges" src="../images/Selfridges-hover.png" alt="example of selfridges work">
            <img class="mobile-image hidden-desk imagesushito" src="../images/Sushito-hover.png" alt="example of sushito work">
            <img class="mobile-image hidden-desk imagemakers" src="../images/Makers-hover.png" alt="example of makers work">
            <img class="mobile-image hidden-desk imagesheep" src="../images/Sheep-hover.png" alt="example of sheep inc. work">
            <img class="mobile-image hidden-desk imagesivvi" src="../images/Sivvi-hover.png" alt="example of Sivvi work">

          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {
    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
        asosHover: false,
        topshopHover: false,
        madeHover: false,
        warehouseHover: false,
        rollacoasterHover: false,
        selfridgesHover: false,
        makersHover: false,
        sushitoHover: false,
        harrodsHover: false,
        netflixHover: false,
        magazineHover: false,
        sheepHover: false,
        sivviHover: false,
        isMobile: window.innerWidth <= 768 ? true : false,
        isDesktop: true,
      }
    },
    components: {
      MainLayout, Nav, Footer, passwordProtect
    },
    methods:{
      mobileScorll: function() {
         
          var asosY = document.querySelector('#asos').getBoundingClientRect().top;
          var topshopY = document.querySelector('#topshop').getBoundingClientRect().top;
          var harrodsY = document.querySelector('#harrods').getBoundingClientRect().top;
          var madeY = document.querySelector('#made').getBoundingClientRect().top;
          var warehouseY = document.querySelector('#warehouse').getBoundingClientRect().top;
          var rollacoasterY = document.querySelector('#rollacoaster').getBoundingClientRect().top;
          // var netflixY = document.querySelector('#netflix').getBoundingClientRect().top;
          // var magazineY = document.querySelector('#magazine').getBoundingClientRect().top;
          // var selfridgesY = document.querySelector('#selfridges').getBoundingClientRect().top;
          //var sushitoY = document.querySelector('#sushito').getBoundingClientRect().top;
          // var makersY = document.querySelector('#makers').getBoundingClientRect().top;
          var sheepY = document.querySelector('#sheep').getBoundingClientRect().top;
          var sivviY = document.querySelector('#sivvi').getBoundingClientRect().top;

          switch (true) {
            case topshopY <= 400 && topshopY > 0:
                this.asosHover = false;
                this.topshopHover = true;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
              break;
            case asosY <= 800 && asosY > 0:
                
                this.asosHover = true;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
              break;
            case sheepY <= 800 && sheepY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = true;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
              break;
            case sivviY <= 800 && sivviY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = true;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
              break;
            case madeY <= 800 && madeY > 0:    
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = true;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
              break;
            case harrodsY <= 800 && harrodsY > 0:
                
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = true;
              break;
            case warehouseY <= 800 && warehouseY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = true;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
                
              break;
            case rollacoasterY <= 800 && rollacoasterY > 0:
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = true;
                this.harrodsHover = false;
                
              break;
            // case netflixY <= 800 && netflixY > 0:
            //     this.asosHover = false;
            //     this.topshopHover = false;
            //     this.madeHover = false;
            //     this.warehouseHover = false;
            //     this.rollacoasterHover = false;
            //     this.netflixHover = true;
            //     this.magazineHover = false;
            //     this.harrodsHover = false;
            //     this.selfridgesHover = false;
            //     this.sushitoHover = false;
            //     this.makersHover = false;

            //   break;
            // case magazineY <= 800 && magazineY > 0:
            //     this.asosHover = false;
            //     this.topshopHover = false;
            //     this.madeHover = false;
            //     this.warehouseHover = false;
            //     this.rollacoasterHover = false;
            //     this.netflixHover = false;
            //     this.harrodsHover = false;
            //     this.magazineHover = true;
            //     this.selfridgesHover = false;
            //     this.sushitoHover = false;
            //     this.makersHover = false;

            //   break;
            // case selfridgesY <= 800 && selfridgesY > 0:
            //     this.asosHover = false;
            //     this.topshopHover = false;
            //     this.madeHover = false;
            //     this.warehouseHover = false;
            //     this.rollacoasterHover = false;
            //     this.netflixHover = false;
            //     this.harrodsHover = false;
            //     this.magazineHover = false;
            //     this.selfridgesHover = true;
            //     this.sushitoHover = false;
            //     this.makersHover = false;

            //   break;

            // case sushitoY <= 800 && sushitoY > 0:
            //     this.asosHover = false;
            //     this.topshopHover = false;
            //     this.madeHover = false;
            //     this.warehouseHover = false;
            //     this.rollacoasterHover = false;
            //     this.netflixHover = false;
            //     this.harrodsHover = false;
            //     this.magazineHover = false;
            //     this.selfridgesHover = false;
            //     this.sushitoHover = true;
            //     this.makersHover = false;

            //   break;

            // case makersY <= 800 && makersY > 0:
            //     this.asosHover = false;
            //     this.topshopHover = false;
            //     this.madeHover = false;
            //     this.warehouseHover = false;
            //     this.rollacoasterHover = false;
            //     this.netflixHover = false;
            //     this.harrodsHover = false;
            //     this.magazineHover = false;
            //     this.selfridgesHover = false;
            //     this.sushitoHover = false;
            //     this.makersHover = true;

            //   break;
            default:
                this.asosHover = false;
                this.topshopHover = false;
                this.sheepHover = false;
                this.madeHover = false;
                this.sivviHover = false;
                this.warehouseHover = false;
                this.rollacoasterHover = false;
                this.harrodsHover = false;
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
            document.querySelector('.follower.asos').style.left = (e.pageX - 100) + "px";
            document.querySelector('.follower.asos').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.topshop').style.left = (e.pageX - 110) + "px";
            document.querySelector('.follower.topshop').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.harrods').style.left = (e.pageX - 100) + "px";
            document.querySelector('.follower.harrods').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.made').style.left = (e.pageX - 100) + "px";
            document.querySelector('.follower.made').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.warehouse').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.warehouse').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.rollacoaster').style.left = (e.pageX - 150) + "px";
            document.querySelector('.follower.rollacoaster').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.netflix').style.left = (e.pageX - 100) + "px";
            document.querySelector('.follower.netflix').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.magazine').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.magazine').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.selfridges').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.selfridges').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.sushito').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.sushito').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.makers').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.makers').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.sheep').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.sheep').style.top = ( e.pageY + -90) + "px";
            document.querySelector('.follower.sivvi').style.left = (e.pageX - 130) + "px";
            document.querySelector('.follower.sivvi').style.top = ( e.pageY + -90) + "px";
          });
        }
      },
      enterPassword: function(val) {
        if (val === "Farfetch") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed3", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    }, 
    mounted: function() {
      var that = this;

      this.checkDesktop();
      window.addEventListener('resize', function(e) {
        that.checkDesktop();
      });

      if (localStorage.getItem("allowed3") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
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
    transition: background-color 1s ease;
    padding: 90px 0 0 0;
  }

  .container, .row {
    height: unset;
  }

  h1 {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
    font-size: 50px;
    margin: 55px 0 0;
    position: relative;
    z-index: 2;
    font-weight: 300;
  }

  h2 {
    font-family: 'Roboto-medium', sans-serif!important;
    font-size: 14px;
    font-weight: 300;
    margin: 100px 0 200px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    z-index: 2;
    position: relative;
  }

  li {
    font-family: 'Roboto-regular', sans-serif;
    margin: 0 0 65vh;
    font-size: 24px;
    opacity: 1;
    transition: opacity 1s ease;
    position: relative;
    z-index: 2;
    letter-spacing: 2px;
  }

  li p {
    display: inline;
    font-size: 25px;
    font-family: 'Roboto-regular', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
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
    height: 2px;
    width: 100%; 
    background: #000;
  }

  .list .rows div {
    margin: 0 0 125px;
    font-size: 25px;
    color: black;
    transition: all 1s ease;
    position: relative;
    z-index: 1;
    width: fit-content;
    font-family: 'Roboto-regular', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
  }


  .list .rows {
    display: flex;
    position: relative;
  }

  .list .rows span {
    font-size: 16px;
    font-family: 'Roboto-regular', sans-serif;
    margin-right: 10px;
    color: #000;
    transition: color 1s ease;
  }

  .list .rows p {
    font-size: 25px;
    font-family: 'Roboto-regular', sans-serif;
    letter-spacing: 2px;
    color: #000;
    transition: color 1s ease;
  }

    .list .rows .line {
      max-width: 500px;
      width: 30vw;
      height: 2px;
      margin: 15px 30px;
      background: #000;
    }

    .list .rows.offset {
      margin: 0 0 0 120px;
    }

    .list .rows.no-margin div {
      margin: 0;
    }

    .list .rows.no-margin div.line {
      margin: 15px 30px;
    }

 /* transitions */

  .asos .imageasos {
    opacity: 1;
  }

  .topshop .imagetopshop {
    opacity: 1;
  }

  .sheep .imagesheep {
    opacity: 1;
  }

  .sivvi .imagesivvi {
    opacity: 1;
  }

  .harrods .imageharrods {
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

  .netflix .imagenetflix {
    opacity: 1;
  }

  .magazine .imagemagazine {
    opacity: 1;
  }

    .selfridges .imageselfridges {
    opacity: 1;
  }
    .sushito .imagesushito {
    opacity: 1;
  }
    .makers .imagemakers {
    opacity: 1;
  }


  .topshop.work {
    background-color: #C8C1BB;
  }

  .topshop .list .rows div:not(.div-topshop) span,
  .topshop .list .rows div:not(.div-topshop) p,
  .topshop .this li:not(#topshop) span,
  .topshop .this li:not(#topshop) p {
    color: #000;
  }

  .topshop .list .line {
    background: #000;
  }

  .asos.work {
    background-color: #D6BDAE;
  }

  .asos .list .rows div:not(.div-asos) span,
  .asos .list .rows div:not(.div-asos) p,
  .asos .this li:not(#asos) span,
  .asos .this li:not(#asos) p {
    color: #000;
  }

  .asos .list .line {
    background: #000;
  }

  .made.work {
    background-color: #B7B6BB;
  }

  .made .list .rows div:not(.div-made) span,
  .made .list .rows div:not(.div-made) p,
  .made .this li:not(#made) span,
  .made .this li:not(#made) p {
    color: #000;
  }

  .harrods .list .line {
    background: #000;
  }

  .harrods.work {
    background-color: #B7B6BB;
  }

  .harrods .list .rows div:not(.div-harrods) span,
  .harrods .list .rows div:not(.div-harrods) p,
  .harrods .this li:not(#harrods) span,
  .harrods .this li:not(#harrods) p {
    color: #000;
  }

  .harrods .list .line {
    background: #000;
  }

  .warehouse.work {
    background-color: #AB9389;
  }

  .warehouse .list .rows div:not(.div-warehouse) span,
  .warehouse .list .rows div:not(.div-warehouse) p,
  .warehouse .this li:not(#warehouse) span,
  .warehouse .this li:not(#warehouse) p {
    color: #000;
  }

  .warehouse .list .line {
    background: #000;
  }

  .sheep.work {
    background-color: #AB9389;
  }

  .sheep .list .rows div:not(.div-sheep) span,
  .sheep .list .rows div:not(.div-sheep) p,
  .sheep .this li:not(#sheep) span,
  .sheep .this li:not(#sheep) p {
    color: #000;
  }

  .sheep .list .line {
    background: #000;
  }

  .sivvi.work {
    background-color: #AB9389;
  }

  .sivvi .list .rows div:not(.div-sivvi) span,
  .sivvi .list .rows div:not(.div-sivvi) p,
  .sivvi .this li:not(#sivvi) span,
  .sivvi .this li:not(#sivvi) p {
    color: #000;
  }

  .sivvi .list .line {
    background: #000;
  }

  .rollacoaster .list .rows div:not(.div-rollacoaster) span,
  .rollacoaster .list .rows div:not(.div-rollacoaster) p,
  .rollacoaster .this li:not(#rollacoaster) span,
  .rollacoaster .this li:not(#rollacoaster) p {
    color: #000;
  }

  .rollacoaster .list .line {
    background: #000;
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
    color: #000;
  }

  .netflix .list .line {
    background: #000;
  }

  .netflix.work {
    background-color: #C8C1BB;
  }

  .magazine .list .rows div:not(.div-magazine) span,
  .magazine .list .rows div:not(.div-magazine) p,
  .magazine .this li:not(#magazine) span,
  .magazine .this li:not(#magazine) p {
    color: #000;
  }

  .magazine .list .line {
    background: #000;
  }

  .magazine.work {
    background-color: #AB9389;
  }

  .selfridges .list .rows div:not(.div-selfridges) span,
  .selfridges .list .rows div:not(.div-selfridges) p,
  .selfridges .this li:not(#selfridges) span,
  .selfridges .this li:not(#selfridges) p {
    color: #000;
  }

  .selfridges .list .line {
    background: #000;
  }

  .selfridges.work {
    background-color: #AB9389;
  }

  .sushito .list .rows div:not(.div-sushito) span,
  .sushito .list .rows div:not(.div-sushito) p,
  .sushito .this li:not(#sushito) span,
  .sushito .this li:not(#sushito) p {
    color: #000;
  }

  .sushito .list .line {
    background: #000;
  }

  .sushito.work {
    background-color: #AB9389;
  }

  .makers .list .rows div:not(.div-makers) span,
  .makers .list .rows div:not(.div-makers) p,
  .makers .this li:not(#makers) span,
  .makers .this li:not(#makers) p {
    color: #000;
  }

  .makers .list .line {
    background: #000;
  }

  .makers.work {
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
      height: 2px;
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
    .harrods #harrods .underline:after,
    .warehouse #warehouse .underline:after,
    .sheep #sheep .underline:after,
    .sivvi #sivvi .underline:after,
    .netflix #netflix .underline:after,
    .rollacoaster #rollacoaster .underline:after,
    .magazine #magazine .underline:after,
    .selfridges #selfridges .underline:after,
    .sushito #sushito .underline:after,
    .makers #makers .underline:after {
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

      h1 {
        margin: 60px 0 90px;
        font-size: 50px;
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
      height: 231px;
      width: 315px;
      position: absolute;
      float: left;
      opacity: 0;
      transition: opacity .5s ease;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .follower.asos {
      background-image: url('../images/ASOS-hover2.png');
    }

    .follower.topshop {
      background-image: url('../images/Topshop-hover2.png');
    }

    .follower.harrods {
      background-image: url('../images/Harrods-hover2.png');
    }

    .follower.made {
      background-image: url('../images/Made-hover.png');
    }

    .follower.warehouse {
      background-image: url('../images/Warehouse-hover.png');
    }

    .follower.sheep {
      background-image: url('../images/Sheep-hover.png');
    }

    .follower.sivvi {
      background-image: url('../images/Sivvi-hover.png');
    }

    .follower.rollacoaster {
      background-image: url('../images/Rollacoaster-hover.png');
    }

   .follower.netflix {
      background-image: url('../images/Netflix-hover.png');
    }

    .follower.magazine {
      background-image: url('../images/1883-hover.png');
    }

    .follower.selfridges {
      background-image: url('../images/Selfridges-hover.png');
    }

    .follower.sushito {
      background-image: url('../images/Sushito-hover.png');
    }

    .follower.makers {
      background-image: url('../images/Makers-hover.png');
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

    .asos .follower.asos {
      opacity: 1;
    }

    .topshop .follower.topshop {
      opacity: 1;
    }

    .made .follower.made {
      opacity: 1;
    }

    .harrods .follower.harrods {
      opacity: 1;
    }

    .warehouse .follower.warehouse {
      opacity: 1;
    }

    .sheep .follower.sheep {
      opacity: 1;
    }

    .sivvi .follower.sivvi {
      opacity: 1;
    }

    .rollacoaster .follower.rollacoaster {
      opacity: 1;
    }

    .netflix .follower.netflix {
      opacity: 1;
    }

    .magazine .follower.magazine {
      opacity: 1;
    }

    .selfridges .follower.selfridges {
      opacity: 1;
    }

    .sushito .follower.sushito {
      opacity: 1;
    }

    .makers .follower.makers {
      opacity: 1;
    }

      .list .rows.last div:not(.line) {
        margin: 0 0 225px;
      }
    

  }

    @media only screen and (min-width: 1024px) {

      h1 {
        margin: 60px 0 0;
      }

      h2 {
        margin: 100px 0 200px;
      }
    }

@media only screen and (min-width: 1400px) {
      .list .rows div {
        margin: 0 0 150px;
      }

      h1 {
        font-size: 60px;
      }
}

@media only screen and (min-width: 1145px) {
  .list .rows p {
    font-size: 25px;
  }
}

</style>

<style>
  .main {
    background: #F7F6F3;
    transition: background 1s ease;
  }

  .main.asos,
  .main.topshop,
  .main.made,
  .main.harrods,
  .main.netflix,
  .main.magazine,
  .main.warehouse,
  .main.sheep,
  .main.sivvi,
  .main.selfridges,
  .main.sushito,
  .main.makers,
  .main.rollacoaster {
    background: #D5D1CD;
  }
</style>
