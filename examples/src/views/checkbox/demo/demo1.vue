<template>
  <div>
    <h2>基础用法</h2>

    <dl-checkbox v-model="checked">备选项</dl-checkbox>

    <h2>锁定状态</h2>

    <dl-checkbox v-model="checked" lock>备选项</dl-checkbox>

    <h2>禁用状态</h2>
    <dl-checkbox v-model="checked1" disabled>备选项1</dl-checkbox>
    <dl-checkbox v-model="checked2" disabled>备选项</dl-checkbox>

    <h2>多选框组</h2>
    <dl-checkbox-group v-model="checkList">
      <dl-checkbox label="复选框 A" />
      <dl-checkbox label="复选框 B" />
      <dl-checkbox label="复选框 C" />
      <dl-checkbox label="禁用" disabled />
      <dl-checkbox label="选中且禁用" disabled />
    </dl-checkbox-group>

    <h2>indeterminate 状态</h2>
    <dl-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</dl-checkbox>
    <div style="margin: 15px 0"></div>
    <dl-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <dl-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</dl-checkbox>
    </dl-checkbox-group>

    <h2>可选项目数量的限制</h2>
    <dl-checkbox-group v-model="checkedCities1" :min="1" :max="2">
      <dl-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</dl-checkbox>
    </dl-checkbox-group>

    <h2>按钮样式</h2>
    <div>
      <dl-checkbox-group v-model="checkboxGroup1" disabled>
        <dl-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</dl-checkbox-button>
      </dl-checkbox-group>
    </div>
    <div class="mt20">
      <dl-checkbox-group v-model="checkboxGroup2" size="medium">
        <dl-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</dl-checkbox-button>
      </dl-checkbox-group>
    </div>
    <div class="mt20">
      <dl-checkbox-group v-model="checkboxGroup3" size="small">
        <dl-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{
          city
        }}</dl-checkbox-button>
      </dl-checkbox-group>
    </div>
    <div class="mt20">
      <dl-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <dl-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</dl-checkbox-button>
      </dl-checkbox-group>
    </div>

    <h2>带有边框</h2>
    <div>
      <dl-checkbox v-model="checked1" label="备选项1" border />
      <dl-checkbox v-model="checked2" label="备选项2" border disabled />
    </div>
    <div class="mt20">
      <dl-checkbox v-model="borderchecked3" label="备选项1" border size="medium" />
      <dl-checkbox v-model="checked4" label="备选项2" border size="medium" />
    </div>
    <div class="mt20">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <dl-checkbox label="备选项1" border />
        <dl-checkbox label="备选项2" border />
      </el-checkbox-group>
    </div>
    <div class="mt20">
      <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <dl-checkbox label="备选项1" border />
        <dl-checkbox label="备选项2" border />
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checked3: true,
      checked4: true,
      borderchecked3: '备选项1',
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      checkedCities1: ['上海', '北京'],
      cities: [...cityOptions],
      isIndeterminate: true,
      checkboxGroup1: ['备选项2'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海']
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style>
.mt20 {
  margin-top: 20px;
}
</style>
