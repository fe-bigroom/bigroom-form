<template>
  <div class="bigroom-form">
    <div v-for="item in configs" :key="item.field">
      <array-items
        v-if="item.type === Array && (item.itemType === Object || item.itemType === Array)"
        :item="item"
        :save="save"
        :add="add"
        :remove="remove"></array-items>

      <object-items
        v-else-if="item.type === Object"
        :item="item"
        :save="save"></object-items>

      <input-items
        v-else
        :item=item
        :save="save"></input-items>
    </div>
  </div>
</template>

<script>
import ArrayItems from './components/ArrayItems'
import ObjectItems from './components/ObjectItems'
import InputItems from './inputItems'

export default {
  name: 'form-item',

  props: {
    labelWidth: Number,
    tabWidth: Number,
    parentConfig: Object,
    configs: { type: Array, required: true },
    save: Function,
    add: Function,
    remove: Function
  },

  components: {
    ArrayItems,
    ObjectItems,
    InputItems
  }
}
</script>
