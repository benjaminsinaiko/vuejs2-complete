<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>User Info</h1>
          <hr>
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label>Email</label>
            <input 
                type="text" 
                class="form-control"
                v-model="userData.email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input 
                type="password" 
                class="form-control"
                v-model="userData.password">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <h3>Store Data?</h3>
          <hr>
          <label>
            <input
                type="radio"
                value="Yes"
                v-model="storeData"> Yes
          </label>
          <label>
            <input
                type="radio"
                value="No"
                v-model="storeData"> No
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
              class="btn btn-primary"
              @click.prevent="submitted">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Full Name: {{ userData.fullName }}</p>
              <p>Mail: {{ userData.email }}</p>
              <p>Password: {{ userData.password }}</p>
              <p>Store in Database?: {{ storeData }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  data() {
    return {
      userData: {
        fullName: 'Test Name',
        email: '',
        password: ''
      },
      storeData: 'Yes',
      isSubmitted: false
    };
  },
  components: {
    appFullName: FullName
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
