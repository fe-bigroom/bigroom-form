import Vue from 'vue'
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import BigroomForm from './plugins/bigroom-form'
import elementCmpts from './forms/element'
import formValidteConfigs from './forms/configs/validate-configs'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(BigroomForm, {
  mapAll: true,
  cmpts: elementCmpts,
  validation: {
    validate: VeeValidate,
    configs: formValidteConfigs
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
