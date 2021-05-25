import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkDirectiveModule} from '@lamnhan/ngx-useful';

import { BuiltinThemesRoutingModule } from './builtin-themes-routing.module';
import { BuiltinThemesComponent } from './builtin-themes.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [BuiltinThemesComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    RouterLinkDirectiveModule,
    BuiltinThemesRoutingModule
  ]
})
export class BuiltinThemesPageModule {}
