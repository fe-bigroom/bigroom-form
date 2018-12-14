const checkboxMixin = {
  computed: {
    checkboxGroupAttrs () {
      return this.inputAttrs.checkboxGroup || {}
    },
    checkboxAttrs () {
      return this.inputAttrs.checkbox || {}
    }
  },

  created () {
    if (!this.config.options) {
      throw new Error('ele-checkbox-button\' config need options')
    }
    this.config.options.forEach(option => {
      if (option.default) {
        this.value.push(option.value)
      }
    })
  }
}

export default checkboxMixin
