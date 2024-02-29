// import { makeObservable, observable, action, computed } from "mobx"
import { makeAutoObservable, runInAction } from "mobx"

class Counter {
  count = 0
  constructor() {
    // makeObservable(target, annotations?, options?)
    // 参数1：target 要把谁变成响应式
    // 参数2：指定哪些属性和方法变成可观察
    // makeObservable(this, {
    //   count: observable, //定义一个存储 state 的可跟踪字段
    //   increment: action.bound, //把一个函数标记为会修改 state 的 action
    //   reset: action.bound,
    //   doubleCount: computed,
    // })

    makeAutoObservable(this, {}, { autoBind: true })
  }
  get doubleCount() {
    return this.count * 2
  }
  increment() {
    // 直接修改可以 但是控制台会报警告
    // setTimeout(() => {
    //   this.count++
    // }, 1000);

    // 为了规范  更新 state 的处理程序应该被 action 包装起来
    setTimeout(() => {
      runInAction(() => {
        this.count++
      })
    }, 1000);
  }
  decrement() {
    this.count--
  }
  reset() {
    this.count = 0
  }
}

const instance = new Counter()

export default instance