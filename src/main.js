import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import 'bulma/css/bulma.css'
import Vuelidate from "vuelidate"
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import SmartTable from 'vuejs-smart-table'
require('dotenv').config()

Vue.use(VueSimpleMarkdown)
Vue.use(Vuelidate)
Vue.use(VueAnalytics, {id: 'UA-285785-14', router})
Vue.use(SmartTable)
Vue.config.productionTip = false

new Vue({router, render: h => h(App)}).$mount('#app')
