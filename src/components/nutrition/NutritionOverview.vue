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
  <!-- <div v-for="item in items" :key="item.id">{{ item.name }}</div> -->
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
  <div
    @click="showHandler"
    class="custom-button-container mx-auto mt-5"
    data-aos="fade-up"
  >
    <CustomButtonVue name="Toggle add menu" icon="fa-solid fa-plus" />
  </div>
  <CustomAdd v-if="show" />
</template>

<style scoped lang="scss">
.main-container {
  background-image: url("../../assets/images/woman-running.png");
  background-position: right top;
  background-size: 20%;
  background-repeat: no-repeat;
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
