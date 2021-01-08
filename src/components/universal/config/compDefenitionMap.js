export default {
  common: {
    config: {
      style: {
        margin: {
          name: "外边距",
          top: {
            name: "上",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          bottom: {
            name: "下",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          left: {
            name: "左",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          right: {
            name: "右",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          }
        },
        padding: {
          name: "内边距",
          top: {
            name: "上",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          bottom: {
            name: "下",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          left: {
            name: "左",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          right: {
            name: "右",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          }
        },
        border: {
          name: "边框",
          width: {
            name: "宽度",
            value: "10px",
            optionType: "input",
            optionSpan: 11
          },
          color: {
            name: "颜色",
            value: "#000",
            optionType: "colorSelector",
            optionSpan: 11
          },
          type: {
            name: "类型",
            value: "solid",
            optionType: "select",
            optionSpan: 23,
            options: [{ label: "单行实线", value: "solid" }]
          }
        },
        color: {
          name: "字体颜色",
          value: "",
          optionType: "colorSelector",
          optionSpan: 11
        },
        backgroundColor: {
          name: "背景色",
          value: "",
          optionType: "colorSelector",
          optionSpan: 11
        }
      },
      innerHtml: {
        value: ""
      }
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
    props: {
      gutter: {
        name: "列间隔（栅格数）",
        value: 0
      }
    }
  },
  responsiveCol: {
    name: "自适应列布局容器",
    targetComponent: {
      name: "组件来源",
      value: "el-col",
      options: ["el-col"]
    },
    props: {
      span: {
        name: "占用栅格数",
        value: 4
      }
    }
  }
};
