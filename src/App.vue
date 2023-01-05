<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
    <h1>Bilder runterladen und zu webp format?</h1>
  </div>
</template>

<style>
body {
  --accentColor: rgb(255, 255, 42);
  background-color: rgb(19, 19, 19);
  color: white;
}
</style>
