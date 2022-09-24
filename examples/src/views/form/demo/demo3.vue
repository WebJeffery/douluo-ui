<template>
  <div>
    <h2>对齐方式</h2>
    <dl-radio-group v-model="labelPosition" size="small">
      <dl-radio-button label="left">左对齐</dl-radio-button>
      <dl-radio-button label="right">右对齐</dl-radio-button>
      <dl-radio-button label="top">顶部对齐</dl-radio-button>
    </dl-radio-group>
    <div style="margin: 20px"></div>
    <dl-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <dl-form-item label="名称">
        <el-input v-model="formLabelAlign.name" />
      </dl-form-item>
      <dl-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region" />
      </dl-form-item>
      <dl-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type" />
      </dl-form-item>
    </dl-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>
