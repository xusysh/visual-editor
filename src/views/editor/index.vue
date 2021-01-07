<template>
  <div style="height: 100%; overflow-y: auto; overflow: hidden">
    <el-container>
      <el-header>
        <editor-header />
      </el-header>
      <el-container style="height: 98%; overflow: auto">
        <el-main>
          <el-card style="height: 98%" class="box-card">
            <div style="text-align: left">
              <editor-canvas />
            </div>
          </el-card>
        </el-main>
        <el-aside style="padding: 20px" width="360px">
          <el-card style="height: 98%; overflow: auto" class="box-card">
            <div slot="header" class="clearfix" style="text-align: left">
              <span>属性编辑（组件名）</span>
            </div>
            <div style="text-align: left">
              <editor-component-prop />
              <editor-component-list />
            </div>
            <!-- <XPEHandler
              class="handler"
              mode="vertical"
              position="left"
              :expand="true"
              :callback="toggleHandler"
            ></XPEHandler> -->
          </el-card>
        </el-aside>
      </el-container>
    </el-container>
    <div>
      <!-- <universal-component type="qqq" /> -->
    </div>
  </div>
</template>

<script>
// import XPEHandler from "@/components/handler";
import EditorHeader from "./components/Header";
import EditorComponentList from "./components/ComponentList";
import EditorCanvas from "./components/Canvas";
import EditorComponentProp from "./components/ComponentProp";
// import UniversalComponent from "@/components/universal";
export default {
  name: "Editor",
  data() {
    return {};
  },
  methods: {
    toggleHandler() {},
  },
  components: {
    EditorHeader,
    EditorComponentList,
    EditorCanvas,
    EditorComponentProp,
    // XPEHandler,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
</style>
