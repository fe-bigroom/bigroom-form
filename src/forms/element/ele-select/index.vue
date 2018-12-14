<template>
  <input-select-group v-if="inputAttrs.type === 'group'" v-bind="props"></input-select-group>
  <input-select v-else v-bind="props"></input-select>
</template>

<script>
import InputSelect from './ele-select'
import InputSelectGroup from './ele-select.group'

export default {
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true }
  },
  components: {
    InputSelect,
    InputSelectGroup
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
