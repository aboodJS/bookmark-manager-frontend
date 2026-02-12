<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./navbar.vue";
import axios from "axios";
const props = defineProps(["title", "path", "btnText"]);

const chosen_name = ref("");
const user_mail = ref("");
const user_password = ref("");
const err = ref();

async function sendForm() {
  const response = await axios.post(props.path, {
    username: chosen_name.value,
    email: user_mail.value,
    password: user_password.value,
  });
  console.log(response.data);
  if (response.data.error) {
    err.value = true;
  } else {
    err.value = false;
  }
}
</script>

<template>
  <Navbar></Navbar>
  <main class="container">
    <h2>{{ title }}</h2>
    <article class="pico-background-red-500" v-if="err">
      sorry, we encountered an error
    </article>
    <article v-else-if="err === false">{{ title }} complete</article>
    <div>
      <label for="username">enter your username</label
      ><input
        required="true"
        v-model="chosen_name"
        name="username"
        type="text"
      />
    </div>
    <div>
      <label for="email">enter your email</label
      ><input required="true" v-model="user_mail" name="email" type="email" />
    </div>
    <div>
      <label for="password">enter your password</label
      ><input
        required="true"
        v-model="user_password"
        name="password"
        type="password"
      />
    </div>
    <button @click="sendForm">{{ btnText }}</button>
  </main>
</template>

<style>
article {
  background-color: red;
  color: white;
  font-weight: bold;
}
</style>
