<template>
  <div>
    <component
      :is="targetType"
      v-bind="props"
      :style="config.style"
      :class="config.class"
    >
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
import { compDefMap } from "./config";
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
  data() {
    return {
      // 组件的props定义
      PropsDef: {},
      // 组件的配置定义
      configDef: {},
    };
  },
  created() {
    this.parseConfig();
  },
  methods: {
    parseConfig() {
      console.log(compDefMap);
    },
  },
};
</script>

<style scoped></style>
