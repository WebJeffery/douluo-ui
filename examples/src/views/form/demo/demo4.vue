<template>
  <div>
    <h2>表单验证</h2>
    <dl-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <dl-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </dl-form-item>
      <dl-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </dl-form-item>
      <dl-form-item label="活动时间" required>
        <el-col :span="11">
          <dl-form-item prop="date1">
            <dl-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%" />
          </dl-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <dl-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%" />
          </dl-form-item>
        </el-col>
      </dl-form-item>
      <dl-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </dl-form-item>
      <dl-form-item label="活动性质" prop="type">
        <dl-checkbox-group v-model="ruleForm.type">
          <dl-checkbox label="美食/餐厅线上活动" name="type" />
          <dl-checkbox label="地推活动" name="type" />
          <dl-checkbox label="线下主题活动" name="type" />
          <dl-checkbox label="单纯品牌曝光" name="type" />
        </dl-checkbox-group>
      </dl-form-item>
      <dl-form-item label="特殊资源" prop="resource">
        <dl-radio-group v-model="ruleForm.resource">
          <dl-radio label="线上品牌商赞助" />
          <dl-radio label="线下场地免费" />
        </dl-radio-group>
      </dl-form-item>
      <dl-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" />
      </dl-form-item>
      <dl-form-item>
        <dl-button type="primary" @click="submitForm('ruleForm')">立即创建</dl-button>
        <dl-button @click="resetForm('ruleForm')">重置</dl-button>
      </dl-form-item>
    </dl-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
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
