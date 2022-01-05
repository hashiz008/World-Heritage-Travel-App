<template>
  <div class="home">
     <!-- <router-link to="/">Home</router-link> -->
     <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
