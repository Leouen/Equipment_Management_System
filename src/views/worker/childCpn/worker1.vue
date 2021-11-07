<template>
<div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="repairSubmitTime" label="填报时间" width="150">
    </el-table-column>
    <el-table-column prop="repairNo" label="维修单号" width="120">
    </el-table-column>
    <el-table-column prop="faultEquip" label="故障设备" width="120">
    </el-table-column>
    <el-table-column prop="repairPeople" label="维修人员" width="120">
    </el-table-column>
    <el-table-column prop="repairPrice" label="维修费用" width="120">
    </el-table-column>
    <el-table-column prop="repairSubmitPeople" label="提交人" width="120"></el-table-column>
    <el-table-column prop="faultDescr" label="故障描述" width="150"></el-table-column>
    <el-table-column prop="repairDescr" label="维修描述" width="150"></el-table-column>
    <el-table-column prop="repairStatus" label="维修状态" width="150"></el-table-column>
    <el-table-column prop="verifyDescr" label="验证描述" width="150"></el-table-column>
    <el-table-column prop="verifyPasstime" label="验证通过时间" width="150"></el-table-column>
    <!-- <el-table-column prop="repairStatus" label="维修状态" width="120"> -->

    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="
              handleClick(scope.row.repairNo, scope.$index, tableData)
            " type="text" size="small">删除</el-button> -->
        <el-button type="text" @click="setValue(scope.row)" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <div>
      <h2>填写设备维修计划</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="维修单号">
          <el-input disabled v-model="form.repairNo"></el-input>
        </el-form-item>
        <el-form-item label="维修状态">
          <el-input disabled v-model="form.repairStatus"></el-input>
        </el-form-item>
        <el-form-item label="维修描述">
          <el-input type="textarea" v-model="form.repairDescr"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sendEdit">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import {
  repairSearchlist,
  repairDelete,
  repairUpdateStatus
} from 'network/admin'
export default {
  methods: {
    setValue(row) {
      console.log(row)
      this.dialogVisible = true
      this.form.repairNo = row.repairNo
    },
    sendEdit(){
      repairUpdateStatus(this.form).then(res=>{
        console.log(res);
         this.dialogVisible = false
         this.searchList()
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    handleClick(id, index, rows) {
      repairDelete(id).then((res) => {
        console.log(res)
        if ((res = '成功')) {
          rows.splice(index, 1)
        }
      })
    },
    searchList(){
      repairSearchlist().then((res) => {
        console.log(res)
        this.tableData = res.map((x) => {
          console.log(x)
          let a = x.repairSubmitTime
          const a1 = a.slice(0, 10)
          //  console.log(a1)
          x.repairSubmitTime = a1
          return x
        })
      })
    }
  },
  created() {
    this.searchList()
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        repairNo: '',
        repairPeople: '',
        repairDescr: '',
        faultDescr: '',
        repairStatus:'维修人员提交',
        maintainStartime: '',
        maintainType: '',
        maintainStatus: '',
      },
    }
  },
}
</script>
