const configs = [
  {
    field: 'string',
    label: '字符串',
    type: String,
    _genForm: v => ({ objectObject: { string: v } }),
    _parentsInfo: [
      { label: '嵌套对象', field: 'objectObject', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'number',
    label: '数字',
    type: Number,
    _genForm: v => ({ objectObject: { number: v } }),
    _parentsInfo: [
      { label: '嵌套对象', field: 'objectObject', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'boolean',
    label: '布尔值',
    type: Boolean,
    _genForm: v => ({ objectObject: { boolean: v } }),
    _parentsInfo: [
      { label: '嵌套对象', field: 'objectObject', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'date',
    label: '日期',
    type: Date,
    _genForm: v => ({ objectObject: { date: v } }),
    _parentsInfo: [
      { label: '嵌套对象', field: 'objectObject', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  }
]

export default configs
