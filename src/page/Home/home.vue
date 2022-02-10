<template >
  <div class="home-box">
    <div class="chart-box">
      <line-chart v-if="loaded" :linedata="lineData"></line-chart>
    </div>
  </div>
</template>
<script>
import LineChart from "../../components/Chart/lineChart";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    ...mapActions(["get_data_test"]),
  },
  mounted() {
    this.get_data_test({ limit: 300 }).then(() => {
      this.loaded = true;
    });
  },
  computed: {
    ...mapState(["lineData"]),
  },
};
</script>
<style scoped>
.home-box {
  width: 90%;
  margin: 0px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.chart-box {
  margin: 100px 40px 0px 40px;
  padding: 40px 30px;
}
</style>