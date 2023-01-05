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
      <div class="square squareLeft">day by day</div>
      <div class="square squareRight">step by step</div>
      <div class="square squareHidden">healthy mind</div>
      <h1 class="hover-appear" style="font-size: 30px">
        embrace an healthy lifestyle
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.underlined {
  text-decoration: underline var(--accentColor);
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
  font-size: 50px;
  align-self: center;
  text-align: center;
  transition: all 0.25s;
}

.half-container p {
  font-size: 15px;
  max-width: 75%;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
}

.hover-appear {
  opacity: 0;
  transition: all 1s;
  margin-top: 17.5%;
}

.square {
  width: 50%;
  height: 150px;
  border: 1px solid yellow;
  position: absolute;
  transition: all 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;

  &Left {
    left: 0;
    top: 0;
  }
  &Right,
  &Hidden {
    right: 5%;
    bottom: 0;
  }

  &Hidden {
    opacity: 0;
    width: 25%;
    right: 10%;
  }
}

.main-container:hover .squareLeft {
  transform: translateY(100%);
  border-top-right-radius: 7px;
  width: 40%;
}

.main-container:hover .squareRight {
  transform: translateY(-300px);
  border-bottom-left-radius: 7px;
}

.main-container:hover .squareHidden {
  opacity: 1;
}

@media only screen and (max-width: 1050px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .half-container {
    height: auto;
  }

  .square {
    display: none;
  }
}

@media only screen and (max-width: 540px) {
  .half-container h1 {
    font-size: 30px;
    align-self: center;
    text-align: center;
  }
}
</style>
