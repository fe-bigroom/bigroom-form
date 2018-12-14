<template>
  <input-checkbox-button v-if="inputAttrs.type === 'button'" v-bind="props"></input-checkbox-button>
  <input-checkbox v-else v-bind="props"></input-checkbox>
</template>

<script>
import InputCheckbox from './ele-checkbox'
import InputCheckboxButton from './ele-checkbox.button'

export default {
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true }
  },
  components: {
    InputCheckbox,
    InputCheckboxButton
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
