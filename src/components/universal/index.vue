<template>
  <div>
    <component :is="targetType">
      <div v-if="children && children.length > 0">
        <universal-component
          v-for="(child, index) in children"
          :key="index"
          :target-type="child.targetType"
          :children="child.children"
        >
        </universal-component>
      </div>
    </component>
  </div>
</template>

<script>
// import { ConfigPropsMap } from "./config";
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
    // 组件配置项
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      // 组件的可选配置项定义
      configProps: {},
    };
  },
  created() {
    console.log("hhh");
    console.log(this.children);
    this.getConfigProps();
  },
  methods: {
    getConfigProps() {
      // console.log(ConfigPropsMap);
    },
  },
};
</script>

<style scoped></style>
