/* global Vue */
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0,
    name: 'Ben'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },
    sayHelloWorld: function() {
      return this.title;
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function(event) {
      event.stopPropagation();
    },
    alertMe: function() {
      alert('Alert!');
    }
  }
});
