/* global Vue */
new Vue({
  el: "#exercise",
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: "float",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "100px",
      height: "150px",
      backgroundColor: "gray"
    },
    progressBar: {
      width: "0px",
      backgroundColor: "red"
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      var bar = setInterval(function() {
        console.log("width: ", width);
        if (width === 100) {
          clearInterval(bar);
        } else {
          width = width + 10;
          vm.progressBar.width = width + "px";
        }
      }, 500);
    }
  }
});
