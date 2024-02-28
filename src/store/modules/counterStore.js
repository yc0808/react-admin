import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  // 初始数据
  initialState: {
    count: 0
  },
  // 修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addToNum(state, action) {
      // action.payload接收参数
      state.count = action.payload
    }
  }
})

// 解构出创建action对象的函数
const { increment, decrement, addToNum } = counterStore.actions
// 获取reducer函数
const counterReducer = counterStore.reducer
// 导出创建action对象的函数和reducer函数
export { increment, decrement, addToNum }
export default counterReducer