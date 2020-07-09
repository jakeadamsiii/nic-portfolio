<template>
  <div class="about" :class="{hover: hover, noFollower: noFollower}">
  <main-layout>
    <Nav />

    <div class="page-heading">
      <div class="follower"></div>
      <div class="container" >
        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-10">
            <h1 data-aos="fade" data-aos-duration="1000">About</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-1 hidden-sm"></div>
          <div class="col-20">
            <h2 data-aos="fade" data-aos-duration="1000">My experience</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-3 hidden-sm"></div>
          <div class="col-8">
            <p @mouseover="hover = true" @mouseleave="hover = false" data-aos="fade" data-aos-duration="1000" data-aos-offset="-400" class="sub-header change">I am a <span class="upper">Senior designer</span> with over <span>nine years experience</span> designing for <span>retail brands, publication houses</span> and <span>design agencies.</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" >
      <div class="row row-2">
        <div class="col-3 hidden-sm"></div>
        <div class="col-2" data-aos="fade" data-aos-duration="1000">
          <p class="sub change">I have a diverse range of experience in a number of different disciplinaries including UI and UX design, print and publication design and art direction.</p>
        </div>
        <div class="col-1 hidden-sm"></div>
        <div class="col-2" data-aos="fade" data-aos-duration="1000">
          <p class="para change">With my experience of designing in house for large fashion and lifestyle brands and my knowledge of ecommerce as a whole, I am greatly successful at designing effective solutions that have proved their value whilst taking into account the business needs and priorities.  I have a diverse background of experience and always excited by new and interesting projects.</p>
        </div>
      </div>
    </div>

    <Skills
      :title="'Skills'"
      :hover="hover"
      :list="['UI / UX', 'Prototyping', 'Art Direction', 'Visual Design', 'Mobile and Web Design', 'HTML / CSS']"
      :listTwo="['Product Design', 'Video Editing / Animation', 'Iconography', 'Print / Packaging Design', 'Branding', 'Typography']"
    />

    <ScrollList 
      :title="'Clients'"
      :hover="hover"
      @clientHover="clientHover" 
      :brandList="[{ name: 'Rollacoaster', href: '/rollacoaster'}, {name:'Harrods', href: '/harrods'}, {name:'Warehouse', href:'/warehouse'}, {name:'Made.com', href:'/made'}, {name:'Netflix', href:'/netflix'}, {name:'POP Magazine', href:''}, {name:'ASOS', href:'/asos'}, {name:'Selfridges', href:'/selfridges'}, {name:'Topshop', href:'/topshop'}, {name:'Topman', href:''}, {name:'Velour Magazine', href:''}, {name:'Ivy Park', href:''}, {name:'1883 Magazine', href:'/1883'}, { name: 'Rollacoaster', href: '/rollacoaster'}, {name:'Harrods', href: '/harrods'}, {name:'Warehouse', href:'/warehouse'}, {name:'Made.com', href:'/made'}, {name:'Netflix', href:'/netflix'}, {name:'POP Magazine', href:''}, {name:'ASOS', href:'/asos'}, {name:'Selfridges', href:'/selfridges'}, {name:'Topshop', href:'/topshop'}, {name:'Topman', href:''}, {name:'Velour Magazine', href:''}, {name:'Ivy Park', href:''}, {name:'1883 Magazine', href:'/1883'}]"
    />

    <div class="container" >
      <div class="row  work-container work1" data-aos="fade" data-aos-duration="1000">
        <div class="col-5 hidden-sm"></div>
          <div class="flex">
          <div class="col-3">
             <div class="line line2"></div>
          </div>
          <div class="col-3" >
            <a class="work underline" href="/work" ><p @mouseover.stop="clientHover" @mouseleave.stop="clientHover" class="change">View my work here</p></a>
          </div>
        </div>
      </div>

      <div class="row  work-container" data-aos="fade" data-aos-duration="1000">
        <div class="col-5 hidden-sm"></div>
          <div class="flex">
          <div class="col-3">
             <div class="line line2"></div>
          </div>
          <div class="col-3" >
            <a class="work underline" href="../../CV-Nic-Roberts.pdf" target="_blank" ><p @mouseover.stop="clientHover" @mouseleave.stop="clientHover" class="change">View my cv here</p></a>
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
  import Skills from '../components/Skills.vue'
  import ScrollList from '../components/ScrollList.vue'
  import Footer from '../components/Footer.vue'


 export default {
    data: function () {
      return {
        hover: false,
        noFollower: false
      }
    },
    components: {
      MainLayout, Skills, Nav, ScrollList, Footer
    },
    methods: {
      clientHover: function() {
        this.hover = !this.hover;
        this.noFollower = !this.noFollower;
      }
    }, 
    mounted: function() {
      document.addEventListener('mousemove', function(e) {
        document.querySelector('.follower').style.left = (e.pageX + 20) + "px";
        document.querySelector('.follower').style.top = ( e.pageY ) + "px";
      });
    }
  }
