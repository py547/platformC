<template>
  <div id="lineChart" ref="lineChart"></div>
</template>
 
<script>
import { Area } from "@antv/g2plot";
export default {
  name: "lineChart",
  props: {
    linedata: {
      type: Array,
      default() {
        return [];
      },
    },
    Height: {
      type: Number,
      default: 0,
    },
    Width: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      LinePlot: null,
    };
  },
  mounted() {
    this.initG2Plot();
  },
  methods: {
    initG2Plot() {
      this.LinePlot = new Area(this.$refs.lineChart, {
        data: this.linedata,
        height: this.Height,
        width: this.Width,
        xField: "time",
        yField: "value",
        xAxis: {
          range: [0, 1],
          tickCount: 10,
        },
        areaStyle: () => {
          return {
            fill: "l(270) 0:#ffffff 0.5:#FFA500 1:#FF7F24",
          };
        },
        animation: false,
        slider: {
          start: 0,
          end: 1,
          backgroundStyle: {
            fill: "orange",
            shadowColor: "#FFA500",
          },
          foregroundStyle: {
            fill: "orange",
          },
          trendCfg: {
            isArea: true,
          },
        },
        color: "orange",
        tooltip: { showMarkers: false },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: "#000",
              fill: "red",
            },
          },
        },
        interactions: [{ type: "marker-active" }],
      });

      this.LinePlot.render();
    },
  },
  watch: {
    linedata: {
      handler() {
        this.LinePlot.data=this.linedata      
        this.LinePlot.changeData(this.linedata);
      },
      deep: true,
    },
  }
};
</script>
