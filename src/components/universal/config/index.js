export const configPropsMap = {
  common: {
    margin: {
      name: "外边距",
      top: {
        name: "上",
        value: "0px"
      },
      bottom: {
        name: "下",
        value: "0px"
      },
      left: {
        name: "左",
        value: "0px"
      },
      right: {
        name: "右",
        value: "0px"
      }
    },
    padding: {
      name: "内边距",
      top: {
        name: "上",
        value: "0px"
      },
      bottom: {
        name: "下",
        value: "0px"
      },
      left: {
        name: "左",
        value: "0px"
      },
      right: {
        name: "右",
        value: "0px"
      }
    },
    border: {
      name: "边框",
      width: {
        name: "宽度",
        value: "0px"
      },
      color: {
        name: "颜色",
        value: "#000",
        options: []
      },
      type: {
        name: "类型",
        value: "solid",
        options: []
      }
    },
    color: {
      name: "颜色",
      value: ""
    }
  },
  div: {
    name: "通用布局块"
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
    components: ["div", "responsiveRow", "responsiveCol"]
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
