<template>
  <div class="table-container">
    <el-table
      v-for="(item,index) in tableData" :key="index"
      :data="item.data"
      style="width: 33%">
      <el-table-column :label='`${item.from} 至 ${item.to} (单程)`' align="center">
        <el-table-column
          prop="start_time"
          label="出发时间"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="end_time"
          label="到达时间"
        >
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
        >
        </el-table-column>
        <el-table-column
          prop="flight"
          label="航班"
        >
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  const manguBeijing928_105 = require('../assets/mangu/9.28 - 10.5 beijing to mangu')
  const manguShenzhen928_105 = require('../assets/mangu/9.28 - 10.5 shenzhen to mangu')
  const manguShanghai928_105 = require('../assets/mangu/9.28 - 10.5 shanghai to mangu')

  export default {
    name: 'mangu',
    data() {
      return {
        tableData: [
          {
            from: '北京',
            to: '曼谷',
            data: manguBeijing928_105
          },
          {
            from: '上海',
            to: '曼谷',
            data: manguShanghai928_105
          },
          {
            from: '深圳',
            to: '曼谷',
            data: manguShenzhen928_105
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
</style>
