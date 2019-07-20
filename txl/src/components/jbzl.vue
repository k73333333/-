<template>
  <div class="main">
    <h1>基本资料</h1>
    <div class="myimg">
    <img src="../assets/my.jpg" /></div>
    <ul>
      <li>
        <h2>个人信息</h2>
        <p>姓名：付凯东</p>
        <p>性别：男</p>
        <p>籍贯：广东</p>
      </li>
      <li>
        <h2>毕业学校</h2>
        <p>学校：清远职业技术学院</p>
        <p>学历：大专</p>
        <p>专业：移动应用开发专业</p>
      </li>
      <li>
        <h2>联系方式</h2>
        <p>邮箱：k73333333@qq.com</p>
        <p>电话：15820336774</p>
        <p>微信：15820336774</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "jbzl"
};
</script>

<style scoped>
.main {
  padding: 3rem 5rem 5rem 5rem;
  text-align: center;
}
h1 {
  margin-top: 3rem;
}
.myimg{
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  overflow: hidden; 
  margin: 0 auto;
}
img {
  width: 13rem;
}
@media (max-width: 50rem) {
  ul {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }
}
@media (min-width: 50rem) {
  ul {
    overflow: hidden;
    width: 50rem;
    margin: 0 auto;
  }
}

h2 {
  text-align: center;
}
ul li {
  float: left;
  list-style: none;
  margin:1rem 3rem;
  text-align: left;
}
</style>
