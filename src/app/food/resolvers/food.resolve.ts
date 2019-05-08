import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Food} from '../../shared/models/food.model';
import {Observable} from 'rxjs';
import {FoodService} from '../../services/food.service';

@Injectable()
export class FoodResolve implements Resolve<Food[]> {

  constructor(private foodService: FoodService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Food[]> {
    return this.foodService.getFoods();
  }

}
