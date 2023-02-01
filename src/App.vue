<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComp from "./components/HeaderComp.vue";
import { SORTED_DATA } from "./data/items";
SORTED_DATA();
</script>

<template>
  <div>
    <HeaderComp />
    <RouterView />
  </div>
</template>

<style>
:root {
  --bodyBackgroundColor: rgb(19, 19, 19);
  --darkFontColor: rgb(19, 19, 19);

  --input-color: var(--darkFontColor);
  --input-border: #cdd9ed;
  --input-background: #fff;
  --input-placeholder: #cbd1dc;
  --accentColor: rgb(255, 255, 42);

  --input-border-focus: var(--darkFontColor);

  --group-color: var(--darkFontColor);
  --group-border: var(--input-border);
  --group-background: #eef4ff;

  --group-color-focus: var(--darkFontColor);
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: var(--accentColor);
}

@font-face {
  font-family: "PressStart2P";
  src: local("PressStart2P"),
    url(./fonts/PressStart2P-Regular.ttf) format("truetype");
  font-display: swap;
}

body {
  background-color: var(--bodyBackgroundColor);
  color: white;
  font-family: "PressStart2P", Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
</style>
