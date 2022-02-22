<template >
  <div class="collections-box">
    <p>aaaa</p>
    <div>
      <el-radio-group v-model="radio1" size="large">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.collections-box {
  width: 100%;
  height: 2000px;
  background-color: yellow;
}
</style>