<template>
  <main-layout >
    <Nav 
      :isHomepage="true"
    />

    <div class="home" >  

      <div class="scroll-container">
        <div class="scroll left top"><h2>Lead designer</h2></div>
        <div class="scroll right top"><h2> &#160;&</h2></div>
        <div class="scroll left bottom"><h2>Art</h2></div>
        <div class="scroll right bottom"><h2> &#160;director</h2></div>
      </div>

      <div class="mouse"></div>

      <div class="image-ghost"></div>
      <div class="image-container">
        
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
         topLeft.style.left = "calc( 7% - " +  (y/3)*2 + "px )";
         topRight.style.right = "calc( 8% - " +  (y/3) + "px )";
         bottomLeft.style.left = "calc( 9vw + 7% - " +  (y/3) + "px )";
         bottomRight.style.right = "calc( 9vw + 5% - " +  (y/3)*2 + "px )"

         window.scrollY > 250 ? mouse.classList.add("hide") : mouse.classList.remove("hide");
        
        if (image.top <= (window.innerHeight - image.bottom)) {
          document.querySelector('.image-container').classList.add("fixed")
        } else {
          document.querySelector('.image-container').classList.remove("fixed")
        }
       }

     },
     mounted: function() {
        var app = this;
        window.addEventListener('scroll', app.handleScroll);
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
    height: 400px;
    width: 88%;
    border: 5px solid black;
    border-radius: 10px;
    background: green;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 120vh;
    z-index: 0;
  }

  .image-ghost {
    opacity: 0;
    pointer-events: none;
  }

  .image-container.fixed {
    position: fixed;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  @media only screen and (min-width: 660px) {
  
    .image-container,
    .image-ghost  {
       width: 600px;
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