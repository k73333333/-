<template>
  <div id="app">
    <myheader></myheader>
    
  </div>
</template>

<script>
import myheader from "./components/myheader.vue";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    myheader
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
