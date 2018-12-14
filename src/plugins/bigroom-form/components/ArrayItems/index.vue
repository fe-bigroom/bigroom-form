<template>
  <div class="array-item-input">
    <div :style="`margin-left: ${item._parentsInfo[0].layer * 40}px;`">{{ item.label }}:</div>
    <form-load
      v-for="(_itemConfig, _itemIndex) in item._itemConfigs"
      :key="`${item.field}-${_itemIndex}`"
      :configs="_itemConfig"
      type="arrObj"
      :save="save"
      :add="add"
      :remove="remove"
      ></form-load>
    <div :style="`margin-left: ${(item._parentsInfo[0].layer + 1) * 40}px;`">
      <el-button size="mini" @click="add(item)">增加</el-button>
      <el-button size="mini" @click="remove(item)">删除</el-button>
    </div>
  </div>
</template>

<script>
import FormLoad from '../FormLoad'

export default {
  name: 'array-items',

  props: {
    item: { type: Object, required: true },
    save: { type: Function, required: true },
    add: { type: Function, required: true },
    remove: { type: Function, required: true }
  },

  components: {
    FormLoad
  }
}
</script>
