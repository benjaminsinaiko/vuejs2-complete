<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>User Info</h1>
          <hr>
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input
                type="text"
                id="first-name"
                class="form-control"
                v-model="userData.firstName">
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input
                type="text"
                id="last-name"
                class="form-control"
                v-model="userData.lastName">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
                type="text" 
                id="email"
                class="form-control"
                v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
                type="password" 
                id="password"
                class="form-control"
                v-model="userData.password">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <h3>Store Data?</h3>
          <hr>
          <label for="true">
            <input
                type="radio"
                id="true"
                value="true"
                v-model="storeData"> Yes
          </label>
          <label for="false">
            <input
                type="radio"
                id="false"
                value="false"
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
              <p>Full Name: {{ userData.firstName + ' ' + userData.lastName }}</p>
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
export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      storeData: false,
      isSubmitted: false
    };
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
