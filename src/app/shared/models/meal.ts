import {Food} from './food';

export class Meal {
  name: string;
  foods: Food[];

  constructor(name: string, foods: Food[]) {
    this.name = name;
    this.foods = foods;
  }
}
