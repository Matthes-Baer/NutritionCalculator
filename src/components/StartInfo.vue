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
      <h1 class="info-element">Nutrition Calculator</h1>
    </div>
    <div class="half-container">
      <p class="info-element">
        This is my first vue.js application and is fully frontend
      </p>
    </div>
  </div>
</template>

<style>
.main-container {
  background-image: url("https://www.worldforestrycenter.org/wp-content/uploads/2017/03/Angeles-National-Forest.jpg");
  background-position: center;
}
.half-container {
  width: 50%;
  height: 500px;
}
.info-element {
  margin-top: 10%;
  background-color: rgba(25, 25, 25, 0.2);
  height: 200px;
}

@media only screen and (max-width: 1000px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .info-element:last-of-type {
    margin-top: 0%;
  }

  .half-container {
    height: auto;
  }
}
</style>
