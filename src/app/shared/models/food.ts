export class Food {
  group: string;
  name: string;
  amount: number;
  unit: string;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  fiber: number;

  public get netCarb(): number {
    return this.carbs - this.fiber;
  }

  constructor(group: string, name: string, amount, unit, calories, fat, protein, carbs, fiber) {

    this.group = group;
    this.name = name;
    this.amount = amount;
    this.unit = unit;
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
    this.fiber = fiber;
  }
}
