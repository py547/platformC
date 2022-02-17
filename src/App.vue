<template>
  <div>
    <c-header></c-header>
    <router-view></router-view>
  </div>   
</template>

<script>
import CHeader from "./common/header.vue";

export default {
  name: 'App',
 components:{
   CHeader
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
}
</style>
