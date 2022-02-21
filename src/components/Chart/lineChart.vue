<template>
  <div id="lineChart" ref="lineChart"></div>
</template>
 
<script>
import { Area } from "@antv/g2plot";
import { toRefs,onMounted,watch} from 'vue'

export default {
  name: "lineChart",
  setup(props) {
      const { linedata,Height,Width } = toRefs(props)
      let LinePlot = null
      const  initG2Plot=()=>{
        LinePlot = new Area('lineChart', {
        data: linedata.value,
        height: Height.value,
        width: Width.value,
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

      LinePlot.render();
      }
      onMounted(() => {
        initG2Plot()
      })
      watch(linedata,()=>{
        LinePlot.data=linedata.value
        LinePlot.changeData(linedata.value)
        }) 
  },
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
 
};
</script>
