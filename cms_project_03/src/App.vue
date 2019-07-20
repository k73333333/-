<template>
  <div id="app">
    <mt-header title="首页">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/logo.png">
    home
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="./assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="./assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="./assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV);
      this.$router.push({name:this.selected});
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
