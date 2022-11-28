<script setup lang="ts">
import AboutSpecific from "../components/AboutSpecific.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutSpecific
      data="This is a created variable in AboutView which is given as a prop to the AboutSpecific component!"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
