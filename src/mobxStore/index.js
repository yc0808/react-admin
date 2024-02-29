// 进行mobx模块化管理  用于跨层级组件通讯

import counter from "./counter";
import channel from "./channel";
import { createContext, useContext } from "react";

class StoreRoot {
  counter = counter
  channel = channel
}
const store = new StoreRoot()

const context = createContext(store)

const useStore = () => {
  return useContext(context)
}

export default useStore
