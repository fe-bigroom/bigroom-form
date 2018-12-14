export default {
  locale: 'zh_CN',

  dictionary: {
    zh_CN: {
      messages: {
        required: (field) => '请输入' + field,
        biggerThanString: (field) => `${field}需要大于 string 的长度`,
        isEvenAndBetween: (field, args) => `${field}必须是偶数，且大于${args[0]}, 并小于${args[1]}`
      },
      attributes: {
        string: '字符串',
        number: '数字',
        email: '邮箱',
        password: '密码',
        phone: '手机号'
      }
    }
  },

  rules: {
    biggerThanString: {
      validate: (value, otherValues) => {
        return value > otherValues[0].length
      },
      hasTarget: true
    },
    isEvenAndBetween: {
      validate: (value, { min, max } = {}) => {
        return value % 2 === 0 && Number(min) < value && Number(max) > value
      },
      paramNames: ['min', 'max']
    }
  }
}
