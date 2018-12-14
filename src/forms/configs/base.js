const configs = [
  {
    vid: 'id-string',
    field: 'string',
    label: '字符串',
    type: String,
    input: 'ele-input',
    inputAttrs: {
      type: 'text',
      placeholder: '请输入',
      disabled: false
    },
    value: 'string',
    validate: 'required|min:3'
    // validate: { required: true, min: 6, truthy: true }
    // _genForm: v => ({ string: v })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    vid: 'id-number',
    field: 'number',
    label: '数字',
    type: Number,
    input: 'ele-input',
    inputAttrs: {
      type: 'number',
      placeholder: '请输入',
      clearable: true
    },
    validate: 'required|biggerThanString:id-string|isEvenAndBetween:2,10'
    // _genForm: v => ({ number: v })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'boolean',
    label: '布尔值',
    type: Boolean,
    input: 'ele-radio',
    inputAttrs: {
      radioGroup: {
        size: 'small'
      },
      radio: {
        border: true
      }
    },
    options: [{
      label: 'Yes',
      value: true,
      default: true
    }, {
      label: 'No',
      value: false
    }],
    validate: 'required'
    // _genForm: v => ({ boolean: v })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'date',
    label: '日期',
    type: Date,
    input: 'ele-input-date',
    value: '2018-01-01',
    validate: 'required'
    // _genForm: v => ({ date: v })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'arrayString',
    label: '数组 string',
    type: Array,
    itemType: String,
    input: 'ele-checkbox',
    inputAttrs: {
      checkboxGroup: {
      },
      checkbox: {
      }
    },
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
    // _genForm: v => ({ arrayString: [...v] })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
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
    // _genForm: v => ({ arrayNumber: [...v] })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
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
    // _genForm: v => ({ arrayBoolean: [...v] })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
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
    // _genForm: v => ({ arrayDate: [...v] })
    // _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  }
]

export default configs
