import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../shared/models/food.model';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {

  food: Food[];
  columnDefs = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.food = data.food;
    this.food.forEach(food => {
      const columnDefinitions = Object.keys(food);
      columnDefinitions.forEach((column) => {
        this.columnDefs.push({headerName: column, field: column});
      });
      return;
    });
  }
}
