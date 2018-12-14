const configs = [
  [{
    field: 'string',
    label: '字符串',
    type: String,
    input: 'ele-input-text'
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ string: v }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
    field: 'number',
    label: '数字',
    type: Number,
    input: 'ele-input-number'
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ number: v }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
    field: 'boolean',
    label: '布尔',
    type: Boolean,
    input: 'ele-radio',
    options: [{
      label: 'Yes',
      value: 1,
      default: true
    }, {
      label: 'No',
      value: 0
    }]
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ boolean: v }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
    field: 'date',
    label: '日期',
    type: Date,
    input: 'ele-input-date'
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ date: v }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
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
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ arrayString: [...v] }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
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
    }]
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ arrayNumber: [...v] }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
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
    }]
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ arrayBoolean: [...v] }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }, {
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
    }]
    // _index: 0,
    // _genForm: v => ({ arrayObject: [{ arrayDate: [...v] }] }),
    // _parentsInfo: [
    //   { label: '数组对象', field: 'arrayObject', layer: 1 },
    //   { label: null, field: null, type: Object, layer: 0 }
    // ]
  }]

  // [{
  //   field: 'string',
  //   label: '字符串',
  //   type: String,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { string: v }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'number',
  //   label: '数字',
  //   type: Number,
  //   input: 'input.number',
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { number: v }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', type: Array, layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'boolean',
  //   label: '布尔',
  //   type: Boolean,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { boolean: v }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'date',
  //   label: '日期',
  //   type: Date,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { date: v }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'arrayString',
  //   label: '简单数组string',
  //   type: Array,
  //   itemType: String,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { arrayString: [...v] }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'arrayNumber',
  //   label: '简单数组number',
  //   type: Array,
  //   itemType: Number,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { arrayNumber: [...v] }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'arrayBoolean',
  //   label: '简单数组boolean',
  //   type: Array,
  //   itemType: Boolean,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { arrayBoolean: [...v] }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }, {
  //   field: 'arrayDate',
  //   label: '简单数组date',
  //   type: Array,
  //   itemType: Date,
  //   _index: 1,
  //   _genForm: v => ({ arrayObject: [null, { arrayDate: [...v] }] }),
  //   _parentsInfo: [
  //     { label: '数组对象', field: 'arrayObject', layer: 1 },
  //     { label: null, field: null, type: Object, layer: 0 }
  //   ]
  // }]
]

export default configs
