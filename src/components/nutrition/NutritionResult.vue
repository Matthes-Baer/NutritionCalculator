<script lang="ts">
import { nutritionStore } from "@/store/store";
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
    <div
      class="custom-button-container ms-5"
      @click="nutritionStore.resetNutritionValues()"
    >
      <CustomButton name="Reset" icon="fa-solid fa-backward" />
    </div>
  </div>

  <div class="row text-center mt-3" data-aos="fade-up">
    <div class="col-md-3">
      <h4>Kcal</h4>
      <p>
        {{
          nutritionStore.currentNutrition.kcal.toString().length > 3
            ? +nutritionStore.currentNutrition.kcal.toFixed(2)
            : nutritionStore.currentNutrition.kcal
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Fat</h4>
      <p>
        {{
          nutritionStore.currentNutrition.fat.toString().length > 3
            ? +nutritionStore.currentNutrition.fat.toFixed(2)
            : nutritionStore.currentNutrition.fat
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Carbs</h4>
      <p>
        {{
          nutritionStore.currentNutrition.carbs.toString().length > 3
            ? +nutritionStore.currentNutrition.carbs.toFixed(2)
            : nutritionStore.currentNutrition.carbs
        }}
      </p>
    </div>
    <div class="col-md-3">
      <h4>Protein</h4>
      <p>
        {{
          nutritionStore.currentNutrition.protein.toString().length > 3
            ? +nutritionStore.currentNutrition.protein.toFixed(2)
            : nutritionStore.currentNutrition.protein
        }}
      </p>
    </div>
    <div class="col-md-12" data-aos="fade-up">
      <h4>Included food items</h4>
      <p
        v-for="(item, index) in nutritionStore.currentNutrition.items"
        :key="index"
        data-aos="fade-up"
      >
        {{ item.itemName }}
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
