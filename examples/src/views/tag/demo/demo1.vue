<template>
  <div>
    <h2>基础用法</h2>
    <h3>默认的状态</h3>
    <el-row>
      <dl-tag>我是标签</dl-tag>
    </el-row>

    <h3>其他的状态</h3>
    <el-row>
      <dl-tag type="success">成功标签</dl-tag>
      <dl-tag type="warning" style="margin-left: 20px">等待中标签</dl-tag>
      <dl-tag type="error" style="margin-left: 20px">失败标签</dl-tag>
    </el-row>

    <h3>禁用的状态</h3>
    <el-row>
      <dl-tag disabled>禁用标签</dl-tag>
    </el-row>

    <h2>可移除标签</h2>
    <h3>默认的状态</h3>
    <el-row>
      <dl-tag closable>可移除标签</dl-tag>
    </el-row>
    <h3>禁用的状态</h3>
    <el-row>
      <dl-tag disabled closable>可移除标签</dl-tag>
    </el-row>

    <h2>可编辑标签</h2>
    <h3>默认的状态</h3>
    <el-row>
      <dl-tag-group title="添加标签" :tagList="[1, 2, 3]" />
    </el-row>
    <h3>禁用状态</h3>
    <el-row>
      <dl-tag-group title="添加标签" disabled :tagList="[1, 2, 3]" />
    </el-row>
  </div>
</template>
