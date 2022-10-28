<template>
  <el-select
      :class="[ns.b()]"
      :clearable="clearable"
      :popper-class="`dl-select-dropdown ${popperClass}`"
      v-bind="$attrs"
      v-on="$listeners"
      @change="handleChange"
  >
      <template v-if="isGroup">
          <el-option-group
              v-for="group in options"
              :key="group[labelKey]"
              :label="group[labelKey]"
          >
              <el-option
                  v-for="item in group.options"
                  :key="item[valueKey]"
                  :value="item[valueKey]"
                  :label="formatLabel ? formatLabel(item) : item[labelKey]"
                  :disabled="item.disabled"
              />
          </el-option-group>
      </template>
      <template v-else>
          <el-option
              v-for="item in options"
              :key="item[valueKey]"
              :value="item[valueKey]"
              :label="formatLabel ? formatLabel(item) : item[labelKey]"
              :disabled="item.disabled"
          >
              <slot name="option" v-bind="item"></slot>
          </el-option>
      </template>

      <slot></slot>
      <template #prefix>
          <slot name="prefix"></slot>
      </template>
      <template #empty>
          <slot name="empty"></slot>
      </template>
  </el-select>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'Select',
  inheritAttrs: false,
  props: {
      options: {
          type: Array,
          default: () => []
      },
      // eslint-disable-next-line
      formatLabel: {
          type: Function
      },
      valueKey: {
          type: String,
          default: 'value'
      },
      labelKey: {
          type: String,
          default: 'label'
      },
      isGroup: {
          type: Boolean,
          default: false
      },
      clearable: {
          type: Boolean,
          default: true
      },
      popperClass: {
          type: String,
          default: ''
      }
  },

  data() {
    this.ns = useNamespace('select')
    return {}
  },

  methods: {
      // 选中值发生变化时触发
      handleChange(id) {
          const result = this.options.find((el) => el[this.valueKey] === id)

          this.$emit('change', id, result)
      }
  }
}
</script>
