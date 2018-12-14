import { ValidationProvider } from 'vee-validate'
import genValidClasses from './genValidClasses'

const mixin = {
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true }
  },

  data () {
    return {
      hasValidError: false,
      genValidClasses
    }
  },

  components: {
    ValidationProvider
  },

  computed: {
    inputAttrs () {
      return this.config.inputAttrs || {}
    }
  },

  mounted () {
    if (this.value) {
      const provider = this.$refs.provider
      provider.validate().then(provider.applyResult)
    }
  },

  watch: {
    value (newVal, oldVal) {
      this.save(this.config, newVal, oldVal)
    }
  }
}

export default mixin
