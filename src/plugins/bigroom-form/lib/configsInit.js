import Vue from 'vue'
import { deepClone } from '../utils/index'

const initConfigs = (configs) => {
  genParentsInfo(configs)
  genGenFormFn(configs)
  genIntervalConfig(configs)
  return configs
}

function genParentsInfo (configs, parentConfig) {
  configs.forEach((config) => {
    const info = []

    if (parentConfig) {
      const { label, field, type, itemType, _parentsInfo } = parentConfig
      const curInfo = { label, field, type, layer: _parentsInfo[0].layer + 1 }

      if (type === Array) {
        curInfo.itemType = itemType
      }

      info.push(curInfo, ..._parentsInfo)
    } else {
      info.push({ label: null, field: null, type: Object, layer: 0 })
    }

    config._parentsInfo = info

    if (config.itemConfigs) {
      genParentsInfo(config.itemConfigs, config)
    }
  })
}

function genGenFormFn (configs) {
  configs.forEach((config) => {
    if (config.itemConfigs) {
      const { field, type } = config
      let content = ''

      if (type === Array) {
        content = `return i === 0 ? [...v] : {${field}:[...Array.from({ length: i }, () => null), ...v]}`
        config._genForm = new Function('v', 'i', content) // eslint-disable-line
      } else {
        content = `return {${field}:v}`
        config._genForm = new Function('v', content) // eslint-disable-line
      }

      genGenFormFn(config.itemConfigs)
    } else {
      const { field, type, _parentsInfo } = config

      let nulls = ''
      let content = type === Array ? `{${field}:[...v]}` : `{${field}:v}`

      if (config._index > 0) {
        nulls = `${Array.from({ length: config._index }, () => 'null').join(',')},`
      }

      for (let i = 0, len = _parentsInfo.length - 1; i < len; i++) {
        const info = _parentsInfo[i]
        if (info.type === Array) {
          content = info.itemType === Array ? `{${info.field}:[${nulls}[${content}]]}` : `{${info.field}:[${nulls}${content}]}`
        } else {
          content = `{${info.field}:${content}}`
        }
      }

      content = `return ${content}`

      config._genForm = new Function('v', content) // eslint-disable-line
    }
  })
}

function genIntervalConfig (configs, index = 0) {
  configs.forEach((config) => {
    const { type, itemType, itemConfigs } = config

    if (type === Array && (itemType === Array || itemType === Object)) {
      const _itemConfigs = deepClone(itemConfigs)

      _itemConfigs.forEach((_config) => {
        _config._index = index
      })

      Vue.set(config, '_itemConfigs', [_itemConfigs])

      genIntervalConfig(itemConfigs)
    }
  })
  return configs
}

function copyIntervalConfig (configs, index) {
  const newConfigs = deepClone(configs)

  newConfigs.forEach((config) => {
    config._index = index
  })

  genGenFormFn(newConfigs)

  return newConfigs
}

export {
  initConfigs as default,
  genIntervalConfig,
  copyIntervalConfig
}
