<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="d-flex text-center main-container">
    <div class="half-container">
      <h1><span class="underlined">Nutrition</span> Calculator</h1>
      <p>
        This is my first vue.js application and is fully frontend While this
        project mainly serves the purpose of getting familiar with vue.js
        fundamentals, there is also a small nutrition calculator implemented.
        The corresponding nutrition values were manually searched and
        implemented.
      </p>
    </div>
    <div class="half-container">
      <div class="circle"></div>
      <h1 class="hover-appear">Bild mit Bezug zu Nahrung?</h1>
    </div>
  </div>
</template>

<style>
.underlined {
  text-decoration: underline var(--accentColor);
}

.circle {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 1px solid yellow;
}

.main-container {
  overflow: hidden;
}

.main-container:hover .line {
  transform: rotate(-45deg);
}

.main-container:hover .hover-appear {
  opacity: 1;
}

.half-container {
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.half-container h1 {
  font-size: 100px;
  align-self: center;
  text-align: center;
}

.half-container p {
  font-size: 25px;
}

.line {
  content: "";
  position: absolute;
  top: 0;
  left: 35%;
  width: 100%;
  height: 2px;
  background-color: green;
  transition: all 1s;
  transform: rotate(45deg);
  opacity: 0.25;
}

.hover-appear {
  opacity: 0;
  transition: all 1s;
}

@media only screen and (max-width: 1000px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .half-container {
    height: auto;
  }
}
</style>
