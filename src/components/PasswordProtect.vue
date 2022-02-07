<template>
  <div class="password-protect" v-if="$props.blocked">

    <p class="home-icon">Nic Roberts.</p>

    <div class="container" >
      <div class="row" >
        <div class="col-1 hidden-sm"></div>
        <div class="col-10">
          <form>
            <label for="pass">Enter password</label>
            <div class="input-container">
              <input type="text" id="pass" name="password" required>
              <span autofocus tabindex="0" class="input" role="textbox" contenteditable></span>
              <button>
                Enter
                <svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.5 1H71C76.5228 1 81 5.47715 81 11V49C81 54.5228 76.5228 59 71 59H1" stroke="white"/>
                  <path d="M11 48L1 60L11 72" stroke="white"/>
                </svg>
              </button>
            </div>
            <p class="error" :class="{show: $props.tried}">Nope, try again</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
      }
    },
    props: {
     blocked: Boolean,
     tried: Boolean
    },
    components: {
    },
    methods: {
      formSubmit(e) {
        var val = document.querySelector('.input').textContent;
        e.preventDefault();
        this.$emit('enterPassword', val);
      }
    },
    mounted: function() {
      var app = this;
      const input = document.querySelector('.input');

      document.querySelector('button').addEventListener('click', (e) => {
        app.formSubmit(e);
      });

      document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
      });

      input.addEventListener("keypress", (e) => {
        if(e.charCode === 13) {
          app.formSubmit(e);
        } 
      });

      setTimeout(() => {
        input.focus();
      }, 100);
      
    }
  }
</script>

<style scoped>

.password-protect {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #000;
  z-index: 999;
}

form {
  margin: 250px 0 0;
  width: 100%;
}

.input-container {
  margin: 40px 0 0;
  display: flex;
}

label {
  font-size: 35px;
  font-family: "David-ExtraLight", sans-serif;
  font-weight: 400;
  margin: 0 0 40px;
  text-transform: uppercase;
  color: #fff;
}

input {
  display: none;
}

span {
  font-size: 20px;
  margin: 0;
  border: none;
  background: none;
  color: #fff;
  cursor: none;
  padding: 0;
  width: min-content;
  font-size: 35px;
  font-family: "David-ExtraLight", sans-serif;
  caret-color: transparent;
  min-width: 50px;
  max-width: calc(660px - 6%);
  height: 77px;
  display: inline-block;
  overflow: scroll;
  position: relative;
}

span:after {
  content: "";
  width: 50px;
  height: 1px;
  background: #fff;
  position: absolute; 
  bottom: 0;
  right: 0;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

span:focus {
  outline: none;
}

button {
  padding: 0 20px;
  border: none;
  border-left: none;
  background: none;
  outline: none;
  position: relative;
  z-index: 2;
  font-family: "David-Regular", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  position: relative;
  padding-top: 16px;
  margin: 0 0 0 10px;
}

button svg {
  position: absolute;
  top: 16px;
  right: 0;
}

.error {
  color: #FB7070;
  font-size: 20px;
  font-family: "David-ExtraLight", sans-serif;
  margin: 20px 0 0;

}

p {
  margin: 18px 0 0 0;
  font-size: 14px;
  font-family: 'Roboto-regular', sans-serif;
  opacity: 0;
  transition: opacity .5s ease;
  letter-spacing: -0.02em;
  color: #fff;
}

p.show {
  opacity: 1;
}

.home-icon {
  font-family: 'David-Regular', sans-serif;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: .8px;
  text-transform: uppercase;
  pointer-events: auto;
  opacity: 1;
  top: 40px;
  left: 6%;
  position: absolute;
  margin: 0;
}

@media only screen and (min-width: 660px) {

  label, span {
    font-size: 64px;
  }

  .error {
    font-size: 35px;
  }

}

@media only screen and (min-width: 1024px) {

  .home-icon {
    left: 40px;
  }

}
  
</style>
<style>

body {
  margin: 0;
}

@keyframes blink {
  from, to {
    background: transparent;
  }
  50% {
    background: #fff;
  }
}
</style>

