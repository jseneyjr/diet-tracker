import {Component, OnInit} from '@angular/core';
import { Units } from '../../shared/enums/units';
import {MatDialogRef} from '@angular/material';
import {Food} from '../../shared/models/food';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../shared/error-state-matchers/my-error-state-matcher';

@Component({
  selector: 'app-food-add',
  templateUrl: 'food-add.component.html',
  styleUrls: ['food-add.component.css'],
})
export class FoodAddComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
