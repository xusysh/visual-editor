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
  >
    <div class="target-layer" v-show="mouseOver || selected">
      <div class="target-type">{{ title }}&nbsp;</div>
    </div>
    <span v-text="config.innerText"></span>
    <div v-html="config.innerHtml"></div>
    <universal-component
      v-for="(child, index) in children"
      :key="index"
      v-bind="child"
      @dropChild="dropChild"
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
    // 初始时是否选中
    initSelected: {
      type: Boolean,
      default: false,
    },
    // 是否为根组件
    isRootComp: {
      type: Boolean,
      default: false,
    },
    // 父组件删除子组件用
    compIndex: {
      type: Number,
      default: 0,
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
      // 该组件的定义
      compDef: {},
      mouseOver: false,
      selected: false,
      componentStyleDefinition: {},
      componentDefinition: {},
    };
  },
  created() {
    this.getCompDef();
    this.parseStyle();
    this.createBusHook();
    if (this.initSelected) {
      this.$bus.emit("selectedCompChange", this);
    }
  },
  methods: {
    createBusHook() {
      this.$bus.on("selectedCompChange", (comp) => {
        this.selected = this === comp;
      });
      this.$bus.on("setCompStyleAndProp", (comp) => {
        if (this.selected) {
          // console.log(style);
          this.config.innerText = comp.config.innerText;
          this.config.style = comp.config.style;
          for (const propKey in comp.props) {
            this.props[propKey] = comp.props[propKey];
          }
        }
      });
      this.$bus.on("addComponent", (newComp) => {
        if (this.selected) {
          console.log(this)
          if (!this.compDef.isContainer) {
            this.$message({
              message: "当前选中组件非容器，不能嵌套组件",
              type: "warning",
            });
            return;
          }
          this.initProp(newComp);
          this.children.push(newComp);
        }
      });
      this.$bus.on("dropCurComp", () => {
        if (this.selected) {
          this.dropComp();
        }
      });
    },
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
      this.componentStyleDefinition = JSON.parse(
        JSON.stringify(componentStyleDefinition)
      );
      const styleElements = this.componentStyleDefinition.style;
      for (const styleElementKey in styleElements) {
        const styleElement = styleElements[styleElementKey];
        for (const styleElementOptionKey in styleElement) {
          const styleName = styleElement[styleElementOptionKey].styleName;
          if (styleName) {
            if (!this.config.style[styleName]) {
              this.config.style[styleName] =
                styleElement[styleElementOptionKey].value;
            }
          }
        }
      }
      if (!this.compDef.isContainer) {
        this.config.style["padding-top"] = "";
        this.config.style["padding-bottom"] = "";
        this.config.style["padding-left"] = "";
        this.config.style["padding-right"] = "";
      }
    },
    initProp(comp) {
      this.componentDefinition = JSON.parse(
        JSON.stringify(componentDefinition)
      );
      const propsDef = this.componentDefinition[comp.targetType].props;
      for (const propDefKey in propsDef) {
        comp.props[propDefKey] = propsDef[propDefKey].value;
      }
      // console.log(comp.props)
      comp.title = this.componentDefinition[comp.targetType].name;
      comp.initSelected = true;
      comp.compIndex = this.children.length;
      comp.config = {
        style: {},
        class: {},
        innerText: this.componentDefinition[comp.targetType].innerText,
      };
    },
    getCompDef() {
      this.compDef = componentDefinition[this.targetType];
      // this.title = this.compDef.name;
    },
    dropComp() {
      this.$emit("dropChild", this.compIndex);
    },
    dropChild(index) {
      this.children.splice(index, 1);
      this.$bus.emit("selectedCompChange", this);
    },
  },
};
</script>

<style scoped lang="scss">
.uni-comp {
  position: relative;
  outline: 1px dashed #ddd !important;
  transition: all .5s;
  // &:hover {
  //   outline: 1px dashed #ddd !important;
  // }
}
.target-layer {
  z-index: 9999;
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
  z-index: 99999;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 6px;
  font-size: 8px;
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
