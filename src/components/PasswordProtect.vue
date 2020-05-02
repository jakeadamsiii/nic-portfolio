<template>
  <div class="password-protect" v-if="$props.blocked">
    <form>
      <label for="pass">Enter password</label>
      <div>
        <input type="password" id="pass" name="password" required>
      </div>
      <p :class="{show: $props.tried}">Nope. Please try again.</p>
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
}

input:focus {
  outline: none;
}

p {
  margin: 20px 0 0 0;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  opacity: 0;
  transition: opacity .5s ease;
}

p.show {
  opacity: 1;
}
  
</style>
