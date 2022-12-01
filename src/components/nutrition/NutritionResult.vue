<script lang="ts">
import { nutritionStore } from "../../store/store";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
};
</script>

<template>
  <div class="row text-center">
    <h2 class="col-md-12">Current Nutrition values</h2>
    <div class="col-md-3">
      <h4>Kcal</h4>
      <p>{{ nutritionStore.currentNutrtion.kcal }}</p>
    </div>
    <div class="col-md-3">
      <h4>Fat</h4>
      <p>{{ nutritionStore.currentNutrtion.fat }}</p>
    </div>
    <div class="col-md-3">
      <h4>Sugar</h4>
      <p>{{ nutritionStore.currentNutrtion.sugar }}</p>
    </div>
    <div class="col-md-3">
      <h4>Proteine</h4>
      <p>{{ nutritionStore.currentNutrtion.proteine }}</p>
    </div>
    <div class="col-md-12">
      <h4>Included food items</h4>
      <p
        v-for="(item, index) in nutritionStore.currentNutrtion.items"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>
