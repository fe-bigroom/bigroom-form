import thirdConfig from './third'

const itemConfig = [
  {
    field: 'string',
    label: 'second字符串',
    type: String,
    input: 'input.text',
    _genForm: v => ({ multi: { string: v } }),
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'number',
    label: 'second数字',
    type: Number,
    input: 'input.number',
    _genForm: v => ({ multi: { number: v } }),
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'arrayObject',
    label: 'second数组对象',
    type: Array,
    itemType: Object,
    itemConfigs: [{
      field: 'string',
      label: '字符串',
      type: String,
      input: 'input.text',
      _genForm: v => ({ multi: { arrayObject: [{ string: v }] } }),
      _parentsInfo: [
        { label: 'second数组对象', field: 'arrayObject', type: Array, layer: 2 },
        { label: '复合字段', field: 'multi', layer: 1 },
        { label: null, field: null, type: Object, layer: 0 }
      ]
    },
    {
      field: 'number',
      label: '数字',
      type: Number,
      input: 'input.number',
      _genForm: v => ({ multi: { arrayObject: [{ number: v }] } }),
      _parentsInfo: [
        { label: 'second数组对象', field: 'arrayObject', type: Array, layer: 2 },
        { label: '复合字段', field: 'multi', type: Object, layer: 1 },
        { label: null, field: null, type: Object, layer: 0 }
      ]
    }],
    _itemConfigs: [
      [{
        field: 'string',
        label: '字符串',
        type: String,
        input: 'input.text',
        _genForm: v => ({ multi: { arrayObject: [{ string: v }] } }),
        _parentsInfo: [
          { label: 'second数组对象', field: 'arrayObject', type: Array, layer: 2 },
          { label: '复合字段', field: 'multi', type: Object, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      },
      {
        field: 'number',
        label: '数字',
        type: Number,
        input: 'input.number',
        _genForm: v => ({ multi: { arrayObject: [{ number: v }] } }),
        _parentsInfo: [
          { label: 'second数组对象', field: 'arrayObject', type: Array, layer: 2 },
          { label: '复合字段', field: 'multi', type: Object, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      }]
    ],
    input: 'custom-1', // 这里可以用只负责一维数据解析的库来继续解析出这个 input，那么现在的问题就是两个一维表单如何通信
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'objectObject',
    label: 'second嵌套对象',
    type: Object,
    itemConfigs: [{
      field: 'boolean',
      label: '布尔值',
      default: true,
      input: 'radio',
      _genForm: v => ({ multi: { objectObject: { boolean: v } } }),
      _parentsInfo: [
        { label: 'second嵌套对象', field: 'arrayObject', layer: 2 },
        { label: '复合字段', field: 'multi', layer: 1 },
        { label: null, field: null, layer: 0 }
      ]
    },
    {
      field: 'date',
      label: '日期',
      default: null,
      input: 'input.date',
      _genForm: v => ({ multi: { objectObject: { date: v } } }),
      _parentsInfo: [
        { label: 'second嵌套对象', field: 'arrayObject', layer: 2 },
        { label: '复合字段', field: 'multi', layer: 1 },
        { label: null, field: null, layer: 0 }
      ]
    }],
    input: 'custom-2',
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'subMulti',
    label: 'second复合字段',
    type: Object,
    inputType: 'component',
    itemConfigs: thirdConfig,
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'boolean',
    label: 'second布尔值',
    type: Boolean,
    input: 'radio',
    _genForm: v => ({ multi: { boolean: v } }),
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'date',
    label: 'second日期',
    type: Date,
    input: 'input.date',
    _genForm: v => ({ multi: { date: v } }),
    _parentsInfo: [
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  }
]

export default itemConfig
