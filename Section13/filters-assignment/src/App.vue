<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text1 | reverseText}}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <hr>
        <p>{{ text2 | text-counter }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr>
        <p>{{ computedReverse }}</p>
        <p>{{ computedCount }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <hr>
        <p>{{ mixinCount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countMixin } from './countMixin';

export default {
  data() {
    return {
      text1: 'Text to be reversed',
      text2: 'Counting',
      text3: 'Computed'
    };
  },
  mixins: [countMixin],
  filters: {
    reverseText(text) {
      return text
        .split('')
        .reverse()
        .join('');
    }
  },
  computed: {
    computedReverse() {
      return this.text3
        .split('')
        .reverse()
        .join('');
    },
    computedCount() {
      let count = this.text3.split('').length;
      return this.text3 + ' (' + count + ')';
    }
  }
};
</script>

<style>
</style>
