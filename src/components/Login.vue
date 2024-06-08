<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
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
    login() {
      // Replace this with your actual login logic
      if (this.username === 'user' && this.password === 'password') {
        localStorage.setItem('authToken', 'your-auth-token');
        this.$router.push('/home');
      } else {
        alert('Invalid credentials');
      }
    },
  },
};
</script>