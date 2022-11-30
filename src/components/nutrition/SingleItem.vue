<script lang="ts">
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
    };
  },
  props: ["product"],
  components: {},
  // Functions have to be implemented as methods - In this case I used a store method instead of this component method.
  methods: {
    addToCurrentNutrition: function (
      kcal: number,
      fat: number,
      sugar: number,
      proteine: number,
      name: string
    ) {
      store.currentNutrtion.kcal += kcal;
      store.currentNutrtion.fat += fat;
      store.currentNutrtion.sugar += sugar;
      store.currentNutrtion.proteine += proteine;
      store.currentNutrtion.items.push(name);
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<template>
  <div>{{ product.name }}</div>
  <button
    @click="
      store.addToCurrentNutrition(
        product.values.kcal,
        product.values.fat,
        product.values.sugar,
        product.values.proteine,
        product.name
      )
    "
  >
    Cheese - Click to Add test
  </button>
</template>
