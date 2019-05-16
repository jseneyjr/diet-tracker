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
  columnDefs = [];
  rowSelection: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.foodlist = data.foodlist;
    this.rowSelection = 'multiple';
    this.columnDefs = this.createColumnDefs();
  }

  private createColumnDefs() {
    return [
      { headerName: 'Name', field: 'name', editable: true, checkboxSelection: true },
      {
        headerName: 'Unit',
        field: 'unit',
        editable: true
        // cellEditor: 'richSelect',
        // cellEditorParams: {
        //   values: Object.keys(Unit)
        // }
      },
      { headerName: 'Amount', field: 'amount', editable: true },
      { headerName: 'Calories', field: 'calories', editable: true },
      { headerName: 'Fat', field: 'fat', editable: true },
      { headerName: 'Protein', field: 'protein', editable: true },
      { headerName: 'Carbs', field: 'carbs', editable: true },
      { headerName: 'Fiber', field: 'fiber', editable: true },
      { headerName: 'Net Carbs', field: 'netCarbs', editable: true }
    ];
  }

  onCellValueChanged(params: any) {
    console.log(params);
  }

  onAddRow() {
    null;
  }
}
