<template>
  <div>
    <h2>行内表单</h2>
    <dl-form :inline="true" :model="formInline" class="demo-form-inline">
      <dl-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人" />
      </dl-form-item>
      <dl-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </dl-form-item>
      <dl-form-item>
        <dl-button type="primary" @click="onSubmit">查询</dl-button>
      </dl-form-item>
    </dl-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
