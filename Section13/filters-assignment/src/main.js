import Vue from 'vue';
import App from './App.vue';

Vue.filter('text-counter', function(value) {
  let count = value.split('').length;
  return value + ' (' + count + ')';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
