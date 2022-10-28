<template>
  <div>
    <h2>基本用法</h2>
    <dl-select v-model="value" placeholder="请选择" :options="options" />


    <h2>有禁用选项</h2>
    <dl-select v-model="value1" placeholder="请选择" :options="options1" />

    <h2>有禁用状态</h2>
    <dl-select v-model="value1" placeholder="请选择" :options="options1" disabled />

    <h2>可分组</h2>
    <dl-select v-model="value4" placeholder="请选择" :options="options2" isGroup />

    <h2>基础多选</h2>
    <dl-select v-model="value2" placeholder="请选择" :options="options" multiple />
    <dl-select
      v-model="value3"
      placeholder="请选择"
      :options="options"
      multiple
      collapse-tags
      style="margin-left: 20px;" />

      <h2>自定义模板</h2>
      <dl-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </dl-select>

      <h2>可搜索</h2>
      <dl-select v-model="value" filterable placeholder="请选择" :options="options" />

      <h2>远程搜索</h2>
      <dl-select v-model="value" filterable placeholder="请选择" :options="options" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      options1: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options2: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      value1: '',
      value2: [],
      value3: [],
      value4: ''
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

<style scoped lang="scss"></style>
