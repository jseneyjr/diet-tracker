import {Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Units } from '../../shared/enums/units';

@Component({
  selector: 'app-food-add',
  templateUrl: 'food-add.component.html',
  styleUrls: ['food-add.component.css'],
})
export class FoodAddComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private data) {}

  ngOnInit() {

  }

  getUnits() {
    const units = Units;
    var keys = Object.keys(units).filter(
      (type) => isNaN(type as any) && type !== 'values'
    );
    return keys;
  }

  onAddClick(): void {
    // Add?
  }

  onCancelClick(): void {
    // Cancel?
  }
}
