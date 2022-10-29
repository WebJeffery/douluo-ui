import Drawer from './src/drawer.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Drawer.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Drawer', { prefix: options.prefix }), Drawer)
}

export default Drawer
