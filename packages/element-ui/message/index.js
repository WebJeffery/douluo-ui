import Message from './src/message'
import { createNamespace } from '../../../src/utils/use-namespace'

Message.install = (Vue, options = {}) => {
  Vue.prototype[`$${createNamespace('message', { prefix: options.prefix })}`] = Message
}

export default Message
