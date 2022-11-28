import { reactive } from "vue";

export const store = reactive({
  count: 0,
  enterText: "Hey",
  clickText: "Click",
  increment() {
    this.count++;
  },
});
