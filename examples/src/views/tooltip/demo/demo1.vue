<template>
  <div>
    <h2>基本用法</h2>
    <div class="box">
      <div class="top">
        <dl-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <dl-button>上左</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <dl-button>上边</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <dl-button>上右</dl-button>
        </dl-tooltip>
      </div>
      <div class="left">
        <dl-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <dl-button>左上</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <dl-button>左边</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <dl-button>左下</dl-button>
        </dl-tooltip>
      </div>

      <div class="right">
        <dl-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <dl-button>右上</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <dl-button>右边</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <dl-button>右下</dl-button>
        </dl-tooltip>
      </div>
      <div class="bottom">
        <dl-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
          <dl-button>下左</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <dl-button>下边</dl-button>
        </dl-tooltip>
        <dl-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <dl-button>下右</dl-button>
        </dl-tooltip>
      </div>
    </div>

    <h2>主题</h2>
    <dl-tooltip content="Top center" placement="top">
      <dl-button>Dark</dl-button>
    </dl-tooltip>
    <dl-tooltip content="Bottom center" placement="bottom" effect="light">
      <dl-button>Light</dl-button>
    </dl-tooltip>

    <h2>更多 Content</h2>
    <dl-tooltip placement="top">
      <div slot="content">多行信息<br/>第二行信息</div>
      <dl-button>Top center</dl-button>
    </dl-tooltip>

    <h2>高级扩展</h2>
    <dl-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
      <dl-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</dl-button>
    </dl-tooltip>
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
      visible1: false,
      disabled: false
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

<style scoped lang="scss">
.box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .dl-tooltip__popper,
    .right .dl-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
