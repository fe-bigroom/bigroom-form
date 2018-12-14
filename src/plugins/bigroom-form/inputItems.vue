<template>
  <div :style="`margin-left: ${item._parentsInfo[0].layer * 40}px;`">
    <input-load :config="item" :save="save" :defaultVal="{ value: defaultVal }"></input-load>
  </div>
</template>

<script>
import InputLoad from './components/InputLoad'
import { getValByType, isType } from './utils'

export default {
  props: {
    item: { type: Object, required: true },
    save: { type: Function, required: true }
  },
  data () {
    return {
      defaultVal: null
    }
  },
  components: {
    InputLoad
  },
  created () {
    const { type, value, options } = this.item

    if (options) { // 对于有 options 的配置，不需要 value 作为默认值
      return
    }

    const initVal = getValByType(type)

    this.checkDefaultVal(this.item)
    this.defaultVal = value === undefined ? initVal : value
    this.save(this.item, this.defaultVal, initVal)
  },
  methods: {
    checkDefaultVal (config) {
      const { type, value } = config

      if (value === undefined) {
        return
      }

      if (type === Date) {
        const _date = new Date(value)
        if (_date === 'Invalid Date') {
          console.error('err config: ', config)
          throw new Error('val is Invalid Date!')
        }
        return
      }

      if (!isType.isSameType(type, value)) {
        console.error('err config: ', config)
        throw new Error('val\'s type is wrong!')
      }
    }
  }
}
</script>
