<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <h6>Email</h6>
        <input v-model="email" type="email" required />
        <h6>Password</h6>
        <input v-model="password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
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
  font-size: xx-large;
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