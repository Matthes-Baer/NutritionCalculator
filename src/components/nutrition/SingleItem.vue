<script lang="ts">
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
      amount: { kcal: 0, fat: 0, sugar: 0, proteine: 0 },
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
      if (
        !(
          this.amount.kcal |
          this.amount.fat |
          this.amount.sugar |
          this.amount.proteine
        )
      ) {
        alert("Pick a value for kcal, fat, sugar and/or proteine");
        return;
      }

      store.currentNutrtion.kcal += kcal;
      store.currentNutrtion.fat += fat;
      store.currentNutrtion.sugar += sugar;
      store.currentNutrtion.proteine += proteine;

      this.amount.kcal = 0;
      this.amount.fat = 0;
      this.amount.sugar = 0;
      this.amount.proteine = 0;

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
  <label
    >Kcal ({{ amount.kcal }})<input type="number" v-model="amount.kcal"
  /></label>
  <label
    >Fat ({{ amount.fat }})<input type="number" v-model="amount.fat"
  /></label>
  <label
    >Sugar ({{ amount.sugar }})<input type="number" v-model="amount.sugar"
  /></label>
  <label
    >Kcal ({{ amount.proteine }})<input type="number" v-model="amount.proteine"
  /></label>

  <button
    @click="
      addToCurrentNutrition(
        product.values.kcal * amount.kcal,
        product.values.fat * amount.fat,
        product.values.sugar * amount.sugar,
        product.values.proteine * amount.proteine,
        product.name
      )
    "
  >
    {{ product.name }} - Click to Add
  </button>
</template>
