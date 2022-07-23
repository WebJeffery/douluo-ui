<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row'
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  padding: 10px;
}
</style>
