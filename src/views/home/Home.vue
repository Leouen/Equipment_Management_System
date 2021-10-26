<template>
  <div class="home">
    <img class="logo" src="../../assets/campus.jpg" alt="">
    <h1>Equipment_Management_System</h1>
    <h1>设备管理系统</h1>
    <button class="btn" @click="toLogin" size="large">开始使用</button>
    <div class="bottom">
      <div class="className">班级：B18-2</div>
      <div class="author">
        团队合作人:
        <span>孙纪元（队长）、刘乐、郑攀一、万彭伟、黄海波</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  methods: {
    toLogin(){
      this.$router.push({path: "/login"});
    }
  }
}
</script>
<style scoped>
.home {
  margin: 50px auto;
  border-radius: 100px;
  padding: 50px;
  width: 60%;
  height: 340px;
  background: #ffffffc2;
}
.logo{
  width: 200px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}
.author {
  text-align: right;
  font-weight: bold;
  font-size: 20px;
}
.className {
  font-weight: bold;
  font-size: 20px;
}
.author span {
  font-weight: normal;
  font-size: 20px;
}
.btn {
  margin: 30px auto 50px;
  width: 195px;
  height: 60px;
  background: linear-gradient(315deg, #42e4d9 0%, #26bfe9 74%);
  border: none;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  position: relative;
  z-index: 0;
}

.btn::before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s ease;
  border-radius: 10px;
  background: linear-gradient(315deg, #26e2d9 0%, #1f77e2 74%);
  z-index: -1;
}

.btn:hover::before {
  top: 0;
  height: 100%;
}
.btn:active {
  top: 2px;
}
</style>
