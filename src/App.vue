<template>
  <c-header></c-header>
  <div class="content">
    <router-view></router-view>
  </div>
  <c-footer class="footer" />
</template>

<script>
import CHeader from "./common/header.vue";
import CFooter from "./common/footer.vue";
export default {
  name: "App",
  components: {
    CHeader,
    CFooter,
  },
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
html,
body {
  margin: 0;
  height: 100%;
}
.content {
  min-height: calc(80vh);
}
.footer {
  width: 100%;
}
:root {
  --el-color-primary-light-9: rgba(255, 165, 0, 0.7) !important;
  --el-color-primary-light-2: #fff !important;
  --el-color-primary: orange !important;
}
</style>
