目前支持的数据结构为：
```javascript
{
  // x
  string: '',
  number: 0,
  boolean: null,
  data: null,
  arrayString: [''], // item 只能作为简单数据结构

  // object-x
  object: {
    string: '',
    number: 0,
    boolean: null,
    data: null,
    array: [''] // item 只能作为简单数据结构
  },

  // array-object-x，需要单独 import
  array: [
    {
      string: '',
      number: 0,
      boolean: null,
      data: null,
      array: [''] // item 只能作为简单数据结构
    }
  ],

  // array-array-x，需要单独 import
  array: [
    [''] // item 只能作为简单数据结构
  ]
}

// 不支持 array-array-object
```