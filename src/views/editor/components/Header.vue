<template>
  <div class="editor-header">
    <el-radio-group
      style="position: absolute; top: 15px; left: 40px"
      v-model="compMenuCollapse"
      size="small"
      @change="compNavCollapseChange"
    >
      <el-radio-button :label="true">收起组件</el-radio-button>
      <el-radio-button :label="false">展开组件</el-radio-button>
    </el-radio-group>
    <el-button icon="el-icon-refresh-left">撤销</el-button>
    <el-button icon="el-icon-refresh-right">重做</el-button>
    <el-button icon="el-icon-view">预览</el-button>
    <el-button icon="el-icon-document">保存</el-button>
    <el-button icon="el-icon-monitor">清空画布</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compMenuCollapse: false,
    };
  },
  methods: {
    compNavCollapseChange(val) {
      this.$bus.emit("compNavCollapseChange", val);
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor-header {
  /* text-align: left; */
  position: relative;
  padding: 10px 10px 10px 10px;
  border-bottom: 0.5px solid #dadada;
}
</style>
