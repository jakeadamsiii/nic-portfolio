<template>
  <div class="about" :class="{hover: hover, noFollower: noFollower}">
  <main-layout>
    <Nav />

    <div class="page-heading">
      <div class="follower"></div>
      <div class="container" >
        <div class="row">
            <div class="col-1 hidden-sm"></div>
            <div class="col-4">
              <h1 class="change" data-aos="fade" data-aos-duration="1000">About.</h1>
            </div>
            <div class="col-2 hidden-sm">
              <div data-aos="fade" data-aos-duration="1000" class="line"></div>
            </div>
            <div class="col-4" >
              <p @mouseover="hover = true" @mouseleave="hover = false" data-aos="fade" data-aos-duration="1000" class="sub-header change">Hey, Im Nic, a senior designer with over 8 years experience designing for ecommerce brands, publication houses and design agencies.</p>
            </div>
          </div>
      </div>
    </div>

    <div class="container" >
      <div class="row row-2">
        <div class="col-3 hidden-sm"></div>
        <div class="col-5" data-aos="fade" data-aos-duration="1000">
          <p class="sub change">I have a diverse range of experience in a number of different disciplinaries including UI and UX design, print and publication design and art direction.</p>
          <p class="para change">With my experience of designing in house for large fashion and lifestyle brands and my knowledge of ecommerce as a whole, I am greatly successful at designing effective solutions that have proved their value whilst taking into account the business needs and priorities.  I have a diverse background of experience and always excited by new and interesting projects.</p>
        </div>
      </div>
    </div>

    <PageHeading 
      :title="'Skills.'"
      :hover="hover"
      :list="['UI / UX', 'Prototyping', 'Art Direction', 'Visual Design', 'Mobile and Web Design', 'HTML / CSS']"
      :listTwo="['Product Design', 'Video Editing / Animation', 'Iconography', 'Print / Packaging Design', 'Branding', 'Typography']"
    />

    <ScrollList 
      :title="'Clients.'"
      :hover="hover"
      @clientHover="clientHover" 
      :brandList="[{ name: 'Rollacoaster', href: '/rollacoaster'}, {name:'Harrods', href: ''}, {name:'Warehouse', href:'/warehouse'}, {name:'Made.com', href:'/made'}, {name:'Netflix', href:'/netflix'}, {name:'POP Magazine', href:''}, {name:'ASOS', href:'/asos'}, {name:'Selfridges', href:''}, {name:'Topshop', href:'/topshop'}, {name:'Topman', href:''}, {name:'Velour Magazine', href:''}, {name:'Ivy Park', href:''}, {name:'1883 Magazine', href:'/1883'}, { name: 'Rollacoaster', href: '/rollacoaster'}, {name:'Harrods', href: ''}, {name:'Warehouse', href:'/warehouse'}, {name:'Made.com', href:'/made'}, {name:'Netflix', href:'/netflix'}, {name:'POP Magazine', href:''}, {name:'ASOS', href:'/asos'}, {name:'Selfridges', href:''}, {name:'Topshop', href:'/topshop'}, {name:'Topman', href:''}, {name:'Velour Magazine', href:''}, {name:'Ivy Park', href:''}, {name:'1883 Magazine', href:'/1883'}]"
    />

    <div class="container" >
      <div class="row  work-container">
        <div class="col-7 hidden-sm"></div>
        <div class="col-4">
          <div data-aos="fade" data-aos-duration="1000" class="line line2"></div>
          <a data-aos="fade" data-aos-duration="1000" class="work" href="/work" @mouseover="clientHover" @mouseleave="clientHover" ><p class="change">View my work here</p></a>
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
  import PageHeading from '../components/PageHeading.vue'
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
      MainLayout, PageHeading, Nav, ScrollList, Footer
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
    background: #fff;
    transition: background 1s ease;
  }

  .about.hover {
    background: #D6BDAE;
  }

  .sub {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 16px;
    float: left;
    width: 100%;
    margin: 45px 0 0 ;
  }

  .para {
    font-size: 12px;
    float: right;
    width: 100%;
    margin: 30px 0 0 ;
  }

  .page-heading {
    width: 100%;
    padding: 170px 0 100px;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 55px;
    margin: 0;
  }

  .sub-header {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.04em;
    font-size: 35px;
    float: left;
    width: 100%;
    margin: 45px 0 0 ;
  }

  .list, .list-two  {
    list-style: none;
    width: 100%;
  }

  .list {
    margin: 65px 0 0 ;
  }

  .list li, .list-two li  {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 20px;
  }

  .work {
    font-family: 'Roboto-regular', sans-serif;
    font-size: 30px;
  }

  .work p{
    text-decoration: underline;
    max-width: 160px;
  }

  .work p,
  div.line2 {
    width: 45%;
    display: inline-block;
    float: left;
  }

  div.line2 {
    margin-top: 8px;
    margin-right: 25px;
  }

  .work-container {
    padding: 120px 0 150px;
  }

  .line {
    height: 3px;
    width: 90%;
    background: #000;
    transition: all 1s ease;
    margin-top: 50px;
  }

  @media only screen and (min-width: 768px) {

  .sub {
    width: 50%;
    margin: 0;
    float: left;
  }

  .para {
    width: 40%;
    margin: 0;
    float: right;
  }

  .row-2 {
    padding: 80px 0 0;
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

  .page-heading,
  .container {
    background: #fff;
    transition: background 1s ease;
  }

  .hover .page-heading,
  .hover .container {
    background: #D6BDAE;
  }

  .change {
    color: black;
    transition: all 1s ease;
  }  

  .hover .change {
    color: #FFDBC5;
  }

  .hover .line {
    background: #FFDBC5;
  }

  .page-heading {
    padding: 150px 0 150px;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 55px;
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

  .work-container {
    padding: 180px 0 220px;
  }

  .noFollower .follower {
    opacity: 0!important;
  }
  
  div.line2 {
    margin-right: 30px;
  }

  .hover .sub-header {
    color: #000;
  }



  .noFollower.hover .work p {
    color: #000;
  }
}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    div.line2 {
      width: 25%;
      margin-left: 45%;
    }
  }

</style>