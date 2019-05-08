export class FoodNutrition {
  calories: number;
  fat: number;
  protein: number;
  carbohydrates: number;
  fiber: number;
  netCarb: number = (this.carbohydrates - this.fiber);
}
