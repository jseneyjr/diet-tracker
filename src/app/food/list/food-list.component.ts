import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../shared/models/food';
import {Unit} from '../../shared/enums/unit.enum';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodlist: Food[];
  columnDefs: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.foodlist = data.foodlist;
    this.columnDefs = ['name', 'unit', 'amount', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb'];
  }
}
