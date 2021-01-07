<template>
  <div>
    <universal-component target-type="el-row" :children="children">
    </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      component: {
        children: [{ targetType: "input" }],
      },
    };
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
