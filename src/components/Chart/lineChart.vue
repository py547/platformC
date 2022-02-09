<template>
  <div id="lineChart" ref="lineChart"></div>
</template>
 
<script>
import { Area } from "@antv/g2plot";
export default {
  name: "lineChart",
  props: {
    value: {
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
        data: this.value,
        height: this.Height,
        width: this.Width,
        xField: "year",
        yField: "value",
        label: {},
        point: {
          size: 5,
          shape: "diamond",
          style: {
            fill: "white",
            stroke: "#5B8FF9",
            lineWidth: 2,
          },
        },
        areaStyle: () => {
          return {
            fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
          };
        },
        animation: false,
        slider: {
          start: 0.1,
          end: 0.9,
          trendCfg: {
            isArea: true,
          },
        },
        // color: "red",
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
    value: {
      handler() {
        console.log("1111");
        this.LinePlot.render();
      },
      deep: true,
    },
  },
};
</script>
