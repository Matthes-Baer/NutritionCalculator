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
    values: { kcal: 200, fat: 20, sugar: 1, proteine: 15 },
  },
  {
    id: 2,
    name: "Tomato",
    icon: "https://www.schoolphotoproject.com/_picture-of-vegetable/tomato-photo2-l.jpg",
    values: { kcal: 20, fat: 1, sugar: 1, proteine: 1 },
  },
];

export default DATA;
