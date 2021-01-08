export default {
  style: {
    margin: {
      name: "外边距",
      top: {
        name: "上",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      bottom: {
        name: "下",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      left: {
        name: "左",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      right: {
        name: "右",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      }
    },
    padding: {
      name: "内边距",
      top: {
        name: "上",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      bottom: {
        name: "下",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      left: {
        name: "左",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      right: {
        name: "右",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      }
    },
    border: {
      name: "边框",
      type: {
        name: "类型",
        value: "none",
        optionType: "el-select",
        optionSpan: 23,
        options: [
          { label: "无边框", value: "none" },
          { label: "隐藏边框", value: "hidden" },
          { label: "点状", value: "dotted" },
          { label: "虚线", value: "dashed" },
          { label: "实线", value: "solid" },
          { label: "双线", value: "double" }
        ]
      },
      width: {
        name: "宽度",
        value: "10px",
        optionType: "el-input",
        optionSpan: 11
      },
      color: {
        name: "颜色",
        value: "#000",
        optionType: "el-color-picker",
        optionSpan: 11
      }
    },
    font: {
      name: "字体",
      fontSize: {
        name: "大小",
        value: "12px",
        optionType: "el-input",
        optionSpan: 11
      },
      fontWeight: {
        name: "粗细",
        value: "500",
        optionType: "el-input",
        optionSpan: 11
      },
      textAlign: {
        name: "对齐",
        value: "left",
        optionType: "el-select",
        options: [
          { label: "左对齐", value: "left" },
          { label: "居中", value: "center" },
          { label: "右对齐", value: "right" }
        ],
        optionSpan: 23
      },
      lineHeight: {
        name: "行高",
        value: "12px",
        optionType: "el-input",
        optionSpan: 11
      },
      color: {
        name: "颜色",
        value: "#000",
        optionType: "el-color-picker",
        optionSpan: 11
      }
    },
    other: {
      name: "其他",
      innerText: {
        name: "内嵌文字",
        value: "",
        optionType: "el-input",
        optionSpan: 23,
        labelWidth: "80px"
      },
      opacity: {
        name: "不透明度",
        value: "1",
        optionType: "el-input",
        optionSpan: 11,
        labelWidth: "80px"
      },
      backgroundColor: {
        name: "背景色",
        value: "#000",
        optionType: "el-color-picker",
        optionSpan: 11,
        labelWidth: "80px"
      }
    }
  },
  innerHtml: {
    value: ""
  }
};