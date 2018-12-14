<template>
  <validation-observer ref="obs">
    <template slot-scope="{}">
      <component :is="formContainer">
        <form-item :configs="initedConfigs" v-bind="{ save, add, remove }"></form-item>
        <el-button @click="validateAndSubmit">{{ submit.text }}</el-button>
      </component>
    </template>
  </validation-observer>
</template>

<script>
import FormItem from './formItem'
import { deepClone } from './utils'
import configsInit, { copyIntervalConfig } from './lib/configsInit'
import formMerge from './lib/formMerge'
import formInit from './lib/formInit'
import checkConfigs from './lib/checkConfigs'
import checkSubmit from './lib/checkSubmit'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'bigroom-form',
  props: {
    configs: { type: Array, required: true },
    submit: { type: Object, required: true }
  },

  data () {
    checkConfigs(this.configs)
    checkSubmit(this.submit)

    return {
      form: {},
      formContainer: this.$BIGROOMFORM.cmpts.form,
      initedConfigs: configsInit(this.configs)
    }
  },

  components: {
    FormItem,
    ValidationObserver
  },

  created () {
    if (this.$BIGROOMFORM.mapAll) {
      formInit(this.form, this.configs)
    }
  },

  methods: {
    save (config, newVal, oldVal) {
      formMerge(this.form, config._genForm(newVal))
      console.log(this.form)
    },

    add (config) {
      const newItemConfig = copyIntervalConfig(config.itemConfigs, config._itemConfigs.length)

      if (this.$BIGROOMFORM.mapAll) {
        const initFormData = deepClone(config._initFormData)
        const initedFormData = config._genForm(initFormData, config._itemConfigs.length)
        formMerge(this.form, initedFormData)
      }

      config._itemConfigs.push(newItemConfig)
    },

    remove (config) {
      config._itemConfigs.pop()
    },

    validateAndSubmit () {
      this.$refs.obs.validate().then(status => status && this.submit.submit(this.form))
    }
  }
}
</script>
