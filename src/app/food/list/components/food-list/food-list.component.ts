import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable} from '@angular/material';
import {Food} from '../../../../shared/models/food';
import { FoodListDialogComponent } from '../food-list-dialog/food-list-dialog.component';


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
  dialogRef: MatDialogRef<FoodListDialogComponent>;
  totalCalories: number;
  totalFat: number;
  totalProtein: number;
  totalCarbs: number;
  totalFiber: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.calculateTotals();

    this.columnDefs = ['name', 'amount', 'unit', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb', 'edit', 'delete'];
  }

  calculateTotals(){
    this.totalCalories = this.getTotalCalories();
    this.totalFat = this.getTotalFat();
    this.totalProtein = this.getTotalProtein();
    this.totalCarbs = this.getTotalCarbs();
    this.totalFiber = this.getTotalFiber();
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

  openCreateDialog() {
    this.dialogRef = this.dialog.open(FoodListDialogComponent, {
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
    this.calculateTotals();
    this.foodTable.renderRows();
  }

  // Open dialog for updating row
  openUpdateDialog(event: Food) {
    this.dialogRef = this.dialog.open(FoodListDialogComponent, {
      width: '500px',
      data: {
        food: event
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.updateFood(result, this.foodlist.indexOf(event));
      }
    });
  }

  updateFood(food: Food, index: number) {
    this.foodlist[index] = food;
    this.calculateTotals();
    this.foodTable.renderRows();
  }

  deleteFood(event: Food) {
    const index: number = this.foodlist.indexOf(event);
    if (index !== -1) {
      this.foodlist.splice(index, 1);
      this.calculateTotals();
      this.foodTable.renderRows();
    }
  }
}
