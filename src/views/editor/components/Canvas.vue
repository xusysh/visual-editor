<template>
  <div style="text-align: left">
    <universal-component target-type="div" v-bind.sync="component">
    </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      component: {
        children: [
          {
            title: "输入框",
            targetType: "el-input",
            config: {
              style: {
                width: "30%",
                "margin-left": "50%",
              },
            },
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
    };
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
