<template>
  <div>
    <h2>流体高度</h2>
    <dl-table :column="tableData.column" :data="tableData.data" max-height="250" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            prop: 'date',
            label: '日期',
            width: '150',
            fixed: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '120'
          },
          {
            prop: 'province',
            label: '省份',
            width: '120'
          },
          {
            prop: 'city',
            label: '市区',
            width: '120'
          },
          {
            prop: 'address',
            label: '地址',
            width: '300'
          },
          {
            prop: 'zip',
            label: '邮编',
            width: '120',
            fixed: 'right'
          }
        ],
        data: []
      }
    }
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.tableData.data.push({
        date: `2016-05-${i + 1}`,
        name: `王小虎${i + 1}`,
        province: '上海',
        city: '普陀区',
        address: `上海市普陀区金沙江路 ${i + 1} 弄`,
        zip: 200333
      })
    }
  }
}
</script>
