<template >
  <div class="home-box">
    <div class="chart-box">
      <div class="radio">
        <!-- 数据类型选择 -->
        <div class="datatype-select">
          <el-radio-group v-model="radio" fill="orange">
            <el-radio-button :disabled="!loaded" label="number">{{
              $t("home.number")
            }}</el-radio-button>
            <el-radio-button :disabled="!loaded" label="project">{{
              $t("home.project")
            }}</el-radio-button>
            <el-radio-button :disabled="!loaded" label="user">{{
              $t("home.user")
            }}</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 数据类型下拉框 -->
        <div class="datatype-dropdown">
          <el-dropdown @command="changeLineDataType">
            <el-button type="primary">
              {{ $t("home." + radio)
              }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="number">{{
                  $t("home.number")
                }}</el-dropdown-item>
                <el-dropdown-item command="project">{{
                  $t("home.project")
                }}</el-dropdown-item>
                <el-dropdown-item command="user">{{
                  $t("home.user")
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 时间下拉框 -->
        <div style="display: inline-block">
          <el-dropdown @command="changeDuration">
            <el-button type="primary">
              {{ duration
              }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="30days">30 Day</el-dropdown-item>
                <el-dropdown-item command="1year">1 Year</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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
      radio: "project",
      duration: "30days",
    };
  },
  methods: {
    ...mapActions(["get_data"]),
    changeLineDataType(lineDataType) {
      this.radio = lineDataType;
    },
    changeDuration(duration) {
      this.duration = duration;
    },
  },
  mounted() {
    this.get_data(this.radio).then(() => {
      this.loaded = true;
    });
  },
  computed: {
    ...mapState(["lineData"]),
  },
  watch: {
    radio(value) {
      this.loaded = false;
      this.get_data(value);
    },
    lineData() {
      this.loaded = true;
    },
  },
};
</script>
<style scoped>
.home-box {
  width: 90%;
  margin: 40px auto 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.chart-box {
  /* margin: 100px 40px 0px 40px; */
  padding: 40px 30px;
}
.radio {
  margin: 0px;
  padding: 0px 0px 40px 0px;
}
.el-radio-button:hover {
  color: #fff;
}
.el-button {
  margin-left: 10px;
  background-color: #fff;
  color: rgb(255, 153, 0);
  width: 100px;
  margin-top: 0px;
  margin-right: 0px;
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
.datatype-dropdown {
  display: none;
}
.datatype-select {
  display: inline-block;
}
@media only screen and (max-width: 768px) {
  .datatype-select {
    display: none;
  }
  .datatype-dropdown {
    display: inline-block;
    width: 100px;
  }
}
</style>