// import eleInputText from '../../components/ele-input-text'
// import eleInputNumber from '../../components/ele-input-number'
// import eleInputDate from '../../components/ele-input-date'
// import eleRadio from '../../components/ele-radio'
// import eleCheckbox from '../../components/ele-checkbox'

const configs = [
  {
    field: 'string',
    label: '字符串',
    type: String,
    input: 'ele-input-text',
    value: 'string',
    validate: 'required|min:3'
    // _genForm: v => ({ objectBase: { string: v } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },
  {
    field: 'number',
    label: '数字',
    type: Number,
    input: 'ele-input-number',
    value: 110,
    validate: 'required'
    // _genForm: v => ({ objectBase: { number: v } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },
  {
    field: 'boolean',
    label: '布尔值',
    type: Boolean,
    input: 'ele-radio',
    options: [{
      label: 'Yes',
      value: 1,
      default: true
    }, {
      label: 'No',
      value: 0
    }],
    validate: 'required'
    // _genForm: v => ({ objectBase: { boolean: v } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },
  {
    field: 'date',
    label: '日期',
    type: Date,
    input: 'ele-input-date',
    value: '2019-01-01',
    validate: 'required'
    // _genForm: v => ({ objectBase: { date: v } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
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
    }],
    validate: 'required'
    // _genForm: v => ({ objectBase: { arrayString: [...v] } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },

  {
    field: 'arrayNumber',
    label: '数组 number',
    type: Array,
    itemType: Number,
    input: 'ele-checkbox',
    options: [{
      label: '10',
      value: 10
    }, {
      label: '20',
      value: 20
    }, {
      label: '30',
      value: 30,
      default: true
    }, {
      label: '40',
      value: 40,
      disabled: true,
      default: true
    }],
    validate: 'required'
    // _genForm: v => ({ objectBase: { arrayNumber: [...v] } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },

  {
    field: 'arrayBoolean',
    label: '数组 boolean',
    type: Array,
    itemType: Boolean,
    input: 'ele-checkbox',
    options: [{
      label: 'A是奇数',
      value: true
    }, {
      label: 'B是奇数',
      value: false
    }],
    validate: 'required'
    // _genForm: v => ({ objectBase: { arrayBoolean: [...v] } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  },

  {
    field: 'arrayDate',
    label: '数组 date',
    type: Array,
    itemType: Date,
    input: 'ele-checkbox',
    options: [{
      label: '1月',
      value: '2018-01-01'
    }, {
      label: '4月',
      value: '2018-04-01'
    }, {
      label: '7月',
      value: '2018-07-01'
    }, {
      label: '10月',
      value: '2018-10-01',
      disabled: true,
      default: true
    }],
    validate: 'required'
    // _genForm: v => ({ objectBase: { arrayDate: [...v] } })
    // _parentsInfo: [
    //   { label: '嵌套对象', field: 'objectBase', type: Object, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }
]

export default configs
