<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :vid="config.vid" :rules="config.validate || ''" :name="config.field">
      <div slot-scope="{ errors }">
        <el-radio-group v-model="value" v-bind="radioGroupAttrs">
          <el-radio-button
            v-for="option in config.options"
            :key="option.label"
            :label="option.value"
            v-bind="radioAttrs">{{ option.label }}</el-radio-button>
        </el-radio-group>
        <div v-if="hasValidError = !!errors[0]" class="el-form-item__error">{{ errors[0] }}</div>
      </div>
    </validation-provider>
  </el-form-item>
</template>

<script>
import baseMixin from '../commons/baseMixin'
import radioMixin from './radioMixin'

export default {
  mixins: [baseMixin, radioMixin],

  data () {
    return {
      value: ''
    }
  }
}
</script>
