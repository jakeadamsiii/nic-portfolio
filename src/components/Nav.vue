<template>
  <div class="nav-container" v-bind:class="{open: isNavOpen, home: $props.isHomepage}">

    <div class="container nav" :class="{home: $props.isHomepage}">
      <div class="row">
        <div class="col-12">
          <div>

            <div class="home-icon-container">
              <a href="/">
                <p class="home-icon">Nic Roberts.</p>
              </a>
            </div>

            <a class="target-burger" v-bind:class="{toggled: isNavOpen}" @click="toggleNav">
              <ul class="buns">
                <li class="bun"></li>
                <li class="bun"></li>
              </ul>
            </a>
            
          </div> 
        </div>
      </div>
    </div>


          <ul class="nav-list">
            <li class="menu">
              <a class="link" href="/work">Work</a>
              <a class="link" href="/about">About</a>
              <a class="link" href="/contact">Contact</a>
            </li>
          </ul>
 
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {

    data: function () {
      return {
          isNavOpen: false
      }
    },
    props: {
      isHomepage: Boolean
    },
    components: {
      VLink
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
        document.body.classList.toggle('menu-open');
      },
      closeNav() {
        this.isNavOpen = false;
        document.body.classList.remove('menu-open');
      }
    },
    mounted: function(){
    }
  }
</script>

<style scoped>


  .nav {
    height: 90px;
    position: fixed;
    z-index: 12;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  .nav.container {
    max-width: 100%;
  }

  .open .nav-list {
    top: 0;
  }

  .nav-container { 
    position: absolute;
    top: 0;
  }

  .nav-list {
    list-style: none;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 10;
    left: 0;
    top: -100%;
    transition: top .5s ease;
  }


  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .home-icon-container {
    width: 150px;
    float:left;
  }

   .link {
    text-decoration: none;
    color: #000;
    font-size: 35px;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.02em;
    cursor: url(../images/hover.png), pointer;
  }

  .home-icon {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 20px;
    padding: 0;
    text-decoration: none;
    line-height: 90px;
  }

  .icon {
    padding: 0;
  }

  .menu-button.cross:before {
    transform: rotate(45deg);
    transform-origin: left;
  }

  .menu-button.cross:after {
    transform: rotate(-45deg);
    transform-origin: left;
  }

  .menu-button-container {
    width: 30%;
    float: right;
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }


  a.target-burger {
	 margin: 1.125em 6%;
   width: 1.625em;
	 height: 3.25em;
	 position: absolute;
	 display: block;
	 transition: all 0.5s ease;
   right: 0;
}
 a.target-burger:hover {
	 cursor: url(../images/hover.png), pointer;
}
 a.target-burger.toggled ul.buns li.bun {
	 -webkit-transform: rotate(45deg) translateZ(0);
	 transform: rotate(45deg) translateZ(0);
}
 a.target-burger.toggled ul.buns li.bun:last-child {
	 -webkit-transform: rotate(-45deg) translateZ(0);
	 transform: rotate(-45deg) translateZ(0);
}
 a.target-burger ul.buns {
	 width: 1.625em;
	 height: 1.625em;
	 list-style: none;
	 margin: -0.8125em 0 0 -0.8125em;
	 padding: 0;
	 position: absolute;
	 top: 50%;
	 left: 50%;
	 -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
	 transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
	 -webkit-transform: translateZ(0);
	 transform: translateZ(0);
	 color: #000;
}
 a.target-burger ul.buns li.bun {
	 width: 100%;
	 height: 2px;
	 background-color: #000;
	 position: absolute;
	 top: 50%;
	 margin-top: -0.75px;
	 -webkit-transform: translateY(-3.75px) translateZ(0);
	 transform: translateY(-3.75px) translateZ(0);
	 -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
	 transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
}
 a.target-burger ul.buns li.bun:last-child {
	 -webkit-transform: translateY(3.75px) translateZ(0);
	 transform: translateY(3.75px) translateZ(0);
}

.home .home-icon {
  color: #000;
  transition: color 1s ease;
}

 .home a.target-burger ul.buns li.bun {
   background-color: #000;
 }
 


@media only screen and (max-width: 768px) {

    .home.open .home-icon {
    color: #000;
  }

  .home.open a.target-burger ul.buns li.bun {
    background-color: #000;
  }
}

@media only screen and (min-width: 1024px) {

  a.target-burger {
	  margin: 1.125em;
   	width: 3.25em;
  }

  .nav-container {
    width: 100%;
    height: 90px;
    background: transparent;
    position:fixed;
    z-index: 100;
    overflow: visible;
  }

  .nav-container.home,
  .nav.home  {
    background: transparent;
  }


}
 

</style>
