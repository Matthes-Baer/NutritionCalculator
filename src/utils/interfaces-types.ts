export interface nutritionData {
  id: number;
  name: string;
  values: { kcal: number; fat: number; carbs: number; protein: number };
  info: string;
  image: string;
}

export interface currentNutritionData {
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
  items: [{ itemName: string; customAdd: boolean }];
}
