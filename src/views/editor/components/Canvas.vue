<template>
  <div style="text-align: left">
    <universal-component v-bind.sync="component"> </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      component: {
        targetType: "el-container",
        title: "通用布局块",
        children: [
          {
            title: "输入框",
            targetType: "el-input",
          },
          {
            title: "自适应行",
            targetType: "el-row",
            children: [
              {
                title: "自适应列",
                targetType: "el-col",
                props: {
                  span: 12,
                },
                children: [
                  {
                    title: "输入框",
                    targetType: "el-input",
                  },
                ],
              },
              {
                title: "自适应列",
                targetType: "el-col",
                props: {
                  span: 6,
                },
                children: [
                  {
                    title: "选择框",
                    targetType: "el-select",
                  },
                ],
              },
            ],
          },
        ],
        props: {},
        config: {},
      },
      componentStyleDefinition: {},
    };
  },
  created() {
    this.$store.dispatch("visualEditor/SET_CUR_COMP", this.$props);
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
