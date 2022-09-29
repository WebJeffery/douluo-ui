<template>
  <div>
    <h2>多级表头</h2>
    <dl-table :column="tableData.column" :data="tableData.data" height="450" />
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            prop: 'date',
            label: '日期',
            fixed: true,
            width: '120',
            renderHeader: (h, scope) => {
              return (
                <span>
                  <i class="el-icon-time"></i>
                  {scope.column.label}
                </span>
              )
            }
          },
          {
            label: '配送信息',
            children: [
              {
                prop: 'name',
                label: '姓名',
                width: '120',
                render: (h, scope) => {
                  return <el-tag>{scope.row[scope.column.property]}</el-tag>
                }
              },
              {
                label: '地址',
                children: [
                  {
                    prop: 'province',
                    label: '省份',
                  },
                  {
                    prop: 'city',
                    label: '市区',
                  },
                  {
                    prop: 'address',
                    label: '地址',
                    renderHeader: (h, scope) => {
                      return (
                        <span>
                          <i class="el-icon-location-outline"></i>
                          {scope.column.label}
                        </span>
                      )
                    }
                  }
                ]
              }
            ]
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
