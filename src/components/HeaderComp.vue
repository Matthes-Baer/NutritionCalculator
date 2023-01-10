<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="header-container">
    <RouterLink to="/" class="header-item d-flex align-items-center">
      <i class="fa-solid fa-house me-2" style="font-size: small"></i
      >Home</RouterLink
    >
    <RouterLink to="/about" class="header-item d-flex align-items-center">
      <i class="fa-sharp fa-solid fa-circle-info me-2"></i>About</RouterLink
    >
  </nav>
</template>

<style scoped lang="scss">
.header {
  &-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 1%;
  }
  &-item {
    margin-right: 1%;
    text-decoration: none;
    color: white;
  }
}

@media (max-width: 480px) {
  .header {
    &-container {
      flex-direction: column;
      align-items: center;
    }
    &-item {
      margin-right: 0;
      margin-bottom: 1%;
    }
  }
}

nav .router-link-active,
nav .router-link-active-exact {
  color: var(--accentColor);
  animation: router-link-active-animation 2s ease-in-out 0s infinite alternate
    none;
}

@keyframes router-link-active-animation {
  0% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
