<template>
  <div class="password-protect" v-if="$props.blocked">

    <p class="home-icon">Nic Roberts.</p>


    <form>
      <label for="pass">Enter password</label>
      <div>
        <input type="password" id="pass" name="password" required>
        <button>
          <svg width="31px" height="25px" viewBox="0 0 31 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Desktop_Menu-Copy" transform="translate(-856.000000, -384.000000)" stroke="#000000" stroke-width="2">
                      <g id="Group" transform="translate(871.000000, 396.000000) rotate(-225.000000) translate(-871.000000, -396.000000) translate(860.000000, 385.000000)">
                          <path d="M0.893398282,0.600505063 L21.7438724,20.8093486" id="Line"></path>
                          <polyline id="Path" points="0.792893219 16.7071068 0.792893219 0.707106781 16.8930703 0.369866719"></polyline>
                      </g>
                  </g>
              </g>
          </svg>
        </button>
      </div>
      <p :class="{show: $props.tried}">Nope, please try again</p>
    </form>
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
    mounted: function() {
      var that = this;

      document.querySelector('form').addEventListener('submit', function(e){
        var val = document.querySelector('input').value;
        e.preventDefault();
        that.$emit('enterPassword', val);
      });

      document.querySelector('input').focus();
    }
  }
</script>

<style scoped>

.password-protect {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #fff;
  z-index: 100;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 350px;
  margin: 0 auto;
}

div {
  width: 100%;
  display:flex;
}

label {
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}

input {
  width: 100%;
  height: 50px;
  font-size: 20px;
  background: #f2f2f2;
  border:1px solid #f2f2f2;
  padding: 0 0 0 10px;
  margin: 0;
  border: none;
  background: #F2F2F2;
  max-width: 90vw;
}

input:focus {
  outline: none;
}

button {
  width: 30%;
  padding: 0;
  margin: 0;
  border: none;
  border-left: none;
  cursor: url(../images/hover.png), pointer; 
  background: #F2F2F2;
  outline: none;
  position: relative;
  z-index: 2;
}

p {
  margin: 18px 0 0 0;
  font-size: 20px;
  font-family: 'Roboto-regular', sans-serif;
  opacity: 0;
  transition: opacity .5s ease;
  letter-spacing: -0.02em;
}

p.show {
  opacity: 1;
}


.home-icon {
  font-family: 'Roboto-bold', sans-serif;
  font-size: 20px;
  padding: 0;
  margin:0;
  text-decoration: none;
  line-height: 90px;
  position: absolute; 
  top:0;
  left: 6%;
  opacity:1;
}

@media only screen and (min-width: 768px) {
  .home-icon {
    left: 2%;
  }
}
  
</style>
