<template>
  <main-layout class="error">
    <Nav />

    <div class="container" >
        <div class="row" >
          <div class="col-1 hidden-sm"></div>
          <div class="col-10">
            <div class="headings">
              <h2>404</h2>
              <h2>Page not found</h2>
            </div>
          </div>
      </div>
      <div class="row" >
          <div class="col-2 hidden-sm"></div>
          <div class="col-8">
            <div class="copy">
              <p>Sorry :( This page no longer exists</p>
              <router-link to="/">
                <p class="underline">GO BACK TO HOMEPAGE</p>
              </router-link>
            </div>
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
      :left= "'71%'"
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
  import ProjectHeading from '../components/ProjectHeading.vue'
  import FallingImage from '../components/FallingImage.vue'
   

  export default {
    components: {
      MainLayout, Nav, ProjectHeading, FallingImage 
    },
    mounted: function() {
    }
  }
</script>

<style >

html, body {
  overflow-y: hidden;
}

.error {
  height: 100vh;
  background: #000;
}

.error p,
.error a,
.error h2,
.error li {
  color: #fff!important;
}

.error .row {
  height: auto;
}

.headings {
  margin: 250px 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.headings h2 {
  font-family: 'David-ExtraLight';
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 400;
}

.copy {
  margin: 70px 0 0 ;
}

.copy p {
  font-family: 'David-Regular';
  font-size: 14px;
  margin: 0 0 40px;
  letter-spacing: .8px;
}

.error .underline {
  display: inline;
  position: relative;
  overflow: hidden;
}

.error .underline:after {
  content: "";
  position: absolute;
  right: 0;
  width: 0;
  bottom: -5px;
  background: #fff!important;
  height: 2px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.error .underline:hover:after {
  left: 0;
  right: auto;
  width: 100%;
}

  @media only screen and (min-width: 660px) {

    .headings h2 {
      font-size: 64px;
    }

    .headings {
      flex-direction: row;
    }
  }


</style>
