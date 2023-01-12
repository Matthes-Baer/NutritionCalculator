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
  <div class="row p-3 main-container mx-auto mt-5">
    <div class="col-lg-12">
      <h1>Details</h1>
    </div>
    <div class="col-lg-12 position-relative">
      <div class="row">
        <div class="col-lg-3">Name:</div>
        <div class="col-lg-9">
          {{ specificItem?.name }}
          {{ specificItem?.info && `(${specificItem?.info})` }}
        </div>
      </div>
      <div>
        <div class="mt-3">Nutrition Values (per 100g):</div>
        <div
          class="d-flex flex-column align-items-between nutrition-values-container"
        >
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
      <div v-if="specificItem?.image" class="img-container">
        <img :src="getImageUrl(specificItem.image)" />
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

@media only screen and (max-width: 991px) {
  img {
    display: none;
  }

  .main-container {
    box-shadow: none;
    border-top: 1px solid var(--accentColor);
    border-bottom: 1px solid var(--accentColor);
  }
}
</style>
