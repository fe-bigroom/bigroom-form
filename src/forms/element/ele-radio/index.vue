<template>
  <input-radio-button v-if="inputAttrs.type === 'button'" v-bind="props"></input-radio-button>
  <input-radio v-else v-bind="props"></input-radio>
</template>

<script>
import InputRadio from './ele-radio'
import InputRadioButton from './ele-radio.button'

export default {
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true }
  },
  components: {
    InputRadio,
    InputRadioButton
  },
  computed: {
    inputAttrs () {
      return this.config.inputAttrs || {}
    },
    props () {
      return {
        config: this.config,
        save: this.save
      }
    }
  }
}
</script>
