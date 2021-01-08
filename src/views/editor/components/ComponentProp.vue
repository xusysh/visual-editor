<template>
  <div style="height: 100%">
    <el-tabs
      stretch
      type="border-card"
      style="box-shadow: none; border-width: 1px 0 0 0; height: 100%"
    >
      <el-tab-pane label="元素样式">
        <el-collapse v-model="activeCollapse">
          <el-collapse-item
            v-for="(styleElement, index) in this.commonConfig.style"
            :key="index"
            :name="styleElement.name"
            :title="styleElement.name"
          >
            <el-form
              label-width="40px"
              style="padding: 0 20px 0 0; height: 100%"
            >
              <el-col
                v-for="(styleElementOption, index) in styleElement"
                :key="index"
                :span="styleElementOption.optionSpan"
                :offset="1"
              >
                <el-form-item
                  v-show="styleElementOption.name"
                  :label="styleElementOption.name"
                  v-model="styleElementOption.value"
                >
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="控件属性"></el-tab-pane>
      <el-tab-pane label="内嵌HTML" style="padding: 6px 20px">
        <el-input
          style="margin-top: 16px"
          type="textarea"
          :autosize="{ minRows: 16, maxRows: 200 }"
          v-model="commonConfig.innerHtml.value"
        ></el-input>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import compDefenitionMap from "@/components/universal/config/compDefenitionMap";
export default {
  data() {
    return {
      activeCollapse: [],
      commonConfig: compDefenitionMap.common.config,
      current: {},
    };
  },
  watch: {
    current(cur) {
      console.log(cur);
    },
  },
  created() {
    this.parseComponentDef();
  },
  methods: {
    parseComponentDef() {
      this.activeCollapse = Object.values(this.commonConfig.style).map(
        (item) => item.name
      );
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-tabs__content {
  height: calc(100% - 86px) !important;
  padding-top: 0px !important;
  overflow: auto;
}
</style>