</script>

<style scoped>

  .about {
    background: #F7F6F3;
    transition: background 1s ease;
  }

  .about.hover {
    background: #D5D1CD;
  }

  .flex {
    display: flex;
  }


  .sub {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 14px;
    float: left;
    width: 100%;
    margin: 105px 0 0 ;
  }

  .para {
    font-size: 12px;
    float: right;
    width: 100%;
    margin: 30px 0 0 ;
  }

  .page-heading {
    width: 100%;
    padding: 90px 0 90px;
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
    font-family: 'Roboto-medium', sans-serif;
    font-size: 14px;
    margin: 100px 0 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .sub-header {
    position: relative;
    line-height: 45px;
    font-size: 35px;
    font-family: 'spectral-light-italic', serif;
    letter-spacing: -3px;
    font-weight: 300;
    text-align: right;
    margin: 90px 0 0 ;
  }

  .sub-header:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 130px;
    top: calc(100% + 20px);
    right: 0;
    background: #000;
  }

  .sub-header span {
    font-family: 'spectral-light', serif;
    letter-spacing: -4px;
  }

  .sub-header span.upper {
    text-transform: uppercase;
  }

  .list, .list-two  {
    list-style: none;
    width: 100%;
  }

  .list {
    margin: 65px 0 0 ;
  }

  .list li, .list-two li  {
    font-family: 'Roboto-medium', sans-serif;
    font-size: 20px;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #000;
    transition: all 1s ease;
    margin-top: 30px;
  }

  .work .change {
    font-size: 16px;
    font-family: 'Roboto-medium', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {

  .row-2 {
    padding: 80px 0 0;
  }

   .sub {
     margin: 0;
   }

  .follower {
    height: 297px;
    width: 228px;
    position: absolute;
    float: left;
    opacity: 0 ;
    transition: opacity 1s ease;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../images/me.jpg');
  }

  .hover .follower {
    opacity: 1;
  } 

  .page-heading {
    padding: 90px 0 150px;
  }

  h1 {
      margin: 60px 0 90px;
      font-size: 50px;
    }

    h2 {
      margin: 0 0 90px;
    }

  .list {
    width: 50%;
    margin: 0;
    float: left;
  }

  .list-two {
    width: 40%;
    margin: 0;
    float: right;
  }

  .noFollower .follower {
    opacity: 0!important;
  }

}

  /* view work */

  .view-work {
    position: relative;
    z-index: 9;
  }

 .work-container {
    padding: 0 0 150px;
  }

  .work-container.work1 {
    padding: 0 0 65px;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #000;
    transition: all 1s ease;
    margin-top: 30px;
  }


  .work p{
    font-size: 16px;
    font-family: 'Roboto-medium', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .work p,
  div.line2 {
    display: inline-block;
  }

  div.line2 {
    margin-top: 8px;
    float: left;
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
    .underline:active:after {
      left: 0;
      right: auto;
      width: 100%;
    }

 @media only screen and (max-width: 768px) {

   .work p {
      max-width: 130px;
   }
 }

 @media only screen and (min-width: 768px) {

  .work-container {
    padding: 80px 0 220px;
  }

  .work-container.work1 {
    padding: 80px 0 0;
  }


  .work p {
    font-size: 30px;
    text-decoration: none;
  }

  .sub-header {
    margin: 60px 0 0 0;
  }

  .sub-header:after {
    height: 10vh
  }
 }

 @media only screen and (max-width: 320px) {
  .sub-header  {
    line-height: 40px;
    font-size: 35px;
  }
 }

@media only screen and (min-width: 1024px) {
   .flex {
    display: block
  }

  h1 {
    margin: 60px 0 0;
  }

  h2 {
    margin: 100px 0 0;
  }

  .sub-header {
    font-size: 40px;
  }

  .sub-header:after {
    height: 20vh
  }

    .sub {
    margin: 0;
    float: left;
  }

  .para {
    margin: 0;
    float: right;
  }

}

@media only screen and (min-width: 1400px) {

      h1 {
        font-size: 60px;
      }

      .sub-header {
        font-size: 50px;
        line-height: 60px;
      }
}

</style>
