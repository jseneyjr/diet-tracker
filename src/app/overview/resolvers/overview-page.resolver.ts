import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OverviewService} from '../services/overview.service';
import {MealPlan} from '../../shared/models/meal-plan';

@Injectable()
export class OverviewPageResolver implements Resolve<MealPlan[]> {

  constructor(private overviewService: OverviewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MealPlan[]> {
    return this.overviewService.getMealPlan();
  }

}
