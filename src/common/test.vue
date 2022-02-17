<template >
  <div class="header-container">
        <div class="header-box">
          <ul class="topnav">
            <li class="logo-box">
                  <router-link to="/home">
                    <img
                      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                      alt="logo"
                      class="logo"
                    />
                  </router-link>
            </li>
            <div class="avatar" @click="handleClick">
                <el-avatar :icon="UserFilled"></el-avatar>
            </div>
          </ul>
        </div>
  </div>
</template>
<script>

import { authenticate, getAccount } from '../api/contract.js'
import { UserFilled } from '@element-plus/icons-vue'

export default {
 
  setup() {
    async function handleClick(){
      await authenticate();
      this.account = await getAccount();
    }
    return{
      handleClick,
      UserFilled
    }
  },
 
  
};
</script>
<style  scoped>
body div {
  margin: 0;
}

.header-box {
  height: 60px;
}
ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(255, 251, 251);
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.logo {
  margin: 10px 200px;
  width: 50px;
}
div.analysis {
  margin-right: 150px;
}

ul.topnav li {
  float: left;
}

ul.topnav li span {
  display: block;
  color: rgb(255, 153, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  font-weight: 600;
  font-size: 16px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

ul.topnav li span:hover:not(.active) {
  border-bottom: solid 2px rgb(255, 153, 0);
  cursor: pointer;
}

/* ul.topnav li a.active {
  color: rgb(255, 153, 0);
  border-bottom: solid 2px rgb(255, 153, 0);
} */

ul.topnav li.right {
  float: right;
}
@media screen and (max-width: 600px) {
  ul.topnav li.right,
  ul.topnav li {
    float: none;
  }
}

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-button {
  margin-left: 100px;
  background-color: #fff;
  color: rgb(255, 153, 0);
  border-radius: 40px;
  border: solid 1px rgb(255, 153, 0);

  margin-top: 20px;
  margin-right: 40px;
  line-height: 10px;
  font-weight: 600;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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

ul li.router-link-active,
ul li.router-link-exact-active {
  border-bottom: solid 2px orange;
}
div.avatar {
  float: right;
  margin-right: 30px;
  margin-top: 15px;
}
div.language {
  float: right;
  margin-right: 30px;
  margin-top: 25px;
  color: orange;
}
</style>