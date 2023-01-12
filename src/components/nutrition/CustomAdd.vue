<script lang="ts">
import { nutritionStore } from "@/store/store";

export default {
  data() {
    return {
      nutritionStore,

      kcal: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      name: "",
      amount: 0,
      customAdd: true,
    };
  },
  methods: {
    addHandler: (
      kcal: number,
      fat: number,
      carbs: number,
      protein: number,
      name: string,
      amount: number,
      customAdd: boolean
    ) => {
      kcal = (kcal / 100) * amount;
      fat = (fat / 100) * amount;
      carbs = (carbs / 100) * amount;
      protein = (protein / 100) * amount;

      nutritionStore.addToCurrentNutrition(
        kcal,
        fat,
        carbs,
        protein,
        name,
        amount,
        customAdd
      );
    },
  },
};
</script>

<template>
  Eine Custom Add Funktion hinzufügen für ein Lebensmittel der eigenen Wahl
  Angaben für Nahrungsmittel pro 100 g
  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>name</span>
    <input class="form-field" type="text" v-model="name" />
  </div>

  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>kcal</span>
    <input class="form-field" type="number" v-model="kcal" min="0" />
  </div>

  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>fat</span>
    <input class="form-field" type="number" v-model="fat" min="0" />
  </div>

  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>carbs</span>
    <input class="form-field" type="number" v-model="carbs" min="0" />
  </div>

  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>protein</span>
    <input class="form-field" type="number" v-model="protein" min="0" />
  </div>

  <div class="d-flex align-items-center form-group me-4" style="flex: 1">
    <span>gram</span>
    <input class="form-field" type="number" v-model="amount" min="0" />
  </div>

  <div @click="addHandler(kcal, fat, carbs, protein, name, amount, customAdd)">
    Add
  </div>
</template>

<style scoped lang="scss">
@import "../../style/customInput.scss";
</style>
