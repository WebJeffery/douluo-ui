/**
 * @param {Function} fn 目标函数
 * @param {Number} timeout 防抖时间
 * @returns {Function}
 */
 export const debounce = function(fn, timeout = 200) {
  var timer = null
  return function() {
    var args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, [...args])
    }, timeout)
  }
}
