<script lang="ts">
import router from "@/router";
import { findSpecificItem } from "@/data/items";
import DetailsItemNutrition from "./DetailsItemNutrition.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

export default {
  data() {
    return {
      specificItem: findSpecificItem(
        +router.currentRoute.value.params["itemID"]
      ),
    };
  },
  // methods: {
  //   getImageUrl: (name: string) => {
  //     return new URL(`../../../assets/images/${name}`, import.meta.url).href;
  //   },
  // },
  components: { DetailsItemNutrition, CustomButton },
};
</script>

<template>
  <div
    class="custom-button-container mx-auto"
    @click="$router.back()"
    data-aos="fade-up"
  >
    <CustomButton name="Back" icon="fa-solid fa-backward" />
  </div>
  <div class="row p-3 main-container mx-auto mt-5" data-aos="fade-up">
    <div class="col-lg-12">
      <h1>Details</h1>
    </div>
    <div class="col-lg-12 position-relative">
      <div class="row">
        <div class="col-lg-2">Name:</div>
        <div class="col-lg-10">
          {{ specificItem?.name }}
          {{ specificItem?.info && `(${specificItem?.info})` }}
        </div>
      </div>
      <div>
        <div class="mt-3">Nutrition Values (per 100g):</div>
        <div class="d-flex flex-column nutrition-values-container">
          <DetailsItemNutrition :nutritionValues="specificItem" type="Kcal" />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="Fat"
            unit="g"
          />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="Carbs"
            unit="g"
          />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="Protein"
            unit="g"
          />
        </div>
      </div>
      <div v-if="specificItem?.image" class="img-container">
        <img :src="specificItem.image" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  min-width: 50px;
  height: auto;
}

.img-container {
  width: 10%;
  position: absolute;
  right: 0;
  bottom: 0;
}

.nutrition-values-container {
  width: 25%;
  min-width: 250px;
}

.main-container {
  box-shadow: 5px 5px 0px 0px var(--accentColor);
  width: 50%;
}

.custom-button {
  &-container {
    border: 1px solid var(--accentColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    transition: all 0.25s;
    width: 125px;
    cursor: pointer;
  }

  &-container:hover {
    background-color: var(--accentColor);
    color: var(--darkFontColor);
  }

  &-container:active {
    transform: translateY(5px);
  }
}

@media only screen and (max-width: 991px) {
  img {
    display: none;
  }

  .main-container {
    box-shadow: none;
    border-top: 1px solid var(--accentColor);
    border-bottom: 1px solid var(--accentColor);
    text-align: center;
    width: auto;
  }

  .nutrition-values-container {
    min-width: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
  }
}
</style>
