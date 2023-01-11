export interface nutritionData {
  id: number;
  name: string;
  values: { kcal: number; fat: number; carbs: number; protein: number };
  info: string;
  image: string;
}
