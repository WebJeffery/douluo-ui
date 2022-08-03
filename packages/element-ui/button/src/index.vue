<template>
  <el-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'button',
  inheritAttrs: false,
  props: {}
}
</script>

<style lang="scss">
.m-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  white-space: nowrap;
  color: #666;
  background: #fff;

  &.primary {
    border-color: var(--btn-primary-border-color);
    color: var(--btn-primary-color);
    background: var(--btn-primary-bg);

    &[ghost] {
      border-color: var(--btn-primary-ghost-border-color);
      color: var(--btn-primary-ghost-color);
      background: #fff;
    }

    &[plain] {
      border-width: 0;
      color: var(--btn-primary-plain-color);
      background: var(--btn-primary-plain-bg);
    }
  }

  &.info {
    border-color: #eee;
    color: #333;
    background: #eee;
  }

  &[dashed] {
    border-style: dashed;
    color: #666;
  }

  &[loading],
  &[disabled] {
    pointer-events: none;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
