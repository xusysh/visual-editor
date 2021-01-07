<template>
  <div>
    <universal-component target-type="el-row" v-bind="component">
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
              style: { border: "1px solid red" },
            },
          },
          {
            targetType: "el-row",
            children: [
              {
                targetType: "el-col",
                props: {
                  span: 4,
                },
                config: {
                  style: { border: "1px solid red" },
                },
              },
            ],
          },
        ],
        props: {},
      },
    };
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
