import Table from './src/table.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Table.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Table', { prefix: options.prefix }), Table)
}

export default Table
