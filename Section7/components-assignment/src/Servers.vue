<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="server in servers">
          Server #{{ server }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      servers: [1, 2, 3, 4, 5]
    };
  },
  methods: {}
};
</script>
