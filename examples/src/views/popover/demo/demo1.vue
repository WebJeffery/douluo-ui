<template>
  <div>
    <h2>基本用法</h2>
    <dl-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <dl-button slot="reference">hover 激活</dl-button>
    </dl-popover>

    <dl-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <dl-button slot="reference">click 激活</dl-button>
    </dl-popover>

    <!-- 暂不支持 -->
    <!-- <dl-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    />
    <dl-button v-popover:popover>focus 激活</dl-button> -->

    <dl-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <dl-button slot="reference" @click="visible = !visible">手动激活</dl-button>
    </dl-popover>

    <h2>嵌套信息</h2>
    <dl-popover placement="right" width="400" trigger="click">
      <dl-table :data="gridData">
        <dl-table-column width="150" property="date" label="日期" />
        <dl-table-column width="100" property="name" label="姓名" />
        <dl-table-column width="300" property="address" label="地址" />
      </dl-table>
      <dl-button slot="reference">click 激活</dl-button>
    </dl-popover>

    <h2>嵌套操作</h2>
    <dl-popover placement="top" width="160" v-model="visible1">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <dl-button size="mini" type="text" @click="visible1 = false">取消</dl-button>
        <dl-button type="primary" size="mini" @click="visible1 = false">确定</dl-button>
      </div>
      <dl-button slot="reference">删除</dl-button>
    </dl-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      visible1: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
.dl-button {
  margin-left: 10px;
}
</style>
