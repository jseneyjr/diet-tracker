import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Food } from '../../shared/models/food';

@Injectable()
export class FoodService {
  constructor(private http: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('/assets/test/foods.json');
  }
}
