<script setup lang="ts">
import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <div class="background-image-container" data-aos="fade-up">
    <div class="main-container mx-auto">
      <h1>About this project</h1>
      <div>
        This is a front-end project made with Vue.js that mainly focuses on
        being able to work with the fundamental features of this framework,
        including a global store, router features and more.
        <br />
        <br />
        Besides basic SCSS for styling purposes, I used TypeScript to work on
        this project. Besides that, the project is also optimized in terms of
        responsive design for the most part.
        <br />
        <br />
        This project was finalized in January 2023.
      </div>
    </div>
  </div>

  <FooterComp />
</template>

<style scoped lang="scss">
.main-container {
  width: 75%;
  border-bottom: 1px solid var(--accentColor);
  padding: 15px;
}

.background-image-container {
  position: relative;
  min-height: 900px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url("../assets/images/woman-running-3.png");
    background-position: right bottom;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.25;
    z-index: -1;
  }
}
</style>
