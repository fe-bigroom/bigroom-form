const configs = [
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
    // _genForm: v => ({ arrayMulti: [[...v]] })
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayMulti', type: Array, layer: 1 },
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
    // _genForm: v => ({ arrayMulti: [[...v]] })
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayMulti', type: Array, layer: 1 },
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
    // _genForm: v => ({ arrayMulti: [[...v]] })
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayMulti', type: Array, layer: 1 },
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
    // _genForm: v => ({ arrayMulti: [[...v]] })
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayMulti', type: Array, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }
]

export default configs
