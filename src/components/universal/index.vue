<template>
  <div style="position: relative">
    <component
      :is="targetType"
      v-bind="props"
      :style="config.style"
      @mouseenter.native="onMouseEnter($event)"
      @mouseleave.native="onMouseLeave"
      class="uni-comp"
    >
      <div
        style="
          position: absolute;
          top: 0;
          background-color: red;
          width: 100%;
          height: 100%;
        "
        v-show="mouseOver"
      ></div>
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
      console.log(this.targetType + " enter");
      // this.mouseOver = true;
    },
    onMouseLeave() {
      console.log(this.targetType + " leave");
      // this.mouseOver = false;
    },
  },
};
</script>

<style scoped lang="scss">
.uni-comp {
  &:hover {
    outline: 1px solid #ddd !important;
  }
}
</style>
