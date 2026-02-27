<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";
import axios from "axios";

const title = ref("");
const url = ref("");
const description = ref("");

const bookmark_modal = useTemplateRef("bookmark_modal");
const jwt = sessionStorage.getItem("access_token");
async function sendBookmark() {
  const payload: Object = {
    title: title.value,
    url: url.value,
    description: description.value,
  };

  const headers = {
    Authentication: `Bearer ${jwt}`,
  };

  const response = await axios.post(
    "http://localhost:3000/bookmarks/add",
    payload,
    { headers: headers },
  );

  console.log(response.data);
}
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
        <label for="title">title</label
        ><input v-model="title" name="title" type="text" />
      </div>
      <div>
        <label for="url">url</label
        ><input v-model="url" name="url" type="text" />
      </div>
      <div>
        <label for="desc">description</label>
        <textarea v-model="description" name="desc" id=""></textarea>
      </div>
      <button class="secondary" @click.prevent="sendBookmark">add</button>
    </form>
  </dialog>
</template>
