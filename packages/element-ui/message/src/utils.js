import Vue from 'vue'

let hasInitZIndex = false
let zIndex

const PopupManager = {
  nextZIndex: function () {
    return PopupManager.zIndex++
  }
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || (Vue.prototype.$ELEMENT || {}).zIndex || 2000
      hasInitZIndex = true
    }
    return zIndex
  },
  set(value) {
    zIndex = value
  }
})

const { hasOwnProperty } = Object.prototype

const hasOwn = (obj, key) => {
  return hasOwnProperty.call(obj, key)
}

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

const isVNode = (node) => {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions')
}

export { PopupManager, isVNode, isObject }
