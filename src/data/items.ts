const DATA: {
  id: number;
  name: string;
  icon: string;
  values: { kcal: number; fat: number; sugar: number; proteine: number };
}[] = [
  {
    id: 1,
    name: "Cheese",
    icon: "https://www.cheeselinks.com.au/wp-content/uploads/2017/09/Dollarphotoclub_53674521.jpg",
    values: { kcal: 2, fat: 0.2, sugar: 0.01, proteine: 0.15 },
  },
  {
    id: 2,
    name: "Tomato",
    icon: "https://www.schoolphotoproject.com/_picture-of-vegetable/tomato-photo2-l.jpg",
    values: { kcal: 0.02, fat: 0.001, sugar: 0.001, proteine: 0.001 },
  },
];

export default DATA;
