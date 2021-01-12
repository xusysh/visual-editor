<template>
  <component
    :is="compDef.targetComp"
    v-bind="props"
    v-model="model.value"
    :style="config.style"
    class="uni-comp"
    @click.native="setCurComp"
    @mouseover.native="onMouseEnter"
    @mouseout.native="onMouseLeave"
    disabled
  >
    <div class="target-layer" v-show="mouseOver || selected">
      <span class="target-type">{{ title }}</span>
    </div>
    <div v-text="config.innerText"></div>
    <div v-html="config.innerHtml"></div>
    <universal-component
      v-for="(child, index) in children"
      :key="index"
      v-bind="child"
    >
    </universal-component>
  </component>
</template>

<script>
import componentStyleDefinition from "./config/componentStyleDefinition";
import componentDefinition from "./config/componentDefinition";
import draggable from "vuedraggable";
export default {
  name: "UniversalComponent",
  props: {
    // 组件类型
    targetType: {
      type: String,
      required: true,
    },
    // 组件名称
    title: {
      type: String,
      default: "动态组件",
    },
    // 组件描述
    desc: {
      type: String,
      default: "组件描述",
    },
    // 嵌套的子组件
    children: {
      type: Array,
      default: () => [],
    },
    // 组件属性
    props: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 组件model
    model: {
      type: Object,
      default: () => {
        return { value: null };
      },
    },
    // 组件样式及其他配置
    config: {
      type: Object,
      default: () => {
        return {
          style: {},
          class: {},
        };
      },
    },
  },
  components: { draggable },
  data() {
    return {
      // 组件的props定义
      PropsDef: {},
      // 组件的配置定义
      configDef: {},
      // 组件绑定class
      compClass: "",
      compDef: {},
      mouseOver: false,
      selected: false,
      componentStyleDefinition: {},
    };
  },
  created() {
    this.componentStyleDefinition = JSON.parse(
      JSON.stringify(componentStyleDefinition)
    );
    this.parseStyle();
    this.getCompDef();
    this.$bus.on("selectedCompChange", (comp) => {
      this.selected = this === comp;
    });
    this.$bus.on("setCompStyle", (style) => {
      if (this.selected) {
        console.log(style);
        this.config.style = style;
      }
    });
  },
  methods: {
    onMouseEnter(event) {
      // console.log(event);
      event.stopPropagation();
      event.preventDefault();
      this.mouseOver = true;
      // console.log(this.targetType + " enter");
      // this.mouseOver = true;
    },
    onMouseLeave(event) {
      // console.log(event);
      event.stopPropagation();
      this.mouseOver = false;
      // console.log(this.targetType + " leave");
      // this.mouseOver = false;
    },
    setCurComp(event) {
      event.stopPropagation();
      this.selected = true;
      // this.$store.dispatch("visualEditor/SET_CUR_COMP", this.$props);
      this.$bus.emit("selectedCompChange", this);
    },
    parseStyle() {
      const styleElements = this.componentStyleDefinition.style;
      for (const styleElementKey in styleElements) {
        const styleElement = styleElements[styleElementKey];
        for (const styleElementOptionKey in styleElement) {
          const styleName = styleElement[styleElementOptionKey].styleName;
          if (styleName) {
            if (!this.config.style) {
              this.config.style = {};
            }
            if (!this.config.style[styleName]) {
              this.config.style[styleName] =
                styleElement[styleElementOptionKey].value;
            }
          }
        }
      }
    },
    getCompDef() {
      this.compDef = componentDefinition[this.targetType]
      console.log(this.compDef)
    }
  },
};
</script>

<style scoped lang="scss">
.uni-comp {
  position: relative;
  &:hover {
    outline: 1px dashed #ddd !important;
  }
}
.target-layer {
  z-index: 9999999;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background: #eee;
  border: 1px solid #999;
  pointer-events: none;
  position: absolute;
}
.target-type {
  position: absolute;
  font-size: 8px;
  top: 0px;
  right: 0px;
  padding: 4px 6px;
  background-color: rgba(180, 180, 180, 0.5);
  border-radius: 3px;
}
.el-input.is-disabled /deep/ .el-input__inner {
  cursor: default;
  background-color: white;
}
.el-select /deep/ .el-input.is-disabled /deep/ .el-input__inner {
  cursor: default;
  background-color: white;
}
</style>
