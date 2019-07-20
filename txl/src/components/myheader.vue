<template>
  <div>
    <div :class="buttonStyle">
      <div @click="qiehuan('gyw')">关于我</div>
      <div @click="qiehuan('zp')">我的作品</div>
    </div>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import mymain from "./mymain";
import gyw from "./gyw";
import zp from "./zp";
export default {
  name: "myheader",
  data() {
    return {
      componentId: "mymain",
      buttonStyle: "buttona"
    };
  },
  components: {
    mymain,
    gyw,
    zp
  },
  methods: {
    qiehuan: function(id) {
      this.componentId = id;
      switch (this.buttonStyle) {
        case "buttona":
          this.buttonStyle = "buttonb";
          break;
        case "buttonb":
          this.buttonStyle = "buttonc";
          break;
        case "buttonc":
          this.buttonStyle = "buttond";
          break;
        default:
          this.buttonStyle = "buttonc";
          break;
      }
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  position: absolute;
}
.buttona {
  width: 16rem;
  height: 3.3rem;
  display: flex;
  animation: myButtonFirsta 2s 1 alternate forwards;
}
.buttona div {
  width: 7rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
}
.buttona div:nth-of-type(2) {
  border: 1px solid #2c3e50;
  background: #fff;
  color: #2c3e50;
  margin-left: 2rem;
}
.buttonb {
  animation: myButtonFirstb 2s 1 alternate forwards;
}
.buttonb div {
  width: 3rem;
  height: 7rem;
  margin-top: 2rem;
  writing-mode: tb-rl;
  text-align: center;
  line-height: 3rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
}
.buttonb div:nth-of-type(2) {
  border: 1px solid #2c3e50;
  background: #fff;
  color: #2c3e50;
}

.buttonc {
  animation: myButtonFirstc 3s 1 alternate forwards;
}
.buttonc div {
  width: 3rem;
  height: 7rem;
  margin-top: 2rem;
  writing-mode: tb-rl;
  text-align: center;
  line-height: 3rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
}
.buttonc div:nth-of-type(2) {
  border: 1px solid #2c3e50;
  background: #fff;
  color: #2c3e50;
}

.buttond {
  animation: myButtonFirstd 3s 1 alternate forwards;
}
.buttond div {
  width: 3rem;
  height: 7rem;
  margin-top: 2rem;
  writing-mode: tb-rl;
  text-align: center;
  line-height: 3rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
}
.buttond div:nth-of-type(2) {
  border: 1px solid #2c3e50;
  background: #fff;
  color: #2c3e50;
}
@keyframes myButtonFirsta {
  0% {
    position: fixed;
    left: 0%;
    top: 10%;
    z-index: 999;
  }
  50% {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;
  }
  100% {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 999;
  }
}
@keyframes myButtonFirstb {
  0% {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  50% {
    position: fixed;
    left: 97%;
    top: 10%;
    z-index: 999;
  }
  100% {
    position: fixed;
    top: 10%;
    right: 0;
    z-index: 999;
  }
}
@keyframes myButtonFirstc {
  0% {
    position: fixed;
    top: 10%;
    right: 0;
    z-index: 999;
  }
  40% {
    position: fixed;
    top: 10%;
    right: 100%;
    z-index: 999;
  }
  100% {
    position: fixed;
    top: 10%;
    left: 0%;
    z-index: 999;
  }
}
@keyframes myButtonFirstd {
  0% {
    position: fixed;
    top: 10%;
    left: 0%;
    z-index: 999;
  }
  50% {
    position: fixed;
    top: 10%;
    left: 95%;
    z-index: 999;
  }
  100% {
    position: fixed;
    top: 10%;
    right: 0;
    z-index: 999;
  }
}
</style>
