/* global Vue */
new Vue({
  el: '#exercise',
  data: {
    name: 'Benjamin',
    age: 37,
    image:
      'https://i.pinimg.com/236x/28/d7/57/28d757fa969137c1747536da6e24fa09--cartoon-head-cartoon-cats.jpg'
  },
  methods: {
    random: function() {
      return Math.random();
    }
  }
});
