<template>
  <div>
    <h2>基础表格</h2>
    <dl-table :column="tableData.column" :data="tableData.data" border>
      <div slot="options" slot-scope="scope" class="options">
          <dl-button size="mini" type="primary" ghost>预览</dl-button>
          <dl-button size="mini" class="mt-10" ghost>查看留言</dl-button>
          <dl-button size="mini" class="mt-10" :type="scope.row.linksInfo ? 'danger' : ''" ghost>
              {{ scope.row.linksInfo ? '已屏蔽' : '屏蔽' }}
          </dl-button>
      </div>
    </dl-table>
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
        data: [
          {
            date: '2016-05-02',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    }
  }
}
</script>
