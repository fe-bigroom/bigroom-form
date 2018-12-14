import eleForm from './ele-form'
import eleInput from './ele-input'
import eleCheckbox from './ele-checkbox'
import eleRadio from './ele-radio'
import eleInputNumber from './ele-input-number'
import eleSelect from './ele-select'
import eleCascader from './ele-cascader'
import eleSwitch from './ele-switch'
import eleSlider from './ele-slider'
import eleRate from './ele-rate'
import eleColorPicker from './ele-color-picker'
import eleDatePicker from './ele-date-picker'
import eleTimePicker from './ele-time-picker'

export default {
  form: eleForm,
  inputs: {
    'ele-input': eleInput,
    'ele-checkbox': eleCheckbox,
    'ele-radio': eleRadio,
    'ele-input-number': eleInputNumber,
    'ele-select': eleSelect,
    'ele-cascader': eleCascader,
    'ele-switch': eleSwitch,
    'ele-slider': eleSlider,
    'ele-rate': eleRate,
    'ele-color-picker': eleColorPicker,
    'ele-date-picker': eleDatePicker,
    'ele-time-picker': eleTimePicker
  }
}
