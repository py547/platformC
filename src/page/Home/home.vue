<template >
  <div class="home-box">
    <div class="chart-box">
      <div class="radio">
        <el-radio-group v-model="radio" fill="orange" >
          <el-radio-button label="number" >数量</el-radio-button>
          <el-radio-button label="project" >项目</el-radio-button>
          <el-radio-button label="user" >用户</el-radio-button>
        </el-radio-group> 
      </div>
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
      radio:"number",
    };
  },
  methods: {
    ...mapActions(["get_data"]),

    changeLineDataType(lineDataType){
      this.dataType=lineDataType
      console.log(lineDataType)
    }
  },
  mounted() {
    this.get_data(this.radio).then(() => {
      this.loaded = true;
    });
  },
  computed: {
    ...mapState(["lineData"]),
  },
  watch:{
    radio(value){
      this.get_data(value)
    }
  }
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
.radio {
  margin: 0px;
  padding: 0px 0px  40px 0px;
}
.el-radio-button:hover {

    color: #FFF ;
}

</style>