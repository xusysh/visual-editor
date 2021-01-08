export default {
  div: {
    name: "通用布局块"
  },
  responsiveRow: {
    name: "自适应行布局容器",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-row",
    props: {
      gutter: {
        name: "列间隔（栅格数）",
        value: 0
      }
    }
  },
  responsiveCol: {
    name: "自适应列布局容器",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-col",
    props: {
      span: {
        name: "占用栅格数",
        value: 4
      }
    }
  },
  button: {
    name: "按钮",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-button",
    props: {}
  },
  select: {
    name: "选择器",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-select",
    props: {}
  },
  table: {
    name: "表格",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-table",
    props: {}
  },
  progress: {
    name: "进度条",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-progress",
    props: {}
  },
  reportId1: {
    name: "报表1",
    compSource: {
      name: "组件来源",
      value: "自定义组件",
      optionType: "el-select"
    },
    targetComp: "el-col",
    props: {}
  },
  reportId2: {
    name: "报表2",
    compSource: {
      name: "组件来源",
      value: "自定义组件",
      optionType: "el-select"
    },
    targetComp: "el-col",
    props: {}
  }
};
