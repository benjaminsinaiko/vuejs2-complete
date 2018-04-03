import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Servers from './Servers.vue';
import ServerDetails from './ServerDetails.vue';

Vue.component('my-header', Header);
Vue.component('my-footer', Footer);
Vue.component('servers', Servers);
Vue.component('server-details', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
});
