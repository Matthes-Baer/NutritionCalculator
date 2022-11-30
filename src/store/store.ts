import { reactive } from "vue";
import items from "../data/items";

export const store = reactive({
  count: 0,
  text: "Hey",
  // Can be put in the store or as a variable in the respective component.
  itemsData: items,
  updateText(input: string) {
    this.text += input;
  },
  increment() {
    this.count++;
  },
});
