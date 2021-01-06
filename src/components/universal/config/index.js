export const configPropsMap = {
  common: {
    margin: {},
    padding: {}
  },
  responsiveRow: {
    name: "自适应行布局容器",
    targetComponent: {
      name: "组件来源",
      value: "el-col",
      options: ["el-col"]
    },
    gutter: {
      name: "列间隔（栅格数）",
      value: 0
    }
  },
  responsiveCol: {
    name: "自适应列布局容器",
    targetComponent: {
      name: "组件来源",
      value: "el-col",
      options: ["el-col"]
    },
    span: {
      name: "占用栅格数",
      value: 4
    }
  }
};

export const componentCatagoryList = [
  {
    title: "布局容器",
    components: ["responsiveRow", "responsiveCol"]
  },
  {
    title: "表单组件",
    components: ["button", "select"]
  },
  {
    title: "数据展示",
    components: ["table", "progress"]
  },
  {
    title: "自定义报表",
    components: ["reportId1", "reportId2"]
  }
];
