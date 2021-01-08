import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import myComponent from './components/BannerDatum.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.component('myComponent', myComponent);
new Vue({
  render: h => h(App),
}).$mount('#app')
