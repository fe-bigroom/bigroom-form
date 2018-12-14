import { getValByType, deepClone } from '../utils'

const formInit = (form, configs, parentType, childType) => {
  configs.forEach((config) => {
    const { field, type, itemType, itemConfigs } = config
    const defaultVal = getValByType(type)

    if (itemConfigs) { // type === Array || type === Object
      form[field] = defaultVal
      formInit(form[field], itemConfigs, type, itemType)
      config._initFormData = deepClone(form[field])
    } else if (parentType === Array) {
      if (childType === Object) {
        form[0] = Object.assign(form[0] || {}, { [field]: defaultVal })
      } else if (childType === Array) {
        if (form[0] === undefined) {
          form[0] = []
        }
        form[0][0] = Object.assign(form[0][0] || {}, { [field]: defaultVal })
      }
    } else {
      form[field] = defaultVal
    }
  })
}

export default formInit
