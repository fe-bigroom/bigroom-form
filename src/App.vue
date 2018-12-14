<style>
  .el-form--inline .el-form-item__content {
    min-width: 250px;
  }
</style>
<template>
  <div id="app">
    <!-- <bigroom-form :configs="configsBase" :submit="{ text: '提交', submit }"></bigroom-form>
    <hr/> -->

    <!-- <bigroom-form :configs="configsObjectBase" :submit="{ text: '提交', submit }"></bigroom-form>
    <hr/> -->

    <!-- <bigroom-form :configs="configsArrayArrayBase" :submit="{ text: '提交', submit }"></bigroom-form>
    <hr/> -->

    <bigroom-form :configs="configsArrayObjectBase" :submit="{ text: '提交', submit }"></bigroom-form>
    <hr/>
  </div>
</template>

<script>
import configsBase from './forms/configs/base'
import configsObjectBase from './forms/configs/object-base'
import configsArrayArrayBase from './forms/configs/array-array-base'
import configsArrayObjectBase from './forms/configs/array-object-base'

export default {
  name: 'app',
  data () {
    return {
      configsBase,
      configsObjectBase,
      configsArrayArrayBase,
      configsArrayObjectBase
    }
  },
  methods: {
    submit (form) {
      console.log(form)
    }
  }
}
</script>
