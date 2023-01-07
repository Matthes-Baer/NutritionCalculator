<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

// potential images: https://www.vexels.com/merch/designs/flat-people/
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
:root {
  --bodyBackgroundColor: rgb(19, 19, 19);
  --darkFontColor: rgb(19, 19, 19);

  --input-color: black;
  --input-border: #cdd9ed;
  --input-background: #fff;
  --input-placeholder: #cbd1dc;
  --accentColor: rgb(255, 255, 42);

  --input-border-focus: #252525;

  --group-color: var(--darkFontColor);
  --group-border: var(--input-border);
  --group-background: #eef4ff;

  --group-color-focus: black;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: var(--accentColor);
}

@font-face {
  font-family: "PressStart2P";
  src: local("PressStart2P"),
    url(./fonts/PressStart2P-Regular.ttf) format("truetype");
}

body {
  background-color: var(--bodyBackgroundColor);
  color: white;
  font-family: "PressStart2P", Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
</style>
