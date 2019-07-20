<template>
  <div id="home">
    <mt-swipe :auto="4000" class="lunbotu">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      imgs: []
    };
  }
  //   created() {
  //     this.$axios
  //       .get("getlunbo")
  //       .then(res => {
  //         this.imgs = res.data.imgs;
  //       })
  //       .catch(err => {
  //         console.log("轮播图数据获取失败" + err);
  //       });
  //   }
};
</script>

<style lang="css" scoped>
.lunbotu{
    width: 100%;
    height: 10rem;
    background: red;
}
</style>