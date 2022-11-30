import { reactive } from "vue";
import items from "../data/items";

export const store = reactive({
  count: 0,
  text: "Hey",
  // Can be put in the store or as a variable in the respective component.
  itemsData: items,
  currentNutrtion: { kcal: 0, sugar: 0, fat: 0, proteine: 0, items: [""] },
  updateText(input: string) {
    this.text += input;
  },
  increment: function () {
    this.count++;
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
