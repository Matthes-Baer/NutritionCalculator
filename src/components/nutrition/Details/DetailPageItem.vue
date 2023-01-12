<script lang="ts">
import router from "@/router";
import { findSpecificItem } from "@/data/items";
import DetailsItemNutrition from "./DetailsItemNutrition.vue";

export default {
  data() {
    return {
      specificItem: findSpecificItem(
        +router.currentRoute.value.params["itemID"]
      ),
    };
  },
  methods: {
    getImageUrl: (name: string) => {
      return new URL(`../../../assets/images/${name}`, import.meta.url).href;
    },
  },
  components: { DetailsItemNutrition },
};
</script>

<template>
  <div class="row p-3">
    <div class="col-lg-12">
      <h1>Details Page</h1>
    </div>
    <div class="col-lg-12">
      <div class="d-flex align-items-center">
        <div>Name:</div>
        <div>
          {{ specificItem?.name }}
          {{ specificItem?.info && `(${specificItem?.info})` }}
        </div>
      </div>
      <div>
        <div>Nutrition Values (per 100g)</div>
        <div class="d-flex flex-column nutrition-values-container">
          <DetailsItemNutrition :nutritionValues="specificItem" type="kcal" />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="fat"
            unit="g"
          />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="carbs"
            unit="g"
          />
          <DetailsItemNutrition
            :nutritionValues="specificItem"
            type="protein"
            unit="g"
          />
        </div>
      </div>
    </div>
    <div v-if="specificItem?.image" class="img-container">
      <img :src="getImageUrl(specificItem.image)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: auto;
}

.img-container {
  width: 10%;
}

.nutrition-values-container {
  width: 25%;
  min-width: 250px;
}
</style>
