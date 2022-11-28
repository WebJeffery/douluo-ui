let componentNamespace = 'dl'
// 组件前缀命名只能更新一次，防止重复执行修改组件注册出错
let isUpdated = false
// scss 命名不能通过 js 更改，在 SCSS 编译已经打包好了
export const cssNamespace = 'dl'
const statePrefix = 'is-'

export function createNamespace(name, { prefix }) {
  if (!isUpdated) {
    isUpdated = true
    componentNamespace = prefix || componentNamespace // 更改前缀
  }
  return componentNamespace + name.charAt(0).toUpperCase() + name.substr(1)
}

/**
 * 生成 bem
 * @param {} namespace 命名空间
 * @param {*} block 块
 * @param {*} blockSuffix 块多个单词
 * @param {*} element 元素
 * @param {*} modifier 修饰符
 * @returns
 */
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const useNamespace = (block, namespace = cssNamespace) => {
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')

  const e = (element) => (element ? _bem(namespace, block, '', element, '') : '')

  const m = (modifier) => (modifier ? _bem(namespace, block, '', '', modifier) : '')

  const be = (blockSuffix, element) => (blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : '')

  const em = (element, modifier) => (element && modifier ? _bem(namespace, block, '', element, modifier) : '')

  const bm = (blockSuffix, modifier) =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : ''

  const bem = (blockSuffix, element, modifier) =>
    blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : ''

  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  // for css var
  // --el-xxx: value;
  const cssVar = (object) => {
    const styles = {}
    for (const key in object) {
      styles[`--${namespace}-${key}`] = object[key]
    }
    return styles
  }

  // with block
  const cssVarBlock = (object) => {
    const styles = {}
    for (const key in object) {
      styles[`--${namespace}-${block}-${key}`] = object[key]
    }
    return styles
  }

  const cssVarName = (name) => `--${namespace}-${name}`
  const cssVarBlockName = (name) => `--${namespace}-${block}-${name}`

  return {
    cssNamespace,
    componentNamespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  }
}

export default {
  componentNamespace
}
