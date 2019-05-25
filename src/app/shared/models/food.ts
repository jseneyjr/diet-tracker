import {Units} from '../enums/units';

export class Food {
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

  constructor(food: Food) {
    this.name = food.name;
    this.amount = food.amount;
    this.unit = food.unit;
    this.calories = food.calories;
    this.fat = food.fat;
    this.protein = food.protein;
    this.carbs = food.carbs;
    this.fiber = food.fiber;
  }
}
