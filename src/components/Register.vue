<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <h6>Name</h6>
      <input v-model="name" type="text" required />
      <h6>Email</h6>
      <input v-model="email" type="email" required />
      <h6>Password</h6>
      <input v-model="password" type="password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: x-large;
  background: linear-gradient(135deg, rgb(198, 242, 255), rgb(134, 172, 255));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
form {
  display:flex;
  align-self: center;
  flex-direction: column;
}
  </style>