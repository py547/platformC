<template >
  <div class="header-container">
    <div class="nav">
      <div class="logo">
        <el-icon><moon-night /></el-icon>
      </div>
      <!-- 头部导航栏链接 -->
      <div class="nav-link nav-first">
        <router-link to="/home">
          <span>{{ $t("header.home") }}</span>
        </router-link>
      </div>
      <div class="nav-link">
        <router-link to="/collections">
          <span>{{ $t("header.collections") }}</span>
        </router-link>
      </div>
      <div class="nav-link">
        <router-link to="/time">
          <span>{{ $t("header.time") }}</span>
        </router-link>
      </div>
      <div class="nav-link">
        <router-link to="/analysis">
          <span>{{ $t("header.analysis") }}</span>
        </router-link>
      </div>
      <!-- 数据源选择 -->
      <div class="datasource-dropdown">
        <el-dropdown @command="changeDataSource">
          <el-button type="primary">
            {{ dataSource
            }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="OPENSEA">OPENSEA</el-dropdown-item>
              <el-dropdown-item command="OUR  NFT">OUR NFT</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- 语言选择 -->
      <div class="language-dropdown">
        <el-dropdown @command="changeLanguage">
          <span class="el-dropdown-link">
            <el-icon class="setting"><setting /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="en">ENG</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- 头像 -->
      <div class="avatar">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <!-- 响应式菜单面板 -->
      <input hidden type="checkbox" name="choose" id="choose" value="" />
      <label for="choose" href="" class="toggleBtn">
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <div class="navPage">
        <div class="hr"></div>
        <div class="navMain">
          <div class="navList">
            <!-- 导航路由 -->
            <div class="nav-page-link-box">
              <el-icon><home-filled /></el-icon>
              <router-link to="/home" class="nav-page-link">
                <span>{{ $t("header.home") }}</span>
              </router-link>
            </div>
            <div class="nav-page-link-box">
              <el-icon><management /></el-icon>
              <router-link to="/collections" class="nav-page-link">
                <span>{{ $t("header.collections") }}</span>
              </router-link>
            </div>

            <div class="nav-page-link-box">
              <el-icon><timer /></el-icon>
              <router-link to="/time" class="nav-page-link">
                <span>{{ $t("header.time") }}</span>
              </router-link>
            </div>

            <div class="nav-page-link-box">
              <el-icon><histogram /></el-icon>
              <router-link to="/analysis" class="nav-page-link">
                <span>{{ $t("header.analysis") }}</span>
              </router-link>
            </div>
            <!-- 数据源设置 -->
            <div class="nav-page-link-box">
              <el-icon><coin /></el-icon>

              <span class="nav-page-link">{{ $t("header.dataSource") }}</span>
            </div>
            <!-- 语言设置 -->
            <div class="nav-page-link-box">
              <el-icon><setting /></el-icon>

              <span class="nav-page-link">{{ $t("header.language") }}</span>

              <div class="nav-language-switch">
                <el-switch
                  v-model="language"
                  class="ml-2"
                  inline-prompt
                  active-color="orange"
                  inactive-color="grey"
                  active-text="EN"
                  inactive-text="ZH"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      language: true,
      navDataSource: "1",
    };
  },
  methods: {
    ...mapMutations(["SET_DATA_SOURCE", "GET_DATA_SOURCE", "SET_LANGUAGE"]),
    changeDataSource(command) {
      this.navDataSource = command == "OPENSEA" ? "1" : "2";
      this.SET_DATA_SOURCE(command);
    },
    changeLanguage(command) {
      this.SET_LANGUAGE(command);
      this.$i18n.locale = command;
    },
  },
  watch: {
    language(value) {
      //true为en false为zh
      this.changeLanguage(value ? "en" : "zh");
    },
    navDataSource(value) {
      this.SET_DATA_SOURCE(value == 1 ? "OPENSEA" : "OUR  NFT");
    },
  },
  mounted() {
    this.GET_DATA_SOURCE();
  },
  computed: {
    ...mapState(["dataSource", "language"]),
  },
};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.header-container {
  position: relative;
  height: 60px;
  z-index: 2999;
}
.nav {
  position: fixed;
  width: 100%;
  display: flex;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 2px rgb(224, 224, 224);
}
.nav div {
  width: 100px;
  text-align: center;
  color: orange;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.nav .avatar {
  position: relative;
  z-index: 3000;
}
.nav .logo {
  position: relative;
  height: 44px;
  top: 0;
  left: 0;
  margin-top: 15px;
  font-size: 30px;
  z-index: 3000;
  /* background-image: url();
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center; */
}

.nav .nav-link a {
  color: orange;
  text-decoration: none;
}
.nav .nav-link a {
  color: orange;
  text-decoration: none;
}
.router-link-active,
.router-link-exact-active {
  border-bottom: solid 2px orange;
}

.nav-first {
  margin-left: 50%;
}
/* 下拉框样式 */
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-button,
.el-button:focus:not(.el-button:hover) {
  background-color: #fff;
  color: rgb(255, 153, 0);
  border-radius: 40px;
  border: solid 1px rgb(255, 153, 0);
}

.el-button:hover {
  background-color: orange;
  border: transparent 1px solid;
}
.datasource-dropdown {
  padding: 15px;
  width: 100px;
}

.dropdown li a {
  display: block;
  color: orange;
  padding: 0px 20px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
}
.dropdown li a:hover {
  color: #fff;
  background-color: rgba(255, 165, 0, 0.7);
}
/* ---- */
.setting {
  font-size: 30px;
  color: orange;
}

.toggleBtn {
  position: relative;
  z-index: 3000;
  height: 44px;
  width: 100px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.toggleBtn .line {
  display: none;
  height: 3px;
  width: 18px;
  background-color: orange;
  transition: all 0.5s;
}
.toggleBtn .line:nth-child(1) {
  position: absolute;
  left: clca(50%-9px);
  top: 14px;
  transform-origin: left center;
}
.toggleBtn .line:nth-child(2) {
  position: absolute;
  left: clca(50%-9px);
  top: 27px;
  transform-origin: left center;
}

.navPage {
  z-index: 2999;
  background-color: #fff;
  display: flex;
  height: 0vh;
  width: 100vw;
  /* transition: all 0.1s; */
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
.navPage .navMain {
  width: 100%;
}

@media only screen and (max-width: 1300px) {
  .nav-first {
    margin-left: 0px;
  }

  .datasource-dropdown {
    display: none;
  }
  .nav-link {
    padding: 10px;
  }
}
@media only screen and (max-width: 1200px) {
  .nav-first {
    margin-left: 0px;
  }
  .setting,
  .datasource-dropdown {
    display: none;
  }
  .nav-link {
    padding: 10px;
  }
}
@media only screen and (max-width: 1900px) {
  .nav-first {
    margin-left: 30%;
  }
}

@media only screen and (max-width: 768px) {
  .toggleBtn {
    display: flex;
    width: 50px;
    order: 1;
  }
  .toggleBtn .line {
    display: block;
  }
  .nav-link,
  .search,
  .setting,
  .datasource-dropdown,
  .language-dropdown {
    display: none;
  }
  .nav {
    justify-content: space-between;
  }
  .nav a {
    width: 50px;
  }
  .logo {
    order: 2;
    margin-left: 10%;
  }
  .avatar {
    order: 3;
  }
  #choose:checked ~ .toggleBtn .line:nth-child(1) {
    transform: rotate(45deg);
  }
  #choose:checked ~ .toggleBtn .line:nth-child(2) {
    transform: rotate(-45deg);
  }
  #choose:checked ~ .navPage {
    display: flex;
    /*
			vw：view width
			vh：view height
		*/
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    color: white;
    padding-top: 54px;
  }

  .navList {
    margin: 30px 28px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: center;
  }

  .navList .nav-page-link {
    margin-left: 15px;
    text-decoration: none;
    color: orange;
  }
  .navList .nav-page-link-box {
    padding: 20px 0px;
    width: 430px;
  }
  /* .navList .nav-page-link-box .nav-page-link:hover {
    border-bottom: solid 2px orange;
  } */
  .navPage .hr {
    margin: 4px;
    width: 100%;
    height: 1px;
    box-shadow: 0px 2px 2px rgb(224, 224, 224);
  }

  .nav div {
    text-align: left;
  }
  .navList .nav-language-switch {
    float: right;
    width: 135px;
  }
  .datasource-radio {
    float: right;
    margin-left: 10px;
  }
}
</style>