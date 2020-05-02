<template>
  <div class="main" >
    <passwordProtect
      :blocked="block"
      :tried="tried"
      @enterPassword="enterPassword"
    />
    <slot v-if="allowed"></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import passwordProtect from '../components/PasswordProtect.vue'

  export default {
    data: function () {
      return {
        allowed: false,
        tried: false,
        block: true,
      }
    },
    components: {
      VLink, passwordProtect
    },
    methods: {
      enterPassword: function(val) {
        if (val === "NicPortfolio") {
          this.allowed = true;
          this.block = false; 
          localStorage.setItem("allowed", true);
          location.reload();
        } else {
          this.tried = true;
        }
      }
    },
    mounted: function() {
      if (localStorage.getItem("allowed") === 'true') {
        this.allowed = true;
        this.block = false; 
      }
    }
  }
</script>

<style scss>


  html, body {
    cursor: url(../images/mouse.png), default;
    overflow-x: hidden;
    width: 100%;
  }


  html, body, p, h1, h2, h3, a, div, ul, li {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: url(../images/hover.png), pointer;
  }

  p {
    line-height: 1.2;
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
