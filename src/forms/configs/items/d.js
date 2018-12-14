import itemB from './b'

const configs = [
  {
    field: 'arrayObject',
    label: '数组对象',
    type: Array,
    itemType: Object,
    itemConfigs: itemB
  },
  {
    field: 'arrayString',
    label: '数组 string',
    type: Array,
    itemType: String,
    input: 'ele-checkbox',
    options: [{
      label: '上海',
      value: 'shanghai'
    }, {
      label: '北京',
      value: 'beijing'
    }, {
      label: '广州',
      value: 'guangzhou',
      default: true
    }, {
      label: '深圳',
      value: 'shenzhen',
      disabled: true,
      default: true
    }]
  }
]

export default configs
