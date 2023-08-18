<script setup lang="ts">
import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <div class="background-image-container" data-aos="fade-up">
    <img
      class="background-image-element"
      src="/images/woman-running-3.webp"
      alt="running person"
    />
    <div class="main-container mx-auto">
      <h1>About This Project</h1>
      <div>
        This front-end project, built with Vue.js, primarily emphasizes the
        utilization of fundamental features within this framework, such as a
        global store and router functionalities.
        <br />
        <br />
        In addition to basic SCSS for styling, TypeScript was employed for
        development purposes. Furthermore, the project has been optimized to
        ensure responsive design across various devices.
      </div>
    </div>
  </div>

  <div class="footer-container">
    <FooterComp />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 75%;
  border-bottom: 1px solid var(--accentColor);
  padding: 15px;
}

.footer-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.background-image {
  &-container {
    position: relative;
    min-height: 250px;
  }
  &-element {
    position: absolute;
    top: 0;
    right: 0;
    height: auto;
    width: 350px;
    opacity: 0.4 !important;
    z-index: -1;
  }
}
</style>
