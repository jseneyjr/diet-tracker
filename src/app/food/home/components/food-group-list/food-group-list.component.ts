import {Component, Input, OnInit} from '@angular/core';
import {FoodList} from '../../../../shared/models/food-list';

@Component({
  selector: 'app-food-group-list',
  templateUrl: 'food-group-list.component.html',
  styleUrls: ['food-group-list.component.css'],
})

export class FoodGroupListComponent implements OnInit {
  @Input() foodlist: FoodList;
  foodGroups = {};

  constructor() {}

  ngOnInit() {
    this.sortByGroups();
  }

  sortByGroups() {
    this.foodGroups = {};
    for (let i = 0; i < this.foodlist.foods.length; i++) {
      let group = this.foodlist.foods[i].group;
      if (!this.foodGroups[group]) {
        this.foodGroups[group] = new FoodList([]);
      }
      this.foodGroups[group].foods.push(this.foodlist.foods[i]);
    }
  }
}
