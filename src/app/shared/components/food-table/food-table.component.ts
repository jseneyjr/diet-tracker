import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable} from '@angular/material';
import {FoodList} from '../../models/food-list';
import {Food} from '../../models/food';
import { FoodTableDialogComponent } from '../food-table-dialog/food-table-dialog.component';


@Component({
  selector: 'app-food-table',
  templateUrl: 'food-table.component.html',
  styleUrls: ['food-table.component.css'],
})
export class FoodTableComponent implements OnInit {
  @ViewChild('foodTable') foodTable: MatTable<Food>;
  @Input() showTotals: boolean;
  @Input() foodlist: FoodList;
  columnDefs: string[];
  dialogRef: MatDialogRef<FoodTableDialogComponent>;


  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.foodlist.calculateTotals();

    this.columnDefs = ['name', 'amount', 'unit', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb', 'edit', 'delete'];
  }

  openCreateDialog() {
    this.dialogRef = this.dialog.open(FoodTableDialogComponent, {
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
    this.foodlist.addFood(food);
    this.foodTable.renderRows();
  }

  // Open dialog for updating row
  openUpdateDialog(event: Food) {
    this.dialogRef = this.dialog.open(FoodTableDialogComponent, {
      width: '500px',
      data: {
        food: event
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.updateFood(result, this.foodlist.foods.indexOf(event));
      }
    });
  }

  updateFood(food: Food, index: number) {
    this.foodlist.updateFood(food, index);
    this.foodTable.renderRows();
  }

  deleteFood(event: Food) {
    this.foodlist.deleteFood(event);
    this.foodTable.renderRows();
  }
}
