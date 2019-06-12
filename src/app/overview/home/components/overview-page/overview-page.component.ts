import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MealPlan} from '../../../../shared/models/meal-plan';

@Component({
  selector: 'app-overview-page',
  templateUrl: 'overview-page.component.html',
  styleUrls: ['overview-page.component.css'],
})

export class OverviewPageComponent implements OnInit {
  mealplan: MealPlan;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.mealplan = data.mealplan;
    console.log(this.mealplan);
  }
}
