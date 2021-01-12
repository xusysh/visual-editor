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
            v-for="(styleElement, key, index) in componentStyleDefinition.style"
            :key="index"
            :name="styleElement.name"
            :title="styleElement.name"
          >
            <el-form style="padding: 0 20px 0 0; height: 100%">
              <el-col
                v-for="(styleElementOption, subKey, subIndex) in styleElement"
                :key="subIndex"
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
                    v-if="styleElementOption.styleName"
                    :is="styleElementOption.optionType"
                    style="width: 100%"
                    v-model="curComp.config.style[styleElementOption.styleName]"
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
      <el-tab-pane label="控件属性">
        <el-form style="padding: 20px 20px 0 0; height: 100%">
          <el-col
            v-for="(propOption, subKey, subIndex) in curCompDef.props"
            :key="subIndex"
            :span="propOption.optionSpan"
            :offset="1"
          >
            <el-form-item
              :label-width="
                propOption.labelWidth
                  ? propOption.labelWidth
                  : '40px'
              "
              v-show="propOption.name"
              :label="propOption.name"
            >
              <component
                :is="propOption.optionType"
                style="width: 100%"
              >
                <div v-if="propOption.optionType === 'el-select'">
                  <el-option
                    v-for="item in propOption.options"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label"
                  ></el-option>
                </div>
              </component>
            </el-form-item>
          </el-col>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="其他" style="padding: 6px 20px">
        <el-input
          style="margin-top: 16px"
          type="textarea"
          :autosize="{ minRows: 16, maxRows: 200 }"
          v-model="componentStyleDefinition.other.innerHtml.value"
        ></el-input>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import componentStyleDefinition from "@/components/universal/config/componentStyleDefinition.js";
import componentDefinition from "@/components/universal/config/componentDefinition.js";
export default {
  data() {
    return {
      activeCollapse: [],
      componentStyleDefinition: {},
      curCompDef: {},
      curComp: {
        targetType: 'responsiveRow',
        config: {
          style: {},
        },
        props: {}
      },
    };
  },
  created() {
    this.componentStyleDefinition = JSON.parse(
      JSON.stringify(componentStyleDefinition)
    );
    this.curCompDef = JSON.parse(
      JSON.stringify(componentDefinition[this.curComp.targetType])
    );
    this.$bus.on("selectedCompChange", (comp) => {
      this.curComp = JSON.parse(JSON.stringify(comp.$props));
      this.parseComponentDef();
    });
  },
  watch: {
    curComp: {
      handler(curComp) {
        this.$bus.emit("setCompStyle", curComp.config.style);
      },
      deep: true,
    },
  },
  methods: {
    parseComponentDef() {
      this.activeCollapse = Object.values(
        this.componentStyleDefinition.style
      ).map((item) => item.name);
    },
    setCurCompConf() {},
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-tabs__content {
  height: calc(100% - 86px) !important;
  padding-top: 0px !important;
  transition: 0.5s;
  overflow: auto;
}
.el-tabs__content::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}
.el-tabs__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.el-tabs__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
