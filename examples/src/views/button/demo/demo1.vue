<template>
  <div>
    <h2>基础用法</h2>
    <el-row>
      <dl-button icon="&#xe60f;">默认按钮</dl-button>
      <dl-button type="primary">主要按钮</dl-button>
      <dl-button icon="dl-icon-lock" type="success">成功按钮</dl-button>
      <dl-button type="info">信息按钮</dl-button>
      <dl-button type="warning">警告按钮</dl-button>
      <dl-button type="danger">危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button plain>朴素按钮</dl-button>
      <dl-button type="primary" plain>主要按钮</dl-button>
      <dl-button type="success" plain>成功按钮</dl-button>
      <dl-button type="info" plain>信息按钮</dl-button>
      <dl-button type="warning" plain>警告按钮</dl-button>
      <dl-button type="danger" plain>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button>幽灵按钮</dl-button>
      <dl-button type="primary" ghost>主要按钮</dl-button>
      <dl-button type="success" ghost>成功按钮</dl-button>
      <dl-button type="info" ghost>信息按钮</dl-button>
      <dl-button type="warning" ghost>警告按钮</dl-button>
      <dl-button type="danger" ghost>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button round>圆角按钮</dl-button>
      <dl-button type="primary" round>主要按钮</dl-button>
      <dl-button type="success" round>成功按钮</dl-button>
      <dl-button type="info" round>信息按钮</dl-button>
      <dl-button type="warning" round>警告按钮</dl-button>
      <dl-button type="danger" round>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button icon="el-icon-search" circle />
      <dl-button type="primary" icon="el-icon-edit" circle />
      <dl-button type="success" icon="el-icon-check" circle />
      <dl-button type="info" icon="el-icon-message" circle />
      <dl-button type="warning" icon="el-icon-star-off" circle />
      <dl-button type="danger" icon="el-icon-delete" circle />
    </el-row>

    <h2>禁用状态</h2>
    <el-row>
      <dl-button disabled>默认按钮</dl-button>
      <dl-button type="primary" disabled>主要按钮</dl-button>
      <dl-button type="success" disabled>成功按钮</dl-button>
      <dl-button type="info" disabled>信息按钮</dl-button>
      <dl-button type="warning" disabled>警告按钮</dl-button>
      <dl-button type="danger" disabled>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button plain disabled>朴素按钮</dl-button>
      <dl-button type="primary" plain disabled>主要按钮</dl-button>
      <dl-button type="success" plain disabled>成功按钮</dl-button>
      <dl-button type="info" plain disabled>信息按钮</dl-button>
      <dl-button type="warning" plain disabled>警告按钮</dl-button>
      <dl-button type="danger" plain disabled>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button ghost disabled>幽灵按钮</dl-button>
      <dl-button type="primary" ghost disabled>主要按钮</dl-button>
      <dl-button type="success" ghost disabled>成功按钮</dl-button>
      <dl-button type="info" ghost disabled>信息按钮</dl-button>
      <dl-button type="warning" ghost disabled>警告按钮</dl-button>
      <dl-button type="danger" ghost disabled>危险按钮</dl-button>
    </el-row>

    <el-row>
      <dl-button link disabled>幽灵按钮</dl-button>
      <dl-button type="primary" link disabled>主要按钮</dl-button>
      <dl-button type="success" link disabled>成功按钮</dl-button>
      <dl-button type="info" link disabled>信息按钮</dl-button>
      <dl-button type="warning" link disabled>警告按钮</dl-button>
      <dl-button type="danger" link disabled>危险按钮</dl-button>
    </el-row>

    <h2>链接按钮</h2>
    <el-row>
      <dl-button link>链接按钮</dl-button>
      <dl-button type="primary" link>主要按钮</dl-button>
      <dl-button type="success" link>成功按钮</dl-button>
      <dl-button type="info" link>信息按钮</dl-button>
      <dl-button type="warning" link>警告按钮</dl-button>
      <dl-button type="danger" link>危险按钮</dl-button>
    </el-row>

    <h2>文字按钮</h2>
    <dl-button type="text">文字按钮</dl-button>
    <dl-button type="text" disabled>文字按钮</dl-button>

    <h2>图标按钮</h2>
    <dl-button type="primary" icon="el-icon-edit" />
    <dl-button type="primary" icon="el-icon-share" />
    <dl-button type="primary" icon="el-icon-delete" />
    <dl-button type="primary" icon="el-icon-search">搜索</dl-button>
    <dl-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></dl-button>

    <h2>按钮组</h2>
    <el-button-group>
      <dl-button type="primary" icon="el-icon-arrow-left">上一页</dl-button>
      <dl-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></dl-button>
    </el-button-group>
    <el-button-group>
      <dl-button type="primary" icon="el-icon-edit" />
      <dl-button type="primary" icon="el-icon-share" />
      <dl-button type="primary" icon="el-icon-delete" />
    </el-button-group>

    <h2>加载中</h2>
    <dl-button type="primary" :loading="true">加载中</dl-button>

    <h2>不同尺寸</h2>
    <el-row>
      <dl-button size="large">大等按钮</dl-button>
      <dl-button>默认按钮</dl-button>
      <dl-button size="small">小型按钮</dl-button>
      <dl-button size="mini">超小型按钮</dl-button>
    </el-row>
    <el-row>
      <dl-button size="large" round>大等按钮</dl-button>
      <dl-button round>默认按钮</dl-button>
      <dl-button size="small" round>小型按钮</dl-button>
      <dl-button size="mini" round>超小型按钮</dl-button>
    </el-row>
  </div>
</template>
