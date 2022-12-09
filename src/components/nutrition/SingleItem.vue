<script lang="ts">
import { nutritionStore } from "../../store/store";

export default {
  data() {
    return {
      nutritionStore,
      amount: 0,
    };
  },
  props: ["product"],
  components: {},
  // Functions have to be implemented as methods - There is also the opportunity to add such methods directly in the corresponding store.
  methods: {
    addToCurrentNutrition: function (
      kcal: number,
      fat: number,
      sugar: number,
      proteine: number,
      name: string
    ) {
      if (!this.amount) {
        alert("Pick a Gramm value");
        return;
      }

      nutritionStore.currentNutrtion.kcal += kcal;
      nutritionStore.currentNutrtion.fat += fat;
      nutritionStore.currentNutrtion.sugar += sugar;
      nutritionStore.currentNutrtion.proteine += proteine;

      this.amount = 0;

      if (!nutritionStore.currentNutrtion.items.find((e) => e === name)) {
        nutritionStore.currentNutrtion.items.push(name);
      }
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<template>
  <div class="col-md-3 card">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <img class="product-image" :src="product.icon" />
        <h3>{{ product.name }}</h3>
      </div>

      <label class="mb-3">gram: <input type="number" v-model="amount" /></label>

      <button
        class="add-button mx-auto mb-3"
        @click="
          addToCurrentNutrition(
            product.values.kcal * amount,
            product.values.fat * amount,
            product.values.sugar * amount,
            product.values.proteine * amount,
            product.name
          )
        "
      >
        {{ product.name }} - Click to Add
      </button>
    </div>
  </div>
</template>

<style>
.product-image {
  max-width: 75px;
  max-height: 75px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px #252525;
  margin: 15px;
}
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin: 15px;
}
</style>
