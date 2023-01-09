<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="header-container">
    <RouterLink to="/" class="header-item">Home</RouterLink>
    <RouterLink to="/about" class="header-item">About</RouterLink>
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
</style>
