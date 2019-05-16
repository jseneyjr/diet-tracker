import {Unit} from '../enums/unit.enum';

export class Food{
  name: string;
  unit: string;
  amount: number;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  fiber: number;
  netCarb: number = (this.carbs - this.fiber);
}
