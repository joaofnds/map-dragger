import Vue from 'vue'
import Dragger from './Dragger.vue'
import store from './store/store'

window.$ = jQuery

new Vue({
  el: '#dragger',
  store,
  render: h => h(Dragger)
})
