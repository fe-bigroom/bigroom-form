<script>
import formItem from '../../formItem'

export default {
  render (h, cxt) {
    return h(formItem, {
      props: {
        configs: this.configs,
        parentConfig: this.parentConfig,
        save: this.save,
        add: this.add,
        remove: this.remove
      }
    })
  },
  props: {
    type: String,
    configs: { type: Array, required: true },
    parentConfig: Object,
    save: { type: Function, required: true },
    add: Function,
    remove: Function
  }
}
</script>
