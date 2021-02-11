import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeThemeRoutingModule } from './customize-theme-routing.module';
import { CustomizeThemeComponent } from './customize-theme.component';


@NgModule({
  declarations: [CustomizeThemeComponent],
  imports: [
    CommonModule,
    CustomizeThemeRoutingModule
  ]
})
export class CustomizeThemePageModule {}
