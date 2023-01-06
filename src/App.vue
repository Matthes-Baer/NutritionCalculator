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
@font-face {
  font-family: "PressStart2P";
  src: local("PressStart2P"),
    url(./fonts/PressStart2P-Regular.ttf) format("truetype");
}

body {
  --accentColor: rgb(255, 255, 42);
  background-color: rgb(19, 19, 19);
  color: white;
  font-family: "PressStart2P", Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
</style>
