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
  }
};
