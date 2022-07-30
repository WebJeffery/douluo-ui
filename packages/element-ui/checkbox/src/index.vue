<template>
    <el-checkbox v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-checkbox>
</template>

<script >
export default {
    inheritAttrs: false,
    props: {}
}
</script>

<style lang="scss">
.m-checkbox {
    &.el-checkbox {
        font-weight: 400;
    }

    .el-checkbox__input {
        &.is-checked .el-checkbox__inner {
            border-color: var(--checkbox-check-bg);
            background-color: var(--checkbox-check-bg);
        }

        &.is-focus .el-checkbox__inner {
            border-color: var(--checkbox-check-bg);
        }

        .el-checkbox__inner:hover {
            border-color: var(--checkbox-check-bg);
        }

    }
}
</style>
