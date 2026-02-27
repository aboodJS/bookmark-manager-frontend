<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./navbar.vue";
import axios from "axios";
const props = defineProps(["title", "path", "btnText"]);

const chosen_name = ref("");
const user_mail = ref("");
const user_password = ref("");
const err = ref();
const errMsg = ref();

async function sendForm() {
  try {
    const response = await axios.post(
      props.path,
      {
        username: chosen_name.value || "",
        email: user_mail.value || "",
        password: user_password.value,
      },
      { withCredentials: true },
    );
    sessionStorage.setItem("access_token", response.data.jwt);

    console.log(refreshResponse.data);

    err.value = false;
  } catch (error) {
    err.value = true;
    errMsg.value = error;
  }
}
</script>

<template>
  <Navbar></Navbar>
  <main class="container">
    <h2>{{ title }}</h2>
    <article class="pico-background-red-500" v-if="err">
      {{ errMsg }}
    </article>
    <article v-else-if="err === false">{{ title }} complete</article>
    <div v-if="props.title === 'login'">
      <label for="username_or_pass">enter your username or email</label
      ><input
        required="true"
        v-model="chosen_name"
        name="username_or_pass"
        type="text"
      />
    </div>
    <div v-else>
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
