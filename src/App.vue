<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from "@/views/editor";
export default {
  name: "App",
  components: { Editor },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
