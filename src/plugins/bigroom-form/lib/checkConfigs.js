import { isType } from '../utils'
// 必须是数组，
// 暂时只支持 base, object-base, array-object-base, array-array-base 4种数据结构
// itemConfigs 的类型必须是数组
// 必填字段：field, label, type
// type 之枚举：String, Number, Boolean, Array, Object, Date
// 如果 type 为 Array，则必须有 itemType
// 不能占用 _itemConfigs，_parentsInfo，_genForm，_initFormData，_index 私有字段

const checkConfigs = (configs) => {
  if (!isType.isArray(configs)) {
    throw new Error('Configs must be Array. Please check your configs.')
  }

  checkKeys(configs, (config) => { // base
    const { type, itemType, itemConfigs } = config

    const isObjectBase = type === Object // object-base
    const isArrayObjectBase = type === Array && itemType === Object // array-object-base
    const isArrayArrayBase = type === Array && itemType === Array // array-array-base

    if (isObjectBase || isArrayObjectBase || isArrayArrayBase) {
      checkKeys(itemConfigs, (config) => {
        if (config.itemConfigs) {
          throw new Error('Configs can just use the key \'itemConfigs\' only once for one field! Please check your configs.')
        }
      })
    }
  })
  return true
}

function checkKeys (configs, callback) {
  if (!isType.isArray(configs)) {
    throw new Error('Configs must be Array. Please check your configs.')
  }

  configs.forEach(config => { // base
    checkPrivateKey(config)
    checkNecKey(config)
    checkTypeKey(config.type)

    callback && callback(config)
  })
}

function checkPrivateKey (config) {
  const privateKeys = ['_itemConfigs', '_parentsInfo', '_genForm', '_initFormData', '_index']
  privateKeys.forEach((key) => {
    if (config.hasOwnProperty(key)) {
      throw new Error(`Config can't has key: ${key}, because it's internal key of the plugin. Please check your configs.`)
    }
  })
}

function checkNecKey (config) {
  const neckeys = ['field', 'label', 'type']
  const { type, itemType } = config

  if (type === Array) {
    neckeys.push('itemType')
  }

  if ((type === Array && (itemType === Array || itemType === Object)) || type === Object) {
    neckeys.push('itemConfigs')
  } else {
    neckeys.push('input')
  }

  const checked = neckeys.every(key => config.hasOwnProperty(key))

  if (!checked) {
    throw new Error(`Config must include these necessary keys: ${neckeys.join(', ')}. Please check your configs.`)
  }
}

function checkTypeKey (type) {
  const types = [String, Number, Boolean, Array, Object, Date]
  const checked = types.some(_type => _type === type)

  if (!checked) {
    throw new Error(`Field'type must be one of [${types.map(t => t.name).join(', ')}]. Please check your configs.`)
  }
}

export default checkConfigs
