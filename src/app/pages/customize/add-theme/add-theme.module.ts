import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddThemeRoutingModule } from './add-theme-routing.module';
import { AddThemeComponent } from './add-theme.component';


@NgModule({
  declarations: [AddThemeComponent],
  imports: [
    CommonModule,
    AddThemeRoutingModule
  ]
})
export class AddThemePageModule {}
