<template>
  <div>
    <h2>数字类型验证</h2>
    <dl-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <dl-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' }
        ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" />
      </dl-form-item>
      <dl-form-item>
        <dl-button type="primary" @click="submitForm('numberValidateForm')">提交</dl-button>
        <dl-button @click="resetForm('numberValidateForm')">重置</dl-button>
      </dl-form-item>
    </dl-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
