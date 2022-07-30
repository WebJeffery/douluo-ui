<template>
  <div>
    <h2>NwSelect</h2>
    <h3 class="pb10">下拉选择器</h3>
    <NwSelect
      v-model="value"
      :options="options"
      placeholder="请选择"
      clearable
      :formatLabel="formatLabel"
      @change="selectVal"
    />
    <h3 class="mt10 pb10">下拉分组</h3>
    <NwSelect
      v-model="value1"
      :options="options1"
      :isGroup="true"
      placeholder="请选择"
      clearable
      @change="selectVal1"
    />
    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/select/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      value: '选项1',
      value1: '',
      options: [
        { label: '黄金糕', value: '选项1' },
        { label: '双皮奶', value: '选项2' },
        { label: '蚵仔煎', value: '选项3' },
        { label: '龙须面', value: '选项4' }
      ],
      options1: [
        {
          label: '证件',
          options: [
            { label: '身份证', value: '01' },
            { label: '港澳居民证', value: '02' },
            { label: '护照', value: '03' },
            { label: '军官证', value: '04' },
            { label: '台胞证', value: '05' },
            { label: '港澳居民来往内地通行证', value: '5001' },
            { label: '出生医学证明', value: '5002' },
            { label: '驾驶证', value: '5003' }
          ]
        },
        {
          label: '查询类型',
          options: [
            { label: '订单号', value: 1 },
            { label: '手机号', value: 2 },
            { label: '就诊人姓名', value: 3 }
          ]
        }
      ]
    }
  },
  methods: {
    selectVal(val) {
      console.log(val)
    },
    formatLabel(val) {
      return `${val.label}-${val.value}`
    },
    selectVal1(val) {
      console.log(val)
    }
  }
}
</script>
