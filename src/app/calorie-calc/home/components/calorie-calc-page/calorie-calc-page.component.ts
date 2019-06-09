import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calorie-calc-page',
  templateUrl: 'calorie-calc-page.component.html',
  styleUrls: ['calorie-calc-page.component.css'],
})

export class CalorieCalcPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
  }
}
