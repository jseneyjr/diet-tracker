import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../shared/models/food';
import {FoodAddComponent} from '../add/food-add.component';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodlist: Food[];
  columnDefs: string[];

  dialogRef: MatDialogRef<FoodAddComponent>;

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.foodlist = data.foodlist;
    this.columnDefs = ['name', 'unit', 'amount', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb'];
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
  getTotalNetCarb() {
    return this.foodlist.reduce((acc, food) => acc + food.netCarb, 0);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(FoodAddComponent, {
      width: '250px'
    });

    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal}
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
