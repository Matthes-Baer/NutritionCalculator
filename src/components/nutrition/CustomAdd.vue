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
      inputAmount: 100,
    };
  },
  methods: {
    addHandler: function (
      kcal: number,
      fat: number,
      carbs: number,
      protein: number,
      name: string,
      amount: number,
      customAdd: boolean
    ) {
      if (!name) {
        nutritionStore.error = { boolean: true, message: "name is missing" };
        return;
      }
      kcal = (kcal / this.inputAmount) * amount;
      fat = (fat / this.inputAmount) * amount;
      carbs = (carbs / this.inputAmount) * amount;
      protein = (protein / this.inputAmount) * amount;

      nutritionStore.addToCurrentNutrition(
        kcal,
        fat,
        carbs,
        protein,
        name,
        amount,
        customAdd
      );
      this.kcal = 0;
      this.fat = 0;
      this.carbs = 0;
      this.protein = 0;
      this.amount = 0;
      this.inputAmount = 100;
      this.name = "";
    },
  },
  mounted() {
    nutritionStore.error = { boolean: false, message: "" };
  },
};
</script>

<template>
  Eine Custom Add Funktion hinzufügen für ein Lebensmittel der eigenen Wahl.
  Styling anpassen. AOS scroll?
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center form-group me-4" style="flex: 1">
      <span>name</span>
      <input class="form-field" type="text" v-model="name" />
    </div>

    <div class="d-flex align-items-center form-group me-4" style="flex: 1">
      Welche Nährwerte pro input gram default = 100
      <span>input gram</span>
      <input class="form-field" type="number" v-model="inputAmount" />
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
      <span>amount</span>
      <input class="form-field" type="number" v-model="amount" min="0" />
    </div>

    <div
      @click="addHandler(kcal, fat, carbs, protein, name, amount, customAdd)"
    >
      Add
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/customInput.scss";
</style>
