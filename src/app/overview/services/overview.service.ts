import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {MealPlan} from '../../shared/models/meal-plan';

@Injectable()
export class OverviewService {
  constructor(private http: HttpClient) { }

  getMealPlan(): Observable<MealPlan[]> {
    return this.http.get<MealPlan[]>('/assets/test/mealplan.json');
  }
}
