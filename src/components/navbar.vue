<template>
  <nav class="container">
    <ul>
      <li><strong>E-commerce</strong></li>
    </ul>
    <ul>
      <li><RouterLink class="contrast" to="/">Home</RouterLink></li>
      <li><RouterLink class="contrast" to="/about">About</RouterLink></li>
    </ul>
    <ul>
      <li>
        <button class="secondary">
          <RouterLink class="contrast" to="/">Login</RouterLink>
        </button>
      </li>
      <li>
        <button class="secondary">
          <RouterLink class="contrast" to="/about">Signup</RouterLink>
        </button>
      </li>
    </ul>
  </nav>
</template>
