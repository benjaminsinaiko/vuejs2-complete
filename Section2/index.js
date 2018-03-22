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
    name: 'Ben',
    counter2: 0,
    result: '',
    attachRed: false,
    color: 'gray',
    width: 100
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
  },
  watch: {
    counter2: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter2 = 0;
      }, 2000);
    }
  },
  computed: {
    output: function() {
      return this.counter2 > 5 ? 'Greater 5' : 'Smaller than 5';
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  }
});
