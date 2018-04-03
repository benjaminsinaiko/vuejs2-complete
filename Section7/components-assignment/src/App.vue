<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <header>
            <my-header></my-header>  
          </header>
        </div>
      </div>
      <hr>
      <div class="row">
        <servers></servers>
        <server-details></server-details>
      </div>
      <hr>
      <my-footer></my-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Servers from './components/Servers.vue';
import ServerDetails from './components/ServerDetails.vue';

export default {
  components: {
    'my-header': Header,
    servers: Servers,
    'server-details': ServerDetails,
    'my-footer': Footer
  }
};
</script>

<style>
</style>
