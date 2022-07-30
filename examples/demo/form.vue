<template>
  <section>
    <h2>NwFormQuery和NwForm</h2>
    <h3 class="pb10">1、查询</h3>
    <NwFormQuery
      ref="xform"
      v-model="formData"
      :config="baseInfo"
      :buttons="buttons"
      :colSpan="5"
    />
    <h3 class="mt10 pb10">2、新增/修改</h3>
    <!-- 数据 不分类 -->
    <NwForm
      ref="xform1"
      v-model="formData"
      labelWidth="150"
      :data="baseInfo"
      :buttons="buttons1"
      :colSpan="15"
    />
    <h3 class="mt10 pb10">3、详情</h3>
    <!-- 数据 分类 -->
    <NwForm
      v-model="formData"
      labelWidth="150"
      :other="other"
      :businessEnv="businessEnv"
      :classifications="classifications"
      :activeHide="activeHide"
      :colSpan="8"
    />

    <ShowMark v-model="readmeTxt" />
  </section>
</template>
<script>
import readmeTxt from 'packages/element-ui/form/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      baseInfo: {
        stationIdQuery: {
          type: 'input',
          label: '编号',
          disabled: true,
          $attrs: {
            maxlength: 20
          }
        },
        wager: {
          type: 'select',
          label: '权限',
          options: [
            { label: '允许', value: 1 },
            { label: '禁止', value: 2 }
          ],
          $on: {
            change: this.changeWager
          }
        },
        minWinLevel: {
          type: 'input',
          label: '最小奖等',
          disabled: () => this.formData.wager === 1
        },
        maxWinLevel: {
          type: 'input',
          label: '最大奖等',
          rules: []
        },
        protectMoney: {
          type: 'input',
          label: '单票金额',
          rules: () => this.formData.wager === 1 ? [{ required: true, message: '单票金额不能为空', trigger: 'blur' }] : [],
          show: () => this.formData.wager === 1
        },
        giveBarStatus: {
          label: '是否扫码',
          render: () => {
            return (
              <el-radio-group value={this.formData.giveBarStatus} onInput={this.changeGiveBarStatus}>
                {
                  this.options.map(v => {
                    return <el-radio label={v.value}>{v.label}</el-radio>
                  })
                }
              </el-radio-group>
            )
          }
        },
        forbidSaleStartTime: {
          type: 'date-picker',
          label: '销售时间',
          $attrs: {
            valueFormat: 'HHmmss',
            placeholder: '任意时间点'
          }
        }
      },
      formData: {
        wager: '',
        giveBarStatus: ''
      },
      buttons: [
        {
          label: '查询',
          type: 'primary',
          func: () => this.query()
        },
        {
          label: '重置',
          func: () => this.reset()
        }
      ],
      buttons1: [
        {
          label: '保存',
          type: 'primary',
          func: () => this.submit()
        },
        {
          label: '重置',
          func: () => {}
        }
      ],
      options: [
        { label: '是', value: 'yes' },
        { label: '否', value: 'no' }
      ],
      other: {
        stationCode: {
          label: '编号'
        },
        stationName: {
          label: '名称'
        },
        operType: {
          label: '方式'
        },
        deposit: {
          label: '押金'
        },
        setUpTime: {
          label: '时间',
          format: (row) => {
            console.log(row)
          }
        }
      },
      businessEnv: {
        stationCode1: {
          label: '编号'
        },
        stationName2: {
          label: '名称'
        },
        operType2: {
          label: '方式'
        },
        deposit2: {
          label: '押金'
        },
        setUpTime2: {
          label: '时间'
        }
      },
      classifications: {
        other: '基本信息',
        businessEnv: '环境'
      },
      activeHide: {
        other: true,
        businessEnv: true
      }
    }
  },
  methods: {
    changeWager(val) {
      console.log(val)
    },
    changeGiveBarStatus(val) {
      this.formData.giveBarStatus = val
    },
    async query() {
      const data = await this.$refs.xform.validate()
      if (!data) return
      this.$alert(`<strong style='word-break:break-all;'>${JSON.stringify(data)}</strong>`, '数据', {
        dangerouslyUseHTMLString: true
      }).catch(_ => {})
    },
    async submit() {
      const data = await this.$refs.xform1.validate()
      if (!data) return
      this.$alert(`<strong style='word-break:break-all;'>${JSON.stringify(data)}</strong>`, '数据', {
        dangerouslyUseHTMLString: true
      }).catch(_ => {})
    },
    reset() {
      this.$refs.xform.resetFields()
    }
  }
}
</script>
