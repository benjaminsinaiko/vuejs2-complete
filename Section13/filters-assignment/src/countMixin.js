export const countMixin = {
  data() {
    return {
      text4: 'Mixins'
    };
  },
  computed: {
    mixinCount() {
      let count = this.text4.split('').length;
      return this.text4 + ' (' + count + ')';
    }
  }
};
