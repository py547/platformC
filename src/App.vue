<template>
  <div id="app">
    <c-header></c-header>
    <main>
      <Fade>
        <router-view></router-view>
      </Fade>
    </main>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from "./common/header.vue";
import CFooter from "./common/footer.vue";
import Fade from "./components/Base/fade.vue";
export default {
  name: "App",
  components: { CFooter, Fade, CHeader },
};
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
