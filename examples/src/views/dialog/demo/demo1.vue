<template>
  <div>
    <h2>基本用法</h2>
    <dl-button type="text" @click="dialogVisible = true">点击打开 Dialog</dl-button>

    <dl-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <dl-button @click="dialogVisible = false">取 消</dl-button>
        <dl-button type="primary" @click="dialogVisible = false">确 定</dl-button>
      </span>
    </dl-dialog>

    <h2>自定义内容</h2>

    <!-- Table -->
    <dl-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</dl-button>

    <dl-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <dl-table :data="gridData">
        <dl-table-column property="date" label="日期" width="150" />
        <dl-table-column property="name" label="姓名" width="200" />
        <dl-table-column property="address" label="地址" />
      </dl-table>
    </dl-dialog>

    <!-- Form -->
    <dl-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</dl-button>

    <dl-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <dl-form :model="form">
        <dl-form-item label="活动名称" :labdl-width="formLabelWidth">
          <dl-input v-model="form.name" autocomplete="off" />
        </dl-form-item>
        <dl-form-item label="活动区域" :labdl-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </dl-form-item>
      </dl-form>
      <div slot="footer" class="dialog-footer">
        <dl-button @click="dialogFormVisible = false">取 消</dl-button>
        <dl-button type="primary" @click="dialogFormVisible = false">确 定</dl-button>
      </div>
    </dl-dialog>

    <h2>嵌套的 Dialog</h2>
    <dl-button type="text" @click="outerVisible = true">点击打开外层 Dialog</dl-button>

    <dl-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <dl-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body />
      <div slot="footer" class="dialog-footer">
        <dl-button @click="outerVisible = false">取 消</dl-button>
        <dl-button type="primary" @click="innerVisible = true">打开内层 Dialog</dl-button>
      </div>
    </dl-dialog>

    <h2>居中布局</h2>

    <dl-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</dl-button>

    <dl-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <dl-button @click="centerDialogVisible = false">取 消</dl-button>
        <dl-button type="primary" @click="centerDialogVisible = false">确 定</dl-button>
      </span>
    </dl-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,

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
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',

      outerVisible: false,
      innerVisible: false,

      centerDialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
}
</script>
