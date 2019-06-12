import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewPageComponent} from './home/components/overview-page/overview-page.component';
import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewService} from './services/overview.service';

@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ],
  providers: [
    OverviewService
  ],
  entryComponents: [ ]
})
export class OverviewModule { }
