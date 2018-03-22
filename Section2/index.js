/* global Vue */
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://google.com"
  },
  methods: {
    sayHello: function() {
      return "Hello";
    },
    sayHelloWorld: function() {
      return this.title;
    }
  }
});
