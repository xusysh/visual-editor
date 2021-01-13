export default {
  div: {
    name: "通用布局块",
    targetComp: "div",
    isBasicComp: true,
    isContainer: true,
  },
  responsiveRow: {
    name: "自适应行布局容器",
    isContainer: true,
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-row",
    props: {
      gutter: {
        name: "列间隔",
        labelWidth: "60px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      }
    }
  },
  responsiveCol: {
    name: "自适应列布局容器",
    isContainer: true,
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-col",
    props: {
      span: {
        name: "栅格数",
        labelWidth: "60px",
        value: 12,
        optionType: "el-input-number",
        optionSpan: 23
      },
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
  input: {
    name: "输入框",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-input"
    },
    targetComp: "el-input",
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
