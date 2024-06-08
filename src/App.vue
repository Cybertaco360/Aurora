<script setup>
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import cardImage from './card-image.png'

</script>

<template>
  <div class="main-card">
    <img src="./card-image.png">
    <div class="content">
      <Login />
      <Register />
    </div>
  </div>
</template>

<style>

input {
  background-color: rgb(230, 226, 255);
  border-radius: 5%;
  border: 1.5px solid rgba(255,255,255,0.6);
  color: rgb(7, 7, 7);
}

.main-card {
  margin-top: -10%;
  margin-right: 35%;
  background-color: aliceblue;
  padding-left: 85%;
  padding-right: 10%;
  padding-bottom: 15%;
  padding-top: 15%;
  width: max-content;
  transition:0.5s;
  border-radius: 4%;
  border: 3px solid rgba(216, 216, 216, 0.5);
  box-shadow: 0 30px 40px rgba(161, 233, 255, 0.3);
}

h2 {
  text-align: center;
}

h6 {
  color: black;
  margin-bottom: 0px;
  margin-top:5%;
}

.content {
  max-width: fit-content;
}

img {
  position:static;
  border: 5px, solid, rgba(255,255,255,0.7);
  width: 50%;
}

</style>
