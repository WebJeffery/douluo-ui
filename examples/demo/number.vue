<template>
  <div>
    <h2>NwNumber</h2>
    <h3 class="pb10">数字输入框</h3>
    <div class="box">
      <NwNumber v-model="value1" :maxlength="10" placeholder="最大输入10位数字" />
    </div>
    <h3 class="mt10 pb10">数字输入框--后带单位</h3>
    <div class="box">
      <NwNumber
        v-model="value2"
        :maxlength="3"
        unit="元"
      />
    </div>
    <h3 class="mt10 pb10">数字输入框--前带单位</h3>
    <div class="box">
      <NwNumber
        v-model="value3"
        :clearable="false"
        symbol="￥"
      />
    </div>
    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/number/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
}
</style>
