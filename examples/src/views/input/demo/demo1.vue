<template>
  <div class="demo-input">
    <h2>基础用法</h2>

    <dl-input v-model="input" placeholder="请输入内容" />

    <h2>修改宽度</h2>
    <dl-input v-model="input" placeholder="请输入内容" width="240" />

    <h2>禁用状态</h2>
    <dl-input placeholder="请输入内容" v-model="input" :disabled="true" />
    <div style="margin-top: 20px;">
      <dl-input type="textarea" placeholder="请输入内容" v-model="input1" disabled />
    </div>

    <h2>虚线</h2>
    <dl-input placeholder="请输入内容" v-model="input" dashed/>
    <div style="margin-top: 20px;">
      <dl-input type="textarea" placeholder="请输入内容" v-model="input1" dashed />
    </div>

    <h2>可清空</h2>
    <dl-input placeholder="请输入内容" v-model="input1" clearable />

    <h2>密码框</h2>
    <dl-input placeholder="请输入密码" v-model="input2" show-password />

    <h2>带 icon 的输入框</h2>
    <div class="demo-input-suffix">
      属性方式：
      <dl-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1" />
      <dl-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" />
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <dl-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </dl-input>
      <dl-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </dl-input>
    </div>

    <h2>文本域</h2>
    <dl-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" />

    <h2>可自适应文本高度的文本域</h2>
    <dl-input type="textarea" autosize placeholder="请输入内容" v-model="textarea" />
    <div style="margin: 20px 0"></div>
    <dl-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="textarea2" />

    <h2>复合型输入框</h2>
    <div>
      <dl-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </dl-input>
    </div>
    <div style="margin-top: 15px">
      <dl-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </dl-input>
    </div>
    <div style="margin-top: 15px">
      <dl-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <dl-select v-model="select" slot="prepend" placeholder="请选择" width="140" :options="searchData">
        </dl-select>
        <el-button slot="append" icon="el-icon-search" />
      </dl-input>
    </div>

    <h2>尺寸</h2>
    <div class="demo-input-size">
      <dl-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1" />
      <dl-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2" />
      <dl-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3" />
      <dl-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4" />
    </div>

    <h2>输入长度限制</h2>
    <dl-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit />
    <div style="margin: 20px 0"></div>
    <dl-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      textarea: '',
      textarea2: '',
      select: '',
      text: '',
      searchData: Object.freeze([
          {
              id: 2,
              value: '点评ID'
          },
          {
              id: 9,
              value: '订单编号'
          },
          {
              id: 1,
              value: '手机号'
          },
          {
              id: 3,
              value: '疾病'
          },
          {
              id: 4,
              value: '评论内容'
          }
      ])
    }
  }
}
</script>

<style lang="scss">
.demo-input {
  .el-input {
    width: 180px;
  }

  .el-textarea {
    width: 414px;
  }

  .el-input-group {
    width: 600px;
  }

  .demo-input-size .el-input {
    margin: 0 10px 10px 0;
    vertical-align: top;
  }
}

.demo-input-suffix {
  margin-bottom: 15px;
}
.demo-input-suffix .el-input {
  margin-right: 15px;
}
</style>
