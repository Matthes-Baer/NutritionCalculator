<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="d-flex text-center main-container" data-aos="fade-up">
    <div class="background-image-container">
      <img
        v-lazy="{
          src: '/images/flat-food.webp',
          loading: 'background image loading',
          error: 'background image loading error',
        }"
        alt="person holding healthy food"
      />
    </div>
    <div class="half-container">
      <h1><span class="underlined">Nutrition</span> Calculator</h1>
      <p>
        Calculate your daily nutrition food values using eight fixed items and
        take advantage of the opportunity to add food items on your own.
      </p>
    </div>
    <div class="half-container">
      <div class="square squareLeft">day by day</div>
      <div class="square squareRight">step by step</div>
      <div class="square squareHidden">healthy mind</div>
      <h1 class="hover-appear" style="font-size: 30px">
        embrace a healthy lifestyle
      </h1>
    </div>
  </div>
  <div style="display: flex; align-items: flex-end">
    <div class="bottomLine"></div>
    <div class="bottomLineText">let's go</div>
  </div>
</template>

<style lang="scss" scoped>
.underlined {
  text-decoration: underline var(--accentColor);
}

.main-container {
  overflow: visible;
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

.bottomLine {
  width: 0;
  height: 20px;
  margin-top: 5%;
  background-color: var(--accentColor);
  animation: bottomLineAnimation 4s ease-in-out 2s forwards;

  &Text {
    opacity: 0;
    height: 20px;
    margin-left: 2.5%;
    animation: bottomLineTextAnimation 1s ease-in-out 6s forwards;
  }
}

@keyframes bottomLineAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 60%;
  }
}

@keyframes bottomLineTextAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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

.background-image-container {
  position: relative;

  & > img {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 300px;
    opacity: 0.2;
    z-index: -1;
    height: auto;
    width: 15vw;
    transition: all 0.25s;
  }
  // Methode, um background-image opacity anzupassen
  // &::before {
  //   content: "";
  //   background-image: url("/images/flat-food.webp");
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   background-position: left bottom;
  //   position: absolute;
  //   top: 0px;
  //   right: 0px;
  //   bottom: 0px;
  //   left: 0px;
  //   opacity: 0.2;
  //   z-index: -1;
  // }
}

@media only screen and (max-width: 1040px) {
  .background-image-container img {
    top: 100px;
  }
}

@media only screen and (max-width: 900px) {
  .background-image-container img {
    left: 25px;
    width: 200px;
  }
}

@media only screen and (max-width: 540px) {
  .half-container h1 {
    font-size: 30px;
    align-self: center;
    text-align: center;
  }

  .background-image-container img {
    left: 0px;
    width: 150px;
  }
}
</style>
