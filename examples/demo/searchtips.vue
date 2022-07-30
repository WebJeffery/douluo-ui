<template>
  <div>
    <h2>NwSearchTips</h2>
    <h3 class="pb10">远程搜索</h3>
    <div class="box">
      <NwSearchTips
        v-model="value"
        v-bind="searchConf"
      />
    </div>
    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/searchtips/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      value: '',
      searchConf: {
        keys: ['address', 'value'],
        valueKey: 'value',
        fmtParams: this.fmtParams,
        apiFunc: this.querySearchAsync
      },
      timeout: null
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
  methods: {
    fmtParams(v) {
      return {
        value: v
      }
    },
    querySearchAsync(data) {
      const str = data.value
      const restaurants = this.restaurants
      const results = str ? restaurants.filter(this.createStateFilter(str)) : restaurants
      return new Promise(resolve => {
        this.timeout && clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          resolve(results)
        }, 3000 * Math.random())
      })
    },
    createStateFilter(str) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(str.toLowerCase()) === 0)
      }
    },
    loadAll() {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': '123456789 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
      ];
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
}
</style>
