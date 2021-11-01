<template>
  <div id="login-container">
    <div style="text-align: center;height: 50px;margin-right:-50px">
      系统注册
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="user">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
          placeholder="请输入账号名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入账号密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请输入再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="职业选择" prop="pass">
        <el-select v-model="value" placeholder="请选择" style="width:100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!--      <el-form-item label="年龄" prop="age">-->
      <!--        <el-input v-model.number="ruleForm.age"></el-input>-->
      <!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="success" @click="toLogin">切换登陆</el-button>
      </el-form-item>
    </el-form>
    <!-- <a class="toReg">切换至注册</a> -->
  </div>
</template>

<script>
// import axios from 'axios'
import { userRegister } from 'network/user'
export default {
  name: 'login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('pass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        user: [{ validator: validatePass, trigger: 'blur' }],
        pass: [{ validator: validatePass2, trigger: 'blur' }],
        checkPass: [{ validator: validatePass3, trigger: 'blur' }],
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      },
      isLogin: false,
      options: [
        {
          value: '设备管理员',
          label: '设备-管理员',
        },
        {
          value: '设备维修员',
          label: '设备-维修员',
        },
        {
          value: '设备保养员',
          label: '设备-保养员',
        },
      ],
      value: '',
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ path: '/login' })
    },
    toReg() {
      this.$router.push({ path: '/register' })
    },
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userRegister({
            staffJob: this.value,
            staffName: this.ruleForm.user,
            staffPwd: this.ruleForm.checkPass,
          }).then((res) => {
            console.log(res)
            if (res === '成功') {
              // 登陆成功 ，开始获得用户数据
              this.$message({
                message: '注册成功，请登录',
                type: 'success',
              })
              this.$router.push({ path: '/login' })
            } else {
              this.$message({
                message: '亲~ 请检查注册信息',
                type: 'warning',
              })
            }
          })
        } else {
          this.$message({
            message: '亲~ 请检查注册信息',
            type: 'warning',
          })
          return false
        }
      })

      // this.$message.success('登录成功!!!')
      // this.$router.push({ path: '/admin/index' })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
}
#login-container {
  position: relative;
  width: 400px;
  height: 370px;
  background: #e5e9f2;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -170px;
  border-radius: 5px;
  padding-top: 40px;
  padding-right: 40px;
}
/* .toReg{
  position: absolute;
  bottom: 86px;
  left: 40px;
} */
</style>
