<template>
  <div style="width:400px;margin: 40px auto 0px">
    <h2>填写设备保养计划</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="保养单号">
        <el-input v-model="form.maintainPlanId"></el-input>
      </el-form-item>
      <el-form-item label="填报时间">
        <el-col :span="24">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.maintainStartime"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="保养设备">
        <el-input v-model="form.maintainEquip"></el-input>
      </el-form-item>
      <el-form-item label="保养人员">
        <el-input v-model="form.maintainPeople"></el-input>
      </el-form-item>
      <el-form-item label="保养类型">
        <el-input v-model="form.maintainType"></el-input>
      </el-form-item>
      <el-form-item label="保养状态">
        <el-input v-model="form.maintainStatus"></el-input>
      </el-form-item>
      <el-form-item label="保养内容">
        <el-input v-model="form.maintainContent"></el-input>
      </el-form-item>
      <el-form-item label="保养描述">
        <el-input type="textarea" v-model="form.maintainDescr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { maintainSubmit } from 'network/admin'
export default {
  data() {
    return {
      form: {
        maintainContent: '',
        maintainDescr: '',
        maintainEquip: '',
        maintainPeople: '',
        maintainPlanId: '',
        maintainStartime: '',
        maintainType: '',
        maintainStatus: '',
      },
    }
  },
  methods: {
    onSubmit() {
      maintainSubmit(this.form).then((res) => {
        console.log(res)
        if (res === '成功') {
          // 登陆成功 ，开始获得用户数据
          this.$message({
            message: '保养计划提交成功',
            type: 'success',
          })
          this.form = {
            maintainContent: '',
            maintainDescr: '',
            maintainEquip: '',
            maintainPeople: '',
            maintainPlanId: '',
            maintainStartime: '',
            maintainType: '',
            maintainStatus: '',
          }
        } else {
          this.$message({
            message: '亲~ 请输入保养计划信息',
            type: 'warning',
          })
        }
      })
    },
    resetForm(formName) {
      this.form = {
        maintainContent: '',
        maintainDescr: '',
        maintainEquip: '',
        maintainPeople: '',
        maintainPlanId: '',
        maintainStartime: '',
        maintainType: '',
        maintainStatus: '',
      }
    },
  },
}
</script>

<style></style>
