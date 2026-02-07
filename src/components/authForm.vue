<!-- TODO: fix the issue of the form sending undefined tovthe server -->

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./navbar.vue";
const props = defineProps(["title", "path", "btnText"]);

const user_name = ref("");
const e_mail = ref("");
const pass_word = ref("");

async function sendForm() {
  console.log(user_name.value);
  console.log(pass_word.value);
  console.log(e_mail.value);
  try {
    const res = await fetch(props.path, {
      method: "POST",
      body: JSON.stringify({
        username: user_name,
        email: e_mail,
        password: pass_word,
      }),
    });

    if (res.ok) {
      console.log(res.ok);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <Navbar></Navbar>
  <main class="container">
    <h2>{{ title }}</h2>
    <div>
      <label for="username">enter your username</label
      ><input required="true" v-model="user_name" name="username" type="text" />
    </div>
    <div>
      <label for="email">enter your email</label
      ><input required="true" v-model="e_mail" name="email" type="email" />
    </div>
    <div>
      <label for="password">enter your password</label
      ><input
        required="true"
        v-model="pass_word"
        name="paasword"
        type="password"
      />
    </div>
    <button @click="sendForm">{{ btnText }}</button>
  </main>
</template>
