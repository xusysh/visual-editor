<template>
  <div style="height: 100%; overflow-y: auto; overflow: hidden">
    <el-container>
      <el-header>
        <editor-header />
      </el-header>
      <el-container style="height: 98%; overflow: hidden">
        <!-- <el-aside style="padding: 20px"> </el-aside> -->
        <el-main>
          <el-card style="height: 98%" class="box-card">
            <div style="text-align: left; height: 100%">
              <editor-component-list class="editor-component-list" />
            </div>
            <editor-canvas :style="canvasStyle" class="editor-canvas" />
          </el-card>
        </el-main>
        <el-aside style="padding: 20px" width="380px">
          <el-card
            style="height: 98%; overflow: hidden"
            class="box-card"
            :body-style="{ padding: '0px', height: '90%' }"
          >
            <div slot="header" class="clearfix" style="text-align: left">
              <span>组件编辑（{{ curCompTitle }}）</span>
            </div>
            <div style="text-align: left; height: 100%">
              <editor-component-prop />
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
    return {
      compMenuCollapse: true,
      canvasStyle: {
        "margin-left": "220px",
      },
      curCompTitle: "",
    };
  },
  created() {
    this.$bus.on("compNavCollapseChange", (collapse) => {
      this.canvasStyle["margin-left"] = collapse ? "84px" : "220px";
    });
    this.$bus.on("selectedCompChange", (comp) => {
      this.curCompTitle = comp.$props.title;
    });
  },
  methods: {},
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.editor-canvas {
  transition: 0.5s;
  -moz-transition: 0.5s, -moz-transform 0.5s; /* Firefox 4 */
  -webkit-transition: 0.5s, -webkit-transform 0.5s; /* Safari and Chrome */
  -o-transition: 0.5s, -o-transform 0.5s; /* Opera */
}
.editor-component-list {
  position: fixed;
  height: calc(100% - 160px);
  overflow: auto;
}
.editor-component-list::-webkit-scrollbar {
  width: 6px; 
  height: 1px;
}
.editor-component-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.editor-component-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
