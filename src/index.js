import './js/common'

// SCSS
// import './assets/scss/main.scss'
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// import 'vue'
// import Vue from "vue";
window.Vue = require('vue');
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default);


const app = new Vue({
  data() {
    return {
      component: false
    }
  },
  store,
  el: '#app'
})
