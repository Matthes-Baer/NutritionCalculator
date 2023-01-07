<script lang="ts">
export default {};
</script>
<template>
  <div class="main-container row">
    <div class="col-md-10"></div>
    <div class="col-xl-2 d-flex flex-column justify-content-evenly grid-part">
      <div class="d-flex align-items-center">
        <i class="fa-brands fa-linkedin icon"></i>
        <div class="icon-text">linkedIn</div>
      </div>

      <div class="d-flex align-items-center">
        <i class="fa-solid fa-newspaper icon"></i>
        <div class="icon-text">freeCodeCamp</div>
      </div>

      <div class="d-flex align-items-center">
        <i class="fa-brands fa-github icon"></i>
        <div class="icon-text">GitHub</div>
      </div>

      <div class="d-flex align-items-center">
        <i class="fa-solid fa-copyright me-3"></i>
        <div class="icon-text">All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:root {
  --icon-font-size: 50px;
}
.main-container {
  width: 100%;
  height: 200px;

  border: 1px solid red;
}

.icon {
  font-size: 50px;
  margin-right: 5%;
  &-text {
    font-size: 10px;
  }
}

.grid {
  &-part {
    height: 100%;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
