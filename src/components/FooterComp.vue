<script lang="ts">
export default {};
</script>
<template>
  <div class="main-container d-flex justify-content-center align-items-end">
    <div class="d-flex align-items-center me-3">
      <i class="fa-brands fa-linkedin icon"></i>
    </div>

    <div class="d-flex align-items-center me-3">
      <i class="fa-solid fa-newspaper icon"></i>
    </div>

    <div class="d-flex align-items-center">
      <i class="fa-brands fa-github icon"></i>
    </div>
  </div>

  <div class="d-flex align-items-center justify-content-center mt-2">
    <i class="fa-solid fa-copyright me-3"></i>
    <div class="icon-text">All rights reserved.</div>
  </div>
</template>

<style scoped lang="scss">
:root {
  --icon-font-size: 50px;
}
.main-container {
  width: 100%;
  height: 200px;
}

.icon {
  font-size: 20px;
  &-text {
    font-size: 8.5px;
  }
}

.grid {
  &-part {
    height: 100%;
  }
}
</style>
