import type { nutritionData } from "@/utils/interfaces-types";

//? used YAZIO -> https://www.yazio.com/de
export const DATA: nutritionData[] = [
  {
    id: 1,
    name: "Chicken",
    values: { kcal: 190, fat: 7.4, carbs: 0, protein: 28.9 },
    info: "no skin",
    image: "/images/Chicken.webp",
  },
  {
    id: 2,
    name: "Ground beef",
    values: { kcal: 273, fat: 18.2, carbs: 0, protein: 25.4 },
    info: "",
    image: "/images/Beef.webp",
  },
  {
    id: 3,
    name: "Tofu",
    values: { kcal: 127, fat: 5.6, carbs: 2.8, protein: 15.5 },
    info: "",
    image: "/images/Tofu.webp",
  },
  {
    id: 4,
    name: "Cheese",
    values: { kcal: 127, fat: 5.6, carbs: 2.8, protein: 15.5 },
    info: "from a goat",
    image: "/images/Cheese.webp",
  },
  {
    id: 5,
    name: "Fusilli",
    values: { kcal: 162, fat: 0.6, carbs: 32.6, protein: 5.2 },
    info: "type of pasta",
    image: "/images/Noodles.webp",
  },
  {
    id: 6,
    name: "Rice",
    values: { kcal: 169, fat: 1.5, carbs: 32.0, protein: 3.0 },
    info: "long grain",
    image: "/images/Rice.webp",
  },
  {
    id: 7,
    name: "Potato",
    values: { kcal: 68, fat: 0.1, carbs: 14.8, protein: 2.0 },
    info: "without peel",
    image: "/images/Potato.webp",
  },
  {
    id: 8,
    name: "Salmon",
    values: { kcal: 131, fat: 6.3, carbs: 0, protein: 18 },
    info: "",
    image: "/images/Salmon.webp",
  },
];

export const findSpecificItem = (id: number) => {
  const item = DATA.find((item) => item.id === id);
  return item;
};

export const SORTED_DATA = () => {
  const data = [...DATA].sort((a, b) => {
    const a_letter = a.name.toLowerCase();
    const b_letter = b.name.toLowerCase();

    if (a_letter < b_letter) return -1;
    if (a_letter > b_letter) return 1;
    return 0;
  });
  return data;
};
