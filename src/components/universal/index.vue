<template>
  <div>
    <component :is="targetType" v-bind="props" :style="config.style">
      <div v-if="children && children.length > 0">
        <universal-component
          v-for="(child, index) in children"
          :key="index"
          v-bind="child"
        >
        </universal-component>
      </div>
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
        };
      },
    },
  },
  data() {
    return {
      // 组件的可选配置项定义
      configProps: {},
      // style：根据config生成
    };
  },
  created() {
    this.parseConfig();
  },
  methods: {
    parseConfig() {
      console.log(ConfigPropsMap);
    },
  },
};
</script>

<style scoped></style>
