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
        labelWidth: "80px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      },
      justify: {
        name: "水平排列",
        labelWidth: "80px",
        value: "start",
        optionType: "el-select",
        options: [
          { label: "左对齐", value: "start" },
          { label: "右对齐", value: "end" },
          { label: "居中", value: "center" },
          { label: "两端等边距", value: "space-around" },
          { label: "两端无边距", value: "space-between" },
        ],
        optionSpan: 23
      },
      align: {
        name: "垂直排列",
        labelWidth: "80px",
        value: "top",
        optionType: "el-select",
        options: [
          { label: "顶部", value: "top" },
          { label: "中部", value: "middle" },
          { label: "底部", value: "bottom" },
        ],
        optionSpan: 23
      },
      tag: {
        name: "元素标签",
        labelWidth: "80px",
        value: "div",
        optionType: "el-input",
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
        name: "占用栅格",
        labelWidth: "80px",
        value: 12,
        optionType: "el-input-number",
        optionSpan: 23
      },
      offset: {
        name: "栅格偏移",
        labelWidth: "80px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      },
      push: {
        name: "栅格右移",
        labelWidth: "80px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      },
      pull: {
        name: "栅格左移",
        labelWidth: "80px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      },
    }
  },
  button: {
    name: "按钮",
    innerText: "自定义按钮",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-select"
    },
    targetComp: "el-button",
    props: {
      size: {
        name: "尺寸",
        labelWidth: "60px",
        value: "medium",
        optionType: "el-select",
        options: [
          { label: "大", value: "big" },
          { label: "中", value: "medium" },
          { label: "小", value: "mini" },
        ],
        optionSpan: 11
      },
      type: {
        name: "类型",
        labelWidth: "60px",
        value: "default",
        optionType: "el-select",
        options: [
          { label: "默认", value: "default" },
          { label: "主要", value: "primary" },
          { label: "成功", value: "success" },
          { label: "警告", value: "warning" },
          { label: "危险", value: "danger" },
          { label: "通知", value: "info" },
          { label: "文字", value: "text" },
        ],
        optionSpan: 11
      },
      round: {
        name: "圆角",
        labelWidth: "60px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      plain: {
        name: "朴素",
        labelWidth: "60px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      circle: {
        name: "圆形",
        labelWidth: "60px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      autofocus: {
        name: "聚焦",
        labelWidth: "60px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      icon: {
        name: "图标",
        labelWidth: "60px",
        value: "",
        optionType: "el-input",
        optionSpan: 23
      },
    }
  },
  input: {
    name: "输入框",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-input"
    },
    targetComp: "el-input",
    props: {
      type: {
        name: "类型",
        labelWidth: "80px",
        value: "text",
        optionType: "el-select",
        options: [
          { label: "默认", value: "text" },
          { label: "滑块", value: "range" },
          { label: "文本框", value: "primary" },
          { label: "密码框", value: "password" },
          { label: "单选框", value: "radio" },
          { label: "多选框", value: "checkbox" },
          { label: "表单提交", value: "submit" },
        ],
        optionSpan: 23
      },
      maxlength: {
        name: "最大长度",
        labelWidth: "80px",
        value: 100,
        optionType: "el-input-number",
        optionSpan: 23
      },
      minlength: {
        name: "最小长度",
        labelWidth: "80px",
        value: 0,
        optionType: "el-input-number",
        optionSpan: 23
      },
      showWordLimit: {
        name: "字数统计",
        labelWidth: "80px",
        value: true,
        optionType: "el-switch",
        optionSpan: 11
      },
      showPassword: {
        name: "显示密码",
        labelWidth: "80px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      readonly: {
        name: "只读",
        labelWidth: "80px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      clearable: {
        name: "可清空",
        labelWidth: "80px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      placeholder: {
        name: "占位文本",
        labelWidth: "80px",
        value: "请输入文字",
        optionType: "el-input",
        optionSpan: 23
      },
      prefixIcon: {
        name: "头部图标",
        labelWidth: "80px",
        value: "",
        optionType: "el-input",
        optionSpan: 23
      }
    }
  },
  checkbox: {
    name: "多选框",
    compSource: {
      name: "组件来源",
      value: "element-ui",
      optionType: "el-input"
    },
    targetComp: "el-checkbox",
    props: {
      size: {
        name: "尺寸",
        labelWidth: "80px",
        value: "medium",
        optionType: "el-select",
        options: [
          { label: "中等", value: "medium" },
          { label: "小", value: "snall" },
          { label: "迷你", value: "mini" },
        ],
        optionSpan: 23
      },      
      border: {
        name: "边框",
        labelWidth: "80px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      checked: {
        name: "勾选",
        labelWidth: "80px",
        value: false,
        optionType: "el-switch",
        optionSpan: 11
      },
      trueLabel: {
        name: "选中值",
        labelWidth: "80px",
        value: "checked",
        optionType: "el-input",
        optionSpan: 23
      },
      falseLabel: {
        name: "不选值",
        labelWidth: "80px",
        value: "unchecked",
        optionType: "el-input",
        optionSpan: 23
      }
    }
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
