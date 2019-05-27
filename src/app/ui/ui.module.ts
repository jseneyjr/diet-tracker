import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Error404PageComponent} from './404/error-404-page-component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    Error404PageComponent
  ]
})
export class UiModule { }
