import {Component, OnInit} from '@angular/core';
import { Units } from '../../shared/enums/units';
import {MatDialogRef} from '@angular/material';
import {Food} from '../../shared/models/food';

@Component({
  selector: 'app-food-add',
  templateUrl: 'food-add.component.html',
  styleUrls: ['food-add.component.css'],
})
export class FoodAddComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<FoodAddComponent>) {}

  ngOnInit() {

  }

  getUnits() {
    const units = Units;
    const keys = Object.keys(units).filter(
      (type) => isNaN(type as any) && type !== 'values'
    );
    return keys;
  }

  onAddClick(name, unit, amount, calories, fat, protein, carbs, fiber) {
    const food = new Food(name, amount, unit, calories, fat, protein, carbs, fiber);
    this.dialogRef.close(food);
  }

  onCancelClick() {
    this.dialogRef.close(null);
  }
}
