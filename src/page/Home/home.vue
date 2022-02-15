<template >
  <div class="home-box">
    <div class="chart-box">
      <div class="radio">
        <el-radio-group v-model="radio" fill="orange" >
          <el-radio-button :disabled="!loaded" label="number" >{{$t("home.linetype.number")}}</el-radio-button>
          <el-radio-button :disabled="!loaded" label="project" >{{$t("home.linetype.project")}}</el-radio-button>
          <el-radio-button :disabled="!loaded" label="user" >{{$t("home.linetype.user")}}</el-radio-button>
        </el-radio-group> 
         
        <el-dropdown @command="changeDuration">
            <el-button type="primary">
              {{ duration }}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="30 Days">30 Days</el-dropdown-item>
              <el-dropdown-item command="1 Year">1 Year</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
     
      </div>
     

      <line-chart v-if="loaded" :linedata="lineData"></line-chart>
      <div v-else v-loading="true" style="width: 100%"></div>
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
      duration:"30 Days"
    };
  },
  methods: {
    ...mapActions(["get_data"]),

    changeLineDataType(lineDataType){
      this.dataType=lineDataType
      console.log(lineDataType)
    },
    changeDuration(duration){
      this.duration=duration
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
      this.loaded=false
      this.get_data(value)
    },
    lineData(){
      this.loaded=true
    },
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


.el-button {
  margin-left: 40px;
  background-color: #fff;
  color: rgb(255, 153, 0);

  margin-top: 0px;
  margin-right: 40px;
  line-height: 10px;
  font-weight: 600;
}
.el-button:hover {
  background-color: rgba(255, 153, 0, 0.6);
  border: solid 1px rgba(255, 153, 0, 0.6);
  color: #fff;
}
.el-button,
.el-button:focus:not(.el-button:hover) {
  background-color: #fff;
  color: rgb(255, 153, 0);
  border-radius: 40px;
  border: solid 1px rgb(255, 153, 0);
}
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgba(255, 153, 0, 0.1);
  color: rgba(255, 153, 0, 0.8);
} 
</style>