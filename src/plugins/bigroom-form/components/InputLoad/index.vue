<script>
export default {
  render (h, cxt) {
    let cmpt = this.config.input

    if (typeof cmpt === 'string') {
      cmpt = this.$BIGROOMFORM.cmpts.inputs[cmpt]
    }

    return h(cmpt, {
      props: {
        config: this.config,
        save: this.save,
        defaultVal: this.defaultVal.value
      }
    })
  },
  props: {
    config: { type: Object, required: true },
    save: { type: Function, required: true },
    defaultVal: { type: Object, required: true }
  }
}
</script>
