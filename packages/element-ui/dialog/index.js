import Dialog from './src/dialog.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Dialog.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Dialog', { prefix: options.prefix }), Dialog)
}

export default Dialog
