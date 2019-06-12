import {FoodList} from './food-list';

export class Meal {
  name: string;
  foodlist: FoodList;

  constructor(name: string, foodlist: FoodList) {
    this.name = name;
    this.foodlist = foodlist;
  }
}
