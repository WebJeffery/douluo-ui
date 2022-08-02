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
};
</script>

<style lang="scss">
.m-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 14px;
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &.primary {
    color: var(--btn-primary-color);
    background: var(--btn-primary-bg);
    border-color: var(--btn-primary-border-color);

    &[ghost] {
      color: var(--btn-primary-ghost-color);
      background: #fff;
      border-color: var(--btn-primary-ghost-border-color);
    }

    &[plain] {
      color: var(--btn-primary-plain-color);
      background: var(--btn-primary-plain-bg);
      border-width: 0;
    }
  }

  &.info {
    color: #333;
    background: #eee;
    border-color: #eee;
  }

  &[dashed] {
    color: #666;
    border-style: dashed;
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
