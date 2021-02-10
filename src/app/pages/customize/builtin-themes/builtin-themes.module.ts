import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuiltinThemesRoutingModule } from './builtin-themes-routing.module';
import { BuiltinThemesComponent } from './builtin-themes.component';


@NgModule({
  declarations: [BuiltinThemesComponent],
  imports: [
    CommonModule,
    BuiltinThemesRoutingModule
  ]
})
export class BuiltinThemesModule { }
