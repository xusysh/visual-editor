<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-openeds="['0']"
      @select="handleSelect"
      :collapse="compMenuCollapse"
    >
      <el-submenu
        v-for="(componentCatagory, index) in componentCatagoryList"
        :key="index"
        :index="index.toString()"
      >
        <template slot="title">
          <i :class="componentCatagory.icon"></i>
          <span slot="title">{{ componentCatagory.title }}</span>
        </template>
        <el-menu-item
          v-for="(component, subIndex) in componentCatagory.components"
          :key="subIndex"
          :index="`${index}-${subIndex}`"
        >
          {{ component.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import componentCatagoryList from "@/components/universal/config/componentCatagoryList";
import componentDefinition from "@/components/universal/config/componentDefinition";
export default {
  props: {},
  data() {
    return {
      compMenuCollapse: false,
      componentCatagoryList: componentCatagoryList,
    };
  },
  created() {
    this.getCompDef();
    this.$bus.on("compNavCollapseChange", (val) => {
      this.compMenuCollapse = val;
    });
  },
  methods: {
    getCompDef() {
      for (const componentCatagory of componentCatagoryList) {
        componentCatagory.components = componentCatagory.components.map(
          (item) => componentDefinition[item]
        );
      }
      console.log(componentCatagoryList);
    },
    handleSelect() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
