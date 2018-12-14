const isType = (o, type) => Object.prototype.toString.call(o) === `[object ${type}]`

const isArray = arr => isType(arr, 'Array')
const isString = str => isType(str, 'String')
const isObject = obj => isType(obj, 'Object')

const isSimpleObject = (obj) => { // { a: null, b: '', c: 1, d: true } => true
  if (!isObject(obj)) {
    return false
  }

  const keys = Object.keys(obj)

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]

    if (isObject(obj[key]) || isArray(obj[key])) {
      return false
    }
  }

  return true
}

const isSimpleArray = (arr) => {
  if (!isArray(arr)) {
    return false
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]

    if (isObject(item) || isArray(item)) {
      return false
    }
  }

  return true
}

const isSameType = (type, val) => Object.prototype.toString.call(val) === `[object ${type.name}]`

export default {
  isArray,
  isObject,
  isString,
  isSimpleObject,
  isSimpleArray,
  isSameType
}
