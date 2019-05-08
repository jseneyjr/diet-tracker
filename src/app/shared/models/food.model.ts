import { FoodQuantity } from "./food-quantity.model";
import { FoodNutrition } from "./food-nutrition.model";

export class Food implements FoodColumnDefinition {
  name: string;
  Unit: string;
  Amount: string;
  Calories: string;
  Fat: string;
  Protein: string;
  Carbs: string;
  Fiber: string;
  // quantity: FoodQuantity;
  // nutrition: FoodNutrition;
}

export interface FoodColumnDefinition {
  name: string;
  Unit: string;
  Amount: string;
  Calories: string;
  Fat: string;
  Protein: string;
  Carbs: string;
  Fiber: string;
}
