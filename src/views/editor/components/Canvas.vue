<template>
  <div style="text-align: left">
    <universal-component ref="initialComponent" v-bind.sync="component" :is-root-comp="true">
    </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      component: {
        targetType: "responsiveRow",
        title: '自适应行布局容器'
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
