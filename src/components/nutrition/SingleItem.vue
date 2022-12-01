<script lang="ts">
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
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

      store.currentNutrtion.kcal += kcal;
      store.currentNutrtion.fat += fat;
      store.currentNutrtion.sugar += sugar;
      store.currentNutrtion.proteine += proteine;

      this.amount = 0;

      if (!store.currentNutrtion.items.find((e) => e === name)) {
        store.currentNutrtion.items.push(name);
      }
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<template>
  <div>{{ product.name }}</div>
  <label>Gramm ({{ amount }})<input type="number" v-model="amount" /></label>

  <button
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
</template>
