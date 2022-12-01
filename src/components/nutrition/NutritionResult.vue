<script lang="ts">
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="row text-center">
    <h2 class="col-md-12">Current Nutrition values</h2>
    <div class="col-md-3">
      <h4>Kcal</h4>
      <p>{{ store.currentNutrtion.kcal }}</p>
    </div>
    <div class="col-md-3">
      <h4>Fat</h4>
      <p>{{ store.currentNutrtion.fat }}</p>
    </div>
    <div class="col-md-3">
      <h4>Sugar</h4>
      <p>{{ store.currentNutrtion.sugar }}</p>
    </div>
    <div class="col-md-3">
      <h4>Proteine</h4>
      <p>{{ store.currentNutrtion.proteine }}</p>
    </div>
    <div class="col-md-12">
      <h4>Included food items</h4>
      <p v-for="(item, index) in store.currentNutrtion.items" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>
