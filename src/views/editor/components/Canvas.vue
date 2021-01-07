<template>
  <div>
    <universal-component target-type="el-row">
      <template v-slot:children>
        <h1>children</h1>
      </template>
    </universal-component>
  </div>
</template>

<script>
import UniversalComponent from "@/components/universal";
export default {
  data() {
    return {
      componentList: [],
    };
  },
  methods: {},
  components: { UniversalComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
