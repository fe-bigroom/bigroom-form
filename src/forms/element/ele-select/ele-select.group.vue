<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :vid="config.vid" :rules="config.validate || ''" :name="config.field">
      <div slot-scope="{ errors }">
        <el-select v-model="value" v-bind="inputAttrs">
          <el-option-group
            v-for="group in config.options"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="option in group.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
              :disabled="option.disabled">
            </el-option>
          </el-option-group>
        </el-select>
        <div v-if="hasValidError = !!errors[0]" class="el-form-item__error">{{ errors[0] }}</div>
      </div>
    </validation-provider>
  </el-form-item>
</template>

<script>
import baseMixin from '../commons/baseMixin'

export default {
  mixins: [baseMixin],

  data () {
    const inputAttrs = this.config.inputAttrs || {}
    const initVal = inputAttrs.multiple ? [] : ''

    return {
      value: initVal
    }
  },

  created () {
    if (!this.config.options) {
      throw new Error('ele-radio\' config need options')
    }
    this.config.options.forEach(option => {
      if (option.default) {
        if (this.inputAttrs.multiple) {
          this.value.push(option.value)
        } else {
          this.value = option.value
        }
      }
    })
  }
}
</script>
