import BigroomForm from './main'
import { isType } from './utils'

export default {
  install: (Vue, options = {}) => {
    if (!options.cmpts) {
      throw new Error(`cmpts is not configured!`)
    }

    options.mapAll = (options.mapAll === true) || false
    options.validation = Object.assign({
      locale: 'zh_CN',
      dictionary: null,
      i18n: null,
      rules: {}
    }, options.validation)

    useVeeValidate(Vue, options.validation)
    Vue.prototype.$BIGROOMFORM = options

    BigroomForm.install = Vue => Vue.component(BigroomForm.name, BigroomForm)
    window.BigroomForm = BigroomForm
    Vue.component('bigroom-form', BigroomForm)
  }
}

function useVeeValidate (Vue, validation) {
  const { locale, dictionary, i18n, rules } = validation
  const VeeValidate = require('vee-validate').default
  const VeeValidator = VeeValidate.Validator
  const localeFile = require(`vee-validate/dist/locale/${locale}`)

  // merge original messages.
  VeeValidator.localize({ [locale]: localeFile })

  // merge custom dictionary.
  VeeValidator.localize(dictionary)

  // merge custom rules.
  Object.keys(rules).forEach(key => {
    const rule = rules[key]

    if (isType.isObject(rule)) {
      VeeValidator.extend(key, rule.validate, {
        paramNames: rule.paramNames || undefined,
        hasTarget: rule.hasTarget || false
      })
    } else {
      VeeValidator.extend(key, rule)
    }
  })

  // doc: https://baianat.github.io/vee-validate/guide/localization.html
  Vue.use(VeeValidate, {
    aria: true,
    classNames: {},
    classes: false,
    delay: 0,
    dictionary: dictionary,
    errorBagName: 'veeErrors', // change if property conflicts
    events: 'input|blur',
    fieldsBagName: 'formFields',
    i18n, // the vue-i18n plugin instance
    i18nRootKey: 'validations', // the nested key under which the validation messages will be located
    inject: true,
    locale,
    validity: false
  })
}
