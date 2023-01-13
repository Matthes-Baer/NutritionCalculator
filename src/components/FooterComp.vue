<script lang="ts">
export default {};
</script>
<template>
  <div class="main-container d-flex justify-content-center align-items-end">
    <div class="d-flex align-items-center me-3">
      <a
        href="https://www.linkedin.com/in/matthes-b%C3%A4r-68199a256/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin icon"></i>
      </a>
    </div>

    <div class="d-flex align-items-center me-3">
      <a
        href="https://www.freecodecamp.org/news/author/matthes/"
        target="_blank"
      >
        <i class="fa-solid fa-newspaper icon"></i>
      </a>
    </div>

    <div class="d-flex align-items-center">
      <a href="https://github.com/Matthes-Baer" target="_blank">
        <i class="fa-brands fa-github icon"></i
      ></a>
    </div>
  </div>

  <div
    class="d-flex align-items-center justify-content-center mt-2 rights-reserved"
  >
    <i class="fa-solid fa-copyright me-3"></i>
    <div class="icon-text">All rights reserved.</div>
  </div>
</template>

<style scoped lang="scss">
:root {
  --icon-font-size: 50px;
}

a:visited {
  text-decoration: none;
}

a:hover {
  opacity: 0.5;
}

a {
  cursor: pointer;
  color: white;
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

@media (max-width: 219px) {
  .rights-reserved {
    flex-direction: column;
  }
}
</style>
