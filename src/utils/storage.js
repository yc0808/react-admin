export const setStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const getStorage = (key) => {
  return window.localStorage.getItem(key)

}