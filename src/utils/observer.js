/** 发布订阅, 方便拓展 */
export class Observer {
  constructor() {
    /** 订阅者回调函数的队列 */
    this.subscriberQueue = []
  }
  /**
   * @description 订阅事件, 收集订阅者的回调函数
   * @param { Function } fn 订阅者的回调函数
   */
  subscriber(fn) {
    this.subscriberQueue.push(fn)
    const len = this.subscriberQueue.length
    // 返回当前订阅者的数量
    return {
      length: len,
      unsubscribe: () => { this.unsubscribe(len - 1) }
    }
  }
  /**
   * @description 通知订阅者，事件已经更新
   * @param params 需要传递给订阅者的参数
   */
  notify(params) {
    this.subscriberQueue.forEach(fn => {
      fn(params)
    })
  }
  /** 取消订阅 */
  unsubscribe(target) {
    if (target > 0) {
      this.subscriberQueue.splice(target - 1, 1)
    }
    this.subscriberQueue = []
  }
}
