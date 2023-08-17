<script lang="ts">
import { nutritionStore } from "../../store/store";
import CustomButtonVue from "../ui/CustomButton.vue";
import CustomAdd from "./CustomAdd.vue";
import SingleItem from "./SingleItem.vue";

export default {
  data() {
    return {
      nutritionStore,
      show: false,
    };
  },
  props: [],
  components: {
    SingleItem,
    CustomAdd,
    CustomButtonVue,
  },
  methods: {
    showHandler: function () {
      this.show = !this.show;
    },
  },
  mounted() {},
};
</script>

<template>
  <div
    class="row justify-content-evenly text-center mt-5 main-container"
    data-aos="fade-up"
  >
    <!-- To loop through data with a component the loop has to be integrated in the component while the items within the loop have to be integrated as props in the respective component - v-bind: is identical to : -->
    <SingleItem
      v-for="item in nutritionStore.itemsData"
      :key="item.id"
      v-bind:product="item"
      data-aos="fade-up"
    />
  </div>
  <div data-aos="fade-up">
    <div @click="showHandler" class="custom-button-container mx-auto mt-5">
      <CustomButtonVue name="Toggle Add Menu" icon="fa-solid fa-plus" />
    </div>
  </div>

  <CustomAdd v-if="show" />
</template>

<style scoped lang="scss">
.main-container {
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url("/images/man-running.webp");
    background-position: right bottom;
    background-size: 25%;
    background-repeat: no-repeat;
    opacity: 0.25;
    z-index: -1;
  }
}
.custom-button {
  &-container {
    border: 1px solid var(--accentColor);
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 275px;
    padding: 10px;
    transition: all 0.25s;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-container:hover {
    background-color: var(--accentColor);
    color: var(--darkFontColor);
  }

  &-container:active {
    transform: translateY(5px);
  }
}
</style>
