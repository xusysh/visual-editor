<template>
  <div
    style="position: relative"
    @mouseover="onMouseEnter"
    @mouseout="onMouseLeave"
    class="uni-comp"
    :style="config.style"
  >
    <div class="target-layer" v-show="mouseOver">
      <span class="target-type">{{ targetType }}</span>
    </div>
    <component :is="targetType" v-bind="props" @click="setCurComp">
      <div v-text="config.innerText"></div>
      <div v-html="config.innerHtml"></div>
      <div v-if="children && children.length > 0">
        <draggable class="list-group" :list="children">
          <universal-component
            v-for="(child, index) in children"
            :key="index"
            v-bind="child"
          >
          </universal-component>
        </draggable>
      </div>
    </component>
  </div>
</template>

<script>
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
      mouseOver: false,
    };
  },
  created() {
    this.parseConfig();
  },
  methods: {
    parseConfig() {
      // console.log(this.children);
      console.log(componentDefinition);
    },
    onMouseEnter(event) {
      console.log(event);
      event.stopPropagation();
      event.preventDefault();
      this.mouseOver = true;
      console.log(this.targetType + " enter");
      // this.mouseOver = true;
    },
    onMouseLeave(event) {
      console.log(event);
      event.stopPropagation();
      this.mouseOver = false;
      console.log(this.targetType + " leave");
      // this.mouseOver = false;
    },
    setCurComp() {
      this.$store.dispatch("SET_CUR_COMP", this.props);
    },
  },
};
</script>

<style scoped lang="scss">
.uni-comp {
  &:hover {
    outline: 1px dashed #ddd !important;
  }
}
.target-layer {
  z-index: 100000;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #eee;
  border: 1px solid #999;
  pointer-events: none;
  position: absolute;
}
.target-type {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 6px;
  background-color: rgba(180, 180, 180, 0.5);
  border-radius: 3px;
}
</style>
