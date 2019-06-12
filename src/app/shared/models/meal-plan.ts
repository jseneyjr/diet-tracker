import {Meal} from './meal';

export class MealPlan {
  name: string;
  meals: Meal[];

  constructor(name: string, meals: Meal[]) {
    this.name = name;
    this.meals = meals;
  }
}
