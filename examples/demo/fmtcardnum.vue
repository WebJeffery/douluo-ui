<template>
  <div>
    <h2>NwFmtCardNum</h2>
    <h3>格式手机号</h3>
    <NwFmtCardNum :value="mobile" />
    <h3>格式身份证</h3>
    <NwFmtCardNum :value="idCard" :isIdCard="true" />
    <h3>行内元素</h3>
    <div>测试<NwFmtCardNum :value="mobile" :inline="true" /></div>

    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
// 格式手机号、身份证号
import readmeTxt from 'packages/element-ui/fmtcardnum/src/README.md'

export default {
  data() {
    return {
      mobile: '13566668888',
      idCard: '450281202112100325',
      readmeTxt
    }
  }
}
</script>
