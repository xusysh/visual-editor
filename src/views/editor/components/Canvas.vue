<template>
  <div style="text-align: left">
    <universal-component ref="initialComponent" v-bind.sync="component">
    </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      component: {
        targetType: "div",
        title: "通用布局块",
        children: [
          {
            title: "自适应行",
            targetType: "responsiveRow",
            config: {
              style: {
                width: "100%",
              },
            },
            children: [
              {
                title: "输入框",
                targetType: "input",
                config: {
                  style: {
                    width: "100%",
                  },
                },
              },
            ],
          },
          {
            title: "自适应行",
            targetType: "responsiveRow",
            children: [
              {
                title: "自适应列",
                targetType: "responsiveCol",
                props: {
                  span: 12,
                },
                children: [
                  {
                    title: "输入框",
                    targetType: "input",
                  },
                ],
              },
              {
                title: "自适应列",
                targetType: "responsiveCol",
                props: {
                  span: 6,
                },
                children: [
                  {
                    title: "选择框",
                    targetType: "select",
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
    // this.$store.dispatch("visualEditor/SET_CUR_COMP", this.component);
  },
  mounted() {
    this.$bus.emit("selectedCompChange", this.$refs.initialComponent);
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
