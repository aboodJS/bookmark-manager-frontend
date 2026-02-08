<!-- TODO: fix the issue of the form sending undefined tovthe server -->

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./navbar.vue";

const props = defineProps(["title", "path", "btnText"]);

const chosen_name = ref("");
const user_mail = ref("");
const user_password = ref("");
const err = ref();

async function sendForm() {
  try {
    const res = await fetch(props.path, {
      method: "POST",
      body: JSON.stringify({
        username: chosen_name.value,
        email: user_mail.value,
        password: user_password.value,
      }),
    });

    if (!res.ok) {
      err.value = res.status;
    }
  } catch (error) {
    err.value = error;
    console.log(err.value);
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
