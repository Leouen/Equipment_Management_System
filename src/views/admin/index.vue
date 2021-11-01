<template>
  <el-container class="adminIndex">
    <el-header class="adminHeader">
      <h1
        style="font-size:30px;color:#fff;line-height: 60px; display: flex; align-items: center;"
      >
        <span>维保管理员后台</span>
        <img
          src="../../assets/campus.jpg"
          style="width:200px;height:100%"
          alt=""
        />
      </h1>
      <div>
        <img src="../../assets/user.png" alt="" /><span>{{
          this.$store.state.user
        }}</span>
        <img src="../../assets/exit.png" alt="" />
      </div>
    </el-header>
    <el-container>
      <el-aside class="adminMenu" style="width: 180px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c6400"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <i class="el-icon-edit"></i>
            <span slot="title">填写设备维修单</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">填写设备保养计划</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">待报修维修单</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-tickets"></i>
            <span slot="title">保养计划管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-document-remove"></i>
            <span slot="title">待验证维修单</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-document-add"></i>
            <span slot="title">待验证保养单</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-document-checked"></i>
            <span slot="title">已验证维修单</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-document-checked"></i>
            <span slot="title">已验证保养单</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="adminMain">
        <router-view />
      </el-main>
    </el-container>
    <div class="toHome" @click="open"></div>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key == 1) {
        this.$router.push('/admin/index')
      } else if (key == 2) {
        this.$router.push('/admin/addMaintainSheet')
      }else if (key == 3) {
        this.$router.push('/admin/equipSheet')
      }
    },
    toHome() {
      console.log(123123)
      this.$router.push('/')
    },
    open() {
      this.$confirm(
        '退出登陆后当前表单会被清空，是否退出登陆？',
        '确认信息',
        {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定退出',
          cancelButtonText: '取消',
        }
      )
        .then(() => {
          this.$message({
            type: 'info',
            message: '退出成功',
          })
          this.$router.push('/')
        })
        .catch((action) => {
          this.$message({
            type: 'info',
            message:
              action === 'cancel' ? '放弃保存并离开页面' : '停留在当前页面',
          })
        })
    },
  },
}
</script>

<style>
.adminIndex {
  height: 100vh;
  background: #333;
}

.asideMenu {
  background: #333;
  width: 100px;
}

.adminHeader {
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.adminHeader img {
  width: 30px;
  height: 30px;
}

.adminHeader div {
  line-height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
}

.adminHeader span {
  padding: 0 40px 0 20px;
}

.adminMain {
  background: #fff;
}

.el-menu-item {
  text-align: left;
}
.toHome {
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100px;
  z-index: 9999;
}
</style>
