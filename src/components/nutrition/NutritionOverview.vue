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
  <img
    class="background-image"
    src="/images/man-running.webp"
    alt="running person"
    data-aos="fade-up"
  />
  <div class="row justify-content-evenly text-center mt-5" data-aos="fade-up">
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
.background-image {
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  width: 275px;
  opacity: 0.4 !important;
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
