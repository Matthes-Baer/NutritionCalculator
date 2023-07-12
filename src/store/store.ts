import { reactive } from "vue";
import { SORTED_DATA } from "../data/items";
import type { currentNutritionData } from "@/utils/interfaces-types";

export const nutritionStore = reactive({
  // Can be put in the store or as a variable in the respective component.
  itemsData: SORTED_DATA(),
  currentNutrition: {
    kcal: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    items: [{ itemName: "", customAdd: false }],
  } as currentNutritionData,
  error: { boolean: false, message: "" },
  resetNutritionValues: function () {
    this.currentNutrition = {
      kcal: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      items: [{ itemName: "", customAdd: false }],
    };
  },
  addToCurrentNutrition: function (
    kcal: number,
    fat: number,
    carbs: number,
    protein: number,
    name: string,
    amount: number,
    customAdd: boolean
  ) {
    nutritionStore.error = { boolean: false, message: "" };
    if (!amount) {
      nutritionStore.error.boolean = true;
      nutritionStore.error.message = "no gram value picked";
      return;
    }

    nutritionStore.currentNutrition.kcal +=
      kcal.toString().length > 3 ? +kcal.toFixed(2) : kcal;
    nutritionStore.currentNutrition.fat +=
      fat.toString().length > 3 ? +fat.toFixed(2) : fat;
    nutritionStore.currentNutrition.carbs +=
      carbs.toString().length > 3 ? +carbs.toFixed(2) : carbs;
    nutritionStore.currentNutrition.protein +=
      protein.toString().length > 3 ? +protein.toFixed(2) : protein;

    if (
      !nutritionStore.currentNutrition.items?.find(
        (e: { itemName: string; customAdd: boolean }) => e.itemName === name
      )
    ) {
      nutritionStore.currentNutrition.items?.push({
        itemName: name,
        customAdd,
      });
    }
  },
});
