<template >
  <div class="home-box">
    <div class="chart-box">
      <line-chart v-if="loading" :value="chartData"></line-chart>
    </div>
  </div>
</template>
<script>
import LineChart from "../../components/Chart/lineChart.vue";

export default {
  data() {
    return {
      loading: true,
      chartData: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
    };
  },
  components: {
    LineChart,
  },
};
</script>
<style scoped>
.home-box {
  width: 100%;
}
.chart-box {
  margin: 200px 40px 0px 40px;
}
</style>