<template>
  <div class="next-buttons">
    <router-link :to="$props.prevUrl" class="prev-link">
      <svg class="left" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:exclusion">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1584 5.3722C14.4345 5.3722 14.6584 5.14834 14.6584 4.8722C14.6584 4.59606 14.4345 4.3722 14.1584 4.3722L2.53412 4.3722L5.87367 1.03265C6.06893 0.837385 6.06893 0.520802 5.87367 0.32554C5.67841 0.130278 5.36183 0.130278 5.16657 0.32554L0.909829 4.58228L0.556275 4.93583L0.909829 5.28938L5.16657 9.54612C5.36183 9.74138 5.67841 9.74138 5.87367 9.54612C6.06893 9.35086 6.06893 9.03428 5.87367 8.83901L2.40686 5.3722L14.1584 5.3722Z" fill="white"/>
        </g>
      </svg>
      <p class="prev">prev</p>
    </router-link>

    <router-link :to="$props.nextUrl" class="next-link">
      <p class="next">next</p>
      <svg class="right" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:exclusion">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.893353 4.49938C0.61721 4.49938 0.393352 4.72324 0.393352 4.99938C0.393352 5.27552 0.61721 5.49938 0.893352 5.49938L12.5176 5.49938L9.17809 8.83894C8.98282 9.0342 8.98282 9.35078 9.17809 9.54604C9.37335 9.7413 9.68993 9.7413 9.88519 9.54604L14.1419 5.2893L14.4955 4.93575L14.1419 4.5822L9.88519 0.325462C9.68993 0.1302 9.37335 0.1302 9.17809 0.325461C8.98282 0.520724 8.98282 0.837306 9.17809 1.03257L12.6449 4.49938L0.893353 4.49938Z" fill="white"/>
        </g>
      </svg>
    </router-link>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
      }
    },
    props: {
      nextUrl: String,
      prevUrl: String,
    },
    methods: {

    }
  }
</script>

<style scoped>

.next-buttons {
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next-buttons a {
  position: relative;
}

.prev,
.next {
  font-family: "David-Regular", sans-serif;
  font-size: 14px;
  position: relative;
  text-transform: uppercase;
}

svg {
  position: absolute;
  top: 3px;
  transition: all .25s ease;
}

.left {
  left: -30px;
}

.right {
  right: -30px;
}

.prev {
  margin-right: 15px;
}

.next {
  margin-left: 15px;
}

.next-link:hover .right {
  right: -35px;
}

.prev-link:hover .left {
  left: -35px;
}

</style>
