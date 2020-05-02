<template>
  <main-layout>
    <Nav />

    <ProjectHeading 
      :title="'404.'"
      :sub="'Page not found.'"
      :para="`Click below to return to the homepage whilst I fire my developer.`"

    />

     <div class="container" >
      <div class="row">
          <div class="col-7 hidden-sm"></div>
          <div class="col-4" >
            <a href="/">
              <p data-aos="fade" data-aos-duration="1000" class="home">Return home</p>
            </a>
          </div>
        </div>
    </div>

    <FallingImage 
      :left= "'0'"
      :delay= "'.5s'"
      :duration= "'1s'"
    />
    <FallingImage 
      :left= "'10%'"
      :delay= "'.75s'"
      :duration= "'2s'"
    />
    <FallingImage 
      :left= "'22%'"
      :delay= "'1s'"
      :duration= "'1.5s'"
    />
    <FallingImage 
      :left= "'70%'"
      :delay= "'.5s'"
      :duration= "'1.1s'"
    />
    <FallingImage 
      :left= "'66%'"
      :delay= "'.5s'"
      :duration= "'1.8s'"
    />
    <FallingImage 
      :left= "'43%'"
      :delay= "'1.5s'"
      :duration= "'2s'"
    />
    <FallingImage 
      :left= "'82%'"
      :delay= "'1.1s'"
      :duration= "'1.8s'"
    />
    <FallingImage 
      :left= "'70%'"
      :delay= "'2.5s'"
      :duration= "'2.25s'"
    />
    <FallingImage 
      :left= "'35%'"
      :delay= "'.8s'"
      :duration= "'2s'"
    />
    <FallingImage 
      :left= "'89%'"
      :delay= "'2.9s'"
      :duration= "'2.7s'"
    />
    <FallingImage 
      :left= "'92%'"
      :delay= "'1.5s'"
      :duration= "'1.2s'"
    />
    <FallingImage 
      :left= "'21%'"
      :delay= "'.5s'"
      :duration= "'3s'"
    />
    <FallingImage 
      :left= "'53%'"
      :delay= "'.65s'"
      :duration= "'2.2s'"
    />
    <FallingImage 
      :left= "'15%'"
      :delay= "'.8s'"
      :duration= "'1.9s'"
    />

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Nav from '../components/Nav.vue'
  import VLink from '../components/VLink.vue'
  import ProjectHeading from '../components/ProjectHeading.vue'
  import FallingImage from '../components/FallingImage.vue'

  export default {
    components: {
      MainLayout, Nav, ProjectHeading, VLink, FallingImage
    },
    mounted: function() {
      //deal with animation issue
      setTimeout(function(){ 
        
        document.querySelector('.home').classList.add('aos-animate');

      }, 200);
    }
  }
</script>

<style>

.home {
  font-size: 1rem;
  text-decoration: underline;
  position: absolute;
  top: -50px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.02em;
}

.main {
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.container, .row {
  height: unset!important;
}

a {
  color: black;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.02em;
}

html {
  overflow: hidden;
}

@media only screen and (max-width: 767px) {
  .sub {
    margin: 0 0 15px 0!important;
  }
}


</style>
