<template>
  <div class="demo-input">
    <h2>基础用法</h2>

    <dl-empty description="描述文字" />

    <h2>自定义图片</h2>
    <dl-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />

    <h2>图片尺寸</h2>
    <dl-empty :image-size="200" />

    <h2>底部内容</h2>
    <dl-empty>
      <dl-button type="primary">按钮</dl-button>
    </dl-empty>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss"></style>
