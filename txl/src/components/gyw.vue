<template>
  <div>
    <div class="ulStyle">
      <ul>
        <li :class="liStyle1" @click="gyqiehuan('jbzl')">基本资料</li>
        <li :class="liStyle2" @click="gyqiehuan('zyjn')">专业技能</li>
        <li :class="liStyle3" @click="gyqiehuan('lxfs')">联系方式</li>
      </ul>
    </div>
    <div></div>
    <keep-alive>
      <component :is="gycomponentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import jbzl from "./jbzl";
import zyjn from "./zyjn";
import lxfs from "./lxfs";
export default {
  name: "gyw",
  data() {
    return {
      gycomponentId: "jbzl",
      liStyle1: "liStyle",
      liStyle2: "liStyle",
      liStyle3: "liStyle"
    };
  },
  components: {
    jbzl,
    zyjn,
    lxfs
  },
  methods: {
    gyqiehuan: function(id) {
      this.gycomponentId = id;
      this.liStyle1 = "liStyle";
      this.liStyle2 = "liStyle";
      this.liStyle3 = "liStyle";
      switch (id) {
        case 'jbzl':
          this.liStyle1 = "liStylenew";
          break;

        case 'zyjn':
          this.liStyle2 = "liStylenew";
          break;

        case 'lxfs':
          this.liStyle3 = "liStylenew";
          break;
      }
    }
  }
};
</script>

<style scoped>
.ulStyle {
  position: fixed;
  width: 100%;
  height: 3rem;
}

.ulStyle ul {
  background: #2a3744;
  height: 3rem;
  overflow: hidden;
}
.ulStyle ul li {
  float: left;
  list-style: none;
  line-height: 3rem;
  margin-left: 3rem;
}
.ulStyle ul li:hover{
  color: #eeee65;
}
.liStyle {
  color: #fff;
}
.liStylenew {
  color: yellow;
}

</style>
