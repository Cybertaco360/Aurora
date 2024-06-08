<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login here</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    register() {
      // Replace this with your actual registration logic
      if (this.username && this.password) {
        localStorage.setItem('authToken', 'your-auth-token');
        this.$router.push('/home');
      } else {
        alert('Please fill in all fields');
      }
    },
  },
};
</script>
