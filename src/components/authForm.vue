<script setup lang="ts">
import Navbar from "./navbar.vue";

defineProps(["title", "path", "btnText"]);
</script>

<template>
  <Navbar></Navbar>
  <main class="container">
    <h2>{{ title }}</h2>
    <div>
      <label for="username">enter your username</label
      ><input required="true" name="username" type="text" />
    </div>
    <div>
      <label for="email">enter your email</label
      ><input required="true" name="email" type="email" />
    </div>
    <div>
      <label for="password">enter your password</label
      ><input required="true" name="paasword" type="password" />
    </div>
    <button>{{ btnText }}</button>
  </main>
</template>
