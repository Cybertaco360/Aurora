<template>
    <div>
      <h1>Organization Registration</h1>
      <form @submit.prevent="registerOrganization">
        <div>
          <label for="name">Organization Name:</label>
          <input type="text" v-model="name" id="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" required></textarea>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  <script>
  export default {
    name: 'OrganizationRegister',
    data() {
      return {
        name: '',
        email: '',
        description: ''
      };
    },
    methods: {
      registerOrganization() {
        // Implement registration logic here
        console.log('Organization Registered:', this.name, this.email, this.description);
      }
    }
  };
  </script>