const thirdConfig = [
  {
    field: 'string',
    label: 'third字符串',
    type: String,
    _genForm: v => ({ multi: { subMulti: { string: v } } }),
    _parentsInfo: [
      { label: 'second复合字段', field: 'subMulti', type: Object, layer: 2 },
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  },
  {
    field: 'array',
    label: 'third简单数组',
    type: Array,
    itemType: String,
    _genForm: v => ({ multi: { subMulti: { array: [ v ] } } }),
    _parentsInfo: [
      { label: 'second复合字段', field: 'subMulti', type: Object, layer: 2 },
      { label: '复合字段', field: 'multi', type: Object, layer: 1 },
      { label: null, field: null, type: Object, layer: 0 }
    ]
  }
]

export default thirdConfig
