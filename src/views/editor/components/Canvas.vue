<template>
  <div style="text-align: left">
    <universal-component target-type="div" v-bind="component">
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
            targetType: "el-input",
            config: {
              style: {
                border: "1px solid red",
                width: "30%",
                "margin-left": "50%",
              },
              class: "randomClass",
            },
          },
          {
            targetType: "el-row",
            children: [
              {
                targetType: "el-col",
                props: {
                  span: 12,
                },
                config: {
                  innerHtml: "&nbsp;",
                },
              },
              {
                targetType: "el-col",
                props: {
                  span: 6,
                },
                children: [
                  {
                    targetType: "el-input",
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
<style>
</style>
