import {Component, Inject, OnInit} from '@angular/core';
import { Units } from '../../../../shared/enums/units';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Food} from '../../../../shared/models/food';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../../shared/error-state-matchers/my-error-state-matcher';
import {FoodGroups} from '../../../../shared/enums/food-groups';

@Component({
  selector: 'app-food-list-dialog',
  templateUrl: 'food-list-dialog.component.html',
  styleUrls: ['food-list-dialog.component.css'],
})
export class FoodListDialogComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  group = new FormControl('',  [
    Validators.required
  ]);
  name = new FormControl('',  [
    Validators.required
  ]);
  unit = new FormControl('',  [
    Validators.required
  ]);
  amount = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  calories = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  fat = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  protein = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  carbs = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  fiber = new FormControl('', [
    Validators.required, Validators.pattern('^[0-9]*$')
  ]);
  unitValues = Units;

  constructor(private dialogRef: MatDialogRef<FoodListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {}

  ngOnInit() {
    if (this.data != null) {
      this.group.setValue(this.data.food.group);
      this.name.setValue(this.data.food.name);
      this.amount.setValue(this.data.food.amount);
      this.unit.setValue(this.data.food.unit);
      this.calories.setValue(this.data.food.calories);
      this.fat.setValue(this.data.food.fat);
      this.protein.setValue(this.data.food.protein);
      this.carbs.setValue(this.data.food.carbs);
      this.fiber.setValue(this.data.food.fiber);
    }
  }

  getGroups() {
    const groups = FoodGroups;
    const keys = Object.keys(groups).filter(
      (type) => isNaN(type as any) && type !== 'values'
    );
    return keys;
  }

  getUnits() {
    const units = Units;
    const keys = Object.keys(units).filter(
      (type) => isNaN(type as any) && type !== 'values'
    );
    return keys;
  }

  onSubmit() {
    const food = new Food(this.group.value, this.name.value, +this.amount.value, this.unit.value,
      +this.calories.value, +this.fat.value, +this.protein.value, +this.carbs.value, +this.fiber.value);
    this.dialogRef.close(food);
  }

  onCancelClick() {
    this.dialogRef.close(null);
  }

  hasErrors() {
    return this.group.invalid || this.name.invalid || this.unit.invalid || this.amount.invalid ||
      this.calories.invalid || this.fat.invalid || this.protein.invalid || this.carbs.invalid || this.fiber.invalid;
  }
}
