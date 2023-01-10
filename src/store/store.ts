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
