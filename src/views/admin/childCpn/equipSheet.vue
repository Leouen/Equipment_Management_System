<template>
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
  <el-table-column prop="verifyDescr" label="验证描述" width="150"></el-table-column>
  <el-table-column prop="verifyPasstime" label="验证通过时间" width="150"></el-table-column>
  <!-- <el-table-column prop="repairStatus" label="维修状态" width="120"> -->

  <el-table-column fixed="right" label="操作" width="100">
    <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
      <el-button type="text" size="small">编辑</el-button>
    </template>
  </el-table-column>
</el-table>
</template>

<script>
import {
  repairSearchlist
} from 'network/admin'
export default {
  methods: {
    handleClick(row) {
      console.log(row)
    },
  },
  created() {
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
  },
  data() {
    return {
      tableData: [],
    }
  },
}
</script>
