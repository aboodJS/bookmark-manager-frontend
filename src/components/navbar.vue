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
    </ul>
  </nav>
</template>
