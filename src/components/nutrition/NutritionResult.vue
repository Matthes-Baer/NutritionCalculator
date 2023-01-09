<script lang="ts">
import { nutritionStore } from "../../store/store";
import CustomButton from "../ui/CustomButton.vue";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
  components: { CustomButton },
};
</script>

<template>
  <div class="d-flex justify-content-center mt-5" data-aos="fade-up">
    <h2 class="heading2">Current Nutrition values</h2>
    <div class="custom-button-container ms-5">
      <CustomButton
        @clicked="nutritionStore.resetNutritionValues()"
        name="Reset"
        icon="fa-solid fa-backward"
      />
    </div>
  </div>

  <div class="row text-center mt-3" data-aos="fade-up">
    <div class="col-md-3">
      <h4>Kcal</h4>
      <p>
        {{
          nutritionStore.currentNutrtion.kcal.toString().length > 3
            ? +nutritionStore.currentNutrtion.kcal.toFixed(2)
            : nutritionStore.currentNutrtion.kcal
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Fat</h4>
      <p>
        {{
          nutritionStore.currentNutrtion.fat.toString().length > 3
            ? +nutritionStore.currentNutrtion.fat.toFixed(2)
            : nutritionStore.currentNutrtion.fat
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Carbs</h4>
      <p>
        {{
          nutritionStore.currentNutrtion.carbs.toString().length > 3
            ? +nutritionStore.currentNutrtion.carbs.toFixed(2)
            : nutritionStore.currentNutrtion.carbs
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Protein</h4>
      <p>
        {{
          nutritionStore.currentNutrtion.protein.toString().length > 3
            ? +nutritionStore.currentNutrtion.protein.toFixed(2)
            : nutritionStore.currentNutrtion.protein
        }}
      </p>
    </div>
    <div class="col-md-12" data-aos="fade-up">
      <h4>Included food items</h4>
      <p
        v-for="(item, index) in nutritionStore.currentNutrtion.items"
        :key="index"
        data-aos="fade-up"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-button {
  &-container {
    border: 1px solid var(--accentColor);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
    transition: all 0.25s;
    cursor: pointer;
  }

  &-container:hover {
    background-color: var(--accentColor);
    color: var(--darkFontColor);
  }

  &-container:active {
    transform: translateY(5px);
  }
}
</style>
