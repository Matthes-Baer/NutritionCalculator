import { reactive } from "vue";
import { SORTED_DATA } from "../data/items";

export const nutritionStore = reactive({
  // Can be put in the store or as a variable in the respective component.
  itemsData: SORTED_DATA(),
  currentNutrtion: { kcal: 0, carbs: 0, fat: 0, protein: 0, items: [""] },
  error: { boolean: false, message: "" },
  resetNutritionValues: function () {
    this.currentNutrtion = {
      kcal: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      items: [""],
    };
  },
  addToCurrentNutrition: function (
    kcal: number,
    fat: number,
    carbs: number,
    protein: number,
    name: string,
    amount: number
  ) {
    nutritionStore.error = { boolean: false, message: "" };
    if (!amount) {
      nutritionStore.error.boolean = true;
      nutritionStore.error.message = "No gram value picked";
      return;
    }

    nutritionStore.currentNutrtion.kcal +=
      kcal.toString().length > 3 ? +kcal.toFixed(2) : kcal;
    nutritionStore.currentNutrtion.fat +=
      fat.toString().length > 3 ? +fat.toFixed(2) : fat;
    nutritionStore.currentNutrtion.carbs +=
      carbs.toString().length > 3 ? +carbs.toFixed(2) : carbs;
    nutritionStore.currentNutrtion.protein +=
      protein.toString().length > 3 ? +protein.toFixed(2) : protein;

    if (!nutritionStore.currentNutrtion.items.find((e) => e === name)) {
      nutritionStore.currentNutrtion.items.push(name);
    }
  },
  //! Currently I'm using a method directly in the respecitve component
  // addToCurrentNutrition: function (
  //   kcal: number,
  //   fat: number,
  //   sugar: number,
  //   proteine: number,
  //   name: string
  // ) {
  //   if (kcal | fat | sugar | proteine) {
  //     store.currentNutrtion.kcal += kcal;
  //     store.currentNutrtion.fat += fat;
  //     store.currentNutrtion.sugar += sugar;
  //     store.currentNutrtion.proteine += proteine;
  //     store.currentNutrtion.items.push(name);
  //   } else {
  //     alert("Pick a value for kcal, fat, sugar and/or proteine");
  //   }
  // },
});
