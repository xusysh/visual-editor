<template>
  <div style="height: 100%">
    <el-tabs
      stretch
      type="border-card"
      style="box-shadow: none; border-width: 1px 0 0 0; height: 100%"
    >
      <el-tab-pane label="常用样式">
        <el-collapse v-model="activeCollapse">
          <el-collapse-item
            v-for="(styleElement, index) in componentStyleDefinition.style"
            :key="index"
            :name="styleElement.name"
            :title="styleElement.name"
          >
            <el-form style="padding: 0 20px 0 0; height: 100%">
              <el-col
                v-for="(styleElementOption, index) in styleElement"
                :key="index"
                :span="styleElementOption.optionSpan"
                :offset="1"
              >
                <el-form-item
                  :label-width="
                    styleElementOption.labelWidth
                      ? styleElementOption.labelWidth
                      : '40px'
                  "
                  v-show="styleElementOption.name"
                  :label="styleElementOption.name"
                >
                  <component
                    :is="styleElementOption.optionType"
                    style="width: 100%"
                    v-model="styleElementOption.value"
                  >
                    <div v-if="styleElementOption.optionType === 'el-select'">
                      <el-option
                        v-for="item in styleElementOption.options"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                      ></el-option>
                    </div>
                  </component>
                </el-form-item>
              </el-col>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="控件属性"> </el-tab-pane>
      <el-tab-pane label="内嵌HTML" style="padding: 6px 20px">
        <el-input
          style="margin-top: 16px"
          type="textarea"
          :autosize="{ minRows: 16, maxRows: 200 }"
          v-model="componentStyleDefinition.innerHtml.value"
        ></el-input>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import componentStyleDefinition from "@/components/universal/config/componentStyleDefinition.js";
export default {
  data() {
    return {
      activeCollapse: [],
      componentStyleDefinition: componentStyleDefinition,
    };
  },
  created() {
    this.parseComponentDef();
  },
  computed: {
    currentComp() {
      const curComp = this.$store.state.visualEditor;
      console.log(curComp);
      return curComp;
    },
  },
  methods: {
    parseComponentDef() {
      this.activeCollapse = Object.values(
        this.componentStyleDefinition.style
      ).map((item) => item.name);
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
