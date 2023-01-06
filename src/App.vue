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
:root {
  --input-color: #99a3ba;
  --input-border: #cdd9ed;
  --input-background: #fff;
  --input-placeholder: #cbd1dc;

  --input-border-focus: #275efe;

  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #eef4ff;

  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #678efe;

  --accentColor: rgb(255, 255, 42);
}

@font-face {
  font-family: "PressStart2P";
  src: local("PressStart2P"),
    url(./fonts/PressStart2P-Regular.ttf) format("truetype");
}

body {
  background-color: rgb(19, 19, 19);
  color: white;
  font-family: "PressStart2P", Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
</style>
