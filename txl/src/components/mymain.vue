<template>
  <div class="main">
    <img src="../assets/bg.jpg" alt />
    <h1>你好，我是付凯东</h1>
    <p>你好，我是付凯东<br/>使用手机打开建议横屏</p>
  </div>
</template>

<script>
export default {
  name: "mymain",
  data() {
    return {};
  }
};
</script>

<style scoped>
.main img {
  width: 100%;
  height: 100vh;
}
h1 {
  position: fixed;
  left: 50%;
  top: 10%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

@media (min-width:800px){
  p {
    display: none;
  }
}
@media (max-width: 800px) {
  h1 {
    display: none;
  }
  p {
  position: fixed;
  left: 50%;
  top: 10%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}
}
</style>
