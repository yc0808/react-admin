import { makeAutoObservable } from "mobx"

class Channel {
  list = [1, 2, 3]
  constructor() {

    makeAutoObservable(this, {}, { autoBind: true })
  }

}

const instance = new Channel()

export default instance