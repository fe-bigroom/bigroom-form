import itemA from './items/a'

import secondConfigs from './second'

const configs = [

  // object-x
  {
    field: 'objectObject',
    label: '嵌套对象',
    type: Object,
    itemConfigs: itemA,
    _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'arrayObject',
    label: '数组对象',
    type: Array,
    itemType: Object,
    input: 'custom-1', // 这里可以用只负责一维数据解析的库来继续解析出这个 input，那么现在的问题就是两个一维表单如何通信
    itemConfigs: [{
      field: 'string',
      label: '字符串',
      type: String,
      input: 'input.text',
      _genForm: v => ({ arrayObject: [{ string: v }] }),
      _parentsInfo: [
        { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
        { label: null, field: null, type: Object, layer: 0 }
      ]
    },
    {
      field: 'number',
      label: '数字',
      type: Number,
      input: 'input.number',
      _genForm: v => ({ arrayObject: [{ number: v }] }),
      _parentsInfo: [
        { label: '数组对象', field: 'arrayObject', layer: 1 },
        { label: null, field: null, type: Object, layer: 0 }
      ]
    }],
    _itemConfigs: [
      [{
        field: 'string',
        label: '字符串',
        type: String,
        input: 'input.text',
        _index: 0,
        _genForm: v => ({ arrayObject: [{ string: v }] }),
        _parentsInfo: [
          { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      },
      {
        field: 'number',
        label: '数字',
        type: Number,
        input: 'input.number',
        _index: 0,
        _genForm: v => ({ arrayObject: [{ number: v }] }),
        _parentsInfo: [
          { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      }],
      [{
        field: 'string',
        label: '字符串',
        type: String,
        input: 'input.text',
        _index: 1,
        _genForm: v => ({ arrayObject: [null, { string: v }] }),
        _parentsInfo: [
          { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      },
      {
        field: 'number',
        label: '数字',
        type: Number,
        input: 'input.number',
        _index: 1,
        _genForm: v => ({ arrayObject: [null, { number: v }] }),
        _parentsInfo: [
          { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      }]
    ],
    _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'objectMulti',
    label: ' 对象复合字段',
    type: Object,
    inputType: 'component',
    itemConfigs: secondConfigs,
    _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  },

  {
    field: 'arrayMulti',
    label: '数组复合字段',
    type: Array,
    itemType: Array,
    itemConfigs: [{
      field: 'array',
      label: 'third简单数组',
      type: Array,
      itemType: String,
      _genForm: v => ({ arrayMulti: [{ array: [ v ] }] }),
      _parentsInfo: [
        { label: '数组复合字段', field: 'arrayMulti', type: Array, layer: 1 },
        { label: null, field: null, type: Object, layer: 0 }
      ]
    }],
    _itemConfigs: [
      [{
        field: 'array',
        label: 'third简单数组',
        type: Array,
        itemType: String,
        _index: 0,
        _genForm: v => ({ arrayMulti: [{ array: [ v ] }] }),
        _parentsInfo: [
          { label: '数组复合字段', field: 'arrayMulti', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      }],
      [{
        field: 'array',
        label: 'third简单数组',
        type: Array,
        itemType: String,
        _index: 1,
        _genForm: v => ({ arrayMulti: [null, { array: [ v ] }] }),
        _parentsInfo: [
          { label: '数组复合字段', field: 'arrayMulti', type: Array, layer: 1 },
          { label: null, field: null, type: Object, layer: 0 }
        ]
      }]
    ],
    _parentsInfo: [{ label: null, field: null, type: Object, layer: 0 }]
  }
]

export default configs
