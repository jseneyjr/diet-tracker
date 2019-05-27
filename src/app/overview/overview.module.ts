import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewPageComponent} from './home/components/overview-page/overview-page.component';
import {OverviewRoutingModule} from './overview-routing.module';

@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ],
  providers: [ ],
  entryComponents: [ ]
})
export class OverviewModule { }
