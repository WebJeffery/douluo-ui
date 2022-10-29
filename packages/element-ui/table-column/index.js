import TableColumn from '../table/src/column.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

TableColumn.install = (Vue, options = {}) => {
  Vue.component(createNamespace('TableColumn', { prefix: options.prefix }), TableColumn)
}

export default TableColumn
