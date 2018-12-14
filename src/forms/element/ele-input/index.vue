<template>
  <input-number v-if="inputAttrs.type === 'number'" v-bind="props"></input-number>
  <input-text v-else v-bind="props"></input-text>
</template>

<script>
import InputText from './ele-input.text'
import InputNumber from './ele-input.number'

export default {
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true },
    defaultVal: { type: [String, Number], rquired: true }
  },
  components: {
    InputText,
    InputNumber
  },
  computed: {
    inputAttrs () {
      return this.config.inputAttrs || {}
    },
    props () {
      return {
        config: this.config,
        save: this.save,
        defaultVal: this.defaultVal
      }
    }
  }
}
</script>
