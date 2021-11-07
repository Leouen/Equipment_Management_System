<template>
<div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="maintainStartTime" label="填报时间" width="150">
    </el-table-column>
    <el-table-column prop="maintainPlanId" label="保养单号" width="120">
    </el-table-column>
    <el-table-column prop="maintainEquip" label="故障设备" width="120">
    </el-table-column>
    <el-table-column prop="maintainPeople" label="保养人员" width="120">
    </el-table-column>
    <el-table-column prop="maintainContent" label="保养内容" width="120"></el-table-column>
    <el-table-column prop="maintainDescr" label="保养描述" width="150"></el-table-column>
    <el-table-column prop="maintainType" label="保养类型" width="150"></el-table-column>
    <el-table-column prop="maintainStatus" label="保养状态" width="150"></el-table-column>

    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="
              handleClick(scope.row.maintainPlanId, scope.$index, tableData)
            " type="text" size="small">删除</el-button>
        <el-button type="text" @click="setValue(scope.row)" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <div>
      <h2>填写设备保养计划</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="保养单号">
          <el-input disabled v-model="form.maintainPlanId"></el-input>
        </el-form-item>
        <el-form-item label="保养状态">
          <el-input v-model="form.maintainStatus"></el-input>
        </el-form-item>
        <el-form-item label="保养描述">
          <el-input type="textarea" v-model="form.maintainDescr"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import {
  maintainPlanSearchList,
  maintainDelete
} from 'network/admin'
export default {
  methods: {
    setValue(row) {
      console.log(row);
      this.dialogVisible = true
      this.form.maintainPlanId = row.maintainPlanId
    },
    
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    handleClick(id, index, rows) {
      maintainDelete(id).then((res) => {
        console.log(res)
        if ((res = '成功')) {
          rows.splice(index, 1)
        }
      })
    },
  },
  created() {
    maintainPlanSearchList().then((res) => {
      console.log(res)
      this.tableData = res.map((x) => {
        console.log(x)
        let a = x.maintainStartime
        const a1 = a.slice(0, 10)
        //  console.log(a1)
        x.maintainStartime = a1
        return x
      })
    })
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
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
}
</script>
