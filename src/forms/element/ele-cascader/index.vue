<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :rules="config.validate" :name="config.field">
      <div slot-scope="{ errors }">
        <el-cascader
          :options="config.options"
          v-model="value"
          v-bind="inputAttrs">
        </el-cascader>
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
    return {
      value: []
    }
  },

  created () {
    if (!this.config.options) {
      throw new Error('ele-cascader\' config need options')
    }
  }
}
</script>
