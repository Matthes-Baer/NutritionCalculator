import { reactive } from "vue";

export const store = reactive({
  count: 0,
  text: "Hey",
  // itemsData: await fetchData(),
  updateText(input: string) {
    this.text += input;
  },
  increment() {
    this.count++;
  },
});
