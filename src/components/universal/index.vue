<template>
  <div>
    <component :is="targetType">
      <slot name="children"></slot>
    </component>
  </div>
</template>

<script>
import { ConfigPropsMap } from "./config";
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
    // 组件配置项
    config: {
      type: Object,
      default: () => {
        return {
          type: "",
        };
      },
    },
  },
  data() {
    return {
      // 是否可以存放子组件
      canPlaceChild: false,
      // 嵌套的子组件
      children: [],
      // 组件的可选配置项定义
      configProps: {},
    };
  },
  created() {
    this.getConfigProps();
  },
  methods: {
    getConfigProps() {
      console.log(ConfigPropsMap);
    },
  },
};
</script>

<style scoped></style>
