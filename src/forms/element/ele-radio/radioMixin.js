const radioMixin = {
  computed: {
    radioGroupAttrs () {
      return (this.config.inputAttrs && this.config.inputAttrs.radioGroup) || {}
    },
    radioAttrs () {
      return (this.config.inputAttrs && this.config.inputAttrs.radio) || {}
    }
  },

  created () {
    if (!this.config.options) {
      throw new Error('ele-radio\' config need options')
    }
    this.config.options.forEach(option => {
      if (option.default) {
        this.value = option.value
      }
    })
  }
}

export default radioMixin
