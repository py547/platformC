<template >
  <div class="header-box">
    <div class="header w">
      <!-- 头部logo -->
      <div class="header-logo"></div>
      <!-- 头部导航栏 -->
      <div class="header-nav">
        <ul>
          <!-- 头部头像 -->
          <div class="header-avatar"></div>
          <li>
            <router-link to="/home">
              <span>{{ $t("header.home") }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/collections">
              <span>{{ $t("header.collections") }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/time">
              <span>{{ $t("header.time") }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/analysis">
              <span>{{ $t("header.analysis") }}</span>
            </router-link>
          </li>

          <li>
            <div class="datasource-dropdown">
              <el-dropdown @command="changeDataSource">
                <el-button type="primary">
                  {{ dataSource
                  }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="OPENSEA"
                      >OPENSEA</el-dropdown-item
                    >
                    <el-dropdown-item command="OUR  NFT"
                      >OUR NFT</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { authenticate, getAccount, addListener } from "../api/contract.js";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["SET_DATA_SOURCE", "GET_DATA_SOURCE", "SET_LANGUAGE"]),
    changeDataSource(command) {
      this.SET_DATA_SOURCE(command);
    },
    changeLanguage(command) {
      this.SET_LANGUAGE(command);
      this.$i18n.locale = command;
    },
    //用户登陆
    async handleClick() {
      await authenticate();
      this.account = await getAccount();
    },
  },
  watch: {},
  mounted() {
    this.GET_DATA_SOURCE();
    this.handleClick();
    addListener(this.handleClick);
  },
  computed: {
    ...mapState(["dataSource", "language"]),
  },
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}

/* 版心 */
.w {
  width: 1500px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #fff;
}

li {
  list-style: none;
}

/* header整体样式 */
.header-box {
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border: transparent 1px solid;
}

.header {
  margin: 10px auto;
}

.header-logo {
  float: left;
  height: 60px;
  width: 60px;
  background-color: orange;
}

.header-nav {
  float: right;
  height: 60px;
  margin-left: 600px;
}

.header-nav ul li {
  float: left;
  margin-right: 5px;
}

.header-nav ul li a {
  display: block;
  padding: 20px 30px;
  font-size: 16px;
  font-weight: 600;
  color: orange;
}

.header-nav ul li a:hover {
  border-bottom: solid 2px orange;
}

.header-avatar {
  float: right;
  height: 60px;
  width: 60px;
  margin-left: 30px;
  background-color: green;
}

/* 路由链接样式  */
.router-link-active,
.router-link-exact-active {
  border-bottom: solid 2px orange;
}
/* ---- */

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
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgba(255, 153, 0, 0.1);
  color: rgba(255, 153, 0, 0.8);
}

.el-dropdown-menu__item:not(.is-disabled) {
  color: red;
}
/* ---- */
.setting {
  margin-left: 30px;
  font-size: 30px;
  margin-top: 15px;
  color: orange;
}
</style>