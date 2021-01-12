<template>
  <div>
    <el-menu
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
          @click="addComponent(component)"
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
      componentCatagoryList: [],
      componentDefinition: {}
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
      this.componentCatagoryList = JSON.parse(JSON.stringify(componentCatagoryList))
      this.componentDefinition = JSON.parse(JSON.stringify(componentDefinition))
      for (const componentCatagory of this.componentCatagoryList) {
        componentCatagory.components = componentCatagory.components.map(
          (targetType) => {
            const targetTypeDef = this.componentDefinition[targetType];
            return { targetType, ...targetTypeDef };
          }
        );
      }
      console.log(componentCatagoryList);
    },
    handleSelect() {},
    addComponent(componentDef) {
      this.$bus.emit("addComponent", componentDef);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
