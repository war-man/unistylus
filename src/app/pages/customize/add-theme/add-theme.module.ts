import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddThemeRoutingModule } from './add-theme-routing.module';
import { AddThemeComponent } from './add-theme.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [AddThemeComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    AddThemeRoutingModule
  ]
})
export class AddThemePageModule {}
