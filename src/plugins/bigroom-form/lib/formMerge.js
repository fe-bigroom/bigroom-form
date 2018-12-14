import { isType } from '../utils'

const { isObject, isArray, isSimpleObject, isSimpleArray } = isType

const formMerge = (target = {}, source = {}) => {
  Object.keys(source).forEach((key) => {
    const item = source[key]

    if (isSimpleObject(item)) {
      if (!target[key]) {
        target[key] = {}
      }
      Object.assign(target[key], item)
    } else if (isObject(item)) {
      if (!target[key]) {
        target[key] = {}
      }
      formMerge(target[key], item)
    } else if (isSimpleArray(item)) {
      target[key] = item
    } else if (isArray(item)) {
      if (!target[key]) {
        target[key] = []
      }
      item.forEach((o, i) => {
        if (isObject(o)) { // 不包含 null
          if (!target[key][i]) {
            target[key].push({})
          }
          formMerge(target[key][i], o)
        } else if (isArray(o)) {
          if (!target[key][i]) {
            target[key].push([])
          }
          formMerge(target[key][i], o)
        } else if (o !== null) {
          target[key][i] = o
        }
      })
    } else {
      target[key] = item
    }
  })
}

export default formMerge
