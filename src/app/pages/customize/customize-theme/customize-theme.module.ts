import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeThemeRoutingModule } from './customize-theme-routing.module';
import { CustomizeThemeComponent } from './customize-theme.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [CustomizeThemeComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    CustomizeThemeRoutingModule
  ]
})
export class CustomizeThemePageModule {}
