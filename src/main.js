import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import 'bulma/css/bulma.css'
import Vuelidate from "vuelidate"
Vue.use(Vuelidate)
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-285785-14',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
