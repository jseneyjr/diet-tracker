import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-page',
  templateUrl: 'overview-page.component.html',
  styleUrls: ['overview-page.component.css'],
})

export class OverviewPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    console.log(data);
  }
}
