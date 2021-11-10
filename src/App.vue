<template>
  <div class="news__container">
      <router-link class="underline text-xl ml-4" to="/">Home</router-link>
      <router-link class="underline text-xl ml-4" to="/about">About</router-link>
      <router-link class="underline text-xl ml-4" to="/single">Single</router-link>

      <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
export default {
    name: 'App'
}
</script>

<style>

</style>