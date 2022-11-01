<template>
  <div>
    <h2>空表格</h2>
    <dl-table :column="tableData.column" :data="tableData.data" />
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
            label: '日期'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址'
          }
        ],
        data: []
      }
    }
  }
}
</script>
