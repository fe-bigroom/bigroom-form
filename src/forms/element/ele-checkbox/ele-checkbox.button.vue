<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :vid="config.vid" :rules="config.validate" :name="config.field">
      <div slot-scope="{ errors }">
        <el-checkbox-group v-model="value" v-bind="checkboxGroupAttrs">
          <el-checkbox-button
            v-for="option in config.options"
            :key="option.label"
            :label="option.value"
            :disabled="option.disabled"
            v-bind="checkboxAttrs">{{ option.label }}</el-checkbox-button>
          <div v-if="hasValidError = !!errors[0]" class="el-form-item__error">{{ errors[0] }}</div>
        </el-checkbox-group>
      </div>
    </validation-provider>
  </el-form-item>
</template>

<script>
import baseMixin from '../commons/baseMixin'
import checkboxMixin from './checkboxMixin'

export default {
  mixins: [baseMixin, checkboxMixin],

  data () {
    return {
      value: []
    }
  }
}
</script>
