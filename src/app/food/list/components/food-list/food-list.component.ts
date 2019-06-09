import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable} from '@angular/material';
import {Food} from '../../../../shared/models/food';
import { FoodListAddComponent } from '../food-list-add/food-list-add.component';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  @ViewChild('foodTable') foodTable: MatTable<Food>;
  @Input() showTotals: boolean;
  @Input() foodlist: Food[];
  columnDefs: string[];
  dialogRef: MatDialogRef<FoodListAddComponent>;
  totalCalories: number;
  totalFat: number;
  totalProtein: number;
  totalCarbs: number;
  totalFiber: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.totalCalories = this.getTotalCalories();
    this.totalFat = this.getTotalFat();
    this.totalProtein = this.getTotalProtein();
    this.totalCarbs = this.getTotalCarbs();
    this.totalFiber = this.getTotalFiber();

    this.columnDefs = ['name', 'amount', 'unit', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb'];
  }

  getTotalCalories() {
    return this.foodlist.reduce((acc, food) => acc + food.calories, 0);
  }
  getTotalFat() {
    return this.foodlist.reduce((acc, food) => acc + food.fat, 0);
  }
  getTotalProtein() {
    return this.foodlist.reduce((acc, food) => acc + food.protein, 0);
  }
  getTotalCarbs() {
    return this.foodlist.reduce((acc, food) => acc + food.carbs, 0);
  }
  getTotalFiber() {
    return this.foodlist.reduce((acc, food) => acc + food.fiber, 0);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(FoodListAddComponent, {
      width: '500px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.saveFood(result);
      }
    });
  }

  saveFood(food: Food) {
    // Save to DB, if successful push to table
    this.foodlist.push(food);
    this.foodTable.renderRows();
  }
}
