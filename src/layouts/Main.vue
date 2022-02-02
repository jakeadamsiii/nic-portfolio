<template>
  <div class="main" >

    <div class="cursor">
      <div class="cursor__ball cursor__ball--small">
        <svg height="15" width="15">
          <circle cx="7" cy="7" r="7" stroke-width="0"></circle>
        </svg>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
      }
    },
    components: {
    },
    methods: {
    },
    mounted: function() {
      const app = this;
      const cursor = document.querySelector('.cursor__ball--small');
      let links = document.querySelectorAll('a');
      // Listeners
      window.addEventListener('mousemove', e => {
        cursor.style.left = (e.screenX) + "px";
        cursor.style.top = (e.screenY - 145) + "px";
        cursor.classList.contains('in') ? null : cursor.classList.add('in');
      });

      window.addEventListener('scroll', e => {
      });

      window.addEventListener('click', e => {
        cursor.classList.add("click");
        setTimeout(() => {
          cursor.classList.remove("click");
        }, 150);
      });

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseenter', e => {
          cursor.style.transitionDuration = ".5s";
          cursor.style.transform = "scale(2)";
          
        });

        links[i].addEventListener('mouseleave', e => {
          cursor.style.transform = null;
          cursor.style.transitionDuration = null;
        });
      }
    },
  }
</script>

<style scss>

  html, body {
    cursor: none;
    overflow-x: hidden;
    width: 100%;
    background: #F7F6F3;
  }


  html, body, p, h1, h2, h3, a, div, ul, li {
    margin: 0;
    padding: 0;
    font-family: 'David-Regular', sans-serif;
  }

  ::-moz-selection {
    color: white;
    background: black;
  }

  ::selection {
    color: white;
    background: black;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: none;
  }

  p {
    line-height: 1.2;
  }

  .cursor {
    pointer-events: none;     
  }

  .cursor__ball {
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 1000;
    transition: transform .15s ease, opacity .5s ease;
    transform: scale(1);
    transform-origin: center;
    opacity: 0;
  } 

  .cursor__ball.in {
    opacity: 1;
  }

  .cursor__ball.click {
    transform: scale(1.5);
  }

  .cursor__ball circle {
    fill: #f7f8fa;
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%; 
  }

  .row {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .row [class^="col"] {
    float: left;
    margin: 0 6%;
    min-height: 0.125rem;
  }

  .row::after {
    content: "";
    display: table;
    clear: both;
  }

  .hidden-sm {
    display: none;
  }

  .hidden-ms {
    display: inherit;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    width: 88%;
  }

  @media only screen and (min-width: 1024px) {

    .container {
      max-width: 1440px;
    }

    .col-1 {width: 4.33%;}
    .col-2 {width: 12.66%;}
    .col-3 {width: 21%;}
    .col-4 {width: 29.33%;}
    .col-5 {width: 37.66%;}
    .col-6 {width: 46%;}
    .col-7 {width: 54.33%;}
    .col-8 {width: 62.66%;}
    .col-9 {width: 71%;}
    .col-10 {width: 79.33%;}
    .col-11 {width: 87.66%;}
    .col-12 {width: 96%;}

    .hidden-sm {
      display: block;
    }

    .hidden-ms {
      display: none;
    }


    .row [class^="col"] {
      margin: 0 2%;
    }
  }



</style>
