import {Food} from './food';

export class FoodList {
  foods: Food[];
  totalCalories: number;
  totalFat: number;
  totalProtein: number;
  totalCarbs: number;
  totalFiber: number;
  totalNetCarbs: number;

  constructor(foods: Food[]) {
    this.foods = foods;
    this.calculateTotals();
  }

  calculateTotals(){
    this.calculateTotalCalories();
    this.calculateTotalFat();
    this.calculateTotalFat();
    this.calculateTotalProtein();
    this.calculateTotalCarbs();
    this.calculateTotalFiber();
    this.calculateTotalNetCarbs();
  }

  private calculateTotalCalories() {
    this.totalCalories = this.foods.reduce((acc, food) => acc + food.calories, 0);
  }
  private calculateTotalFat() {
    this.totalFat = this.foods.reduce((acc, food) => acc + food.fat, 0);
  }
  private calculateTotalProtein() {
    this.totalProtein = this.foods.reduce((acc, food) => acc + food.protein, 0);
  }
  private calculateTotalCarbs() {
    this.totalCarbs = this.foods.reduce((acc, food) => acc + food.carbs, 0);
  }
  private calculateTotalFiber() {
    this.totalFiber = this.foods.reduce((acc, food) => acc + food.fiber, 0);
  }
  private calculateTotalNetCarbs() {
    this.totalNetCarbs = this.totalCarbs - this.totalFiber;
  }

  addFood(food: Food) {
    // Save to DB, if successful push to table
    this.foods.push(food);
    this.calculateTotals();
  }

  updateFood(food: Food, index: number) {
    this.foods[index] = food;
    this.calculateTotals();
  }

  deleteFood(event: Food) {
    const index: number = this.foods.indexOf(event);
    if (index !== -1) {
      this.foods.splice(index, 1);
      this.calculateTotals();
    }
  }
}
