<template>
  <div class="object-item-input">
    <div :style="`margin-left: ${item._parentsInfo[0].layer * 40}px;`">{{ item.label }}:</div>
    <form-load
      :configs="item.itemConfigs"
      type="arrObj"
      :save="save"
      ></form-load>
  </div>
</template>

<script>
import FormLoad from '../FormLoad'

export default {
  name: 'object-items',

  props: {
    item: { type: Object, required: true },
    save: { type: Function, required: true }
  },

  components: {
    FormLoad
  }
}
</script>
