import {Component, OnInit} from '@angular/core';
import { Units } from '../../shared/enums/units';
import {MatDialogRef} from '@angular/material';
import {Food} from '../../shared/models/food';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-food-add',
  templateUrl: 'food-add.component.html',
  styleUrls: ['food-add.component.css'],
})
export class FoodAddComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  unit = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);
  calories = new FormControl('', [Validators.required]);
  fat = new FormControl('', [Validators.required]);
  protein = new FormControl('', [Validators.required]);
  carbs = new FormControl('', [Validators.required]);
  fiber = new FormControl('', [Validators.required]);
  unitValues = Units;

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

  onSubmit() {
    const food = new Food(this.name.value, +this.amount.value, this.unit.value, +this.calories.value,
      +this.fat.value, +this.protein.value, +this.carbs.value, +this.fiber.value);
    this.dialogRef.close(food);
  }

  onCancelClick() {
    this.dialogRef.close(null);
  }

  hasErrors() {
    return this.name.invalid || this.unit.invalid || this.amount.invalid || this.calories.invalid ||
      this.fat.invalid || this.protein.invalid || this.carbs.invalid || this.fiber.invalid;
  }
}
