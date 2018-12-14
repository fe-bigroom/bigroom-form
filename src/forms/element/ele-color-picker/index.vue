<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :vid="config.vid" :rules="config.validate" :name="config.field">
      <div slot-scope="{ errors }">
        <el-color-picker v-model="value" v-bind="inputAttrs"></el-color-picker>
        <div v-if="hasValidError = !!errors[0]" class="el-form-item__error">{{ errors[0] }}</div>
      </div>
    </validation-provider>
  </el-form-item>
</template>

<script>
import baseMixin from '../commons/baseMixin'

export default {
  mixins: [baseMixin],

  props: {
    defaultVal: { type: String, rquired: true, defaule: null }
  },

  data () {
    return {
      value: this.defaultVal
    }
  }
}
</script>
