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
            targetType: "el-input",
            config: {
              style: {
                width: "30%",
                "margin-left": "50%",
              },
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
                 children: [
                  {
                    targetType: "el-input",
                  },
                ],
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
