
<template>
  <div>
    <h2>NwToolList</h2>
    <h3 class="pb10">工具栏</h3>
    <NwToolList :tools="tools" />

    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/toollist/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      tools: [
        {
          label: '新增',
          icon: 'plus',
          type: 'primary',
          func: () => {}
        },
        {
          label: '删除',
          icon: 'delete',
          func: () => {}
        },
        {
          label: '导出',
          type: 'menu',
          options: [
            { label: '导出EXCEL(当页数据)', key: 'curr' },
            { label: '导出EXCEL(全部数据)', key: 'all' }
          ],
          func: (val) => {}
        },
        {
          label: '类型选择',
          type: 'select',
          prop: 'taskType',
          defaultValue: '1',
          options: [
            { label: '按任务类型汇总', value: '1' },
            { label: '按区域汇总', value: '2' }
          ],
          func: (val) => {}
        }
      ]
    }
  }
}
</script>
