<template>
  <el-form-item :label="`${config.label}:`" :class="genValidClasses(config.validate, value, hasValidError)">
    <validation-provider ref="provider" :rules="config.validate" :name="config.field">
      <div slot-scope="{ errors }">
        <el-input-number v-model.number="value" v-bind="inputAttrs"></el-input-number>
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
    defaultVal: { type: Number, rquired: true }
  },

  data () {
    return {
      value: 0
    }
  },

  mounted () {
    this.value = this.defaultVal

    if (this.defaultVal) {
      const provider = this.$refs.provider
      provider.validate().then(provider.applyResult)
    }
  }
}
</script>
