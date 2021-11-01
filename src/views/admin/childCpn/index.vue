<template>
  <div style="width:400px;margin: 40px auto 0px">
    <h2>填写设备维修单</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="维修单号">
        <el-input v-model="form.repairNo"></el-input>
      </el-form-item>
      <el-form-item label="填报时间">
        <el-col :span="24">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.repairSubmitTime"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="故障设备">
        <el-input v-model="form.faultEquip"></el-input>
      </el-form-item>
      <el-form-item label="维修人员">
        <el-input v-model="form.repairPeople"></el-input>
      </el-form-item>
      <el-form-item label="维修费用">
        <el-input v-model="form.repairPrice"></el-input>
      </el-form-item>
      <el-form-item label="维修状态">
        <el-input v-model="form.repairStatus"></el-input>
      </el-form-item>
      <el-form-item label="故障描述">
        <el-input type="textarea" v-model="form.faultDescr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { repairSubmit } from 'network/admin'
export default {
  data() {
    return {
      form: {
        faultDescr: '',
        faultEquip: '',
        repairDescr: '',
        repairFinishDate: '',
        repairNo: '',
        repairPeople: '',
        repairPrice: null,
        repairStatus: '',
        repairSubmitPeople: this.$store.state.user,
        repairSubmitTime: '',
        verifyDescr: '',
        verifyPasstime: '',
      },
    }
  },
  methods: {
    onSubmit() {
      repairSubmit(this.form).then((res) => {
        console.log(res)
        if (res === '成功') {
          // 登陆成功 ，开始获得用户数据
          this.$message({
            message: '维修单提交成功',
            type: 'success',
          })
          this.form = {
            faultDescr: '',
            faultEquip: '',
            repairDescr: '',
            repairFinishDate: '',
            repairNo: '',
            repairPeople: '',
            repairPrice: null,
            repairStatus: '',
            repairSubmitPeople: '',
            repairSubmitTime: '',
            verifyDescr: '',
            verifyPasstime: '',
          }
        } else {
          this.$message({
            message: '亲~ 请输入维修单信息',
            type: 'warning',
          })
        }
      })
    },
    resetForm(formName) {
      this.form = {
        faultDescr: '',
        faultEquip: '',
        repairDescr: '',
        repairFinishDate: '',
        repairNo: '',
        repairPeople: '',
        repairPrice: null,
        repairStatus: '',
        repairSubmitPeople: '',
        repairSubmitTime: '',
        verifyDescr: '',
        verifyPasstime: '',
      }
    },
  },
}
</script>

<style></style>
