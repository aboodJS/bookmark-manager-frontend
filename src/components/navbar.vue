<script setup lang="ts">
import { useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";

const jwt = localStorage.getItem("jwt_token");
const bookmark_modal = useTemplateRef("bookmark_modal");
</script>

<template>
  <nav class="container">
    <ul>
      <li>
        <RouterLink to="/" class="contrast"
          ><strong>bookmark manager</strong></RouterLink
        >
      </li>
    </ul>

    <ul>
      <li>
        <button class="secondary">
          <RouterLink class="contrast" to="/login">Login</RouterLink>
        </button>
      </li>
      <li>
        <button class="secondary">
          <RouterLink class="contrast" to="/signup">Signup</RouterLink>
        </button>
      </li>
      <li>
        <button
          class="secondary"
          v-if="jwt !== null"
          @click="bookmark_modal?.showModal"
        >
          add bookmark +
        </button>
      </li>
    </ul>
  </nav>
  <dialog ref="bookmark_modal" class="container">
    <form>
      <Icon
        @click="bookmark_modal?.close()"
        icon="material-symbols:close-rounded"
        width="24"
        height="24"
      />

      <div>
        <label for="title">title</label><input name="title" type="text" />
      </div>
      <div><label for="url">url</label><input name="url" type="text" /></div>
      <div>
        <label for="desc">description</label>
        <textarea name="desc" id=""></textarea>
      </div>
      <button class="secondary">add</button>
    </form>
  </dialog>
</template>
