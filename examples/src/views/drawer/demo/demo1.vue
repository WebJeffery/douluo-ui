<template>
  <div>
    <h2>基本用法</h2>
    <dl-radio-group v-model="direction">
      <dl-radio label="ltr">从左往右开</dl-radio>
      <dl-radio label="rtl">从右往左开</dl-radio>
      <dl-radio label="ttb">从上往下开</dl-radio>
      <dl-radio label="btt">从下往上开</dl-radio>
    </dl-radio-group>

    <dl-button @click="drawer = true" type="primary" style="margin-left: 16px"> 点我打开 </dl-button>

    <dl-drawer title="我是标题" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <span>我来啦!</span>
    </dl-drawer>

    <h2>不添加 Title</h2>
    <dl-button @click="drawer1 = true" type="primary" style="margin-left: 16px"> 点我打开 </dl-button>

    <dl-drawer title="我是标题" :visible.sync="drawer1" :with-header="false">
      <span>我来啦!</span>
    </dl-drawer>

    <h2>自定义内容</h2>
    <dl-button type="text" @click="table = true">打开嵌套表格的 Drawer</dl-button>
    <dl-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</dl-button>
    <dl-drawer title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
      <dl-table :data="gridData">
        <dl-table-column property="date" label="日期" width="150" />
        <dl-table-column property="name" label="姓名" width="200" />
        <dl-table-column property="address" label="地址" />
      </dl-table>
    </dl-drawer>

    <dl-drawer
      title="我嵌套了 Form !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <dl-form :model="form">
          <dl-form-item label="活动名称" :labdl-width="formLabelWidth">
            <dl-input v-model="form.name" autocomplete="off" />
          </dl-form-item>
          <dl-form-item label="活动区域" :labdl-width="formLabelWidth">
            <dl-select v-model="form.region" placeholder="请选择活动区域">
              <dl-option label="区域一" value="shanghai" />
              <dl-option label="区域二" value="beijing" />
            </dl-select>
          </dl-form-item>
        </dl-form>
        <div class="demo-drawer__footer">
          <dl-button @click="cancelForm">取 消</dl-button>
          <dl-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{
            loading ? '提交中 ...' : '确 定'
          }}</dl-button>
        </div>
      </div>
    </dl-drawer>

    <h2>多层嵌套</h2>
    <dl-button @click="drawer2 = true" type="primary" style="margin-left: 16px"> 点我打开 </dl-button>

    <dl-drawer title="我是外面的 Drawer" :visible.sync="drawer2" size="50%">
      <div>
        <dl-button @click="innerDrawer = true">打开里面的!</dl-button>
        <dl-drawer title="我是里面的" :append-to-body="true" :before-close="handleClose" :visible.sync="innerDrawer">
          <p>_(:зゝ∠)_</p>
        </dl-drawer>
      </div>
    </dl-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawer1: false,
      drawer2: false,
      direction: 'rtl',
      table: false,
      dialog: false,
      loading: false,
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
      formLabelWidth: '80px',
      timer: null,
      innerDrawer: false
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
