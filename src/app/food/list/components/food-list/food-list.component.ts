import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../../../shared/models/food';
import { FoodListAddComponent } from '../food-list-add/food-list-add.component';
import {CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  @ViewChild('foodTable') foodTable: MatTable<Food>;
  foodlist: Food[];
  columnDefs: string[];
  dialogRef: MatDialogRef<FoodListAddComponent>;
  @Input() showTotals: boolean;

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    const list: Food[] = data.foodlist;
    this.foodlist = list.map(food =>
      new Food(food.name, food.amount, food.unit, food.calories, food.fat, food.protein, food.carbs, food.fiber));
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

  dropTable(event: CdkDragDrop<Food[]>) {
    const prevIndex = this.foodlist.findIndex((d) => d === event.item.data);
    moveItemInArray(this.foodlist, prevIndex, event.currentIndex);
    this.foodTable.renderRows();
  }
}
