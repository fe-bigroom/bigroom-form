const getValByType = (type) => {
  if (!type) {
    throw new Error('no param type!')
  }

  let val
  switch (type) {
    case Date:
    case String:
      val = ''
      break
    case Array:
      val = []
      break
    case Object:
      val = {}
      break
    case Boolean:
    case Number:
      val = null
      break
  }
  return val
}

export default getValByType
